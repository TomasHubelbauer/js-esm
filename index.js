import * as qrcode from 'https://unpkg.com/qrcode-generator';

console.log(qrcode);
const code = new qrcode(0, 'L');
code.addData('QRCODE', 'Alphanumeric');
code.make();
console.log(code.createASCII());