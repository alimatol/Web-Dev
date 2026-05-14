const user = {
    name: "Alice",
    age: 13
}

const json = '{"name": "Alice", "age": 13}';
//const input = require('fs').readFileSync(0, 'utf8').trim();
//console.log(input);
/*const nums = input.split(' ').map(Number)//split [1, 2, 3]
const nums_str = input.split(' ') //split ["1, "2", "3"]*/

const arr = ["a", "b", "c"]
const  newStr = arr.join(";")
console.log(newStr.replace(/\;/g, "."));

arr.sort((a, b) => a-b);
console.log(arr)
arr.sort((a,b) => b-a);
console.log(arr);

//split str -> arr
//join arr -> str
//map -> transform elements
const array = [1, 2, 3, 4, 5, 6, 7, 8];
 const even = array.filter(n => n%2 ===0);
 const sum = array.reduce((acc, curr) => acc + curr, 0);

console.log("reduce:", sum);
 console.log("even:" ,even);

 const obj = JSON.parse(json);

const inp = "1,2,3,4,5";
const numbers = inp.split(",").map(Number);
const sumy = numbers.reduce((a, b) => a+b, 0);
console.log(sumy);

const string = "hello";
const arr_str = string.split('');

const reversed = arr_str.reverse();
const finle = reversed.join('');
console.log(finle);


const json_str = {"a":1,"b":2,"c":3};
const json_sum = Object.values(json_str).reduce((a, b)=> a+b, 0);
console.log(json_sum);

const kvstr = {"name":"Ali","age":18};
const res = Object.entries(kvstr).map(([key , value]) => `${key}=${value}`).join(" ");


console.log(res);

const people = [{name: "Ali", age: 18}, {name: "Sophie", age : 13}, {name: "Alice", age: 12}];
const stringed = people.map(person=> `${person.name}: ${person.age}`).join('\n');
const names = people.map(names => `${names.name}`).join(', ');
console.log(stringed);
console.log(names);
