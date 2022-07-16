// for (let i = 1; i<=100; i++){
//     if(i%3 === 0) console.log("Fizz")
//     else if (i%5 === 0) console.log("Buzz")
// // }

let output = [];

let count = 0;
function fizzBuzz() {
count += 1;

if(count % 3 === 0 && count % 5 === 0) output.push("FizzBuzz")

else if (count%3 === 0) output.push("Fizz");

else if(count%5 === 0) output.push("Buzz")

else output.push(count)

    console.log(output);
}