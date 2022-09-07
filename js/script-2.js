
// -----------------------------------------------1------------------------------------

// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// --------------------------------------------2-------------------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";




//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//     return "Access denied, wrong password!";




// }

// ----------------------------------------------------8------------------------------------

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);
//     console.log(lastElementIndex);


// ---------------------------------------------9-------------------------------

// function getExtremeElements(array) {

//     const extremeElements = [array[0], array[array.length - 1]];
//     return extremeElements;
// }
// getExtremeElements([1, 2, 3, 4, 5]);    //[1, 5]
// getExtremeElements(["Earth", "Mars", "Venus"]);     //["Earth", "Venus"]
// getExtremeElements(["apple", "peach", "pear", "banana"]);   //["apple", "banana"]

// console.log(extremeElements);

// -----------------------------------------------------10--------------------------

// function splitMessage(message, delimeter) {
//   let words;


// words = message.split(delimeter);


//   return words;
// }
// splitMessage("Mango hurries to the train", " ")   //["Mango", "hurries", "to", "the", "train"]
// splitMessage("Mango", "")                         //["M", "a", "n", "g", "o"]
// splitMessage("best_for_week", "_")                //["best", "for", "week"]

// ----------------------------------------------------------11-------------------------------

// function calculateEngravingPrice(message, pricePerWord) {
//     let qwe = message.split(' ');
//     let ewq = qwe.length;
//     let zaq = ewq * pricePerWord;

//     return zaq;
// }

// calculateEngravingPrice("JavaScript is in my blood", 10) // 50
// calculateEngravingPrice("JavaScript is in my blood", 20) // 100
// calculateEngravingPrice("Web-development is creative work", 40) // 160
// calculateEngravingPrice("Web-development is creative work", 20) // 80

// -------------------------------------------------------------12----------------------------

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line

//     string = array.join(delimeter);
    
    
//   // Change code above this line
//   return string;
// }

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") // "Mango hurries to the train"
// makeStringFromArray(["M", "a", "n", "g", "o"], "")) // "Mango" //------------------------------------опечатка платформы!!
// makeStringFromArray(["top", "picks", "for", "you"], "_") // "top_picks_for_you"

// -----------------------------------------------------------------13---------------------------

// function slugify(title) {
//   // Change code below this line
// const normalizedTitle = title.toLowerCase();
//     const words = normalizedTitle.split(" ");
//       const slug = words.join("-");
// // return slug;
//     console.log(normalizedTitle);
//     console.log(slug);
//   // Change code above this line
// }

// slugify("Arrays for begginers") // "arrays-for-begginers"
// slugify("English for developer") // "english-for-developer"
// slugify("Ten secrets of JavaScript") // "ten-secrets-of-javascript"
// slugify("How to become a JUNIOR developer in TWO WEEKS") // "how-to-become-a-junior-developer-in-two-weeks"

// -----------------------------------------------------------14--------------------------------------

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2, 5);

// -----------------------------------------------------------15------------------------------------------

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// --------------------------------------------------------------16----------------------------------

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

//     const newArray = firstArray.concat(secondArray);
//   const len = newArray.slice(0, maxLength);
//   if (newArray.length > maxLength) {
//     return len;
//   } else {
// return newArray;
//   }

//   }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) // ["Mango", "Poly", "Ajax"]
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) // ["Mango", "Poly", "Houston", "Ajax"]
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) // ["Mango", "Ajax", "Chelsea"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) // ["Earth", "Jupiter"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) // ["Earth", "Jupiter", "Neptune", "Uranus"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) // []

//--------------------------------------------------------------17----------------------------------
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }
//--------------------------------------------------------------18----------------------------------
// function calculateTotal(number) {
//  // Change code below this line
//   let sum = 0;
// for (let i = 1; i <= number; i += 1) {
//   sum += i;
// }
//  return sum
  
//   // Change code above this line
// }

// calculateTotal(1) //повертає 1
//  calculateTotal(3) //повертає 6
//  calculateTotal(7) //повертає 28
//  calculateTotal(18) //повертає 171
//  calculateTotal(24) //повертає 300

//--------------------------------------------------------------19----------------------------------
//  const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
//--------------------------------------------------------------20----------------------------------
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const value of order) {
//     total += value
//   }
//   // Change code above this line
//   return total;
// }
//--------------------------------------------------------------21----------------------------------
// function findLongestWord(string) {
//   // Change code below this line

//   let words = string.split(" ");
//   let longword = words[0];
//   for (const word of words) {
//     if( word.length > longword.length) {
//         longword = word;
//     }
//   }
//   return longword;

//   // Change code above this line
// }
// Напиши функцію findLongestWordstring), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// findLongestWord("The quick brown fox jumped over the lazy dog") //повертає jumped
// findLongestWord("Google do a roll") //повертає Google
// findLongestWord("May the force be with you") //повертає force
// //findLongestWord() //з випадковим рядком повертає правильне значення

//--------------------------------------------------------------22----------------------------------
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for ( let i = min; i <= max; i += 1) {
//     numbers.push(i)
//   }
  
//   // Change code above this line
//   return numbers;
// }
//--------------------------------------------------------------23----------------------------------
// function filterArray(numbers, value) {
//    // Change code below this line

//    const array = [];
//         for (let i = 0; i < numbers.length; i += 1) {
//             if (numbers[i] > value) {
//         array.push(numbers[i])
//         console.log(array);
//             }
            
//         }
//     return array
    
        
//   // Change code above this line
// }
//   // Change code above this line
// filterArray([1, 2, 3, 4, 5], 3) //повертає [4, 5]
// //filterArray([1, 2, 3, 4, 5], 4) //повертає [5]
// //filterArray([1, 2, 3, 4, 5], 5) //повертає []
// //filterArray([12, 24, 8, 41, 76], 38) //повертає [41, 76]
// //filterArray([12, 24, 8, 41, 76], 20) //повертає [24, 41, 76]
// //filterArray() //з випадковим масивом і числом повертає правильний масив

//--------------------------------------------------------------24----------------------------------
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
//--------------------------------------------------------------25----------------------------------
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const array3 = [];
//    for (const element of array1) {
//      if (array1.includes(element) && array2.includes(element)) {
//        array3.push(element)
//      }
//    }

//   return array3
//  // Change code above this line
// }
//--------------------------------------------------------------26----------------------------------
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const element of order) {
//     total += element;
//   }

//   // Change code above this line
//   return total;
// }
//--------------------------------------------------------------27----------------------------------
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

    
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   return filteredNumbers;
//   // Change code above this line
// }
//--------------------------------------------------------------28----------------------------------

// // Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// const a = 3 % ;
// const b = 4 % ;   4-1=3
// const c = 11 % ;  11-3=8
// const d = 12 % ;  12-5=7
// const e = 8 % ;   8-2=6       остача від ділення

// // const a0 = 3 % 1;
// // const b1 = 4 % 3;
// // const c3 = 11 % 8;
// // const d5 = 12 % ;
// // const e2 = 8 % ;
//--------------------------------------------------------------29----------------------------------
// function getEvenNumbers(start, end) {
//    // Change code below this line
//     const array = [];
//     for ( i = start; i <= end; i += 1 ) {
//         if (i % 2 === 0) {
//             array.push(1);
//         }

//     }

//     return array;
//     // Change code above this line
// }
// getEvenNumbers(2, 5) //повертає [2, 4]
// getEvenNumbers(3, 11) //повертає [4, 6, 8, 10]
// getEvenNumbers(6, 12) //повертає [6, 8, 10, 12]
// getEvenNumbers(8, 8) //повертає [8]
// getEvenNumbers(7, 7) //повертає []
// getEvenNumbers() //з випадковими start і end повертає правильний масив
//--------------------------------------------------------------30----------------------------------
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
//--------------------------------------------------------------31----------------------------------
// function findNumber(start, end, divisor) {
//   // Change code below this line
  
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
    
//   }

 
//   // Change code above this line
// }
//--------------------------------------------------------------32----------------------------------
// function includes(array, value) {
//   // Change code below this line
//   for (const element of array) {
//     if ( element === value) {
//       return true;
//     }
    
//   }
//   return false;
//   // Change code above this line
// }
