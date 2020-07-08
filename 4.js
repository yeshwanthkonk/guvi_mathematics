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
  let temp = userInput[0].split(" ")
  let obj = {
      'January':31,
      'February':()=>{
          if((+temp[1])%400 === 0 || (+temp[1])%4 === 0){
              return 29
          }
          else{
              return 28
          }
      },
      'March':31,
      'April':30,
      'May':31,
      'June':30,
      'July':31,
      'August':31,
      'September':30,
      'October':31,
      'November':30,
      'December':31
  }
  let co = 0
  let i = 2
  if(temp[0] == 'February'){
  	j = obj[temp[0]]()
  }
  else{
  	j = obj[temp[0]]
  }
  while(i<= j){
  	let flag = 0
  	for(let z = 2;z<= i/2;z++){
  		if(i%z === 0){
  			flag = 1
  			break;
  		}
  		
  	}
  	if(flag === 0){
  			co++
  		}
  	i++
  }

  console.log(co)
  //end-here
});
