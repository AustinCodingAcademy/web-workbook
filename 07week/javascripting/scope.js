var a = 1, b = 2, c = 3;

     (function firstFunction(){
         b = 5;
         c = 6;

         (function secondFunction(){
             b = 8;

             (function thirdFunction(){
                 a = 7;
                 var c = 9;

                 (function fourthFunction(){
                     a = 1;
                     var c = 8;
                 })();

             })();

         })();

     })();

  console.log("a: "+a+", b: "+b+", c: "+c);
