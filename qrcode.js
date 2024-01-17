const QRCode = require("qrcode");

//string is encoded in qrcode
/*QRCode.toString(
  "I am Ashish!.This is from nodejs",
  { type: "terminal" },
  function (err, url) {
    console.log(url);
  }
);
*/
const url = "youtube.com";
// Generate QR code
/*QRCode.toFile(
  "qrcode.png",
  url,
  { type: "png", errorCorrectionLevel: "L" },
  (err) => {
    if (err) throw err;
    console.log("QR code generated successfully!");
  }
);
//This will create a QR code image file named 'qrcode.png' in the same directory as your script.
*/

QRCode.toString(url, { type: "terminal" }, function (err, qrCode) {
  if (err) throw err;
  console.log(qrCode);
});
