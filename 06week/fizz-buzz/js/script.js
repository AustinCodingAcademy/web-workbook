var i;

for( i = 1; i <  100; i++){

    if (  i % 15 === 0) {
        console.log('Fizz Buzz');

    }else if (i % 5 === 0) {
        console.log('buzz');

    }else if (i % 3 === 0) {
        console.log('Fizz');

    }else {
        console.log(i);
    }

}
