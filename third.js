"use strict";
let personName = "junaidali";
console.log("LowerCase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
let Title_case = personName[0].toUpperCase() + personName.slice(1).toLowerCase();
console.log("Title_case:", Title_case);
// function convertToUpperCase(data:string) : string{
//     const dataInUpperCase = data.toUpperCase()
//     return dataInUpperCase;
// }
// console.log(convertToUpperCase("junaid"))
// console.log(convertToUpperCase("ali"))
// console.log(convertToUpperCase("haider"))
