cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-qrscanner.QRScanner",
    "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
    "pluginId": "cordova-plugin-qrscanner",
    "clobbers": [
      "QRScanner"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-swift-support": "3.1.1",
  "cordova-plugin-qrscanner": "2.5.0",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});