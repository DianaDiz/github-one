
// let quantity = prompt('введите число');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);


// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

//
// ------------------------------------------------------------------------------

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
  
//   const totalPrice = calculateTotalPrice;
//   console.log(`${orderedQuantity * pricePerItem}`);
  
//   return totalPrice;
// };
// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

// --------------------------------------------------1мод12зад------------------------
  
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
//   return message;
// }
// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

// -----------------------------------------------------1мод13завд---------------------------

// function isAdult(age) {
//   const passed = age>=18;
//   return passed;
// }
// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

// -----------------------------------------------1мод14завд-----------------

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = password === SAVED_PASSWORD;
// console.log(`password` === `SAVED_PASSWORD`);
//   return isMatch;
// }

// ---------------------------------------------------1мод15---------------------

// function checkAge(age) {
//   let message;

//   if (age>=18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// --------------------------------------------------------17/36-------------------

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;


// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// -------------------------------------------------------------18/36-----------------------

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
  
// const totalPrice = pricePerDroid * orderedQuantity;

// if (totalPrice > customerCredits) {
//   message = "Insufficient funds!";
// } else {
//   message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
// }
// console.log(customerCredits - totalPrice);
 
//   return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// ___________________________________________________________19/36------------------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// _____________________________________________________________20/36_________________________________--

// function checkStorage(available, ordered) {
//   let message;
  
// if (ordered === 0) {
//   message = `There are no products in the order!`;
// }
// else if (ordered > available) {
//   message = `Your order is too large, there are not enough items in stock!`;
// }
// else {
//   message = `The order is accepted, our manager will contact you`;
// }
  
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// _------------------------------------------------------21/36-----------------------------------------

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <=end ;

//   return isInRange;
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

// ________-------------------------------------------------22/36---------------------------------------------

// function checkIfCanAccessContent(subType) {
// const canAccessContent = subType === "pro" || subType === "vip";

// return canAccessContent;
// }
// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");

// -----------------------------------------------------------23/36------------------------------------------------

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;

//   return isNotInRange;

// -------------------------------------------------------------24/36-----------------------------------

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
  
// if (totalSpent >= 50000) {
//   discount = GOLD_DISCOUNT;
// } else if (totalSpent >= 20000) {
//   discount = SILVER_DISCOUNT;
// } else if (totalSpent >= 5000 && totalSpent <=20000) {
// discount = BRONZE_DISCOUNT;
// } else if (totalSpent < 5000) {
//   discount = BASE_DISCOUNT;
// }
  
//   return discount;
// }

// ---------------------------------------------------25/36-----------------------

// function checkStorage(available, ordered) {
//   let message;
//  message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   return message;
// }

// ----------------------------------------------------26/36--------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
  
// message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
  
//   return message;
// }

// -----------------------------------------------------27/36----------------------------------

// function getSubscriptionPrice(type) {
//   let price;
  

//  switch (type) {
//     case "starter":
//       price = 0;
//       break;

//     case "professional":
//       price = 20;
//       break;

//     case "organization":
//       price = 50;
//       break;
//   }

  
//   return price;
// }

// -------------------------------------------------------28/36-------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
  
// switch (password){
//   case null:
//   message = "Canceled by user!";
//   break;
//   case ADMIN_PASSWORD:
//   message = "Welcome!";
//   break;
// }
//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

  
//   return message;
// }

// ----------------------------------------------------------29/36-------------------------

// function getShippingCost(country) {
//   let message;
  
// switch (country) {

//   case "China":
//   price = 100;
//   message = `Shipping to ${country} will cost ${price} credits`;
//   break;

//   case "Chile":
//   price = 250;
//   message = `Shipping to ${country} will cost ${price} credits`;
//   break;

//   case "Australia":
//   price = 170;
//   message = `Shipping to ${country} will cost ${price} credits`;
//   break;

//   case "Jamaica":
//   price = 120;
//   message = `Shipping to ${country} will cost ${price} credits`;
//   break;

//   default:
//   message = "Sorry, there is no delivery to your country";

// }
  
//   return message;
// }

// -----------------------------------------------30/36---------------------------------

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;

//   return message;
// }

// ----------------------------------------------------32/36----------------------

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// ------------------------------------------------------33/36-----------------------

// function formatMessage(message, maxLength) {
//   let result =
  
 
//   (message.length > maxLength)
//    ? message.slice(0, maxLength) + "..."
//    : message;
  
//   return result;
// }

// ------------------------------------------------------35/36--------------------------

// function checkForName(fullName, name) {
//  const result = fullName.includes(name);
//   return result;
// }

// -------------------------------------------------------36/36------------------------------

// function checkForSpam(message) {
//   let result;
  
//    const string = message.toLowerCase();
//   if (string.includes("spam") || string.includes("sale")) {
//     result = true;
//   } else {
//     result = false;
//   }
  
//   return result;
// }

// checkForSpam("Latest technology news");
// checkForSpam("JavaScript weekly newsletter");
// checkForSpam("Get best sale offers now!");
// checkForSpam("Amazing SalE, only tonight!");
// checkForSpam("Trust me, this is not a spam message");
// checkForSpam("Get rid of sPaM emails. Our book in on sale!");
// checkForSpam("[SPAM] How to earn fast money?");

