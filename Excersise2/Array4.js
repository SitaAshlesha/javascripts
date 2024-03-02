//Find the Second Minimum Element
//Write a function that takes an array of numbers as an argument and returns the second smallest number in the array.
//Example:
//For the input array [5, 2, 8, 12, 3], the output should be 3.

function findsecondminimun(arr){
    arr.sort(function(a,b){
    return a -b;
    });
return arr[1];
}
let numbers = [10,50,6,12,45,65];
let secondminimum = findsecondminimun(numbers);
console.log(secondminimum);