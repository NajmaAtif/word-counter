#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Display a colorfull welcome message
console.log(chalk.bold.cyanBright("\n \t\t code with Najma - Word Counter"));
console.log("=".repeat(60));
// prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence"
    }
]);
// trimming the sentence and splitting it into word based on "spaces"
let words = answers.sentence.trim().split(" ");
// analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n -word count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
