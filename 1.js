// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  let temp = userInput[0].split(" ")
  let min = +temp[0]
  for(let i=1;i<temp.length;i++){
      min  = Math.min(min, +temp[i])
  }
  console.log(min)
  //end-here
});
