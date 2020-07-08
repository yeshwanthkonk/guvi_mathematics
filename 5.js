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
  let val = userInput[0]
  let co = 0
  let obj = {}
  let flag  = 0
  for(let i=0;i<val.length;i++)
  {
      if(obj[val[i]] === undefined){
          obj[val[i]] = 1
          co++
          if(co>2){
              flag = 1
              break;
          }
      }
  }
  if(flag === 0){
      console.log('Saturated')
  }
  else{
      console.log('Unsaturated')
  }
  //end-here
});
