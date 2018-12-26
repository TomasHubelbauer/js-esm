// Load using JSDelivr so that the origin is different (github,com vs github.io) and CORS/MIME is handled
import * as mod from 'https://cdn.jsdelivr.net/gh/TomasHubelbauer/js-import-external/mod.js';
console.log(mod);

//import * as qrcode from 'https://unpkg.com/qrcode-generator';
//console.log(qrcode);
//const code = new qrcode(0, 'L');
//code.addData('QRCODE', 'Alphanumeric');
//code.make();
//console.log(code.createASCII());
