/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

export function max(a, b){
  if (a > b) {
    return a;
  }
  else {
    return b;
  }
}

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

export function maxOfThree(a, b, c){
  if (a > b && a > c) {
    return a;
  }
  else if (b > a && b > c) {
    return b;
  }
  else {
    return c;
  }
}

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

export function isVowel(char){
  var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

  if (vowels.indexOf(char) > -1) {
    return true;
  }
  else {
    return false;
  }
}

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

export function rovarspraket(input) {
  // var newInput = input.split("");
  var newInput = "";

  if (!isNaN(input)){
    return String(input);
  }

  for (var i = 0; i < input.length; i++) {
    newInput += input[i];
    if (!(isVowel(input[i]))) {
      newInput += "o" + input[i];
    }
  }

  return newInput;
}

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

export function reverse(str){
  var newString = "";
  for (var i = str.length - 1; i > -1; i--) {
      newString += str[i];
  }
  return newString;
}

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

export function findLongestWord(sentence){
  var counter = "";
  var longest = "";
  //count word
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " " && sentence[i] !== "\'") {
      counter += sentence[i];
    }

    if (counter.length > longest.length) {
        longest = counter;
    }

    if (sentence[i] === " "){
      counter = "";
    }
  }

  return longest;
}

/**
 * Part 6
 *
 * Write a function isPalindrome() that takes
 * a string and returns true if it's a palindrome
 * and false if it isn't.
 */

 export function isPalindrome(word) {
  if (!isNaN(word)) {
    return false;
  }
  else {
    var palli = reverse(word);
  }

  if (palli === word) {
    return true;
  }
  else {
    return false;
  }
 }

export function min (a, b) {
  //Not really that necessary.  Good precaution.
  if (isNaN(a) && isNaN(b)) {
    return NaN;
  }

  if (isNaN(a)) {
    return b;
  }

  if (isNaN(b)) {
    return a;
  }

  if (a > b) {
    return b;
  }
  else {
    return a;
  }
}
