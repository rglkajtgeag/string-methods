let str1="  thriveni";
let str2="reddy  ";
let spaces1=str1.trimStart();
let spaces2=str2.trimEnd();
let result=spaces1.concat(" ",spaces2);
console.log(result);

var a="indulovethiru";
var mid=a.substring(4,8);
console.log(mid);
var lastchar=mid.charAt(mid.length-1).toLowerCase();
console.log(lastchar);
 
let singlechar="a";
let string2="python full stack";
let concatresult=singlechar.concat(" ",string2).toUpperCase();
console.log(concatresult);
let secondchar=concatresult.slice(-2);
console.log("secondchar");

let firststr="first";
let secondstr="second";
let firstchar=firststr.slice(0,4);
let secchar=secondstr.slice(-4);
let concatres=firstchar.concat(" ",secondchar);
console.log(concatres);
 
let strspace="  beginning  ";
let trimres=strspace.trim();
let combinedresult = trimres.charAt(0).toUpperCase() + trimres.slice(1, 8) + trimres.charAt(trimres.length - 1).toUpperCase();
console.log(combinedresult);


let string="hello there, how are you";
let b=string.split(" ");
let indexword=b.indexOf("are");
console.log(indexword);

