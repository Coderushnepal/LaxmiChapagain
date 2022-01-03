 function myFunc(i) {
     for (i = 1; i <= 100; i++) {
         if (i % 3 == 0) {

             var output = document.write("<br>" + "Fuzz");

         } else {
             var output = document.write("<br>" + i);
         }
     }
 }
 myFunc();