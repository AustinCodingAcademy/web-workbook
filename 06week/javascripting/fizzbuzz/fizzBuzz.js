function fizzbuzz(){
    for (i=1; i<= 1000; i++){
        if( i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        else if ( i % 3 != 0 && i % 5 === 0){
            console.log("Buzz");
        }
        else if ( i % 3 === 0 && i % 5 != 0){
            console.log("Fizz");
        }
        else{
            console.log(i);
        }
    }
}

function userNumberFizzBuzz(){
    var userNumber = document.getElementById("numberToInput").value;
        if (userNumber % 3 === 0 && userNumber % 5 === 0){
            alert("FizzBuzz");
        }
        else if (userNumber % 3 != 0 && userNumber % 5 === 0){
            alert("Buzz");
        }
        else if( userNumber % 3 === 0 && userNumber % 5 != 0){
            alert("Fizz");
        }
        else{
            alert(userNumber);
        }


}

fizzbuzz();