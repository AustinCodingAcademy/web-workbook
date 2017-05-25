var num1=0
for(var i=0; i <= 100; i++){

  if(i%15 === 0){
    console.log('FIZZBUZZ');
  } else if(i%3 === 0){
      console.log('FIZZ');
    } else if(i%5 === 0){
      console.log('BUZZ');
    } else{
  console.log(i);
}
}
