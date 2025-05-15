//Sum of two number
const sumOfTwoNumbers = (num1, num2) => {
  if (typeof num1 !== "number") return "Number one is  NaN";
  if (typeof num2 !== "number") return "Number two is  NaN";

  return num1 + num2;
};
console.log(sumOfTwoNumbers(3, 5));

///even or odd number check
const evenOddCheck = (num) => {
  if (typeof num !== "number") return "Please provide a number";
  return num % 2 === 0 ? "Even" : "Odd";
};
console.log(evenOddCheck(4));

//Celcious to fahrhenheit
const celciousToFahrhenheit = (temp) => {
  if (typeof num !== "number") return "Please provide a number";
  return ((temp * 9) / 5 + 32).toFixed(2);
};
console.log(celciousToFahrhenheit(0));

//Square of a number
const squareOfNumber = (num) => {
  if (typeof num !== "number") return "Please provide a number";
  return num * num;
};
console.log(squareOfNumber(5));

//first character of a string
const firstCharacter = (str) => {
  return str.charAt(0);
};
console.log(firstCharacter("Hello World"));

//negative or positive test
const isNegative = (num) => {
  if (typeof num !== "number") return "Please provide a number";
  return num < 0 ? "Negative" : num > 0 ? "Positive" : "Your number is zero";
};

console.log(isNegative(0));

//Leap year check
const isLeapYear = (year) => {
  return year % 4 === 0 && year % 100 === 0 && year % 400 === 0
    ? "Leap Year"
    : "Not leap year";
};
console.log(isLeapYear(2000));
