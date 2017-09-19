console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement('section');
  for(var i = 0, len = lands.length; i < len; i++){
  // add each land  
  var land = document.createElement('article');
    // each land is an article tag, make them H1, append 
land.innerHTML = '<h1>' + lands[i] + '</h1>';
      middleEarth.appendChild(land);
    }
  //append middleEarth to actual body
body.appendChild(middleEarth);
}

makeMiddleEarth();

// select all options, but make sure to EXPLICITLY SAY WHICH YOU WANT
var theShire = body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2];


// Part 2

function makeHobbits() {
  // display UL list of hobbits
    var hobbitList = document.createElement('ul');
  for(var i = 0, len = hobbits.length; i < len; i++){
  // give each hobbit a class of hobbit
    var hobbit = document.createElement('li');
    hobbit.className = 'hobbit';
  //  create textNode
    var textNode = document.createTextNode(hobbits[i]);
  // appendChild
    hobbit.appendChild(textNode);
    hobbitList.appendChild(hobbit);
  }
  theShire.appendChild(hobbitList);
}

  makeHobbits();
  var frodo = body.querySelectorAll('li')[0];


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute('class', 'magic-imbued-jewelry');
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener('click', nazgulScreech);
  // add the ring as a child of Frodo
  frodo.appendChild(theRing);
}
  keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement('aside');
  for(var i = 0, len = buddies.length; i < len; i++){
    // attach an unordered list of the 'buddies' in the aside
    var buddy = document.createElement('li');
    buddy.textContent = buddies[i];
    buddyList.appendChild(buddy);
  }
  // insert your aside as a child element of rivendell
   aside.appendChild(buddyList);
  rivendell.appendChild(aside);
}
  makeBuddies();

  var strider = rivendell.querySelectorAll('li')[3];

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent = 'Aragon';
}

  beautifulStranger();

// Part 6

var hobbitsMove = shire.querySelector('ul');

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
rivendell.appendChild(hobbitsMove);
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}