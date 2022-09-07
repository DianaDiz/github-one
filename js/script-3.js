
// ------------------------------------1---------------------------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//  descr: "Spacious apartment in the city center",
// rating: 4,
// price: 2153,
// tags: ["premium", "promoted", "top"],
// };
//------------------------------------2---------------------------------------

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//    owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com"
//   },
// };
   // ------------------------------------3---------------------------------------

//    const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

   // ------------------------------------4---------------------------------------

//    const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line
    //------------------------------------5---------------------------------------
//             const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

    //------------------------------------6---------------------------------------
//             const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating =4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// // Change code below this line

    //------------------------------------7---------------------------------------
//             const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";
// console.log(apartment);
    //------------------------------------8---------------------------------------
//             const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
// image,
// tags,
//   // Change code above this line
// };
   // ------------------------------------9---------------------------------------
//             const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",


//   // Change code above this line
// };
    //------------------------------------10---------------------------------------
            
//         const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = ["descr", "rating", "price"];
// const values = ["Spacious apartment in the city center", 4, 2153];
// // Change code below this line

// for (const key in apartment) {
//  console.log(apartment[key]);

// }
    //------------------------------------11---------------------------------------
            
//         const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }


//   // Change code above this line
// }

        //------------------------------------12---------------------------------------

//         function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object){
// if (object.hasOwnProperty(key))  {
//   propCount += 1
// }

// }
//   // Change code above this line
//   return propCount;
// }
// countProps({}) //повертає 0
// countProps({ name: "Mango", age: 2 }) //повертає 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) //повертає 3

// -----------------------------------------13-------------------------------------------------
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);

// }

// -----------------------------------------14-------------------------------------------------
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object);

//   for (const key of keys) {
//       propCount += 1
    
//   }

//   return propCount;
//   // Change code above this line
// }
// -----------------------------------------15-------------------------------------------------
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// -----------------------------------------16-------------------------------------------------
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//   // Change code below this line
// const values = Object.values(salaries);
//     for (value of values) {
//     totalSalary += value
//     }
//   // Change code above this line
//     return totalSalary;
// }
// countTotalSalary({}) //повертає 0
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) //повертає 330
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) //повертає 400
// -----------------------------------------17-------------------------------------------------
// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb)
// };

// -----------------------------------------18-------------------------------------------------
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName)
//       return product.price
//   }
// return null
//   // Change code above this line
// }

// -----------------------------------------19-------------------------------------------------
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//     const values = [];
//     for (const product of products) {
//     if (product[propName]) {
//         values.push(product[propName])
//     }
//     }
// return values;
//   // Change code above this line
// }


// -----------------------------------------20-------------------------------------------------
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
// for (const product of products) {
//   if (product.name === productName)
//   return product.price * product.quantity
// }

//   return 0
//   // Change code above this line
// }
// -----------------------------------------21-------------------------------------------------
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// -----------------------------------------22-------------------------------------------------
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;


// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// -----------------------------------------23-------------------------------------------------
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line
// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon =
//     "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// -----------------------------------------24-------------------------------------------------
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
  
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
//--------------------------------------------------------------25----------------------------------
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//           tomorrow: {
//             high: highTomorrow,
//             low: lowTomorrow,
//             icon: tomorrowIcon =
//             "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }
//   } = forecast;

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

//--------------------------------------------------------------26----------------------------------
// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;
// const {
//         today: { low: todayLow, high:todayHigh },
//          tomorrow: { low: tomorrowLow, high: tomorrowHigh}
//       } = forecast;
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

//--------------------------------------------------------------27----------------------------------
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);



//--------------------------------------------------------------28----------------------------------
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
//--------------------------------------------------------------29----------------------------------
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

//--------------------------------------------------------------30----------------------------------
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const task = { completed, category, priority };
//     const exercise = { ...task, ...data };
//     return exercise;
//   // Change code above this line
// }

// makeTask({}) //повертає { category: "General", priority: "Normal", completed: false }

// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) //повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// makeTask({ category: "Finance", text: "Take interest" }) //повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }

// makeTask({ priority: "Low", text: "Choose shampoo" }) //повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }

//--------------------------------------------------------------31----------------------------------
// // Change code below this line
// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total
//   // Change code above this line
// }
// add(15, 27) //повертає 42
// add(12, 4, 11, 48) //повертає 75
// add(32, 6, 13, 19, 8) //повертає 78
// add(74, 11, 62, 46, 12, 36) //повертає 241
//--------------------------------------------------------------32----------------------------------
// // Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
    
//   }

//   return total;
//   // Change code above this line
// }
//--------------------------------------------------------------33----------------------------------
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
//--------------------------------------------------------------34----------------------------------
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// };
//--------------------------------------------------------------35----------------------------------
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//    const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);

//     // Change code above this line
//   },
// };
//--------------------------------------------------------------36----------------------------------
// const atTheOldToad = {
//   // Change code below this line
//     potions: [],

//   // Change code above this line
// };

//Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.

//--------------------------------------------------------------37----------------------------------
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return atTheOldToad.potions;
//   }
//   // Change code above this line
// };

//Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.


//--------------------------------------------------------------38----------------------------------
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//   this.potions.push(potionName);


//     // Change code above this line
//   },
// };

//Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.

//--------------------------------------------------------------39----------------------------------
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//   for (let i = 0; i < this.potions.length; i += 1) {
//     if (potionName === this.potions[i]) {
//       this.potions.splice(i, 1);
//       break;
//     }

//   }


//     // Change code above this line
//   },
// };


// ---------------
//     const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//   for (let i = this.potions.length -1; i >= 0; i -= 1) {
//     if (potionName === this.potions[i]) {
//       console.log(this.potions.splice(i, 1));
//       break;
//     }
      
      
//   }


//     // Change code above this line
//   },
// };

//Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions. 


//--------------------------------------------------------------40----------------------------------
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//   const bookIndex = this.potions.indexOf(oldName);
//      this.potions.splice(bookIndex, 1, newName);

//     // Change code above this line
//   },
// };

//--------------------------------------------------------------41----------------------------------
// // const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
    
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     // if (this.potions.includes(newPotion)) {
//     //   return `Error! Potion ${newPotion} is already in your inventory!`;
//     // }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i ++) {
//       if(this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//     // const potionIndex = this.potions.indexOf(potionName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${potionName} is not in inventory!`;
//     // }

//     //this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if(this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//         return ;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//     // const potionIndex = this.potions.indexOf(oldName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${oldName} is not in inventory!`;
//     // }

//    // this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

