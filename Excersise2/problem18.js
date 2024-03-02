//Do While Loop + If-Else-If Statement
//Print all numbers from 1 to n using a do while loop and check if each number is positive, negative, or zero using an if-else-if statement.

let i = -5;
let n =20;
do{
    if(i == 0){
        console.log(i,"zero");
    
    }else if(i >0){
        console.log(i,"positive");
    }else{
        console.log(i,"negative");
    }
    i++;
}while(i<=n )