var a = 1, b = 2, c = 3;
console.log("a: " + a);  
       
(function firstFunction(){  
    var b = 5, c = 6;
        b = secondFunction();
    console.log(", b: " + secondFunction() + ", c: " + c);
  
    (function secondFunction(){  
        var b = 8;

        (function thirdFunction(){  
            var a = 7, c = 9;  
  
            (function fourthFunction(){  
                var a = 1, c = 8;

  
            })();  
        })();  
    })();  
})(); 