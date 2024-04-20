#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // DOLLAR
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!!");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance"]
    }
]);
console.log(operationAns);
if (operationAns.operation === "withdraw") {
    let withdrawAns = await inquirer.prompt([
        {
            name: "withdrawMethod",
            message: "select a withdrawl method:",
            type: "list",
            choices: ["Fast Cash", "Enter Amount"]
        }
    ]);
    if (withdrawAns.withdrawMethod === "Fast Cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "fastcash",
                message: "select Amount",
                type: "list",
                choices: [1000, 2000, 5000, 10000]
            }
        ]);
        if (fastcashAns.fastcash > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= fastcashAns.fastcash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (withdrawAns.withdrawMethod === "Enter Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        myBalance -= amountAns.amount;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
