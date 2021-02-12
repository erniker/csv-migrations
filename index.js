const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const fastcsv = require("fast-csv");
// make bluebird default Promise
Promise = require("bluebird"); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

// connect to mongo db
// Local
const mongoUri = "mongodb://localhost/core";
//Pro
//const mongoUri = "mongodb://mongo.ippai-games.com/core";

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

const CandleSchema = new mongoose.Schema({
  unix: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  exchange: {
    type: String,
    required: true,
  },
  open: {
    type: Number,
    default: 0,
  },
  high: {
    type: Number,
    default: 0,
  },
  low: {
    type: Number,
    default: 0,
  },
  close: {
    type: Number,
    default: 0,
  },
  volumeQuote: {
    type: Number,
    default: 0,
  },
  volumeBase: {
    type: Number,
    default: 0,
  },
  tradeCount: {
    type: Number,
    default: 0,
  },
  period: {
    type: String,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CandleModel = mongoose.model("Candle", CandleSchema);

const readdir = (dirname) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (error, filenames) => {
      if (error) {
        reject(error);
      } else {
        resolve(filenames);
      }
    });
  });
};

const filtercsvFiles = (filename) => {
  return filename.split(".")[1] === "csv";
};

const getPeriod = (fileName) => {
  const nativePeriod = fileName.split(".")[0].split("_")[2];
  switch (nativePeriod) {
    case "1h":
      return "1h";
      break;
    case "minute":
      return "1m";
      break;
    case "d":
      return "1d";
      break;
    default:
      break;
  }
};

const saveCandle = async (index, csvData, period) => {
  const row = csvData[index];
  const products = row[2].split("/");
  const moneedaProduct = `${products[1]}-${products[0]}`;
  const candle = new CandleModel({
    period: period,
    unix: row[0],
    date: row[1],
    product: moneedaProduct,
    open: row[3],
    close: row[6],
    high: row[4],
    low: row[5],
    volumeQuote: row[7],
    volumeBase: row[8] === "nan" ? 0 : row[8],
    tradeCount: row[9] === "NULL" ? 0 : row[9],
    exchange: "BNB",
  });
  //console.log(index);
  await candle.save();
  if (!csvData[index + 1]) return;
  await saveCandle(index + 1, csvData, period);
};

const migrateFile = (index, files) => {
  const fileName = files[index];
  const period = getPeriod(fileName);
  const csvData = [];

  console.log(fileName);
  fastcsv
    .parseFile(currDir + fileName)
    .on("data", (data) => {
      csvData.push(data);
    })
    .on("end", async () => {
      //console.log(csvData[2]);
      await saveCandle(2, csvData, period);
      console.log("file finished");
      await migrateFile(index + 1, files);
    });
};

const currDir = path.join(__dirname + "/20210206/");
//const currDir = path.join(__dirname + "/");
readdir(currDir).then(async (filenames) => {
  filenames = filenames.filter(filtercsvFiles);
  await migrateFile(0, filenames);
});

// Para ejecutar:
// node --max-old-space-size=8192 index.js
