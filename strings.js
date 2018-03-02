"use strict";
console.log("hello");
var buttonPress = $('#buttonPress');
var inputFeild = $('#my-feild');
var myString = inputFeild.value;

function reversal() {
console.log(inputFeild.value);

}

function alphabits() {
console.log("myString", myString);
}

function palindrome() {

}

function runAll() {
var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);
}

function letterOnly(event){
        var key = event.keyCode;
        return ((key >= 65 && key <= 90) || key == 8);
      };

buttonPress.addEventListener("click",{reversal, alphabits, palindrome});