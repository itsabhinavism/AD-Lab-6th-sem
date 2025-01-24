
const outputOne = () => console.log("One");
const outputTwo = () => console.log("Two");

const outputThree = () => {
  console.log("Three");
  outputOne();
  outputTwo();
};

const outputFour = () => {
  console.log("Four");
  setTimeout(() => {
    outputThree();
  }, 0);
};

// Call the fourth function
outputFour();