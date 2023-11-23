// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();
//..............................................................................//

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();

function x(){
    var count = 0;
    for(var i = 1; i<=5; i++){
        setTimeout(function(){
           count++
           console.log(count);
        }, i * 1000);
        
    }
    console.log("Namaste Javascript")
}
x();