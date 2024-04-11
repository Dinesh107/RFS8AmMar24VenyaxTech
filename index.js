// console.log("Hai Ganesh Welcome to javascript learning");

// window.alert("Hai Ganesh");

// Variables

// let firstName = "Ganesh"  // strings
// let age = 20; // numbers
// let student = true;  // booleans

// console.log(firstName);
// console.log(age);
// console.log(student);

// console.log(typeof firstName);

// console.log(typeof age);

// console.log(typeof student);

// console.log(firstName, age, student);

// console.log("your name is",firstName);

// console.log("age is", age);

// console.log("you have enrolled:-",student);

// let customer = "ganesh";

// let products = 5;

// let total = 100;

// console.log("hello", customer);

// console.log("you have", products, "products in your cart");

// console.log("your total is", total);

// console.log(`hello ${customer}`);

// console.log(`you have ${products} products in your cart`);

// let text =
// `hello ${customer}
// you have ${products} products in your cart
// your total is ${total}`;

// console.log(text);

// let username = window.prompt("What is your username?");

// let num1 = window.prompt("enter num1");

// num1 = Number(num1);

// let num2 = window.prompt("enter num2");

// num2 = Number(num2);

// let result = num1 + num2;

// console.log(typeof num1);

// console.log(typeof num2);

// console.log(result);

// let x;

// let y;

// let z;

// x = Number("3.14");

// y = String(3.14);

// z = Boolean("dosa");

// console.log(x, typeof x);

// console.log(y, typeof y);

// console.log(z, typeof z);

// console.log(`the username is ${username}`);

// let username;

// document.getElementById("myButton").onclick = function() {

//    username = document.getElementById("myText").value;

//    console.log(`Your username is ${username}`);

// }

// const PI = 3.14;

// let radius;

// let circumfernce;

// radius = window.prompt("Enter the radius of the circle");

// radius = Number(radius);

// circumfernce = 2 * PI * radius;

// console.log("the circumference is", circumfernce);

// let userName = "Ganesh Sankar";

// let phoNum = "8873-5-7-5435";

// console.log(phoNum);

// phoNum = phoNum.replaceAll("-", "/");

// console.log(phoNum);

// console.log(userName.length);

// console.log(userName.charAt(2));

// console.log(userName.indexOf("a"));

// console.log(userName.lastIndexOf("a"));

// console.log(userName);

// let trimmedUserName  = userName.trim();

// console.log(trimmedUserName);

// console.log(userName.toUpperCase());

// console.log(userName.toLowerCase());

// fullName = "Ganesh Siva ";

// let firstName;

// let lastName;

// firstName = fullName.slice(0, 6);
// lastName = fullName.slice(7);

// firstName = fullName.slice(0, fullName.indexOf(" "));
// lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);

// let age = 11;

// if(age >= 18) {

//    console.log("you are an adult!");

// }

// if(age >= 18) {

//     console.log("you are an adult!");

//  } else {

//     console.log("you are an child!");

//  }

// let mark = 85;

// if(mark <= 50) {

//    console.log("Your Grade is D");

// } else if(mark > 50 && mark <= 60) {

//    console.log("Your Grade is C");

// } else if(mark > 60 && mark <= 80) {

//     console.log("Your Grade is B");

// } else if(mark > 80 && mark <= 100) {

//     console.log("Your Grade is A");

// } else {

//     console.log("Invalid Mark");

// }

// document.getElementById("myBtn").onclick = function() {

//    if(document.getElementById("myCheckbox").checked) {

//       console.log("You are subscribed!");

//    } else {

//       console.log("You are not subscribed!");

//    }

// }

// let grade = "A";

// switch (grade) {
//   case "A":
//     console.log("You did Great!!!");
//     break;

//   case "B":
//     console.log("You did Good!!!");
//     break;

//   case "C":
//     console.log("You did Okay!!!");
//     break;

//   case "D":
//     console.log("You Passed");
//     break;

//   case "E":
//     console.log("You Failed");
//     break;

//   default:
//     console.log("Invaild Case");
// }

// let i = 1; // intialization

// while(i <= 5) {  // i = 1, i = 2, i =3, i =4, i = 5  ---> Entry Control Loop

//    console.log(i);

//    i = i + 1;  // incrementing i by 1
// }

// console.log("-------------");

// console.log(i);

// 10 to 1

// let i = 4; // intialization

// while(i >= 1) {  //

//    console.log(i);

//    i = i - 1;  // decrementing i by 1
// }

// console.log("-------------");

// console.log(i);

// print 100 to 200

//do while ---> exit control loop

// let i = 190;

// do {

//    console.log(i);

//    i = i + 1;

// } while (i <= 200);

//for loop :-

// print 1 to 10 using for loop

//    1step     2 step   4th step
// for(let i = 1; i <= 10; i = i + 1) {
//   // 3 step it will enter into the block when the condition is true
//    console.log(i);

//    document.write(i, "<br>");

// }

// 1
// 1
// 1
// 1
// 1
// 1
// 1
// 1
// 1
// 1

// X
// X
// X
// X
// X
// X
// X
// X
// X
// X

// x
// x
// x
// x
// x
// y
// y
// y
// y
// y

// i
// i
// i
// i
// i
// j j j j j

// for(let i = 1; i <= 10; i = i + 1) {

//     if(i == 5) {

//        break;

//     }

//     console.log(i);

// }

// for(var i = 1; i <= 10; i = i + 1) {

//     if(i == 5) {

//        continue;

//     }

//     console.log(i);

// }

//1s        2s      8s
// for(var i = 1; i <= 10; i = i + 1) {   // responsible for row i = 1,i =2, i = 3, i=4

//  // 3s

//         // 4s         5s      7s
//      for(var j = 1; j <= 10; j = j + 1) {  // responsible for values

//       //6s
//          document.write(j, " ");

//      }
//      document.write("<br>");

// }

//   startProgram();

//   function startProgram() {

//      let userName = "Ganesh";

//      let age = 20;

//      let height = 5.5;

//      happyBirthday(userName, age, height);

//   }

//  function happyBirthday(name, age, h) {
//   console.log("Happy birthday to you!");
//   console.log("Happy birthday to you!");
//   console.log("Happy birthday dear", name, "and your height is " + h);
//   console.log("Happy birthday to you!");
//   console.log("you are", age ,"years old!");
//  }

// let area;

// let width;

// let height;
2;
// width = window.prompt("Enter a Width");
2;
// height = window.prompt("Enter a Height");

// area = getArea(width, height);

// console.log("Area is : " + area);

// function getArea(width, height) {

// //   let result = width * height;

// //   return result;

//     return width * height;

// }

// let age = validateAge(21);

// console.log(age)

// function validateAge(age) {

// //  if(age >= 18) {

// //    console.log("You can vote");

// //  } else {

// //      console.log("You cannot vote");

// //  }

//   return age >= 18 ? "You can vote" : "You cannot vote";

// }

// var name = "Ganesh";

// varPractice();

// function varPractice() {

//   for(var i = 1; i <= 3; i+=1) {

//     // console.log(i);

//   }

// }

// console.log(i);

// let name = "ganesh";

// let var const

// let name = "ganesh";

// varPractice();

// function varPractice() {

//   for(var i = 1; i <= 3; i = i + 1) {

//       // console.log(i);

//   }

// }

// console.log(i);

// let name = "ganesh";

// let userName = "ganesh";

// let products = 3;

// let totalProducts = 100;

// console.log("Hello", userName);

// console.log("you have", products, "products in your cart");

// console.log("Your total is ", totalProducts);

// console.log(`Hello ${userName}`);

// console.log(`You have ${products} products in your cart`);

// console.log(`Your Total is ${totalProducts}`);

// let text = `Hello ${userName}

// You have ${products} products in your cart

// Your Total is ${totalProducts}`

// console.log(text);

// let fruits = ["apple", "orange", "grape"];

// fruits[2] = "coconut";

// fruits.push("lemon");  add element at the last

// fruits.pop();  remove last element

//fruits.unshift("mango"); add element at the beginning

// fruits.shift();  remove beginning element

// let length = fruits.length;

// console.log(`the length of the array is ${length}`);

// let index = fruits.indexOf("grape");

// console.log(`the index of the orange is ${index}`);

// console.log(fruits);

// loop through an array

// let prices = [20, 30, 40, 50, 45];

// left to right order
// for(let i = 0; i < prices.length; i = i + 1) {

//   console.log(prices[i]);

// }

// right to left order
// for(let i = prices.length - 1; i >= 0; i = i - 1) {

//   console.log(prices[i]);

// }

// for upstatement

// let prices = [23, 45, 46, 34];

// for(let price of prices) {

//     console.log(price);

// }

// sorting of array

// let fruits = ["apple", "orange", "banana", "mango"];

// fruits = fruits.sort();

// fruits = fruits.sort().reverse();

// for(let fruit of fruits) {

//    console.log(fruit);

// }

// 2d array or multidimensional array

// let fruits = ["apple", "orange", "banana"];

// let vegetables = ["carrots", "onions", "potatos"];

// let meats = ["eggs", "chicken", "fish"];

// let groceryList = [fruits, vegetables, meats]

// for(let list of groceryList) {

//   for(let food of list) {

//      console.log(food);

//   }

// }

// let userName = "Ganesh Sankar";

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(...numbers);

// console.log(...userName);

// let numbers = [1000, 1, 2, 3, 400, 5, 6, 7, 8, 9];

// let maximum = Math.max(...numbers);

// console.log(maximum);

// let class1 = ["ganesh", "murugan", "siva"];

// let class2 = ["john", "david", "aslam"];

// class1.push(...class2);

// console.log(...class1);

// rest paramters -- > represent an indefinite number of paramters (pack arguments into a array) --> ...

// let a = 1;

// let b = 2;

// let c = 3;

// let d = 4;

// let e = 5;

// //            15
// console.log("the total is", sum(a, b, c, d, e));

// function sum(...numbers) { // [1, 2, 3, 4, 5]

// let total = 0; // total = 1, total = 3, total = 6, total = 10, total = 15

// for(let number of numbers) {

//   total = total + number;

// }

// //      15
// return total;

// }

// function sum2(a, b) {

//   return a + b;

// }

// function sum3(a, b, c) {

//   return a + b + c;

// }

// function sum4(a, b, c, d) {

//   return a + b + c + d;

// }

// function sum5(a, b, c, d, e) {

//   return a + b + c + d + e;

// }

//            5
// let total = sum(2 ,3);

// displayConsole(total);
// displayDocument(total);

// function sum(x, y) {

//   let result = x + y;

//   return result;

// }

//          5
// sum(2, 3, displayDocument);

// sum(2, 3, displayConsole);

// function sum(x, y, myFunction) {

//    let result = x + y;

//    myFunction(result);

// }

// function displayConsole(output) {

//     console.log(output);

// }

// function displayDocument(output) {

//   document.getElementById("myLabel").innerHTML = output;

// }

// let students = ["ganesh", "john", "aslam"];

// //                  John
// students.forEach(capitalize);

// students.forEach(print);

//            //John
// function capitalize(x, y, z) {
// // john               J                   ohn
//    z[y] = x[0].toUpperCase() + x.substring(1);

// }

// function print(x) {

//   console.log(x);

// }

// let numbers = [1, 2, 3, 4, 5];

// let squares = numbers.map(square); // [1, 4, 9, 16, 25]

// squares.forEach(print);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function print(element) {
//   console.log(element);
// }

// let nums = [2,3,4];

// let squrs = nums.map(cubic);

// function cubic(element) {
//   return Math.pow(element, 3);
// }

// console.log(squrs);

// function printConsole(element) {
//   console.log(element);
// }

// squrs.forEach(printConsole);

// Rest Operator --> multiplication, for 6 elements

// CallBack ---> multiplication, displayConsole, displayDocument

// array.map ---> find the numbers of cubes i/p [1, 2, 3, 4, 5]

// o/p [1, 8, 27, 64, 125];

// let ages = [18, 16, 21, 17, 19, 90];

// let adults = ages.filter(checkAge);

// function checkAge(element) {

//     return element >= 18;

// }

// console.log(adults);

// adults.forEach(printConsole);

// function printConsole(element) {
//   console.log(element);
// }

// let grades = [100, 50, 80, 70];

// grades = grades.sort(decendingSort);

// function decendingSort(i, j) {
//     return j - i;
// }

// let result = decendingSort(50, 400);

// console.log(result);

// console.log(grades)

// function sayHello() {

//   console.log("Hello!");

// }

// sayHello();

// const welcome = function() {

//   console.log("Hello!");

// }

// welcome();

// let count = 0;

// document.getElementById("increaseBtn").onclick = function() {

//   count += 1;

//   document.getElementById("myLabel").innerHTML = count;

// }

// document.getElementById("decreaseBtn").onclick = function() {

//   count -= 1;

//   document.getElementById("myLabel").innerHTML = count;

// }

// function increaseCount() {

//  count += 1;

//  document.getElementById("myLabel").innerHTML = count;

// }

// function decreaseCount() {

// count -= 1;

// document.getElementById("myLabel").innerHTML = count;

// }

// const greeting = function(userName) {

//     console.log(`hello ${userName}`);

// }

// function greeting() {

// }

// greeting("Ganesh");

// const greeting = (userName) => {console.log(`hello ${userName}`);}

// greeting("Ganesh");

// const percent = function(x, y) {

//     return x / y * 100;

// }

// const percent = (x, y) => x / y * 100;

// console.log(`${percent(60, 50)}%`);

// let userName = "Ganesh";

// let userInbox = 0;

// displayUserInbox();

// displayUserName();

// login();

// function login() {
//   displayUserName();

//   displayUserInbox();

//   function displayUserName() {
//     console.log(`Welcome! ${userName}`);
//   }

//   function displayUserInbox() {
//     console.log(`You have ${userInbox} new messages`);
//   }
// }

// const store = new Map([

//   ["t-shirt", 200],
//   ["pants", 300],
//   ["shoes", 400],
//   ["bag", 500],
//   ["shirt", 600]

// ]);

// let shopingCart = 0;

// shopingCart += store.get("shoes");

// shopingCart += store.get("bag");

// shopingCart += store.get("t-shirt");

// store.set("cap", 50);

// store.set("mobile phone", 1000);

// store.delete("cap");

// store.delete("mobile phone");

// console.log(store.has("bag"));

// console.log(store.has("car"));

// console.log(shopingCart);

// console.log(store);

// store.forEach((value, key) => console.log(`${key} ${value}`));




































































