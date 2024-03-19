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


  happyBirthday();
  happyBirthday();
  happyBirthday();
  happyBirthday();
  
  
 function happyBirthday() {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log("Happy birthday dear ____");
  console.log("Happy birthday to you!");
  console.log("you are ___ years old!");
 } 

 








