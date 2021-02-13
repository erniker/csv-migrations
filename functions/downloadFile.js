const fs = require("fs");
const http = require("http");
const path = require("path");

const now = new Date();
// Create formatted time
var yyyy = now.getFullYear();
var mm = now.getMonth() < 9 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1; // getMonth() is zero-based
var dd = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
const folderName = yyyy + mm + dd;

const downloadDir = path.join(__dirname + "/" + folderName + "/");

fs.mkdir("./" + folderName, function (err) {
  if (err) {
    console.log(err.message);
  } else {
    console.log("New directory successfully created.");
  }
});

const downloadFile = function (url, dest, cb) {
  var file = fs.createWriteStream(dest);
  var request = http
    .get(url, function (response) {
      response.pipe(file);
      file.on("finish", function () {
        file.close(cb); // close() is async, call cb after close completes.
      });
    })
    .on("error", function (err) {
      // Handle errors
      fs.unlink(dest); // Delete the file async. (But we don't check the result)
      if (cb) cb(err.message);
    });
};

//BTC/USD
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_BTCUSDT_d.csv",
  downloadDir + "/Binance_BTCUSDT_d.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_BTCUSDT_1h.csv",
  downloadDir + "/Binance_BTCUSDT_1h.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_BTCUSDT_minute.csv",
  downloadDir + "/Binance_BTCUSDT_minute.csv"
);
//ETH/USD
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_ETHUSDT_d.csv",
  downloadDir + "/Binance_ETHUSDT_d.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_ETHUSDT_1h.csv",
  downloadDir + "/Binance_ETHUSDT_1h.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_ETHUSDT_minute.csv",
  downloadDir + "Binance_ETHUSDT_minute.csv"
);
//LTC/USD
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_LTCUSDT_d.csv",
  downloadDir + "/Binance_LTCUSDT_d.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_LTCUSDT_1h.csv",
  downloadDir + "/Binance_LTCUSDT_1h.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_LTCUSDT_minute.csv",
  downloadDir + "/Binance_LTCUSDT_minute.csv"
);
//NEO/USD
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_NEOUSDT_d.csv",
  downloadDir + "/Binance_NEOUSDT_d.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_NEOUSDT_1h.csv",
  downloadDir + "/Binance_NEOUSDT_1h.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_NEOUSDT_minute.csv",
  downloadDir + "/Binance_NEOUSDT_minute.csv"
);
//BNB/USD
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_BNBUSDT_d.csv",
  downloadDir + "/Binance_BNBUSDT_d.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_BNBUSDT_1h.csv",
  downloadDir + "/Binance_BNBUSDT_1h.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_BNBUSDT_minute.csv",
  downloadDir + "/Binance_BNBUSDT_minute.csv"
);
//XRP/USD
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_XRPUSDT_d.csv",
  downloadDir + "/Binance_XRPUSDT_d.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_XRPUSDT_1h.csv",
  downloadDir + "/Binance_XRPUSDT_1h.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_XRPUSDT_minute.csv",
  downloadDir + "/Binance_XRPUSDT_minute.csv"
);
//LINK/USD
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_LINKUSDT_d.csv",
  downloadDir + "/Binance_LINKUSDT_d.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_LINKUSDT_1h.csv",
  downloadDir + "/Binance_LINKUSDT_1h.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_LINKUSDT_minute.csv",
  downloadDir + "/Binance_LINKUSDT_minute.csv"
);
//EOS/USD
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_EOSUSDT_d.csv",
  downloadDir + "/Binance_EOSUSDT_d.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_EOSUSDT_1h.csv",
  downloadDir + "/Binance_EOSUSDT_1h.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_EOSUSDT_minute.csv",
  downloadDir + "/Binance_EOSUSDT_minute.csv"
);
//TRX/USD
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_TRXUSDT_d.csv",
  downloadDir + "/Binance_TRXUSDT_d.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_TRXUSDT_1h.csv",
  downloadDir + "/Binance_TRXUSDT_1h.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_TRXUSDT_minute.csv",
  downloadDir + "/Binance_TRXUSDT_minute.csv"
);
//ETC/USD
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_ETCUSDT_d.csv",
  downloadDir + "/Binance_ETCUSDT_d.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_ETCUSDT_1h.csv",
  downloadDir + "/Binance_ETCUSDT_1h.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_ETCUSDT_minute.csv",
  downloadDir + "/Binance_ETCUSDT_minute.csv"
);
//XLM/USD
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_XLMUSDT_d.csv",
  downloadDir + "/Binance_XLMUSDT_d.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_XLMUSDT_1h.csv",
  downloadDir + "/Binance_XLMUSDT_1h.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_XLMUSDT_minute.csv",
  downloadDir + "/Binance_XLMUSDT_minute.csv"
);
//ZEC/USD
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_ZECUSDT_d.csv",
  downloadDir + "/Binance_ZECUSDT_d.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_ZECUSDT_1h.csv",
  downloadDir + "/Binance_ZECUSDT_1h.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_ZECUSDT_minute.csv",
  downloadDir + "/Binance_ZECUSDT_minute.csv"
);
//ADA/USD
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_ADAUSDT_d.csv",
  downloadDir + "/Binance_ADAUSDT_d.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_ADAUSDT_1h.csv",
  downloadDir + "/Binance_ADAUSDT_1h.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_ADAUSDT_minute.csv",
  downloadDir + "/Binance_ADAUSDT_minute.csv"
);
//QTUM/USD
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_QTUMUSDT_d.csv",
  downloadDir + "/Binance_QTUMUSDT_d.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_QTUMUSDT_1h.csv",
  downloadDir + "/Binance_QTUMUSDT_1h.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_QTUMUSDT_minute.csv",
  downloadDir + "/Binance_QTUMUSDT_minute.csv"
);
//DASH/USD
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_DASHUSDT_d.csv",
  downloadDir + "/Binance_DASHUSDT_d.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_DASHUSDT_1h.csv",
  downloadDir + "/Binance_DASHUSDT_1h.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_DASHUSDT_minute.csv",
  downloadDir + "/Binance_DASHUSDT_minute.csv"
);
//XMR/USD
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_XMRUSDT_d.csv",
  downloadDir + "/Binance_XMRUSDT_d.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_XMRUSDT_1h.csv",
  downloadDir + "/Binance_XMRUSDT_1h.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_XMRUSDT_minute.csv",
  downloadDir + "/Binance_XMRUSDT_minute.csv"
);
//BTT/USD
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_BTTUSDT_d.csv",
  downloadDir + "/Binance_BTTUSDT_d.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_BTTUSDT_1h.csv",
  downloadDir + "/Binance_BTTUSDT_1h.csv"
);
downloadFile(
  "http://www.cryptodatadownload.com/cdd/Binance_BTTUSDT_minute.csv",
  downloadDir + "/Binance_BTTUSDT_minute.csv"
);
