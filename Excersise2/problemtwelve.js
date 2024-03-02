//Do While Loop + If Statement
//Print all numbers from 1 to n using a do while loop and an if statement.
let n = 10;
let i = 1;
do {
    if(i <=n){
        console.log(i,"Number is even");
    }
    else{
        console.log(i,"Number is odd");
    }
    
    i++;
}while(i<=n);
