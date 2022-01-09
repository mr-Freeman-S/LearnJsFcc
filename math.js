function randomWholeNum() {

    // Only change code below this line
  
    return Math.floor((Math.random() * 10));
  }

// random whole number beetwin myMin and myMax
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
  }