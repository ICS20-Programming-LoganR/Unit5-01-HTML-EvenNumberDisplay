//created on May 2022
//created by Logan Rodriguez

"use strict"

function answer () {
  //variables
  let numbers = ""

  let max = parseInt(document.getElementById('max').value) - 1
  let min = parseInt(document.getElementById('min').value) + 1

  //while loop
  while (min <= max){
    numbers = numbers + min + "<br>"
    //increment the numbers
    min = min + 1
  }

  //display the numbers
  document.getElementById('display-results').innerHTML = numbers
}