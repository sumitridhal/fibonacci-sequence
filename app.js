"use strict"
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 function fibonacci(n){
   let rval = [0,1];

   for (let i = 0; i <= n; i++){
     let r1 = rval[i]
     let r2 = rval[i+1]
     rval.push(r1+r2)
   }
   return rval;
 }


rl.question('Enter n value: ', (n) => {
  let e = fibonacci(n)
  console.log(`Fibonacci: ${e}`)
  rl.close()
});
