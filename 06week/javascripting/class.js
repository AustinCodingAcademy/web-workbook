for (let i = 1; i < 1001; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

for (let i = 1; i < 1001; i++) {
    console.log(remainder(i));
}
function remainder (a) {
    if (a % 3 === 0 && a % 5 === 0) {
        return ('FizzBuzz');
    } else if (a % 3 === 0) {
        return ('Fizz');
    } else if (a % 5 === 0) {
        return ('Buzz');
    } else {
        return (a);
    }
}
