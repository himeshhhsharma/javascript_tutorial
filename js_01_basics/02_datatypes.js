"use strict";//writing this will tell browser that all the js code in this file is according to the latest version of js.
//  alert("1"+1);
//we are using nodejs not,browser,so it won't work here,it'll only work when we use js with html on browser.
let age=23;
let height=171.5;
let name="himesh";
let isMarried=false;
let spouse;
let salary=null;
/*
Datatypes
NUmber=> 2 to pwer 53approx.
BigInt=> range more than that of number.
string=>""
boolean=> true/false
null=>standalone value, signifies that the value variable holding is emty or the variable is empty.
undefined=>variable declared nut not yet defined.
symbol=>uniqueness of components
*/
console.log(typeof age);
console.log(typeof height);
console.log(typeof name);
console.log(typeof "ram");
console.log(typeof isMarried);

/* Interview Questions
typeof undefined will give undefined.
similarly
typeof string=>string
typeof number=>number etc

but in js,when we do 
typeof null=>object
*/