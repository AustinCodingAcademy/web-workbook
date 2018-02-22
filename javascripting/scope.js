var a = 1;
var b = 2;
var c = 3;

(function firstFunction(){
  var b = 5;
  var c = 6;

  (function secondFunction(){
    var b = 8;

console.log("a: "+a+", b: "+b+", c: "+c);

      (function thirdFunction(){
          var a = 7;
          var c = 9;

        (function fourthFunction(){
            var a = 1;
            var c = 8;

            })();
        })();
    })();
})();
