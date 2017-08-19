
function fizzbuzz(){
  for(i=1;i<=100;i++){
       if (i % 3== 0 && i % 5== 0){
        document.writeln("<center>FizzBuzz</center>");
        }
        else if (i % 5=== 0){
         document.writeln("<center>Buzz</center>");
         }
         else if (i % 3=== 0 ){
         document.writeln("<center>Fizz</center>");
         }
         else{
         document.writeln("<center>"+i +"</center>");
       }
   }
}
