// 1. The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.
// 2. The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A).
// 3. The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.
// 4. The user enters 2 numbers (A and B). Print the sum of all numbers from the range A to B that are divisible by 7 without a remainder. (Note that B may be less than A if you type).
// 5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to 1.
// 6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. (yes, you've got to google this algorithm at first :D ).
// 7. The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123, output is 321 in this case.
// 8. The user enters 2 numbers. Find out if these two numbers have the same digits. For example, for a pair of 123 and 3456789, the answer would be "YES", and for a pair of 500 and 99, "NO".


// Taks2.1

// let A=+prompt("Please, enter the number:");
// if(A===0) {
//     alert('This operation is not scheduled.');
// }
// else{
//     for(let i=1; i<=1000; i++) {
//         if (i%A==0){
//             console.log(i);
//         }
//     }
// }



// Task2.2

// let A=+prompt("Please, enter the number:");
// if(A==0){
//     alert("It can not be zero");
// }
// else {
//     for(let i=1; i < number; i++) {
//         if (square=Math.pow(i,2)) {
//             console.log(i);
//         }
//     }
// }



// Task2.3

// let A=+prompt("Please, enter the number:");
// let divisor=0;
// for(let i=1; i<=A/2; i++) {
//     if (A%i==0) {
//         divisor=i;
//     }
// }
// console.log(divisor);



// Task2.4

// let A=+prompt("Please, enter the number for A");
// let B=+prompt("Please, enter the number for B");
// let sum=0;
// let temp;
// if(A>B) {
//     temp=A;
//     A=B;
//     B=temp;
// }
// for(i=A; i<=B; i++){
//     if(i%7==0) {
//         sum=sum+i;
//     }
// }
// console.log(sum);



// Task2.5

// let N=+prompt("Please, enter the number:");
// while (isNaN(N) || N==""){  
//     N=+prompt("Value must be a number.Please try again.:");  
// }  
// let num1=1;  
// let num2=1;  
// let result;  
// let count=2;  
// if(N==2 || N==1){  
//     result=1;  
//     console.log(result);  
  
// }  
// for (let i = 0; i < N; i++) {  
//     result=num1+num2;  
//     num1=num2;  
//     num2=result;  
//     count++;  
//     if (count==N) {  
//     console.log(`The ${N}th Fibonacci number is ${result}`);          
//     }        
// }



// Task2.6

// const A = +prompt('Please give a number for A');
// const B = +prompt('Please give a number for B');
// let result;
// while (a!=0 && b!=0){
// let b = Math.abs(B);
//     }
// while (A && b && a !== B) {
//    if(A>B){
//        A=A%B
//    }
//    else{
//        B=B%A 
//    }
//    result=A+B
//    }   
// console.log(result);



// Task2.7

// let num = +prompt("Please, enter the number: ");
// let reverse = 0; 
// let reminder = 0; 
// while (num>0) {  
//     reminder = num % 10;   
//     reverse = reverse*10 + reminder;  
//     num = ((num-reminder)/10);  
// } 
// console.log(reverse);



// Task2.8

// let A=+prompt("Please, enter the first number:");  
// while (isNaN(A)){  
//     A=+prompt("Value must be a number.Please try again.:");  
//    }  
// let B=+prompt("Please, enter the second number:");  
// while (isNaN(B)){  
//     B=+prompt("Value must be a number.Please try again.:");  
//    }  
//    let digit=0;  
// while (A>0) {  
//     digit=A%10;  
//     if (B.toString().includes(digit.toString())) {  
//         console.log('YES');  
//         break;  
//     }  
//     A=(A-digit)/10;  
// }  
// if (A<=0 && !B.toString().includes(digit.toString())) {  
//     console.log('NO');     
// }