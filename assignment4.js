//Write a function that takes an array of numbers and returns the sum of the array.
const numbers = [1, 2, 3, 4, 5];
function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray(numbers));

//Write a function that takes an array of strings and returns the longest string in the array.
let string = ['apple', 'bananas', 'carrot'];
function longestString(strings) {
  let longest = '';
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longest.length) {
      longest = strings[i];
    }
  }
  return longest;
}
console.log(longestString(strings));

//Write a function that takes an array of numbers and returns an array of the even numbers in the array.
let number = [1, 2, 3, 4, 5];
function getEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}
console.log(getEvenNumbers(numbers));

//Write a function that takes an array of numbers and returns an array of the numbers in reverse order.
let thenumbers = [1, 2, 3, 4, 5];
function reverseArray(numbers) {
  return numbers.reverse();
}
console.log(reverseArray(numbers));

//A word is given, write a function to tell if the word is a palindrome.
const word = 'level';
function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}
console.log(isPalindrome(word));

//Create an object called "circle" with properties for radius and circumference. Create a method on the object using a loop that calculates the circumference of the circle based on its radius.
const circle = {
  radius: 5,
  calculateCircumference() {
    const circumference = 2 * Math.PI * this.radius;
    return circumference;
  }
};
console.log(circle.calculateCircumference());
