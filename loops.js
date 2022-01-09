// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 6; i++) {
    myArray.push(i)
}

//push odd number 1-9

// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 10; i += 2) {
    myArray.push(i)
}

//Push the odd numbers from 9 through 1 to myArray using a for loop.
// Setup
const myArray = [];

// Only change code below this line
for (let i = 9; i > 0; i -=2) {
    myArray.push(i)
}
//Declare and initialize a variable total to 0.
//Use a for loop to add the value of each element of the myArr array to total.
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i]
}

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for ( let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]
            
        }
    }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

  //change while to do..while

  // Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 10);