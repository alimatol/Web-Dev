"use strict"
let message = "hello";
message = 123456;

let n = 123;
n = 12.345;

alert( 1 / 0 );

alert( "not a number" / 2 );

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let isGreater = 4 > 1;
alert( isGreater );

let age = null;
alert(age);

let name = "Ilya";
alert( `hello ${1}` ); 
alert( `hello ${"name"}` ); 
alert( `hello ${name}` ); 