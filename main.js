#! /usr/bin/env node


import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1994;
let pinAnswere = await inquirer.prompt([
    {
        name: "pin",
        message: "enter pin",
        type: "number"
    }
]);
if (pinAnswere.pin === myPin) {
    console.log("correct pin code!");
    let operationAnswere = await inquirer.prompt([
        {
            name: "operation",
            message: "select option",
            type: "list",
            choices: ["withdraw", "check balance", "fastcash"]
        }
    ]);
    if (operationAnswere.operation === "withdraw") {
        let amountAnswere = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAnswere.amount < myBalance) {
            myBalance -= amountAnswere.amount;
            console.log("Now your balance is" + myBalance);
        }
        else {
            console.log("Insuficiant balance");
        }
    }
    else if (operationAnswere.operation === "check balance") {
        console.log(`Your balance is ${myBalance}`);
    }
    else if (operationAnswere.operation === "fastcash") {
        let fast = await inquirer.prompt([
            {
                name: "fast_operation",
                message: "How much amount you want to withdraw",
                type: "list",
                choices: ["1000", "2000", "3000", "5000", "10000"],
            }
        ]);
        if (fast.fast_operation === "1000") {
            myBalance -= fast.fast_operation;
            console.log(`your remaining balance is ${myBalance}`);
        }
        if (fast.fast_operation === "2000") {
            myBalance -= fast.fast_operation;
            console.log(`your remaining balance is ${myBalance}`);
        }
        if (fast.fast_operation === "3000") {
            myBalance -= fast.fast_operation;
            console.log(`your remaining balance is ${myBalance}`);
        }
        if (fast.fast_operation === "5000") {
            myBalance -= fast.fast_operation;
            console.log(`your remaining balance is ${myBalance}`);
        }
        if (fast.fast_operation === "10000") {
            myBalance -= fast.fast_operation;
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
}
else {
    console.log("Invalid pin code!");
}
