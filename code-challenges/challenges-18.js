'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence

// Ex:
// Input: "You can't handle the truth!"
// Output: 6

// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
        let string = str.replace(/[^a-zA-Z ]/g, "");
        const words = string.split(" ");
        const midIndex = Math.floor(words.length / 2);
        const midWord = words[midIndex];

        return midWord.length;
      };
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters

// Ex:
// Input: "dad", "add"
// Output: true

// Input: "dad", "aadd"
// Output: false

// Input: "table", "label"
// Output: false

// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
        let str1F = str1.replace(/[^a-zA-Z]/g, "").toLowerCase();
        let str2F = str2.replace(/[^a-zA-Z]/g, "").toLowerCase();
      
        if (str1F.length !== str2F.length) {
          return false;
        }
      
        const wArr1 = str1F.split("").sort();
        const wArr2 = str2F.split("").sort();
      
        for (let i = 0; i < wArr1.length; i++) {
          if (wArr1[i] !== wArr2[i]) {
            return false;
          }
        }
      
        return true;
      };
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };