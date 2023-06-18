function promptUserForName() {
  const WELCOME_MESSAGE = "Welcome to age guessers";
  let userName = prompt(WELCOME_MESSAGE);

  while (!userName) {
    userName = prompt(WELCOME_MESSAGE);
  }

  return userName;
}

const userName = promptUserForName();

alert(
  `hey ${userName} lets play a game, i have some powers let me guess ur age`
);

let lowerAgeBoundary = 1;
let upperAgeBoundary = 122;
let didGuessCorrectly = false;

// MAIN LOOP
while (didGuessCorrectly === false) {
  let guess = Math.floor((lowerAgeBoundary + upperAgeBoundary) / 2);
  let userResponseToGuess = null;

  while (userResponseToGuess !== "y" && userResponseToGuess !== "n") {
    userResponseToGuess = prompt(
      `is your age ${guess} ? Please enter y for yes and n for no`
    );
  }

  didGuessCorrectly = userResponseToGuess === "y";

  if (didGuessCorrectly === false) {
    let userResponseToOlderYounger = null;

    while (
      userResponseToOlderYounger !== "1" &&
      userResponseToOlderYounger !== "2"
    ) {
      userResponseToOlderYounger = prompt(
        `Are you older or younger than ${guess}? enter 1 for older or 2 for younger`
      );
    }

    if (userResponseToOlderYounger === "1") {
      lowerAgeBoundary = guess + 1;
    } else {
      upperAgeBoundary = guess - 1;
    }
  }
}

alert("please refresh page to play again");
