// 1. Fix the issues in this code
calculateArea();
greetUser();

function calculateArea() {
  const radius = 5;
  let area = Math.PI * radius * radius; 
  console.log(area);
}
function greetUser() {
  var userName = "John"; 
  console.log(userName);
}


let count = 100;
while (count > 0) {
  console.log("Counting down: " + count);
  count = count - 1; // Decrement 'count' by 1 in each iteration
}


// 3. Why always It's cold outside. is printed irrespective of the temperature value. Fix this!
let temperature = 30;
if (temperature === 20) {
  console.log("It's cold outside.");
} else {
  console.log("It's warm outside.");
}

// 4. Fix the issues in the code so that output is printed correctly
checkNumber(-5);  
checkNumber(0);   
checkNumber(10);  

function checkNumber(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

