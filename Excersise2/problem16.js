//While Loop + If-Else Statement
//Print all numbers from 1 to n using a while loop and check if each number is even or odd using an if-else statement
let  i = 1;
let n = 10;
while(i <= n){
    if (i % 2 == 0){
        console.log(i,"even number");
    }else{
        console.log(i,"odd number");
    }
    i++;
}
