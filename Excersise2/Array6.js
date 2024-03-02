//Find the Sum of Array Elements
//Write a function that takes an array of numbers as an argument and returns the sum of all the elements in the array.
//Example:
//For the input array [5, 2, 8, 12, 3], the output should be 30.

function arraySum(arr) {
    // Initialize accumulator to 0
    let sum = 0;

    // Iterate through each element of the array
    for (let i = 0; i < arr.length; i++) {
        // Add current element to the sum
        sum += arr[i];
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(arraySum(numbers)); // Output: 15