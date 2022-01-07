 function myFunc(i) {
     for (i = 1; i <= 100; i++) {
         if (i % 3 == 0 && i % 5 == 0) {
             var output = document.write("<br>" + "FizzBuzz");
         } else if (i % 5 == 0) {
             var output = document.write("<br>" + "Buzz");
         } else if (i % 3 == 0) {
             var output = document.write("<br>" + "Fizz");
         } else {
             var output = document.write("<br>" + i);
         }
     }
 }
 myFunc();