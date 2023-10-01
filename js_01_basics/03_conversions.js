let score="1010";
// console.log(score);
// console.log(typeof score);
let valInt=Number(score);
// console.log(valInt);
// console.log(typeof valInt); 
let a="10xy";
/*when we convert a non integer to number,then the type we get is NAN=>not a number.
*/
// console.log(a);
// console.log(typeof a);
let b=Number(a);
// console.log(b);
// console.log(typeof b);
/*
"33"=>33
"mishu"=>Nan
true=>1
false=>0
*/
let isAvail=-0; //initially this is of number type
// console.log(typeof isAvail);  
let boolIsAvail=Boolean(isAvail);  //any value other than 0 will be converted to true,and 0 will be converted to false.
// console.log(boolIsAvail);
// console.log(typeof boolIsAvail); //type is boolean here
/*
0=>false
1=>true
""=>false
"hitesh"=>true
*/
let n=2309;
// console.log(typeof n);
// console.log(n+10); //way of testing its a num or string
let sn=String(n);
// console.log(typeof sn);
// console.log(sn+10); //way of testing its a num or string

let c=99;
let negc=-c;   //it will be number only,not string
// console.log(negc);
// console.log(typeof negc);



// ******************Operations*******************//
let str1="hello";
let str2=" mishu";
// console.log(str1+str2);  
console.log(1+1);
console.log(1+"1");
console.log("1"+1);
console.log(1+"2"+"3");
console.log("1"+2+3);
/*
string mai concatenate ho jayega seeedhe hi,koi operation perform nhi hoga usme
*/