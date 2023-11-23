//........Map function.........//

// const arr = [5,1,3,2,6];

// // Double = [10,2,6,4,12]
// //Triple = [15,3,9,6,18];
// // Binary = ["101","1","11","10","110"];

// function double(x){
//   return x * 2;
// }
// function triple(x){
//     return x * 3
// }
// function binary(x){
//     return x.toString(2);
// }
// const output = arr.map(binary);
// console.log(output);

// const tri = arr.map(triple)
// console.log(tri);


//..........Filter function...........//

// const arr = [5,1,3,2,6];

// // filter odd values;

// function odd(x){
//     if(x % 2 != 0){
//        return x
//     }
// }
// const output = arr.filter(odd);
// let array = arr.filter((x) => x < 3);
// console.log(output);

//........ reduce method...........// reduce method to find out the single value from the array like sum , max,min
//  const arr = [5,1,3,2,6];

 // sum or max
//  function findSum(arr){
//    let sum = 0;
//    for(i=0;i<arr.length;i++){
//     sum = sum + arr[i];
//    }
//    return sum
//  }
//  console.log(findSum(arr));


 // 2method using reduce

//  const arr = [5,1,3,2,6];

//  const output = arr.reduce(function(acc,curr){
//     acc = acc + curr;
//     return acc;
//  },0)
//  console.log(output);

 // find max value method 1

//  let max = 0;

//  function findMax(arr){
//   let max = 0;
//   for(i=0; i< arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
    
//   }
//   return max;
//  }

// console.log(findMax(arr))

// 2nd method to find max

// const output = arr.reduce(function(acc, curr){
//    if(acc < curr){
//     acc = curr;
//    }
//    return acc;
// },0)
// console.log(output);




//.......................................................................................//

const users = [
    {firstName: "akshay", lastName: "saini", age: 26},
    {firstName: "donald", lastName: "trump", age: 75},
    {firstName: "elon", lastName: "musk", age: 50},
    {firstName: "deepika", lastName: "padukon", age: 26}
]

// list of full Name
// function fullName(x){
//   return x.firstName + " " + x.lastName;
// }
// const output = users.map(fullName);
// console.log(output);


// {26 : 2, 75 : 1, 50 : 1}

// const output = users.reduce(function(acc,curr){
//     if(acc[curr.age]){
//      acc[curr.age] = ++acc[curr.age];
//     }
//     else{
//         acc[curr.age] = 1;
//     }
//     return acc
// }, {})
// console.log(output);


// find first name age < 30

// const output = users.filter(function(x){
//     if (x.age < 30){
//        users.map(function(x){
//         return x.firstName
//        })
//     }
// })
// console.log(output);

const output = users.filter((x) => x.age < 30).map((x) => x.firstName)
console.log(output);
