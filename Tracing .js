// let n = 13;
// for (let i = 2; i <= n; i += 2) {
//     console.log(i);
// }




// 2. Trace the values of a, b, c, and d after each step of the program.
let a = 10;
let b = 5;
let c;

if (a > b) {
    c = a - b;
} else {
    c = b - a;
}

let d = c * 2;


let x = 12;  // 1100 in binary
let y = 5;   // 0101 in binary

while (x > 0) {
    x = x >> 1;
    y = y << 1;
}