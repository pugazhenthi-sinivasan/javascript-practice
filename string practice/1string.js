// let tweet = "pugazhenthi";
// console.log(tweet.length); // Outputs: 11



// let number = 123;
// let strNumber = number.toString();
// console.log(strNumber); // Outputs: "123"
// console.log(typeof strNumber); // Outputs: string


// let text = "Welcome to the world of JavaScript!";
// let position = text.indexOf("JavaScript");

// console.log(position); // Outputs: 21


count_multiples_of_5(arr)
    count = 0
    for num in arr:
        if num % 5 == 0:
            count += 1
    return count

# Example usage:
array = [10, 23, 5, 12, 15, 28, 30]
result = count_multiples_of_5(array)
print("Number of multiples of 5:", result)
