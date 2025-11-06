"use strict";
let a = 10;
let b = 20;
let sum = a + b;
console.log("The sum of a and b is: " + sum);
document.getElementById("result").innerHTML = "The sum of a and be is " + sum;

    a = 15;/*once declared something dont need to use let again*/
    b = 25;
let c = a * b;
document.getElementById("result").innerHTML += " <br>The product of a and b is " + c;

let x = 50;
x -= 10; /* substraction x = x - 10*/
document.getElementById("result").innerHTML += " <br>The value of x after substracting 10 is "+  x; 

 let y = null;
 let v = y || 100; /* if y is null or undefined then v will be 100*/
 document.getElementById("result").innerHTML += " <br>The value of v is "+  v;

 let text = "12345";
 let min = Math.min(...text); /* returns the minimum value*/
 let max = Math.max(...text); /* returns the maximum value*/
 document.getElementById("result").innerHTML += " <br>The Minimum Value is " + min + " and The Maximum Value is " + max;