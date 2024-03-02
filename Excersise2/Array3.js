//Find the Second Maximum Element
//Write a function that takes an array of numbers as an argument and returns the second largest number in the array.
//Example:
//For the input array [5, 2, 8, 12, 3], the output should be 8.
function findsecondlargestno(arr){
    arr.sort(function(a,b)
    {
        return b -a ;

    });
    return arr[1];


}
let numbers =[10,20,50,100,600];
let secondlargest= findsecondlargestno(numbers);
console.log(secondlargest);


