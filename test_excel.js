const xlsx = require('xlsx');

const chuDeWorkbook = xlsx.readFile('chu_de.xlsx');
const chuDeSheet = chuDeWorkbook.Sheets[chuDeWorkbook.SheetNames[0]];
console.log('chu_de.xlsx headers:', xlsx.utils.sheet_to_json(chuDeSheet, { header: 1 })[0]);

const gameWorkbook = xlsx.readFile('game_theo_chu_de.xlsx');
const gameSheet = gameWorkbook.Sheets[gameWorkbook.SheetNames[0]];
const gameData = xlsx.utils.sheet_to_json(gameSheet);
console.log('game_theo_chu_de.xlsx first row:', gameData[0]);
