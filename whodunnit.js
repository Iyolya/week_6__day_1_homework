// ### MVP

// #### Episode 1

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);   // Miss Scarlet; global variable 'scenario' being accessed inside function scope, it's OK




// #### Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}


const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();  // ERROR, attempt to change const variable 'murderer' NOT OK
const verdict = declareMurderer();
console.log(verdict); /* Professor Plum; 'murderer' variable references the global variable, 
not the local variable inside 'changeMurderer' */



// #### Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict); // Mrs. Peacock

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict); // Professor Plum;



// #### Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard'; 
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects(); 
console.log(suspects); // The suspects are Miss Scarlet, Professor Plum, Mrs. Peacock.




// #### Episode 5

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}                                       

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver'); /* returns weapon: 'Revolver'; we can change the values 
of a const variable in case the values are part of an object.*/
const verdict = declareWeapon();
console.log(verdict);  // The weapon is the Revolver 




// #### Episode 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);  /* Mrs. White; when the function 'changeMurderer' 
being called, the 'murderer' first gonna be reassigned to 'Mr. Green', 
and then to 'Mrs. White' thanks to the nested function  'plotTwist'*/




// #### Episode 7

let murderer = 'Professor Plum';

const changeMurderer = function() {   
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard'; 

    const unexpectedOutcome = function() { 
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();  
  }

  plotTwist();   
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer(); 
const verdict = declareMurderer();
console.log(verdict); /* 6. The murderer is 'Mr. Green' because on line 131 'murderer'
being declared globally due to having no keyword like let" */




// #### Episode 8


const scenario = {
  murderer: 'Mrs. Peacock', //'Mrs. Peacock' -> Colonel Mustard' -> 
  room: 'Conservatory', // 'Dining Room'
  weapon: 'Lead Pipe'   // 'Candle Stick'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict); // Candle Stick'




// #### Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);  /* 'Professor Plum'; the attempt of reassigning the variable 'murderer' 
doesn't leave the scope of the if statement, so the value stays the original


// ### Extensions

// Make up your own episode!
