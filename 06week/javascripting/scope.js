var a = 1, b = 2, c = 3;  
       
(function firstFunction(a, b, c){  
    var b = 5, c = 6;  
       
    (function secondFunction(a, c){  
        var b = 8;  
       
        (function thirdFunction(a, b, c){  
            var a = 7, c = 9;  
       
            (function fourthFunction(a, b, c){  
                var a = 1, c = 8;  
       
            })();  
        })();  
    })();  
})();

console.log("a: " + a + ", b: " + b + ", c: " + c);

// a: 1, b: 8, c: 6