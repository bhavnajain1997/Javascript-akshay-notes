// setTimeout(function(){
//     console.log("timer")
// },5000);
// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");

// }
// );

// console.log("start");
// setTimeout(function cbT(){
//     console.log("CB Settimeout");
// },5000);
// fetch("https://unogsng.p.rapidapi.com/genres").then(function cbF(){
//     console.log("CB Netflix");
// });
// console.log("End");

console.log("start");
setTimeout(function cb(){
   console.log("callback function called");
},0)
console.log("End")

// millions line of code

let startDate = new Date();
let endDate = startDate;
while(endDate < startDate + 100000){
 endDate = new Date().getTime();
}
console.log("While expires");