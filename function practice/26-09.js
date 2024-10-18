// 2. Given three numbers a, b, c print the maximum number amongst the three.
// a =10, b = 30, c = 5
// print 30
let a = 10, b = 30, c = 5;

if (a > b) {
    console.log(a);
} else if (b > a ) {
    console.log(b);
} else {
    console.log(c);}



// 3. Write a program to generate the following series 1, 3, 5, 7, 9, 11....up until the nth term
// if n = 4, print the first 4 odd numbers 1 3 5 7

let n = 4; 
function generate(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(2 * i + 1);
    }
    console.log(result.join(" "));
}
generate(n);





// 5. Complete the program printAllMultiplesOf5Bet(a, b)
// eg, printAllMultiplesOf5Bet(10, 30) in reverse

// function printAllMultiplesOf5Bet(a, b) {

//     if (a > b) 
    
//     for (let i = b; i >= a; i--) {
//         if (i % 5 == 0) {
//             console.log(i);
//         }
//     }
// }

// printAllMultiplesOf5Bet(10, 30);



function abc(){
    console.log("pugal")
}
abc()


function ok(){
    console.log("this is coret 30")
}
ok()