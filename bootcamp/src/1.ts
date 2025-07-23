// Goal: Check if a user-entered score is a passing grade.
import promptSync = require('prompt-sync');
const prompt = promptSync();

const userScore =Number( prompt("Please enter the score: "));

if (userScore >= 60) { 
  console.log("You passed!");
} else {
  console.log("You failed.");
}