function fibonacciProblem(n) {

    let output = [];

    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];

        for( let i = 2; i<n; i++){
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }

    return output;
}

let output = fibonacciProblem(245);
console.log(output);

