console.log(`Coding`)

console.log(`Question 1
Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.
        Do not use numbers to reference the last element, find it programmatically.
        ages[7] - ages[0] is not allowed!
    b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    c. Use a loop to iterate through the array and calculate the average age.`)
//create array
var ages = [3, 9, 23, 64, 2, 8, 28, 93]
//a. find first number of array, find last and then find difference using peramiters
console.log(`a.`)
var firstAge = ages[0];
var lastAge = ages[ages.length - 1];
var ageDifference = lastAge - firstAge;

console.log(ageDifference);

//b. push new age to ages then check previous codes work
console.log(`b.`)
ages.push(42)
var newLastAge = ages[ages.length - 1];
var newAgeDifference = newLastAge - firstAge;
console.log(newAgeDifference);

//c. make for loop to get sum of ages then divide by lenght of array
console.log(`c.`)
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

var averageAge = sum / ages.length;
console.log(averageAge);

console.log(`Question 2
Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    a. Use a loop to iterate through the array and calculate the average number of letters per name.
    b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
`)
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//a. find to total letters for all items in array, followed by finding the average by dividing by array length (total items in array)
console.log(`a.`)
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}

var averageLettersPerName = totalLetters / names.length;
console.log(averageLettersPerName);

//b. need to create for loop to merge the array items into one item. within the loop i need to add a space.
console.log(`b.`)
let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
  if (i !== 0) {
    concatenatedNames += ' '; // Add space between names
  }
  concatenatedNames += names[i];
}

console.log(concatenatedNames);

console.log(`Question 3
How do you access the last element of any array?`)

console.log(`In order to access the last item in the array you can enter the following (will use names array as an example)
names[names.length - 1]
the minus one is to compensate for the first item in the array being zero.`)

console.log(`Question 4
How do you access the first element of any array?`)

console.log(`to access you must enter the following, will use names array as example.
names[0] 
The zero is to for the first item in the array.`)

console.log(`Question 5
Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array`)

let q5names = ["Kelly", "Sam", "Kate"]; 
let nameLengths = [];
//for the for loop i need to use the push to give the nameLengths items which would be the lenghts
for (let i = 0; i < q5names.length; i++) {
    nameLengths.push(q5names[i].length);
  }
  
  console.log(nameLengths);

console.log(`Question 6
Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`)
let q6sum = 0
for (let i = 0; i < nameLengths.length; i++){
    q6sum += nameLengths[i]
}
console.log(q6sum);

console.log(`Question 7
Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
`)
function repeatWord(q7word, n){
    let mergedWord = "";

    for (let i = 0; i < n ; i++) {
        mergedWord += q7word;
    }
    return mergedWord
}const q7word = "Hello";
const repetitionCount = 3;
var result = repeatWord(q7word, repetitionCount);
console.log(result);

console.log(`Question 8
Write a function that takes two parameters, firstName and lastName, and returns a full name. 
The full name should be the first and the last name separated by a space.`)

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
var firstName = "Uriel";
var lastName = "Lezama";
var fullName = getFullName(firstName, lastName);
console.log (fullName);

console.log(`Question 9
Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`)
function isSumGreaterThan100(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum > 100;
  }
 
var numbersArray =[30,40,50];
console.log(numbersArray);
var result = isSumGreaterThan100(numbersArray);
console.log(result);

console.log(`Question 10
Write a function that takes an array of numbers and returns the average of all the elements in the array.`)
//I will be averaging ages array from question one to compare the results
function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
  
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum / numbers.length;
  }  
  var average = calculateAverage(ages);
console.log(average);

console.log(`Question 11
Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`)

function isAverageOfFirstArrayGreater(arr1, arr2) {
    const calculateAverage = (array) => {
      if (array.length === 0) {
        return 0;
      }
  
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
  
      return sum / array.length;
    };
  
    const averageOfFirstArray = calculateAverage(arr1);
    const averageOfSecondArray = calculateAverage(arr2);
  
    return averageOfFirstArray > averageOfSecondArray;
  }
//I will be pluging in numbersArray and ages to see if the out comes is as predicted
var result = isAverageOfFirstArrayGreater(numbersArray, ages);
console.log(result);
//Now i will reverse the order of arrays to see if it logs false
var result = isAverageOfFirstArrayGreater(ages, numbersArray);
console.log(result);

console.log(`Question 12
Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`)

function willBuyDrink(isHotOutside, moneyInPocket) {
    var drinkPrice = 10.50;
  
    return isHotOutside && moneyInPocket > drinkPrice;
  }
// first I will make punch in booleans that will come out true
var hotOutside = true;
var money = 15.00;
var willBuy = willBuyDrink(hotOutside, money);
console.log(willBuy); 

//now i will change the options to see how it reacts
var hotOutside = true;
var money = 8.50;
var willBuy = willBuyDrink(hotOutside, money);
console.log(willBuy); 

var hotOutside = false;
var money = 22.25;
var willBuy = willBuyDrink(hotOutside, money);
console.log(willBuy); 


console.log(`Question 13
Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`)
//my function will calculate the price of a dog wash depending on its weight
//I've been procrasinating to get my dog groomed and that all i can think about
function calculateDogWashPrice(weight) {
    // define price tiers based on weight
    var smallDogPrice = 25;
    var mediumDogPrice = 35;
    var largeDogPrice = 45;
  
    // calculate the price based on weight
    if (weight <= 15) {
      return smallDogPrice;
    } else if (weight <= 30) {
      return mediumDogPrice;
    } else {
      return largeDogPrice;
    }
  }
  
// I will put different examples to see its out comes
var dogWeight = 20;
var washPrice = calculateDogWashPrice(dogWeight);
console.log(washPrice); 

var dogWeight = 110;
var washPrice = calculateDogWashPrice(dogWeight);
console.log(washPrice); 

var dogWeight = 6;
var washPrice = calculateDogWashPrice(dogWeight);
console.log(washPrice); 


