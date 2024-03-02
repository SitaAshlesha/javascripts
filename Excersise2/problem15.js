//For Loop + If-Else-If Statement
//Print all numbers from 1 to n using a for loop and check if each number is positive, negative, or zero using an if-else-if statement.

let n = 20;
for (let i = -5;i<=n;i++){
    if (i>0){
        console.log(i,"Its positive number");
    }else if(i == 0){
        console.log(i,"Its equal to zero");

    }
    else {
        console.log(i,"Its negative");

    }

    
}