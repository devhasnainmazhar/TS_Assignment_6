// Question # 01
// Write a ts program to print all natural numbers from 1 to n. - using while loop.


// let n1 : any = Number(prompt("Enter a natural number"));
// let i1 : number = 1;
// while(n1 >= i1){
//     console.log(i1);
//     i1++;
// }


// Question # 02
// Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop.


// let n2 : any = Number(prompt("Enter a natural number"));
// while(n2 >= 1){
//     console.log(n2);
//     n2--;
// }


// Question # 03
// Write a ts program to print all alphabets from a to z. - using while loop.


// let ch : number = 97;
// while(ch <= 122){
//     console.log(String.fromCharCode(ch));
//     ch++;
// }


// Question # 04
// Write a ts program to print all even numbers between 1 to 100. - using while loop.


// let n3 : number = 1;
// while(n3 <= 100){
//     if(n3%2 == 0){
//         console.log(n3);
//     }   
//     n3++;
// }


// Question # 05
// Write a ts program to print all odd number between 1 to 100.


// let n3 : number = 1;
// while(n3 <= 100){
//     if(n3%2 == 1){
//         console.log(n3);
//     }   
//     n3++;
// }


// Question # 06
// Write a ts program to find sum of all natural numbers between 1 to n.


// let n : any = Number(prompt("Enter a number"));
// let i : number = 1;
// let sum : number = 0;
// while(n >= i){
//     sum += i;
//     i++;
// }
// console.log(sum);


// Question # 07
// Write a ts program to find sum of all even numbers between 1 to n.


// let n3 : number = Number(prompt("Enter a number"));
// let i : number = 1;
// let sum : number = 0;
// while(n3 >= i){
//     if(i%2 == 0){
//         sum += i;
//     }   
//     i++;
// }
// console.log(sum);


// Question # 08
//  Write a ts program to find sum of all odd numbers between 1 to n.


// let n3 : number = Number(prompt("Enter a number"));
// let i : number = 1;
// let sum : number = 0;
// while(n3 >= i){
//     if(i%2 == 1){
//         sum += i;
//     }   
//     i++;
// }
// console.log(sum);


// Question # 09
// Write a ts program to print multiplication table of any number.


// let z : number = Number(prompt("Enter a number to see table"));
// let i : number = 1;
// let table : number = 1;
// while(i <= 10){
//     table = z * i ;

//     console.log(`${z} * ${i} = ${table}`);
//     i++;
// }


// Question # 10
// Write a ts program to count number of digits in a number.


// var number: Number = Number(prompt("Enter a number"));
// var length = 0;
// let i : any = number
// while(i > 1) {
//     ++length;
//     i = Math.floor (i/10);
//     ++i;
// }
// console.log("Total number of digits are = ", length);


// Question # 11
// Write a ts program to find first and last digit of a number.


// let num : any = Number(prompt("Enter a number"));
// let lastNum : Number = num%10;
// let firstNum : any = num;
// while(firstNum >= 10){
//     firstNum = Math.floor(firstNum/10);
// }
// console.log(num);
// console.log(`First Num = ${firstNum} and Last Num = ${lastNum}`);


// Question # 12
// Write a ts program to find sum of first and last digit of a number.


// let num : any = Number(prompt("Enter a number"));
// let firstNum : any = num;
// let lastNum : Number = num%10;
// let sum : Number;
// while(firstNum >= 10){
//     firstNum = Math.floor(firstNum/10);
// }

// sum = firstNum + lastNum;
// console.log(num);
// console.log(`The Sum of ${firstNum} and ${lastNum} = ${sum}`);


// Question # 13
// Write a ts program to swap first and last digits of a number.


// let num : any = Number(prompt("Enter a number"));
// let lastNum : Number = num%10;
// let firstNum : any = num;
// while(firstNum >= 10){
//     firstNum = Math.floor(firstNum/10);
// }
// console.log(`Before Swap \n First Num = ${firstNum} and Last Num = ${lastNum}`);
// let x = firstNum;
// firstNum = lastNum;
// lastNum = x;
// console.log(`After Swap \n First Num = ${firstNum} and Last Num = ${lastNum}`);


// Question # 14
// Write a ts program to calculate sum of digits of a number.


// let num : any = Number(prompt("Enter a number"));
// let sum : any = 0; 
// while (num) 
// {
//     sum += num % 10; 
//     num = Math.floor (num / 10); 
// } 
// console.log(`Sum = ${sum}`);


// Question # 15
// Write a ts program to calculate product of digits of a number.


// let num : any = Number(prompt("Enter a number"));
// let mul : any = 1; 
// while (num) 
// {
//     mul *= num % 10; 
//     num = Math.floor (num / 10); 
// } 
// console.log(`Multiplication = ${mul}`);


// Question # 16
// Write a ts program to enter a number and print its reverse.


// let n: any = Number(prompt("Enter a number"));
// let reverse: any = 0
// let remainder;
// while (n>0) {
//     remainder = n%10;
//     reverse = reverse * 10 + remainder;
//     n = Math.floor(n / 10);
// }
// console.log(reverse);


// Question # 17
// Write a ts program to check whether a number is palindrome or not.


// let n: any = Number(prompt("Enter a number"));
// const x : Number = n;
// let reverse: any = 0
// let remainder;
// while (n>0) {
//     remainder = n%10;
//     reverse = reverse * 10 + remainder;
//     n = Math.floor(n / 10);
// }
// if(x == reverse){
//     console.log(x, "The number is Palindrome")
// }else{
//      console.log(x, "The number is not Palindrome")
// }


// Question # 18
// Write a ts program to find frequency of each digit in a given integer.


// var n7 :number = Number(prompt("Enter the number:"));
// var d :number= Number(prompt("Enter the number whose frequency you wants to know:"));;

// const frequency = (n7:number, d:number):number => {
//     var c:number = 0;
//     while(n7>0){
    
//         if (n7%10 == d){
//             c++;
//         }
//         n7 = Math.floor(n7/10);

//     }
//     return c;
// }
// const result : Number = frequency(n7, d);
// console.log(`frequency of ${d} in ${n7} = ${result} `);


// Question # 19
// Write a ts program to enter a number and print it in words.


// let num, rev : any =0;
// let digit, rem : any = 0;

// num = Number(prompt("Enter a number"));

// while(num>0)
// {
//   rem = num % 10;
//   rev = rev * 10 + rem;
//   num = Math.floor(num/10);
// }
// while(rev>0)
// {
//   digit = rev%10;
//   switch(digit)
//   {
//     case 1: console.log("One ");
//       break;
//     case 2: console.log("Two ");
//       break;
//     case 3: console.log("Three ");
//       break;
//     case 4: console.log("Four ");
//       break;
//     case 5: console.log("Five ");
//       break;
//     case 6: console.log("Six ");
//       break;
//     case 7: console.log("Seven ");
//       break;
//     case 8: console.log("Eight ");
//       break;
//     case 9: console.log("Nine ");
//       break;
//     case 0: console.log("Zero ");
//       break;
//     default: console.log("Something went wrong!!");
//       break;
//   }
//   rev = Math.floor(rev/10);
// }


// Queston # 20 
// Write a ts program to print all ASCII character with their values.


// let i : any = 65;
// while(i <= 122){
//   console.log(`${i} `,String.fromCharCode(i));
//   i++;
// }

// question # 21
// Write a ts program to find power of a number using for loop.


// let x: any = Number(prompt("Enter a number"));
// let n: any = Number(prompt("Enter a power"));

// let sum: any = 1; 
// for (let i=0;i<n;i++) {
//   sum = sum * x;
// }
// console.log(sum);


// Question # 22
// Write a ts program to find all factors of a number.


// let N : number =Number(prompt("Enter a number"));
// let i : number = 1;
// const factors = (n, i) => {
//     if (i <= n) {
//         if (n % i == 0) {
//             console.log(`Factor = ${i} `);
//         }

//         factors(n, i + 1);
//     }
// }
//     factors(N, 1);

// Question # 23
// Write a ts program to calculate factorial of a number.


// let v : number = Number(prompt("Enter a number"));
// let fac : number = 1;
// let i : number = 1;
// while(i <= v){
//     fac = fac * i;
//     i++;
// }
// console.log(`Factorial = ${fac}`);


// Question # 24
// Write a ts program to find HCF of two numbers.


// let a: number = Number(prompt("Enter first number"));
// let b: number = Number(prompt("Enter second number"));
// const gcd =(a, b) => {
//     let result = Math.min(a, b);
//     while (result > 0) {
//         if (a % result == 0 && b % result == 0) {
//             break;
//         }
//         result--;
//     }
//     return result;
// }

//     console.log(`GCD or HCF of ${a} and ${b} = ${gcd(a , b)}`);
      


// Question # 25

// program to find the LCM of two integers


// let num1: number = Number(prompt('Enter a first positive integer: '))
// let num2: number = Number(prompt('Enter a second positive integer: '));
// let min = (num1 > num2) ? num1 : num2;

// while (true) {
//     if (min % num1 == 0 && min % num2 == 0) {
//         console.log(`The LCM of ${num1} and ${num2} = ${min}`);
//         break;
//     }
//     min++;
// }


// Question # 26
// Write a ts program to check whether a number is Prime number or not.


// let i : number = 2;
// let x : number = Number(prompt("Enter a number:"));
// while(i < x){

//     if(x%i == 0){
//        console.log("It is not a prime number");
//            break;
//     }
//     i += 1;
// }
// if(x== i){
//     console.log("It is a prime number");
// }


// Question # 27
// Write a ts program to print all Prime numbers between 1 to n.



// let i,j,isPrime : number;
// let end : number = Number(prompt("Enter a number:"));
// for(i = 2; i<=end; i++){

//     isPrime = 1;
//     for(j=2; j<=Math.floor(i/2); j++){
//         if(i%j==0)
//         {
//             isPrime = 0;
//             console.log("It is not a prime number");
//             break;
//         }
        
//     }

//     if(isPrime==1)
//     {
//         console.log(i);
//     }
// }


// Question # 30
// Write a ts program to check whether a number is Armstrong number or not.

// let x: number = Number(prompt("Enter a number"));
// const power = (x, y) => {
//         if( y == 0)
//             return 1;
//         if (y % 2 == 0)
//             return power(x, Math.floor(y / 2)) *
//                    power(x, Math.floor(y / 2));
                      
//         return x * power(x, Math.floor(y / 2)) *
//                    power(x, Math.floor(y / 2));
//     }
   
//     function order(x)
//     {
//         let n = 0;
//         while (x != 0)
//         {
//             n++;
//             x = Math.floor(x/10);
//         }
//         return n;
//     }
 
//     const isArmstrong = (x) => {
           
        // Calling order function
        // let n = order(x);
        // let temp = x, sum = 0;
        // while (temp != 0)
        // {
        //     let r = temp % 10;
        //     sum = sum + power(r, n);
        //     temp = Math.floor(temp / 10);
        // }
   
        // If satisfies Armstrong condition
    //     return (sum == x);
    // }
     
    // if(isArmstrong(x))
    // {
    //     console.log(`${x} is an Armstron number`);
    // }
    // else{
    //     console.log(`${x} is not Armstron number`);
    // }


