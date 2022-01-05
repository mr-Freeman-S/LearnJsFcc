function reusableFunction() {
    console.log("Hi World");
}
reusableFunction()

// funcrion with two parameters or arguments
function functionWithArgs(numb1, numb2) {
    console.log(numb1 + numb2);
}
functionWithArgs(2, 1)

// function with return
function timesFive(arg) {
    return (arg * 5)
}

// function without return
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
    sum += 5
}

// Only change code above this line

addThree();
addFive();