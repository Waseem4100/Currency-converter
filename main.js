import inquirer from "inquirer";
import chalk from "chalk";
let exchange_rate = {
    USD: 1,
    EUR: 0.9,
    JYP: 133,
    CAD: 11,
    AUD: 11,
    PKR: 278,
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR",],
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert to",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR",],
    },
    {
        name: "amount",
        type: "input",
        message: "  Enter the amount to convert",
    }
]);
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formulae for conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`converted amount ${chalk.green(converted_amount.toFixed(2))}`);
