const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF7F50")('[ ❕ ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF0000")('[ ❗ Lỗi rồi ] » ') + data);
			break;
		default:
			console.log(chalk.bold.hex("33FFCC")(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FFFF00")('» •MODE• « ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF0000")('» •MODE• « ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#00FFFF")('» •MODE• « ') + data);
			break;
	}
}
