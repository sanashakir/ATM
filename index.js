#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 111;
console.log("Welcome to ATM! Your pin code is '111'");
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin code",
        type: "number",
    },
]);
if (pinAns.pin == myPin) {
    console.log("Your pin code is correct!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "Fast cash", "Check balance"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your mmount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance = myBalance - amountAns.amount;
            console.log(`Your remaining balance is:${myBalance}`);
        }
        else {
            console.log("You don't have more than 50000");
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`Your balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Please select amount",
                type: "list",
                choices: [1000, 5000, 10000, 20000, 30000, 50000],
            },
        ]);
        console.log("Your remaining balance is:", (myBalance -= fastCashAns.fastCash));
    }
}
else {
    console.log("Oops!Incorrect pin code.Try again");
}
