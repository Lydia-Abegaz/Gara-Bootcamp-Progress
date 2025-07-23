"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Goal: Check if a user-entered score is a passing grade.
var promptSync = require("prompt-sync");
var prompt = promptSync();
var userScore = Number(prompt("Please enter the score: "));
if (userScore >= 60) {
    console.log("You passed!");
}
else {
    console.log("You failed.");
}
