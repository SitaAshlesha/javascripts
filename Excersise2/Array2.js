//Find the Minimum Element
//Write a function that takes an array of numbers as an argument and returns the second smallest number in the array.
//xample:
//For the input array [5, 2, 8, 12, 3], the output should be 2.

function minimumnumber(numbers){
    return Math.min(...numbers);

}
let numbers=[10,20,60,800,70,3];
console.log("minimum number:",minimumnumber(numbers))
