//Find the Maximum Element
//Write a function that takes an array of numbers as an argument and returns the largest number in the array.


function findmax(numbers){
    return Math.max(...numbers);
}
let numbers = [5,10,15,460,100];
console.log("maximum number",findmax(numbers));