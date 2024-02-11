
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Color Values
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var backrgoundcolor = "#313131"
var defaultcolor = "#ffffff"
var incorrectcolor = "#E03933"
var selectedcolor = "#f3c83f"
var correctcolor = "#5DC904"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sounds
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// sound for buttons
var clickSound = new Audio("sounds/click.wav");

// sound for when score increases
var correctSound = new Audio("sounds/ding.wav");

// sound for new high score
var highscoreSound = new Audio("sounds/newhighscore.wav");

// sound for when input is wront
var wrongSound = new Audio("sounds/wrong.wav");

// game over sound
var gameoverSound = new Audio("sounds/gameover.wav");

// gets all buttons
var buttons = document.querySelectorAll("button");

// iterates through the number of buttons
for (var i = 0; i < buttons.length; i++) {
  // for button in iteration, when it is clicked it plays the sound as long as game isn't muted
  buttons[i].addEventListener("click", function() {
    // play the click sound
    clickSound.play();
    
  });
}

// function to play a sound when called
function playSound(sound) {
  // only plays when mute button is checked
  if (!musicCheckbox.checked) {
    sound.play();
  }
}

// sound volume, changed base on what is called
function soundVolume(level) {
  // sets volumes of all sounds to called level
  clickSound.volume = level
  correctSound.volume = level
  highscoreSound.volume = level
  wrongSound.volume = level
  gameoverSound.volume = level
}


// incorrect sound (misinput)

// correct sound

// game over sound

// new high score sound

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
// Layout functionality of HTML elements
// 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #region
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Difficulty Button functionality
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Button
var difficultyButton = document.querySelector("#difficulty");

// variables for functionality
var difficulties = ["3 Letters", "4 Letters", "5 Letters"];
var currentDifficultyIndex = 2;

// Cycling functyion
function difficultyCycle() {
  // increases the index by one and finds the mod of array  (n % 3)
  currentDifficultyIndex = (currentDifficultyIndex + 1) % difficulties.length;
  // sets the button text to next element in array
  difficultyButton.textContent = difficulties[currentDifficultyIndex];
}

// calls cycling function for when difficulty button is clicked
difficultyButton.addEventListener("click", difficultyCycle);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Music Check Box functionality
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// checkbox element
var musicCheckbox = document.querySelector('#music input[type="checkbox"]');

// image for checkbox
var musicImage = document.querySelector('#music-image');

// toggles sound
function toggleSound() {
  // If checked it mutes sound and shows muted image, 
  // if unchecked it enables sound and shows unmuted image
  if (musicCheckbox.checked) {
    musicImage.src = 'Rising UpWords Art/muted.png';
    soundVolume(0);
  } else {
    musicImage.src = 'Rising UpWords Art/unmuted.png';
    soundVolume(1);
  }
}

// Event listener for checkbox to toggleSound function everytime its checked
document.querySelector('#music input[type="checkbox"]').addEventListener('change', toggleSound);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Multiplayer button functionality
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Multiplayer button
var multiplayerButton = document.querySelector('#multiplayer');

// Toggles text for button
function toggleButtonText() {
  // If the text is set to singleplayer then it sets it to multiplayer
  // if its anything else it goes back to singleplayer
  if (multiplayerButton.textContent == 'Singleplayer') {
    multiplayerButton.textContent = 'Multiplayer';
  } else {
    multiplayerButton.textContent = 'Singleplayer';
  }
}

// event listener to call the function when multiplayer button is clicked
multiplayerButton.addEventListener('click', toggleButtonText);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Submit button
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// button
var highscoreSubmitButton = document.getElementById("submitbutton");

// text input 
var usernameInput = document.getElementById("usernameInput");

// label
var usernameInputLabel = document.getElementById("usernameInputLabel");

// submit function
function submitButton() {
  

  if (usernameInput.value.trim().length > 0) {
    toggleMenuScreen();
    insertScore(score);
  } else if (usernameInput.value.trim().length == 0) {
    usernameInput.style.transition = "all 0.5s"
    usernameInput.style.transform = "scale(1.1)";
    usernameInput.style.borderColor = selectedcolor;
    usernameInput.style.backgroundColor = selectedcolor;

    setTimeout(function() {
      usernameInput.style.transform = "scale(1)";
      usernameInput.style.borderColor = defaultcolor;
      usernameInput.style.backgroundColor = "transparent";
    }, 500);
  }
}




highscoreSubmitButton.addEventListener("click", submitButton);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NAVIGATION
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Buttons
var playButton = document.querySelector("#play-button");
var leaderboardButton = document.querySelector("#leaderboard-button");
var menuButtons = document.querySelectorAll(".menu-button");
var helpButton = document.querySelector("#help-button");
var backButton = document.querySelector("#back");

// Screen divs
var playDiv = document.querySelector(".play");
var leaderboardDiv = document.querySelector(".leaderboard");
var menuDiv = document.querySelector(".menu");
var highscoreDiv = document.querySelector(".highscore");
var howtoplayDiv = document.querySelector(".howtoplay");

// Logo image
var logo = document.querySelector('.menu #logo')

// Default position and style
show(menuDiv, 'moveUp');
hide(leaderboardDiv, 'moveDown');
hide(playDiv, 'moveDown');
hide(highscoreDiv, 'moveDown');
hide(howtoplayDiv, "moveDown");


// hides whatever is called
function hide(element, animationName) {
  // plays the animation 
  element.style.visibility = 'hidden';
  element.style.animation = `${animationName} 1.4s`;
  // after the animation is over sets the div to hidden adn removes the animation
  element.addEventListener('animationend', function() {
    element.style.animation = '';
    element.style.visibility = 'hidden'
    
  });
}
// show whatever is called
function show(element, animationName) {
  // shows the div then plays the animation
  element.style.visibility = 'visible';
  element.style.animation = `${animationName} 1.4s`;
  // removes animation and keeps div visibile
  element.addEventListener('animationend', function() {
    element.style.animation = '';
    element.style.visibility = 'visible';
  });
}

// toggles play screen
function togglePlayScreen() {
  // tests to see if difficulty has been selected
  if (difficultyButton.textContent != "Select Difficulty") {
    // transitions appriate divs
    hide(menuDiv, 'moveDown');
    hide(logo, 'moveDown');
    show(playDiv, 'moveUp');
    // if difficulty isn't selected then it changes style of button to get user's attention
  } else {
    // transition style properties
    difficultyButton.style.transition = "all .5s";
    difficultyButton.style.fontSize = "6.5vh";
    difficultyButton.style.color = selectedcolor;
    // resets button to normal after displaying 
    setTimeout(function() {
      difficultyButton.style.fontSize = "5vh";
      difficultyButton.style.color = "";
    }, 500);
  }
  
}
// toggles leaderboard screen
function toggleLeaderboardScreen() {
  // calls appropriate transitions for the divs
  hide(menuDiv, 'moveDown');
  hide(logo, 'moveDown');
  show(leaderboardDiv, 'moveUp');
}
// toggles menu screen
function toggleMenuScreen() {
  // calls for appropriate transitions for divs
  hide(playDiv, 'moveDown');
  hide(leaderboardDiv, 'moveDown');
  hide(highscoreDiv, 'moveDown');
    // shows both the menu div and the game logo
  show(menuDiv, 'moveUp');
  show(logo, 'moveUp');
}

// maps escape key to return to the main menu
function escapeMenuScreen(event) {
  // plays click sound (i just think it sounds better)
  playSound(clickSound);
  // check if howtoplayDiv is visible
  if (howtoplayDiv.style.visibility == "visible") {
    // toggle howtoplayDiv when escape is pressed
    if (event.key == "Escape" || event.key == "Esc") {
      toggleHowtoPlay();
    }
  } else {
    // if playDiv or leaderboardDiv is visible
    if (playDiv.style.visibility == "visible" || leaderboardDiv.style.visibility == 'visible') {
      // toggle menu screen
      if (event.key == "Escape" || event.key == "Esc") {
        toggleMenuScreen();
      }
    }
  }
}


// function to toggle how to play
function toggleHowtoPlay() {
  // if it is visible collapse
  if (howtoplayDiv.style.visibility == "visible") {
    hide(howtoplayDiv, "moveDown");
  } else {
    // if its not pull it up
    show(howtoplayDiv, "moveUp");
  }
}

// Event listeners for all navigational buttons
playButton.addEventListener("click", togglePlayScreen);
leaderboardButton.addEventListener("click", toggleLeaderboardScreen);

menuButtons.forEach(button => {
  button.addEventListener('click', toggleMenuScreen);
})

helpButton.addEventListener("click", toggleHowtoPlay);
backButton.addEventListener("click", toggleHowtoPlay);



// calls function when a key (escape) is pressed
document.addEventListener('keydown',escapeMenuScreen);

// #endregion

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
// Game functionality and logic
// 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #region
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Game Variables
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Variables
// #region
// Gets id of html elements and sets it to a variable
var scoreLabel = document.querySelector("#score");

var highscoreLabel = document.querySelector("#highscoreLabel");

var attemptsLabel = document.querySelector("#attempts");

var messageLabel = document.querySelector("#message");

var goalWordLabel = document.querySelector("#goalword");

var userInputBox = document.querySelector("#userinput");

var oldInputLabelI = document.querySelector("#old1");
var oldInputLabelII = document.querySelector("#old2");
var oldInputLabelIII = document.querySelector("#old3");
var oldInputLabelIV = document.querySelector("#old4");


// Variables used for gameplay mechanics
var dictionaryArray = [];
var difficulty = 0;

var startWord = '';
var goalWord = '';  

var userInput = userInputBox.value;
var lastWord = oldInputLabelI.value;

var scoreMultiplier = 0;
var score = 0;
var firstplayerscore = -1;

var attempts = 5;

// #endregion

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// recallable game functions
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// resets variables to clean slate 
function reset() {
  // resets userinput box
  userInputBox.value = "";
  // reset labels 2-4
  oldInputLabelII.textContent = "";
  oldInputLabelIII.textContent = "";
  oldInputLabelIV.textContent = "";
  // reset attempts
  attemptsLabel.textContent = "X X X X X ";
  attempts = 5;
  // reset scores
  scoreLabel.textContent = "0";
  score = 0;
  scoreMultiplier = 0;

  // reset message label
  messageLabel.textContent = "";
}

// multiplayer setting
function multiplayer() {
  // Returns true if Multiplayer is enabled
  // and false if Singleplayer is enabled
  if (multiplayerButton.textContent == 'Singleplayer') {
      return false;
    } else {
      return true;
    }
}

// difficulty setting
function setDifficulty() {
    // difficulty button variables
    var difficultyButton = document.querySelector("#difficulty");

    // sets difficulty variable to text value of the button
    // (3 Letters, 4 Letters, 5 Letters)
    var difficulty = difficultyButton.textContent;
  
    // gets the value down to just the number (3,4,5) and turns it into an integer
    difficulty = parseInt(difficulty.replace(" Letters", ""));
  
    // limits userinput box to value of difficulty 
    // this is for stopping users from inputting words larger than input box
    userInputBox.maxLength = difficulty;
  
    // For each difficulty setting, calls the corresponding function for the dictionaries
    // also increases the score multiplier to weight longer words
    if (difficulty == 3) {
      threeLetterDictionary();
      scoreMultiplier = 1;
    } else if (difficulty == 4) {
      fourLetterDictionary();
      scoreMultiplier = 2;
    } else if (difficulty == 5) {
      fiveLetterDictionary();
      scoreMultiplier = 3;
    }

    // Returns difficulty level in console, for debugging
    return difficulty;
}
  
// Generates random words
function randomWordGen() {
  // set start word variable to a random index value in the array
  // which sets the variable to a random word
  startWord = dictionaryArray[Math.floor(Math.random() * dictionaryArray.length)];
  // sets the content of last input to the start word
  oldInputLabelI.textContent = startWord

  // sets goal word variable to random word in dictionary array
  goalWord = dictionaryArray[Math.floor(Math.random() * dictionaryArray.length)];
  // sets the label for goalword to the goalword
  goalWordLabel.textContent = goalWord  

  // logs starting and goal words in console
  console.log(startWord , '>', goalWord);


}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MESSAGES FUNCTIONS 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// congratulatory messages
function positiveMessage() {
  // list of messages
  var messagesArray = [
    "Alphabetical Ace",
    "Diction-master",
    "English Expert",
    "Grammar-lific", 
    "Jargon Jammer",
    "Lingo Bingo",
    "Noun-derful!",
    "Perfect phrases", 
    "Rhyme and shine",
    "Syllab-rific", 
    "Terrific terms",
    "Ultimate Usage",
    "Vocab-tastic",
    "Word-alicous",
  ]
  
  // sets message to a random message in the array
  var message = messagesArray[Math.floor(Math.random() * messagesArray.length)];

  // sets goalword label to the message and then dissappears
  goalWordLabel.textContent = message
  goalWordLabel.style.color = "#0052FF"; 

  // after showing for .75 seconds, it resets to goal word
  setTimeout(function() {
    goalWordLabel.textContent = goalWord;
    goalWordLabel.style.color ="#acacac";
  }, 1000); 
  
}

// incrroect messages

// set message to...
function setMessage(phrase, color) {
  // shows message and displays accordingly
  messageLabel.textContent = phrase;
  messageLabel.style.color = color; 
  messageLabel.style.opacity = 1
  messageLabel.style.fontSize = "6.5vh"; 

  // after showing for 1.5 seconds, 
  setTimeout(function() {
    messageLabel.style.fontSize = "5vh";
  }, 1000); 
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Dictionary Functions
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #region

// sets dictionary array to a list of 5 letter words
//  NOTE : 565 words total (564 for last in an array)
function threeLetterDictionary() {
  dictionaryArray = [
    'and', 'abo', 'abs', 'aby', 'ace', 'act', 'add', 'ado', 'ads', 'aft', 'age', 'ago', 'aid', 'ail', 'aim', 'air', 'ala', 'alb', 'ale', 'all',
    'alp', 'alt', 'ama', 'ami', 'amp', 'amu', 'ane', 'ant', 'any', 'ape', 'app', 'apt', 'arc', 'are', 'ark', 'arm', 'art', 'ash', 'ask',
    'ate', 'auk', 'avo', 'awe', 'awl', 'awn', 'axe', 'aye', 'ays', 'bad', 'bag', 'bam', 'ban', 'bap', 'bar', 'bat', 'bay', 'bed', 'bee', 'beg',
    'ben', 'bet', 'bib', 'bid', 'big', 'bin', 'bio', 'bit', 'boa', 'bob', 'bod', 'bog', 'boo', 'bop', 'bot', 'bow', 'box', 'boy', 'bra', 'bro',
    'bub', 'bud', 'bug', 'bum', 'bun', 'bur', 'bus', 'but', 'buy', 'bye', 'cab', 'cad', 'cam', 'can', 'cap', 'car', 'cat', 'caw', 'cis', 'cob',
    'cod', 'cog', 'con', 'coo', 'cop', 'cot', 'cow', 'cox', 'coy', 'cry', 'cub', 'cue', 'cup', 'cut', 'dab', 'dad', 'dam', 'dap', 'day',
    'den', 'dew', 'dib', 'did', 'die', 'dig', 'dim', 'dip', 'doe', 'dog', 'dot', 'dry', 'dub', 'dud', 'due', 'dug', 'duh', 'duo', 'dye', 'ear',
    'eat', 'eel', 'egg', 'ego', 'elf', 'elk', 'elm', 'emu', 'end', 'eon', 'era', 'ere', 'eve', 'ewe', 'eye', 'fab', 'fad', 'fan', 'far',
    'fat', 'fax', 'fay', 'fed', 'fee', 'fen', 'fet', 'few', 'fib', 'fid', 'fie', 'fig', 'fil', 'fin', 'fir', 'fit', 'fix', 'fiz', 'flu', 'fly',
    'fob', 'foe', 'fog', 'for', 'fou', 'fox', 'fry', 'fud', 'fun', 'fur', 'gab', 'gad', 'gag', 'gal', 'gap', 'gar', 'gas', 'gay', 'gee', 'gel',
    'gem', 'get', 'gib', 'gid', 'gig', 'gin', 'gob', 'god', 'goo', 'got', 'gum', 'gun', 'gut', 'guy', 'gym', 'had', 'hag', 'ham', 'has', 'hat',
    'hay', 'hem', 'hen', 'her', 'hew', 'hex', 'hey', 'hid', 'him', 'hip', 'his', 'hit', 'hob', 'hoe', 'hog', 'hop', 'hot', 'how', 'hoy', 'hub',
    'hue', 'hug', 'hum', 'hut', 'ice', 'ick', 'icy', 'ilk', 'ill', 'imp', 'ink', 'inn', 'ion', 'ire', 'ivy', 'jab', 'jag', 'jam', 'jar', 'jaw',
    'jay', 'jet', 'jew', 'jib', 'jig', 'job', 'jog', 'jot', 'joy', 'jug', 'jut', 'keg', 'key', 'kid', 'kin', 'kip', 'kit', 'lab', 'lad', 'lag',
    'lam', 'lap', 'law', 'lay', 'led', 'lee', 'leg', 'lei', 'let', 'leu', 'lev', 'lex', 'ley', 'lid', 'lie', 'lip', 'lit', 'lob', 'log', 'loo',
    'lop', 'lot', 'low', 'lug', 'lye', 'mac', 'mad', 'mag', 'man', 'map', 'mat', 'maw', 'max', 'may', 'meg', 'men', 'met', 'mew', 'mid', 'mix',
    'mob', 'mod', 'mog', 'mom', 'moo', 'mop', 'mot', 'mow', 'mud', 'mug', 'mum', 'nab', 'nag', 'nah', 'nan', 'nap', 'naw', 'nay', 'neb', 'nee',
    'net', 'new', 'nib', 'nil', 'nim', 'nip', 'nit', 'nob', 'nod', 'nog', 'nor', 'not', 'now', 'nub', 'nun', 'nut', 'oaf', 'oak', 'oar', 'oat',
    'odd', 'ode', 'off', 'oil', 'old', 'one', 'opt', 'orb', 'orc', 'ore', 'ort', 'our', 'out', 'owe', 'owl', 'own', 'pad', 'pal', 'pan', 'pap',
    'par', 'pat', 'paw', 'pay', 'pea', 'pee', 'peg', 'pen', 'per', 'pet', 'pew', 'pic', 'pie', 'pig', 'pin', 'pip', 'pit', 'pix', 'ply', 'pod',
    'pom', 'poo', 'pop', 'pot', 'pow', 'pox', 'pro', 'pry', 'pub', 'pug', 'pun', 'pup', 'pus', 'put', 'rad', 'rag', 'ram', 'ran', 'rap', 'rat',
    'raw', 'ray', 'red', 'rep', 'rev', 'rex', 'rib', 'rid', 'rig', 'rim', 'rip', 'rob', 'rod', 'rot', 'row', 'rub', 'rue', 'rug', 'rum', 'run',
    'rut', 'rye', 'sac', 'sad', 'sag', 'sap', 'sat', 'saw', 'sax', 'say', 'sea', 'see', 'set', 'sew', 'she', 'shy', 'sib', 'sim', 'sin',
    'sip', 'sir', 'sit', 'six', 'ski', 'sky', 'sly', 'sob', 'sod', 'son', 'sop', 'sow', 'soy', 'spa', 'spy', 'sty', 'sub', 'sue', 'sum', 'sun',
    'syn', 'tab', 'tad', 'tag', 'tan', 'tap', 'tar', 'tat', 'taw', 'tax', 'tea', 'tee', 'ten', 'the', 'thy', 'tic', 'tie', 'tin', 'tip', 
    'toe', 'ton', 'too', 'top', 'tot', 'tow', 'toy', 'try', 'tub', 'tug', 'tux', 'two', 'tye', 'ump', 'wab', 'wad', 'wag', 'war', 'was', 'wat',
    'wax', 'way', 'web', 'wet', 'who', 'why', 'wig', 'win', 'wit', 'woe', 'won', 'woo', 'wow', 'wry', 'yah', 'yak', 'yam', 'yap', 'yaw', 'yay',
    'yen', 'yep', 'yes', 'yet', 'yew', 'yin', 'yip', 'yon', 'you', 'yow', 'yum', 'yup', 'zag', 'zap', 'zig', 'zip', 'zit', 'zoo', 'nat'
];

}

// sets dictionary array to a list of 5 letter words
//  NOTE : 1521 words total (1520 for last in an array)
function fourLetterDictionary() {
  dictionaryArray = [
    'aced', 'aces', 'acid', 'acts', 'adds', 'aero', 'afro', 'aged', 'ages', 'ahem', 'aide', 'aids', 'ails', 'aims', 'airs',
    'airy', 'akin', 'alap', 'alas', 'alay', 'alit', 'alky', 'alls', 'ally', 'aloe', 'alow', 'alps', 'also', 'alto', 'alts',
    'alum', 'amen', 'amid', 'amps', 'anew', 'ante', 'ants', 'apes', 'apex', 'apps', 'apts', 'arch', 'arcs', 'area', 'aria',
    'arid', 'aril', 'arks', 'arms', 'army', 'arow', 'arts', 'arty', 'asks', 'atom', 'atop', 'aunt', 'auto', 'avid', 'avow',
    'away', 'awes', 'awls', 'awns', 'awry', 'axed', 'axel', 'axes', 'axis', 'ayes', 'babe', 'baby', 'back', 'bade', 'baft',
    'bags', 'bail', 'bait', 'bake', 'bald', 'bale', 'balk', 'ball', 'balm', 'bams', 'band', 'bane', 'bang', 'bank', 'bans',
    'baps', 'barb', 'bard', 'bare', 'barf', 'bark', 'barn', 'barp', 'bars', 'base', 'bash', 'bask', 'bass', 'bast', 'bath',
    'bats', 'bauk', 'baur', 'bawl', 'bawn', 'bawr', 'bays', 'bead', 'beak', 'beam', 'bean', 'bear', 'beat', 'beau', 'beef',
    'been', 'beep', 'beer', 'beet', 'begs', 'bell', 'bels', 'belt', 'bend', 'bene', 'beni', 'bent', 'berg', 'berk', 'berm',
    'best', 'beta', 'beth', 'bets', 'beys', 'bias', 'bibs', 'bids', 'bien', 'bier', 'bigg', 'bigs', 'bike', 'bile', 'bill',
    'bind', 'bine', 'bing', 'bink', 'bins', 'bios', 'bird', 'bish', 'bisk', 'bist', 'bite', 'bits', 'blew', 'blip', 'blob',
    'bloc', 'blot', 'blow', 'blub', 'blue', 'blur', 'boar', 'boat', 'bobs', 'body', 'boil', 'bold', 'bole', 'bolt', 'bomb',
    'bona', 'bond', 'bone', 'bong', 'bonk', 'bony', 'boob', 'book', 'boom', 'boon', 'boot', 'bops', 'bore', 'bosh', 'bosk',
    'boss', 'both', 'bots', 'bows', 'boxy', 'boys', 'brad', 'brag', 'bran', 'bras', 'brat', 'bray', 'bree', 'brew', 'brig',
    'bros', 'brow', 'buck', 'buds', 'buff', 'bugs', 'bulb', 'bulk', 'bull', 'bump', 'bums', 'bung', 'bunk', 'buns', 'bunt',
    'burk', 'burn', 'burp', 'burs', 'bury', 'bush', 'busk', 'bust', 'busy', 'bute', 'buts', 'butt', 'byte', 'cabs', 'cade',
    'cads', 'cafe', 'cage', 'cain', 'cake', 'calf', 'calk', 'call', 'calm', 'came', 'camo', 'camp', 'cane', 'cans', 'cant',
    'cany', 'cape', 'caps', 'carb', 'card', 'care', 'carl', 'carn', 'cars', 'cart', 'casa', 'case', 'cash', 'cask', 'cast',
    'cats', 'cauk', 'cave', 'caws', 'cell', 'celt', 'cent', 'cero', 'cert', 'chad', 'chap', 'char', 'chat', 'chef', 'chew',
    'chic', 'choc', 'chop', 'chow', 'cids', 'cigs', 'cine', 'cion', 'cist', 'cite', 'city', 'clam', 'clan', 'clap', 'claw',
    'clay', 'clef', 'clip', 'clod', 'clog', 'clop', 'clot', 'club', 'clue', 'coal', 'coat', 'cobb', 'cobs', 'coca', 'cock',
    'coco', 'code', 'cods', 'coil', 'coin', 'coit', 'coke', 'cola', 'cold', 'cole', 'colt', 'coly', 'coma', 'comb', 'come',
    'comm', 'comp', 'coms', 'cone', 'conk', 'cons', 'cook', 'cool', 'coom', 'coon', 'coop', 'coot', 'cope', 'cops', 'copy',
    'cord', 'core', 'cork', 'corn', 'cory', 'cost', 'cots', 'cove', 'cowl', 'cows', 'crab', 'crag', 'cram', 'crap', 'craw',
    'cray', 'crew', 'crib', 'crit', 'croc', 'crop', 'crow', 'cube', 'cubs', 'cues', 'cuff', 'cull', 'cult', 'cups', 'curb',
    'curd', 'cure', 'curl', 'curs', 'curt', 'cush', 'cusp', 'cuss', 'cute', 'cuts', 'cyan', 'dabs', 'dack', 'dads', 'daft',
    'dags', 'dale', 'dalt', 'dame', 'damp', 'dang', 'dank', 'darb', 'dare', 'darg', 'dark', 'darn', 'dart', 'dash', 'data',
    'date', 'davy', 'dawd', 'dawn', 'days', 'dead', 'deaf', 'deal', 'dean', 'dear', 'debt', 'deck', 'deed', 'deem', 'deen',
    'deep', 'deer', 'deet', 'deft', 'deli', 'dell', 'delt', 'demo', 'dent', 'deny', 'derm', 'desk', 'devs', 'dews', 'dewy',
    'dial', 'dice', 'dick', 'died', 'dies', 'diet', 'diff', 'dike', 'dill', 'dime', 'dine', 'ding', 'dink', 'dino', 'dips',
    'dire', 'dirk', 'dirt', 'disc', 'dish', 'disk', 'diss', 'diva', 'dive', 'divs', 'doat', 'dobs', 'dock', 'docs', 'does',
    'dogs', 'dojo', 'dole', 'doll', 'dolt', 'dome', 'done', 'dong', 'dool', 'doom', 'doon', 'door', 'dope', 'dops', 'dopy',
    'dore', 'dork', 'dorm', 'dorp', 'dorr', 'dory', 'dose', 'dote', 'doth', 'dots', 'dove', 'dowd', 'dowl', 'down', 'dows',
    'doxy', 'drab', 'drag', 'drat', 'draw', 'drew', 'drib', 'drip', 'drop', 'drow', 'drug', 'drum', 'drys', 'duad', 'dual',
    'dubs', 'duce', 'duck', 'duct', 'dude', 'duds', 'dued', 'duel', 'dues', 'duet', 'duff', 'dugs', 'duke', 'dule', 'dull',
    'duly', 'dumb', 'dump', 'dune', 'dung', 'dunk', 'duos', 'dupe', 'dups', 'dure', 'durn', 'durr', 'dusk', 'dust', 'duty',
    'dyed', 'dyer', 'dyes', 'dyne', 'each', 'eale', 'earl', 'earn', 'ears', 'ease', 'east', 'easy', 'eats', 'eaux', 'eave',
    'ecos', 'ecus', 'eddy', 'edge', 'edgy', 'eels', 'eery', 'efts', 'eger', 'eggs', 'eggy', 'egis', 'egma', 'egos', 'eiks',
    'elfs', 'elks', 'ells', 'elms', 'elmy', 'else', 'elts', 'emes', 'emeu', 'emma', 'emmy', 'emos', 'emus', 'emys', 'ends',
    'enes', 'enew', 'engs', 'eons', 'epos', 'eras', 'ered', 'eres', 'erev', 'ergo', 'ergs', 'erns', 'eros', 'errs', 'erst',
    'eses', 'esne', 'esse', 'ests', 'etas', 'etat', 'etch', 'eten', 'ethe', 'eths', 'even', 'ever', 'eves', 'evet', 'evoe',
    'evos', 'ewes', 'ewks', 'ewts', 'exec', 'exed', 'exes', 'eyas', 'eyed', 'eyen', 'eyer', 'eyes', 'eyne', 'eyre', 'faan',
    'faas', 'fabs', 'face', 'fact', 'fade', 'fads', 'fady', 'fahs', 'fail', 'fain', 'fair', 'faix', 'fake', 'fall', 'fame',
    'fand', 'fane', 'fang', 'fank', 'fano', 'fans', 'fard', 'fare', 'farl', 'farm', 'faro', 'fars', 'fart', 'fash', 'fast',
    'fate', 'fats', 'faun', 'faur', 'faut', 'faux', 'fava', 'fave', 'fawn', 'faws', 'fays', 'feal', 'fear', 'feat', 'feds',
    'feed', 'feel', 'feen', 'feer', 'fees', 'feet', 'fegs', 'feis', 'fell', 'felt', 'feme', 'fems', 'fend', 'feni', 'fens',
    'fent', 'fere', 'ferm', 'fern', 'fess', 'fest', 'feta', 'fete', 'fets', 'fett', 'feud', 'feys', 'fiar', 'fiat', 'fibs',
    'fice', 'fico', 'fido', 'fids', 'fief', 'fier', 'fife', 'fifi', 'figo', 'figs', 'fila', 'file', 'fill', 'film', 'filo',
    'fils', 'find', 'fine', 'fini', 'fink', 'fino', 'fins', 'fire', 'firm', 'firn', 'firs', 'fisc', 'fish', 'fisk', 'fist',
    'fits', 'fitt', 'five', 'flab', 'flag', 'flak', 'flam', 'flan', 'flap', 'flat', 'flaw', 'flax', 'flay', 'flea', 'fled',
    'flee', 'fleg', 'flew', 'flex', 'flic', 'flim', 'flip', 'flit', 'flix', 'floc', 'floe', 'flog', 'flop', 'flor', 'flow',
    'flub', 'flue', 'flus', 'flux', 'foal', 'foam', 'fobs', 'foes', 'fogs', 'fogy', 'foil', 'foin', 'fold', 'folk', 'fond',
    'fone', 'fons', 'font', 'food', 'fool', 'foot', 'fops', 'ford', 'fore', 'fork', 'form', 'fort', 'foss', 'foul', 'four',
    'fowl', 'foxy', 'foys', 'frat', 'fray', 'free', 'fret', 'frig', 'frog', 'from', 'fros', 'fubs', 'fuds', 'fuel', 'full',
    'fume', 'fums', 'fund', 'fung', 'funk', 'funs', 'furl', 'furr', 'furs', 'fury', 'fuse', 'fuss', 'gabs', 'gads', 'gaga',
    'gage', 'gags', 'gain', 'gait', 'gala', 'gale', 'gall', 'gals', 'gama', 'game', 'gams', 'gane', 'gang', 'gans', 'gant',
    'gape', 'gaps', 'garb', 'gare', 'gash', 'gasp', 'gast', 'gate', 'gave', 'gawd', 'gawk', 'geal', 'gear', 'geck', 'geds',
    'geek', 'geld', 'gels', 'gelt', 'gems', 'gena', 'gene', 'gens', 'gent', 'geos', 'germ', 'gert', 'gets', 'ghee', 'gibs',
    'gids', 'gied', 'gift', 'gigs', 'gild', 'gill', 'gilt', 'gimp', 'gins', 'gird', 'girl', 'girt', 'gist', 'gits', 'give',
    'glad', 'glam', 'glee', 'glen', 'glib', 'glim', 'glit', 'glob', 'glop', 'glow', 'glue', 'glum', 'gnar', 'gnat', 'gnaw',
    'goad', 'goal', 'goat', 'gobs', 'gods', 'goer', 'goes', 'gold', 'golf', 'gone', 'gong', 'gonk', 'good', 'goof', 'goon',
    'goop', 'gore', 'gorp', 'gosh', 'goth', 'gout', 'gown', 'grab', 'grad', 'gram', 'gran', 'gray', 'grew', 'grey', 'grid',
    'grim', 'grin', 'grip', 'grit', 'grog', 'grot', 'grow', 'grub', 'guar', 'gulf', 'gulp', 'gump', 'gunk', 'guns', 'gush',
    'gust', 'guts', 'guys', 'gyro', 'hack', 'hads', 'hags', 'hail', 'hair', 'hale', 'half', 'hall', 'halo', 'halt', 'hams',
    'hand', 'hang', 'hank', 'haps', 'hard', 'hare', 'hark', 'harm', 'harp', 'hart', 'hash', 'hast', 'hate', 'hath', 'hats',
    'haul', 'have', 'hawk', 'hays', 'head', 'heal', 'heap', 'hear', 'heat', 'heed', 'heel', 'heft', 'heir', 'held', 'helm',
    'help', 'hems', 'hens', 'herb', 'herd', 'here', 'hero', 'hers', 'hide', 'high', 'hike', 'hill', 'hims', 'hind', 'hins',
    'hint', 'hips', 'hire', 'hiss', 'hits', 'hive', 'hock', 'hogs', 'hold', 'hole', 'holt', 'holy', 'home', 'hong', 'honk',
    'hood', 'hoof', 'hook', 'hoop', 'hoot', 'hope', 'hops', 'horn', 'hose', 'hoss', 'host', 'hots', 'hour', 'howl', 'hubs',
    'huck', 'huff', 'huge', 'hugs', 'hula', 'hulk', 'hull', 'hums', 'hung', 'hunk', 'huns', 'hunt', 'hurl', 'hurt', 'hush',
    'husk', 'huts', 'hype', 'hypo', 'iced', 'ices', 'icky', 'idea', 'ides', 'ills', 'imps', 'inch', 'inks', 'inky', 'inns',
    'ions', 'iris', 'irks', 'itch', 'item', 'jabs', 'jack', 'jade', 'jags', 'jail', 'jake', 'jamb', 'jams', 'jane', 'jars',
    'java', 'jaws', 'jays', 'jean', 'jeep', 'jeer', 'jeff', 'jess', 'jest', 'jets', 'jibb', 'jibs', 'jiff', 'jigs', 'jill',
    'jilt', 'jimp', 'jinx', 'jive', 'jobs', 'jock', 'joes', 'joey', 'jogs', 'john', 'join', 'joke', 'jolt', 'josh', 'joss',
    'jots', 'jour', 'jowl', 'joys', 'judo', 'judy', 'jugs', 'juke', 'jump', 'junk', 'jury', 'just', 'jute', 'juts', 'kade',
    'kale', 'kane', 'kara', 'kava', 'keds', 'keel', 'keen', 'keep', 'kegs', 'kelp', 'kelt', 'kemp', 'kent', 'kept', 'keto',
    'keys', 'khan', 'kick', 'kids', 'kiln', 'kilo', 'kilt', 'kind', 'king', 'kink', 'kins', 'kirk', 'kiss', 'kite', 'kits',
    'knap', 'knee', 'knew', 'knit', 'knob', 'knot', 'know', 'konk', 'kook', 'kris', 'kyle', 'labs', 'lace', 'lack', 'lacy',
    'lads', 'lady', 'lags', 'laid', 'lain', 'lair', 'lake', 'lama', 'lamb', 'lame', 'lamp', 'land', 'lane', 'lank', 'laps',
    'lard', 'lark', 'lars', 'lash', 'lass', 'last', 'late', 'lath', 'laud', 'lava', 'lawn', 'lays', 'lead', 'leaf', 'leak',
    'lean', 'leap', 'lear', 'leed', 'leek', 'leer', 'lees', 'left', 'legs', 'leis', 'lend', 'leno', 'lens', 'lent', 'lept',
    'less', 'lest', 'lets', 'leud', 'liar', 'lice', 'lick', 'lids', 'lied', 'lief', 'lien', 'lier', 'lies', 'lieu', 'life',
    'lift', 'like', 'lilo', 'lily', 'lima', 'limb', 'lime', 'limo', 'limp', 'line', 'link', 'lint', 'lion', 'lipo', 'lips',
    'lire', 'lisp', 'list', 'lite', 'lits', 'live', 'load', 'loaf', 'loan', 'lobe', 'lobs', 'loca', 'loch', 'lock', 'loco',
    'loft', 'loge', 'logo', 'logs', 'loin', 'lone', 'long', 'loof', 'look', 'loom', 'loon', 'loop', 'loot', 'lord', 'lore',
    'lorn', 'lose', 'loss', 'lost', 'lots', 'loud', 'love', 'luau', 'luck', 'lude', 'luge', 'lugs', 'luke', 'lull', 'lulu',
    'lump', 'luna', 'lune', 'lung', 'lure', 'lurk', 'lush', 'lust', 'lute', 'luxe', 'lyme', 'lyre', 'mace', 'mach', 'mack',
    'magi', 'maid', 'mail', 'maim', 'main', 'make', 'male', 'mall', 'malt', 'mama', 'mane', 'mani', 'many', 'maps', 'marc',
    'mare', 'mark', 'mars', 'mart', 'mary', 'masa', 'mase', 'mash', 'mask', 'mass', 'mast', 'mate', 'math', 'mats', 'matt',
    'maud', 'maul', 'maxi', 'maya', 'mayo', 'mead', 'meal', 'mean', 'meat', 'meds', 'meek', 'meer', 'mega', 'mein', 'meld',
    'melt', 'meme', 'memo', 'mend', 'menu', 'mere', 'mesa', 'mesh', 'mess', 'meta', 'meth', 'mets', 'mice', 'mick', 'midi',
    'mids', 'mien', 'miff', 'mike', 'mild', 'mile', 'milk', 'mill', 'milo', 'mime', 'mina', 'mind', 'mine', 'mini', 'mink',
    'mint', 'minx', 'mire', 'mise', 'miso', 'miss', 'mist', 'mite', 'mitt', 'mobs', 'mock', 'mode', 'mods', 'mojo', 'mold',
    'mole', 'molt', 'moms', 'mona', 'monk', 'mono', 'mood', 'moon', 'moor', 'moot', 'mope', 'mops', 'mora', 'more', 'mosh',
    'moss', 'most', 'moth', 'mott', 'move', 'mows', 'much', 'muck', 'muff', 'mugs', 'mule', 'mull', 'mump', 'mums', 'mumu',
    'murk', 'muse', 'mush', 'musk', 'must', 'mute', 'mutt', 'myth', 'naan', 'nada', 'nags', 'nail', 'nala', 'name', 'nana',
    'napa', 'nape', 'naps', 'nard', 'navy', 'neal', 'near', 'neat', 'neck', 'need', 'neon', 'nerd', 'nest', 'nets', 'news',
    'newt', 'next', 'nibs', 'nice', 'nick', 'nine', 'nite', 'nits', 'noah', 'nobs', 'node', 'nods', 'nona', 'none', 'nook',
    'noon', 'nope', 'norm', 'nose', 'nosh', 'nosy', 'note', 'noun', 'nova', 'nubs', 'nuke', 'null', 'numb', 'nuns', 'nuts',
    'oaks', 'oars', 'oath', 'oats', 'odds', 'odes', 'oils', 'oily', 'oink', 'omen', 'ones', 'only', 'oops', 'open', 'opts',
    'opus', 'orbs', 'orca', 'orcs', 'ores', 'ouch', 'ours', 'oust', 'outs', 'oven', 'over', 'ower', 'owes', 'owls', 'owns',
    'oxen', 'oxes', 'pace', 'pack', 'pact', 'pads', 'page', 'paid', 'pail', 'pain', 'pair', 'pale', 'pall', 'palm', 'pals',
    'pane', 'pang', 'pans', 'pant', 'papa', 'pape', 'paps', 'para', 'pare', 'park', 'parr', 'pars', 'part', 'pass', 'past',
    'pate', 'path', 'pats', 'paul', 'pave', 'pawn', 'paws', 'pays', 'peak', 'pear', 'peas', 'peat', 'peck', 'pecs', 'peds',
    'peed', 'peek', 'peel', 'peep', 'peer', 'pees', 'pegs', 'pelt', 'pend', 'pens', 'peon', 'perk', 'perm', 'peso', 'pest',
    'pets', 'pews', 'phew', 'pica', 'pick', 'pics', 'pier', 'pies', 'pigs', 'pike', 'pile', 'pill', 'pine', 'ping', 'pink',
    'pins', 'pint', 'pipe', 'pita', 'pith', 'pits', 'pity', 'plan', 'play', 'plea', 'pled', 'plop', 'plot', 'plow', 'ploy',
    'plug', 'plum', 'plus', 'pods', 'poem', 'poet', 'pogo', 'poke', 'poky', 'pole', 'polk', 'poll', 'polo', 'poly', 'pomp',
    'poms', 'pond', 'pong', 'pons', 'pony', 'pood', 'poof', 'pooh', 'pool', 'poor', 'poot', 'pope', 'pops', 'pore', 'pork',
    'port', 'pose', 'posh', 'post', 'posy', 'pots', 'pouf', 'pour', 'pout', 'pray', 'prep', 'prey', 'prim', 'prod', 'prom',
    'prop', 'pros', 'pubs', 'puce', 'puck', 'puff', 'pugs', 'puke', 'pull', 'pulp', 'puma', 'pump', 'punk', 'puns', 'punt',
    'pups', 'pure', 'purr', 'push', 'puts', 'putt', 'pyre', 'pyro', 'quad', 'quay', 'quid', 'quip', 'quit', 'race', 'rack',
    'racy', 'raff', 'raft', 'rage', 'rags', 'raid', 'rail', 'rain', 'rake', 'ramp', 'rand', 'rang', 'rank', 'rant', 'raps',
    'rare', 'rash', 'rast', 'rate', 'rats', 'rave', 'rays', 'read', 'real', 'ream', 'reap', 'rear', 'redo', 'reed', 'reef',
    'reel', 'refs', 'rein', 'rend', 'rent', 'repo', 'reps', 'rest', 'rhea', 'ribs', 'rice', 'rich', 'rick', 'ride', 'rids',
    'rife', 'riff', 'rift', 'rigs', 'rile', 'rims', 'rind', 'rine', 'ring', 'rink', 'riot', 'ripe', 'rips', 'rise', 'risk',
    'rite', 'road', 'roam', 'roar', 'robs', 'rock', 'rode', 'rods', 'role', 'roll', 'roma', 'romp', 'roof', 'rook', 'room',
    'root', 'rope', 'rose', 'rosy', 'rote', 'roto', 'rove', 'rows', 'rube', 'rubs', 'ruby', 'ruck', 'rudd', 'rude', 'ruff',
    'rugs', 'ruin', 'rule', 'rume', 'rump', 'rums', 'rung', 'runs', 'runt', 'ruse', 'rush', 'rust', 'ruth', 'ruts', 'sack',
    'sacs', 'sade', 'safe', 'saga', 'sage', 'sags', 'said', 'sail', 'sake', 'saki', 'salt', 'same', 'sand', 'sane', 'sang',
    'sank', 'sans', 'saps', 'sari', 'sars', 'sash', 'sass', 'saul', 'save', 'saws', 'says', 'scab', 'scam', 'scan', 'scar',
    'scat', 'scot', 'scud', 'scum', 'seal', 'seam', 'sean', 'sear', 'seas', 'seat', 'sect', 'seed', 'seek', 'seen', 'seep',
    'seer', 'sees', 'seis', 'self', 'sell', 'send', 'sent', 'sept', 'serf', 'sess', 'sets', 'sewn', 'sews', 'sham', 'shaw',
    'shea', 'shed', 'shim', 'shin', 'ship', 'shod', 'shoe', 'shoo', 'shop', 'shot', 'show', 'shun', 'shut', 'sick', 'sics',
    'sift', 'sigh', 'sign', 'silk', 'sill', 'silo', 'silt', 'sing', 'sink', 'sins', 'sips', 'sire', 'siri', 'sirs', 'site',
    'sith', 'sits', 'skat', 'skid', 'skim', 'skin', 'skip', 'skis', 'skit', 'slab', 'slag', 'slam', 'slap', 'slat', 'slaw',
    'slay', 'sled', 'slew', 'slid', 'slim', 'slip', 'slit', 'slob', 'slop', 'slot', 'slow', 'slug', 'slum', 'slur', 'smog',
    'smug', 'smut', 'snag', 'snap', 'snob', 'snot', 'snow', 'snug', 'soak', 'soap', 'soar', 'sobs', 'sock', 'soda', 'sofa',
    'soft', 'soil', 'soke', 'sold', 'sole', 'solo', 'some', 'song', 'sons', 'soon', 'soop', 'soot', 'sora', 'sord', 'sore',
    'sorn', 'sort', 'soul', 'soup', 'sour', 'sown', 'sows', 'spam', 'span', 'spar', 'spas', 'spat', 'spec', 'spew', 'spin',
    'spit', 'spot', 'spud', 'spug', 'spun', 'spur', 'stab', 'stag', 'star', 'stat', 'stay', 'stem', 'sten', 'step', 'stew',
    'stim', 'stir', 'stop', 'stow', 'stub', 'stud', 'stum', 'stun', 'suba', 'subs', 'such', 'suck', 'sued', 'sues', 'suet',
    'suit', 'sulk', 'sump', 'sung', 'sunk', 'suns', 'supe', 'sups', 'sure', 'surf', 'swab', 'swag', 'swam', 'swan', 'swap',
    'swat', 'sway', 'swig', 'swim', 'swob', 'swop', 'tabs', 'tace', 'tach', 'tack', 'taco', 'tact', 'tads', 'tael', 'taes',
    'tags', 'tail', 'tain', 'tait', 'take', 'tale', 'talk', 'tall', 'tame', 'tamp', 'tams', 'tang', 'tank', 'tans', 'taos',
    'tape', 'taps', 'tara', 'tare', 'tarn', 'taro', 'tarp', 'tart', 'task', 'tate', 'taut', 'taxi', 'tead', 'teak', 'teal',
    'team', 'tear', 'teat', 'tech', 'teds', 'tedy', 'teen', 'teer', 'tees', 'teil', 'tell', 'temp', 'tend', 'tens', 'tent',
    'terf', 'term', 'test', 'text', 'than', 'that', 'thaw', 'thee', 'them', 'then', 'they', 'thin', 'this', 'thud', 'thug',
    'thus', 'tick', 'tics', 'tide', 'tidy', 'tied', 'tier', 'ties', 'tike', 'tiki', 'tile', 'till', 'tils', 'tilt', 'time',
    'tind', 'tine', 'tink', 'tins', 'tint', 'tiny', 'tips', 'tire', 'tits', 'toad', 'toby', 'tock', 'tods', 'toed', 'toes',
    'toft', 'tofu', 'toga', 'togs', 'toil', 'toke', 'told', 'tole', 'toll', 'tomb', 'tome', 'toms', 'tone', 'tong', 'tonk',
    'tons', 'tony', 'took', 'tool', 'toom', 'toon', 'toot', 'tope', 'tops', 'tora', 'torc', 'tore', 'tori', 'torn', 'toro',
    'tors', 'tort', 'tory', 'tosh', 'toss', 'tost', 'tote', 'tots', 'tour', 'town', 'tows', 'toys', 'tram', 'trap', 'tray',
    'tree', 'trek', 'tres', 'trew', 'trey', 'trim', 'trio', 'trip', 'trod', 'trog', 'trow', 'troy', 'true', 'tuba', 'tube',
    'tubs', 'tuck', 'tuff', 'tugs', 'tule', 'tump', 'tums', 'tuna', 'tund', 'tune', 'tung', 'tuns', 'tups', 'turd', 'turf',
    'turk', 'turn', 'tush', 'tusk', 'tuts', 'tutu', 'twas', 'twat', 'twig', 'twin', 'twit', 'twos', 'tyde', 'tyke', 'type',
    'typo', 'tyre', 'tyro', 'tyte', 'ulex', 'ulus', 'umps', 'unis', 'unit', 'urns', 'used', 'user', 'uses', 'vacs', 'vade',
    'vaes', 'vags', 'vail', 'vain', 'vale', 'vamp', 'vane', 'vang', 'vans', 'vars', 'vary', 'vasa', 'vase', 'vast', 'vats',
    'vaus', 'vaut', 'veal', 'veep', 'veer', 'vega', 'veil', 'vein', 'veld', 'vend', 'vent', 'vera', 'verb', 'verd', 'vert',
    'very', 'vest', 'veto', 'vets', 'vext', 'viae', 'vias', 'vibe', 'vice', 'vide', 'vids', 'vied', 'vier', 'vies', 'view',
    'vild', 'vile', 'vill', 'vine', 'vino', 'vins', 'vint', 'virl', 'visa', 'vise', 'vita', 'vivo', 'vola', 'vole', 'volk',
    'volt', 'vote', 'vows', 'wabs', 'wack', 'wade', 'wads', 'waes', 'waff', 'waft', 'wage', 'wags', 'waif', 'wail', 'wain',
    'wait', 'wake', 'wald', 'wale', 'walk', 'wall', 'wand', 'wane', 'wank', 'wans', 'want', 'waps', 'ward', 'ware', 'wark',
    'warm', 'warp', 'wars', 'wart', 'wary', 'wase', 'wash', 'wasp', 'wate', 'wats', 'watt', 'wauk', 'waul', 'waur', 'wave',
    'wavy', 'waxy', 'ways', 'weak', 'weal', 'wean', 'wear', 'webs', 'weed', 'week', 'weep', 'weld', 'welk', 'well', 'welt',
    'wend', 'went', 'wept', 'were', 'wert', 'west', 'wets', 'wham', 'whap', 'what', 'when', 'whew', 'whey', 'whip', 'whir',
    'whys', 'wick', 'wide', 'wife', 'wigs', 'wild', 'wile', 'will', 'wilt', 'wimp', 'wind', 'wine', 'wing', 'wink', 'wipe',
    'wire', 'wise', 'wish', 'wisp', 'with', 'wits', 'wock', 'woke', 'wold', 'wolf', 'womb', 'wonk', 'wont', 'wood', 'woof',
    'woon', 'woot', 'word', 'wore', 'work', 'worm', 'worn', 'wove', 'wrap', 'wren', 'writ', 'wuss', 'yack', 'yags', 'yale',
    'yams', 'yank', 'yaps', 'yard', 'yarn', 'yate', 'yawn', 'yeah', 'year', 'yeed', 'yeld', 'yelk', 'yell', 'yelp', 'yeps',
    'yews', 'yike', 'yipe', 'yips', 'yirk', 'yite', 'yode', 'yoga', 'yogi', 'yoke', 'yold', 'yolk', 'yond', 'yore', 'york',
    'your', 'yous', 'yowl', 'yuca', 'yuck', 'yugs', 'yuke', 'yule', 'yump', 'yups', 'yurt'
    ]
}

// sets dictionary array to a list of 5 letter words
//  NOTE : 1765 words total (1764 for last in an array)
function fiveLetterDictionary() {
  dictionaryArray = [
    "hover", "scoot", "lodge", "hulky", "bunny", "cokes", "comma", "gated", "grade", "gaudy", "fader", "clamp", "locks", "fents", "packs", "loams", "paint", "unify", "binks", "hault", "galas", "musts", "roles", "shore", "spain", "glove", "mains", "clump", "clans", "kempt", "fixes", "wears", "cheap", "alert", "ducky", "pales", "bloke", "fines", "pesos", "copes", 
    "tells", "knell", "wafer", "soils", "shave", "waste", "hucks", "caned", "unity", "bundy", "lower", "fined", "snags", "hurls", "blurs", "sides", "flabs", "parks", "yawns", "catty", "wombs", "jumps", "waist", "chill", "craps", "spire", "acres", "towny", "rafts", "bongo", "model", "craft", "hoven", "rover", "foyer", "fires", "scrow", "vants", "typos", "awing", 
    "shank", "minae", "temes", "leeks", "apeak", "order", "north", "vexed", "chasm", "poets", "chore", "tuned", "rings", "twilt", "paths", "harps", "giver", "bumbo", "haste", "balls", "marsh", "routs", "chine", "sonar", "toped", "swine", "brood", "wives", "seeps", "maids", "fifth", "shame", "pukes", "witty", "musks", "pager", "calmy", "stork", "cubes", "herds", 
    "largo", "curds", "duets", "softs", "reuse", "spurt", "proms", "shins", "thraw", "yells", "swigs", "fifes", "feist", "tolls", "buddy", "names", "stubs", "scarf", "rents", "riced", "snots", "downs", "eased", "heats", "noisy", "hocus", "falls", "wooly", "moths", "dates", "hairs", "bribe", "clads", "rated", "dirty", "melds", "knits", "dandy", "wilds", "stale", 
    "gutty", "skelf", "jubes", "floss", "poach", "lites", "naggy", "coeds", "creek", "widen", "groin", "skied", "loggy", "story", "twang", "olden", "deans", "stall", "brags", "menus", "camos", "wormy", "taint", "moppy", "suits", "sears", "basic", "least", "bouts", "clear", "fixed", "skirt", "stear", "decor", "flirt", "beans", "wraps", "about", "myths", "chafe", 
    "dense", "nurse", "polos", "tints", "slays", "plums", "burps", "novel", "muled", "crowd", "chock", "pearl", "rants", "flawn", "sprug", "treck", "twins", "fiery", "amort", "frame", "lades", "sicko", "wiped", "purge", "shlep", "looks", "notch", "tacts", "vexes", "morel", "hauls", "hunts", "goaty", "gamed", "drips", "spill", "frown", "props", "shivs", "kyack", 
    "voxel", "gassy", "bungs", "cages", "clots", "smush", "mitts", "cedes", "gamer", "leash", "comes", "cided", "faker", "tweet", "aster", "slams", "binge", "gaunt", "cliff", "fours", "parch", "pushy", "speed", "trace", "yawed", "loser", "snail", "leave", "curse", "shade", "truce", "cobra", "janty", "chips", "ports", "tears", "shell", "leach", "riles", "sexes", 
    "lisps", "curbs", "stick", "bogus", "sheet", "heavy", "jades", "seals", "armed", "trump", "twiny", "bombs", "grana", "chase", "corks", "nasal", "alack", "barns", "rider", "cater", "chard", "scots", "tiled", "swain", "sever", "picks", "pouty", "forte", "cutty", "binds", "decks", "fused", "tides", "bowls", "limbs", "dears", "mowed", "wends", "lives", "sises", 
    "plied", "later", "thane", "chefs", "mutes", "culls", "clink", "raspy", "finds", "combo", "verge", "dwelt", "hovel", "veils", "trove", "folks", "gnarl", "douks", "tombs", "gamey", "horse", "scrum", "peels", "tarts", "yearn", "vired", "spore", "spick", "aback", "tails", "derby", "frets", "savey", "chugs", "clone", "laser", "faine", "buffs", "bants", "eaves", 
    "leper", "gawps", "waned", "cured", "hayer", "dopey", "wooed", "river", "gaups", "teary", "outer", "chump", "abuse", "fundi", "dress", "beads", "nanny", "humps", "flamy", "scuts", "gates", "serum", "dewed", "wordy", "cases", "fairy", "sited", "diets", "hefty", "forms", "daisy", "darts", "eyers", "germs", "orate", "rines", "iches", "agone", "shoes", "askew", 
    "raxed", "bleed", "flung", "minus", "stead", "carry", "rouge", "toots", "hints", "manos", "welch", "slaid", "bided", "pasta", "whims", "taser", "corps", "alone", "crick", "warps", "wards", "udder", "moans", "steep", "trait", "choko", "teals", "ranch", "shoal", "hyper", "worth", "chico", "globe", "spawl", "lines", "tanky", "voter", "lyres", "ravin", "coyed", 
    "quits", "yolky", "liver", "toter", "lends", "rinks", "fakes", "being", "paris", "heeds", "snubs", "mutts", "wolfs", "glare", "wiper", "leaps", "borts", "drunk", "dopes", "jiggy", "shard", "spans", "ofter", "punts", "farms", "pound", "women", "nails", "foxes", "huffs", "swell", "bails", "furrs", "gorge", "kicks", "piper", "risen", "skulk", "slove", "spoil", 
    "bowed", "swans", "vends", "wared", "lynes", "calve", "longs", "coops", "drags", "books", "dutch", "lungs", "reeds", "reeks", "ripes", "calls", "shape", "burls", "words", "frays", "frogs", "hives", "slops", "hider", "hacks", "lakes", "divas", "grain", "gushy", "putty", "bloop", "grand", "dirts", "bleak", "lusts", "sarge", "chunk", "class", "bolds", "rices", 
    "nodes", "shrug", "tours", "meads", "gauds", "hedge", "waken", "frost", "chili", "aheap", "hiver", "urine", "gripe", "flops", "clipe", "nares", "oaths", "steam", "vouch", "wipes", "goofs", "puppy", "raggy", "close", "older", "pride", "samen", "slaes", "pinks", "basks", "skive", "taped", "smite", "crimp", "welts", "swelt", "trees", "moils", "scans", "crier", 
    "lawns", "shout", "knelt", "fried", "fauna", "asker", "brank", "curly", "hoard", "rewet", "ravel", "scene", "boils", "atone", "messy", "dukes", "taste", "murky", "bangs", "wrong", "gyres", "walls", "forky", "modem", "fluky", "scent", "jeers", "milks", "chays", "mamas", "cells", "drape", "prune", "waxer", "liven", "sleep", "whale", "chile", "broke", "sours", 
    "risky", "chimp", "bourd", "jello", "pence", "traps", "wills", "found", "needy", "pains", "gawks", "hosen", "burnt", "hatch", "surfy", "trope", "bravo", "quota", "dodge", "gimpy", "pacer", "snogs", "cutch", "stack", "rejon", "busks", "warns", "chaff", "jolly", "route", "eches", "nervy", "spots", "vroom", "baker", "piney", "salty", "snits", "burly", "slurp", 
    "silky", "tried", "rides", "bushy", "shelf", "sails", "frisk", "fiber", "bands", "vouge", "broth", "earns", "stars", "cheep", "flays", "point", "talky", "venue", "agony", "leafs", "stilt", "drank", "alums", "hushy", "pored", "gulps", "busty", "ruins", "roofs", "letch", "flint", "altar", "perch", "piler", "avert", "cuter", "trend", "wakes", "slash", "hikes", 
    "coals", "bless", "serve", "toons", "hicks", "ranks", "coney", "divis", "shale", "snowy", "gater", "bidet", "swags", "boxes", "throb", "yokes", "hired", "decoy", "lures", "domed", "gross", "moody", "greet", "bimbo", "tanks", "tiddy", "strut", "crabs", "flocs", "gowns", "money", "boast", "dummy", "shush", "shire", "sores", "furry", "hosts", "doomy", "swish", 
    "wavey", "prowl", "braid", "loopy", "sifts", "slobs", "draft", "bales", "treat", "oints", "prick", "docks", "press", "peaks", "rough", "budge", "ashed", "hoots", "winch", "known", "welsh", "yawny", "bodes", "veily", "snare", "value", "goody", "clonk", "comms", "roary", "dudes", "parrs", "rusts", "haven", "bolts", "slave", "salts", "bingo", "faint", "quite", 
    "routh", "pates", "thins", "decaf", "units", "woman", "awash", "daily", "tiers", "bonds", "crows", "spilt", "brens", "gorps", "shock", "penne", "hanky", "pause", "harsh", "matte", "diary", "wises", "chank", "polks", "tally", "noses", "posts", "melty", "plugs", "sculk", "boots", "congo", "glugs", "homer", "jails", "teeth", "nifty", "waxed", "petty", "casts", 
    "bites", "poked", "bunch", "seats", "ruled", "pried", "pudge", "billy", "popes", "moles", "carbs", "fidos", "relit", "narcs", "fouer", "sword", "tiles", "fowth", "boost", "stove", "narco", "flour", "shool", "offed", "hours", "poops", "stirs", "raven", "solve", "ashes", "sport", "pongo", "polka", "remix", "kitty", "runes", "thyme", "ponds", "skips", "boing", 
    "yours", "speak", "payed", "pimps", "stray", "hangs", "plows", "break", "puked", "balky", "toted", "payer", "spacy", "crypt", "biggy", "smart", "flier", "chops", "cedar", "masts", "snide", "baggy", "vines", "month", "swill", "draps", "cared", "adore", "mulsh", "flick", "pries", "fells", "peals", "faced", "germy", "slime", "going", "doggy", "rocky", "husks", 
    "wries", "halos", "talks", "grime", "screw", "pavis", "dwell", "where", "afear", "scars", "trash", "wrang", "sorer", "treen", "cleat", "steek", "panes", "dingy", "pages", "deeds", "bully", "fatty", "bench", "camps", "cream", "spelt", "ahead", "wheat", "share", "biked", "sweep", "puffy", "holms", "nuked", "preys", "poofs", "bests", "tonne", "winks", "lores", 
    "teach", "amuse", "talls", "clogs", "scrap", "dulls", "forty", "grimy", "holds", "child", "choky", "foggy", "darky", "raids", "rests", "adobe", "hiked", "bends", "mirky", "stool", "duper", "gummy", "hexes", "mawed", "mango", "sewen", "thuds", "daker", "deals", "stats", "nutsy", "vails", "piped", "mover", "acute", "tough", "hardy", "tamed", "woofs", "toner", 
    "bread", "rewin", "broad", "cysts", "crush", "boars", "spool", "porch", "sneak", "trawl", "stops", "veers", "quips", "hoary", "joist", "snark", "stung", "clips", "gamma", "rainy", "carte", "nexts", "brays", "feats", "bulbs", "fewer", "stood", "tufts", "hills", "pumas", "gnaws", "texas", "abate", "cords", "fuffy", "drops", "mixer", "gaffs", "repin", "hotel", 
    "malls", "grubs", "ceder", "aides", "warty", "rates", "seeks", "wried", "eager", "armet", "warms", "writs", "darns", "slurs", "cramp", "greek", "lacer", "sways", "brung", "saint", "kinds", "sunny", "luter", "clerk", "kneel", "paves", "gravy", "stims", "drear", "fares", "punky", "soles", "sines", "hutch", "whews", "gulls", "visas", "swang", "pelts", "bourn", 
    "cabas", "trest", "roomy", "laced", "sheds", "gyros", "potts", "servo", "weeks", "cower", "blobs", "flail", "goers", "cinch", "lulls", "muddy", "kites", "maced", "hoofs", "hopes", "shaky", "sauch", "scoup", "trays", "joyed", "roars", "threw", "costs", "kissy", "genus", "ceres", "spook", "gaits", "scams", "balmy", "vista", "terse", "vague", "nukes", "links", 
    "silts", "tools", "clown", "whiny", "stark", "dally", "minor", "mints", "fauns", "mocks", "meets", "ruddy", "piles", "kytes", "gulfs", "pumps", "wired", "locus", "mires", "place", "items", "lover", "dells", "loose", "basin", "plume", "rooks", "temps", "ended", "feast", "flats", "vesta", "lambs", "bliss", "flags", "taper", "spode", "crook", "phase", "bleep", 
    "sappy", "shuns", "chums", "slush", "ditsy", "waved", "rises", "duals", "fails", "rosin", "cheek", "hound", "prong", "woven", "bases", "basil", "venus", "geeks", "tabby", "conch", "tooth", "crams", "prior", "laved", "blank", "justs", "cults", "nicks", "fleas", "steem", "necks", "snarl", "lenos", "toils", "grids", "ripen", "coils", "strep", "nexus", "wrung", 
    "focus", "aimer", "hands", "prawn", "shalt", "woody", "dings", "swabs", "funds", "roses", "parts", "bards", "reels", "beard", "scaly", "shive", "crews", "grays", "erode", "picky", "retax", "gloom", "roots", "halts", "curvy", "vixen", "yoked", "hello", "scare", "nerdy", "goors", "foods", "stuck", "offer", "disco", "frows", "prime", "votes", "lacks", "prods", 
    "smugs", "wised", "bells", "spiny", "rhyme", "laces", "lobed", "tasks", "soupy", "dolls", "sauce", "crate", "clunk", "dooks", "tardy", "lymes", "jaunt", "maven", "vises", "fries", "punks", "shots", "fangs", "trist", "brunt", "motel", "clubs", "rindy", "sites", "wifes", "under", "scoop", "flesh", "loped", "pooed", "wined", "wexes", "taken", "pills", "charm", 
    "vices", "lipid", "supra", "slick", "drown", "fungi", "humph", "newer", "henge", "softy", "asked", "posse", "hones", "lurks", "rivet", "recon", "doors", "dorms", "wexed", "pippy", "fasts", "cafes", "raved", "slack", "barky", "stout", "shrub", "ables", "bonks", "short", "triad", "goats", "huggy", "delay", "shash", "mumms", "howls", "rally", "clops", "crays", 
    "drain", "puker", "tinge", "kilts", "would", "eched", "limed", "wifey", "dules", "ratch", "timer", "fryer", "board", "poppy", "slate", "aunty", "robin", "pitch", "foody", "males", "hemes", "gumbo", "siren", "flask", "mommy", "lardy", "shine", "flute", "scail", "jacks", "quote", "reset", "lousy", "sends", "worst", "beefy", "brews", "abide", "brawl", "gases", 
    "liers", "conga", "hurts", "knaps", "pongs", "click", "acing", "flaws", "raked", "sells", "fated", "sheep", "worms", "buses", "roast", "moggy", "otter", "stomp", "fords", "drums", "boggy", "weary", "among", "dusty", "yodel", "cross", "cribs", "harks", "gears", "brows", "slade", "leech", "repay", "tocks", "oiled", "cundy", "makes", "prude", "turks", "limbo", 
    "brads", "knobs", "mount", "hoods", "tunes", "glops", "wowed", "capes", "soots", "waver", "heady", "wench", "steak", "chirp", "other", "barks", "clank", "mauls", "blued", "chest", "meane", "dyers", "bancs", "pulpy", "loads", "weeps", "culty", "honed", "corny", "touch", "caked", "yowls", "kills", "spued", "crept", "tarps", "dines", "nones", "stems", "cello", 
    "stoop", "codec", "based", "snead", "cushy", "mayor", "tango", "moons", "chics", "saute", "plaid", "tusks", "claps", "fains", "howdy", "mingy", "pints", "tangy", "savoy", "pigmy", "silly", "hippy", "ached", "filet", "hurly", "hooks", "tacky", "caret", "surge", "hades", "paled", "pears", "funky", "pouch", "choke", "blink", "conns", "mined", "brave", "roach", 
    "style", "corms", "hoist", "hoped", "needs", "boxer", "baked", "vined", "stuns", "mates", "scold", "liken", "bumps", "thunk", "dices", "dealt", "scute", "clove", "carvy", "coots", "goons", "flows", "eaten", "beers", "joins", "knows", "cuing", "spies", "wails", "cools", "brick", "spiky", "study", "reaps", "scour", "corbe", "lowed", "saggy", "soups", "flies", 
    "resat", "suing", "hasty", "fudge", "bunks", "frust", "helos", "blend", "pulls", "romas", "piled", "weeds", "fired", "fumed", "haunt", "lifes", "poise", "pecks", "water", "count", "clues", "swear", "barge", "drugs", "lordy", "manor", "while", "duffs", "ducks", "beast", "helps", "crump", "hunky", "nudge", "wests", "pokes", "raged", "snoop", "wince", "duett", 
    "wilts", "paged", "floor", "minty", "vents", "cakey", "homey", "honey", "jumbo", "veiny", "modes", "caver", "wasps", "hires", "grabs", "dufus", "lowse", "puffs", "slits", "twirl", "flash", "death", "crack", "dured", "palms", "mucky", "grant", "mince", "phony", "sensi", "slogs", "soaps", "spray", "swiss", "slums", "wands", "mages", "tempo", "loops", "nutty", 
    "whams", "poled", "colds", "privy", "whigs", "lotto", "wages", "snout", "faked", "lived", "chomp", "nodus", "liter", "slept", "booth", "freak", "trade", "mourn", "canal", "seame", "punas", "chows", "brown", "mimes", "whine", "dives", "start", "goose", "hails", "rowth", "skims", "rules", "flume", "corby", "weepy", "yolks", "meats", "shims", "wimpy", "curve", 
    "hoppy", "sinky", "trues", "waffs", "scram", "pargo", "keeps", "china", "lowne", "magma", "perks", "slips", "hated", "campy", "cloak", "tense", "axled", "cling", "tasty", "aland", "kneed", "parka", "fawns", "abode", "bough", "black", "stews", "spirt", "lurex", "joker", "print", "wider", "jakes", "kraft", "champ", "slice", "shoed", "delts", "hairy", "ships", 
    "drink", "mules", "naval", "spite", "slows", "murks", "plack", "cabby", "biros", "sissy", "noted", "pucks", "naled", "bluey", "nosed", "ticks", "lynch", "trail", "blurb", "hedgy", "laugh", "tates", "chevy", "wedgy", "tynes", "peaky", "spine", "frosh", "shows", "still", "trans", "plier", "flame", "hissy", "repel", "riven", "baits", "brain", "bonne", "twice", 
    "bemix", "sinks", "gemmy", "terms", "wrast", "sippy", "thigh", "trust", "crims", "holed", "motes", "supes", "pools", "cyder", "store", "catch", "seams", "often", "canny", "realm", "crawl", "worry", "token", "peppy", "front", "retch", "felly", "sorra", "trode", "stank", "booky", "block", "shiny", "types", "robed", "means", "delta", "parse", "thumb", "strip", 
    "tempt", "hosed", "ledge", "forts", "pours", "coins", "windy", "resay", "jumpy", "given", "spike", "gists", "borde", "ferry", "wisps", "stare", "corns", "piggy", "bitts", "poser", "boxed", "tuner", "airts", "gluey", "lests", "calla", "peers", "ruggy", "mools", "flews", "gongs", "rebel", "crude", "lingo", "duces", "spits", "trice", "scrub", "blade", "besat", 
    "aping", "duels", "voars", "hells", "sales", "fools", "draws", "cubed", "dript", "vints", "vowed", "yeast", "tucks", "tacos", "dosed", "filth", "bucks", "tushy", "diver", "track", "abore", "cores", "shawl", "twine", "pouts", "lease", "seedy", "podgy", "teaks", "slant", "liner", "clift", "gully", "teams", "dunks", "dumps", "thugs", "whirs", "fungs", "heart", 
    "magus", "beats", "forge", "horns", "react", "check", "codes", "marge", "carat", "dryer", "freer", "slimy", "fills", "morse", "tryer", "marry", "milor", "golds", "along", "linky", "moved", "kilns", "poses", "oiler", "geeky", "blurt", "frags", "loony", "nerve", "raced", "spell", "humus", "unite", "maxes", "smelt", "dorky", "ducts", "hooky", "milky", "creak", 
    "holks", "leapt", "souls", "viced", "leaks", "rewon", "canes", "furls", "mercy", "twist", "eater", "shaws", "gloss", "baler", "seeds", "damps", "maims", "lords", "spuds", "coups", "biter", "memes", "muffs", "judge", "boney", "owing", "mania", "combs", "faces", "kings", "shift", "chich", "kales", "think", "sorry", "foals", "chose", "races", "plant", "relic", 
    "moods", "scrab", "above", "gages", "miner", "humpy", "mangs", "match", "junks", "cowls", "roman", "never", "tubas", "loots", "texts", "witch", "snuck", "cocky", "beefs", "snipe", "truck", "tread", "snaps", "raves", "famed", "clean", "chaps", "runts", "covet", "fives", "spoon", "joust", "beeps", "knead", "wires", "trips", "neaps", "acted", "surfs", "spice", 
    "cully", "mosey", "meany", "wrist", "galls", "tenet", "write", "chess", "glide", "bored", "decay", "bafts", "sucks", "duing", "kicky", "muted", "chalk", "flare", "holly", "cobbs", "preps", "smogs", "scout", "clued", "dolly", "oxter", "liked", "polar", "yiked", "aches", "yummy", "lever", "mouth", "stump", "bores", "bream", "lumps", "jells", "whiff", "saved", 
    "masks", "farse", "clung", "facet", "safes", "lowes", "volti", "boned", "spays", "since", "halfs", "tossy", "tests", "sally", "kipes", "white", "wonky", "woofy", "golfs", "rooms", "reach", "paved", "shill", "files", "junky", "bunts", "balks", "fuels", "phone", "fowls", "latch", "sorta", "flaky", "dough", "hived", "maned", "lovey", "crave", "areas", "sweet", 
    "honky", "aunts", "folky", "range", "tribe", "faery", "clams", "sassy", "mores", "scuds", "oasis", "swack", "vivid", "court", "major", "clash", "diced", "loafs", "groan", "jerky", "seems", "primp", "patly", "curls", "finer", "giant", "blows", "toast", "biled", "froes", "knees", "loamy", "manga", "putts", "sling", "tiger", "lauch", "glute", "pluck", "dusky", 
    "chart", "dover", "jaggy", "creed", "doers", "limos", "beret", "basal", "totem", "purrs", "relax", "green", "small", "sixer", "mikes", "saker", "eaved", "chats", "hence", "plays", "lifts", "naked", "stunt", "whips", "dippy", "punch", "prays", "sulks", "solos", "saunt", "lippy", "nicky", "bucko", "lodes", "colts", "moats", "ruler", "guide", "yacks", "peace", 
    "venge", "shrew", "shaft", "goals", "icing", "racer", "bumpy", "happy", "fondu", "retag", "snack", "folds", "bride", "coths", "pasty", "diner", "plots", "snaky", "blare", "sided", "fairs", "hinds", "paven", "slots", "wiser", "aided", "grins", "glued", "candy", "hiree", "sooth", "rummy", "crocs", "yeahs", "brawn", "surer", "which", "dowed", "beams", "ender", 
    "basis", "flair", "lacey", "takes", "wacks", "truer", "wools", "cangs", "strap", "clods", "smear", "elves", "paced", "hunks", "spyre", "slaps", "winds", "caste", "dared", "spars", "wager", "broom", "cried", "jewel", "discs", "refit", "loves", "finos", "flyer", "nancy", "shads", "socks", "copra", "tired", "prank", "aways", "strew", "manna", "shies", "moldy", 
    "punny", "buggy", "nooks", "power", "peony", "vault", "tummy", "whole", "oinks", "sheas", "bauks", "hoses", "fetch", "dooms", "theme", "chant", "gouge", "fears", "tater", "laked", "colby", "flood", "sixes", "duped", "plies", "blowy", "welds", "grind", "dares", "sacks", "lited", "piets", "shirt", "wafts", "dusks", "karat", "toads", "harms", "sands", "matts", 
    "gutsy", "banks", "bared", "lunks", "minds", "nosey", "ramps", "trunk", "turns", "deers", "hoody", "plait", "miles", "burrs", "scape", "trick", "drove", "dotty", "whose", "space", "jeans", "bikes", "mooed", "booty", "joint", "tease", "dried", "taxed", "funny", "grunt", "baths", "loppy", "plane", "eying", "leafy", "swing", "beets", "wales", "mused", "convo", 
    "doves", "belch", "melts", "cares", "sinus", "slunk", "brink", "skews", "lamps", "crust", "drant", "drift", "silks", "bunds", "opted", "lofty", "sense", "blume", "yawls", "desks", "bilge", "sowed", "swirl", "trims", "skate", "fitts", "poley", "stand", "loses", "wound", "grown", "twigs", "farts", "butch", "dairy", "timed", "crown", "saves", "snort", "stage", 
    "tenth", "riped", "smile", "grift", "broch", "fogey", "borne", "creme", "jests", "paces", "leans", "longe", "disks", "riggs", "dusts", "swore", "blind", "relay", "stang", "jinks", "dodgy", "tenue", "skull", "nould", "vests", "cutey", "fades", "doses", "frees", "maces", "sured", "tines", "slosh", "enter", "spawn", "toyed", "skins", "elope", "times", "growl", 
    "linch", "tronk", "skill", "faith", "spews", "mamma", "fault", "rogue", "thigs", "pinky", "baled", "kiddo", "tided", "creep", "rears", "mafia", "wreak", "pawed", "laids", "lossy", "utter", "gusty", "fella", "jolts", "sting", "hilly", "treks", "smuts", "micky", "added", "turds", "calps", "vogue", "shuts", "leaky", "belts", "comet", "juked", "beaky", "ploys", 
    "rearm", "brand", "probe", "vamps", "verbs", "bytes", "missy", "moped", "gunks", "herbs", "leany", "odder", "paddy", "plain", "reals", "decry", "reads", "meant", "misty", "storm", "lares", "brusk", "typed", "caves", "hunch", "hexed", "flaps", "slipe", "spied", "baith", "patty", "world", "blown", "molls", "steed", "looms", "tuffs", "chaos", "seepy", "skunk", 
    "pulse", "knock", "jukes", "bares", "miser", "arced", "torch", "jerks", "dived", "feels", "holts", "rower", "cased", "liger", "brush", "lurve", "rugby", "mixes", "seven", "tongs", "wreck", "gapes", "south", "sough", "lumpy", "aging", "rouse", "scags", "glows", "lanky", "mails", "swank", "beaks", "snips", "woods", "fever", "stagy", "blame", "grape", "burst", 
    "tyres", "spunk", "savor", "swipe", "munch", "blips", "rails", "pipes", "reply", "trios", "stain", "rowdy", "fists", "filmy", "rival", "hoops", "cists", "salvo", "lanes", "prier", "swims", "rolls", "swail", "house", "ailed", "gusts", "momma", "gland", "moola", "mulch", "swept", "tunas", "films", "parky", "berry", "cloth", "dread", "blogs", "wicks", "banal", 
    "dying", "flied", "spurn", "hemps", "twats", "linin", "brash", "lying", "scorn", "skids", "deedy", "firms", "fiver", "wacky", "foils", "noise", "moist", "nerds", "flams", "heirs", "frail", "sawer", "aired", "fleet", "hyped", "lunch", "poler", "poofy", "weave", "pings", "leant", "shiva", "favor", "groom", "waker", "luger", "ruffs", "crepe", "cakes", "dials", 
    "probs", "swung", "bulky", "badge", "clang", "ropes", "soars", "score", "muggy", "slugs", "nasty", "cleek", "brats", "lamby", "ramen", "chins", "yucky", "clock", "large", "gluer", "whack", "hates", "motte", "spins", "salve", "hulks", "there", "fates", "slank", "shear", "steps", "greed", "echos", "heath", "snake", "motto", "grips", "stake", "frats", "loved", 
    "shall", "grove", "party", "grave", "rusty", "mummy", "tubed", "knots", "biker", "goofy", "crime", "pined", "eaned", "polly", "yards", "fuses", "cargo", "wicky", "wades", "porky", "goopy", "shark", "watch", "alter", "brace", "sings", "milds", "camas", "suave", "vaunt", "risks", "chime", "belly", "husky", "loans", "lofts", "snore", "dawns", "drive", "plong", 
    "cited", "promo", "spoof", "kelts", "wacko", "slain", "daunt", "smack", "march", "footy", "those", "dream", "sorts", "watts", "cluck", "booms", "nates", "taxes", "rowed", "sopra", "boomy", "fleck", "pudgy", "pines", "outed", "meals", "diddy", "nappy", "rumps", "shops", "taxer", "veins", "ylkes", "hefts", "shaul", "dirks", "stoat", "heads", "coast", "molts", 
    "swift", "forth", "taunt", "wares", "bloom", "climb", "comfy", "crumb", "rivel", "bulls", "doing", "spurs", "smith", "spaul", "foams", "musky", "mossy", "snook", "marvy", "gnats", "halve", "mower", "serry", "waded", "moose", "pinch", "molds", "turfs", "paver", "riots", "wispy", "round", "burns", "corky", "clime", "flank", "seamy", "throw", "forks", "halls", 
    "cents", "purer", "dinky", "maxed", "lined", "cheer", "false", "hides", "crisp", "boats", "coned", "honks", "clays", "poles", "handy", "loner", "hater", "wring", "waged", "wants", "riled", "brisk", "rains", "sires", "blues", "chewy", "flake", "hypes", "robes", "sworn", "pesky", "yelps", "randy", "shunt", "tsked", "cabal", "noose", "alaps", "spicy", "gauss", 
    "racks", "sawed", "resin", "sicks", "giddy", "smash", "whirl", "spims", "flush", "coupe", "nears", "spent", "swoop", "hulls", "leers", "slats", "tends", "wells", "mixen", "codex", "spams", "knack", "haled", "shove", "busts", "snoot", "bings", "gales", "brine", "mange", "poons", "thaws", "duked", "laves", "shake", "spear", "grads", "dries", "reedy", "bowel", 
    "aimed", "spare", "aleft", "yucko", "elite", "laker", "pokey", "twill", "shady", "beaty", "kilos", "rungs", "viper", "resit", "stalk", "abase", "level", "penny", "jokes", "sleds", "slily", "towns", "gourd", "monks", "barbs", "prone", "peeks", "milty", "pricy", "fifty", "stags", "blabs", "botch", "elate", "saber", "reefs", "bland", "marks", "great", "cooks", 
    "timid", "acorn", "abash", "grass", "fatly", "sloth", "force", "cider", "thank", "tubes", "runed", "chuck", "scald", "oaken", "beset", "rites", "stone", "bound", "loofs", "moves", "piers", "fence", "leggy", "carve", "pants", "oared", "leery", "reams", "ahigh", "licks", "coats", "stays", "hirer", "hided", "prats", "bevel", "could", "stock", "patch", "suite", 
    "horde", "lopes", "vanes", "deray", "laith", "stink", "sowth", "rarer", "rewax", "nulls", "glime", "super", "sakes", "speil", "cutes", "snows", "stows", "helix", "caved", "bones", "poker", "trots", "cures", "depth", "sweat", "condo", "gangs", "milos", "likes", "tamer", "calms", "dents", "blush", "stamp", "yarrs", "rumpy", "swash", "glues", "learn", "potsy", 
    "skies", "tones", "roped", "blood", "polls", "helio", "roost", "steer", "fruit", "spoke", "lefty", "peach", "mines", "notes", "chord", "speck", "fancy", "specs", "caged", "state", "lured", "cheat", "besaw", "tubar", "silos", "weils", "clasp", "grail", "folly", "lusty", "wifed", "jived", "trild", "yappy", "deary", "shays", "tents", "mould", "pesto", "gains", 
    "mites", "musty", "meaty", "sewer", "crees", "mound", "lunge", "froth", "tapir", "cause", "curdy", "tawer", "latex", "dated", "wrote", "meshy", "bents", "panel", "slung", "beamy", "plans", "grump", "flunk", "haded", "price", "plops", "swoun", "balds", "plumb", "jewed", "gives", "spiel", "pooch", "layer", "goops", "worse", "cines", "pured", "savvy", "games", 
    "volts", "heals", "smoke", "batty", "fumes", "steel", "slope", "deems", "fouls", "hears", "cuffs", "karks", "cored", "lavas", "bulge", "bonus", "warts", "mists", "feeds", "tales", "hitch", "flown", "aloft", "tacks", "soaks", "dowse", "huffy", "kinda", "leads", "weedy", "woken", "cease", "puggy", "podge", "trite", "barfs", "bossy", "smell", "rocks", "waves", 
    "pairs", "thing", "gaped", "shack", "backs", "coach", "sauna", "posed", "comas", "cadet", "vowel", "curer", "riser", "hawks", "flees", "adown", "pawns", "mosts", "dills", "adorn", "swaly", "lasts", "pures", "doved", "freed", "gunky", "fluke", "soapy", "kited", "fonds", "weans", "arear", "sober", "foamy", "swaps", "plank", "livid", "moult", "grows", "graft", 
    "thump", "bitsy", "burds", "whift", "drice", "peeps", "sharp", "pacts", "brook", "wingy", "scary", "hinge", "grams", "guise", "poems", "valve", "cyber", "vials", "coded", "crank", "mopsy", "crash", "perky", "scope", "bulks", "wimps", "chivy", "soggy", "lerps", "rifts", "drawn", "purse", "swamy", "mouse", "domes", "loins", "wolly", "scray", "dunts", "ruder", 
    "paper", "heils", "bling", "carby", "stair", "liars", "plyer", "leary", "waits", "heard", "heaps", "jingo", "baken", "banty", "bewet", "jocks", "yapps", "studs", "comby", "loofa", "shied", "tries", "bitty", "shoot", "sewed", "ready", "fishy", "whomp", "years", "toady", "sleek", "hippo", "lotus", "flips", "perdy", "vases", "frati", "spark", "axles", "train", 
    "debts", "after", "mushy", "feers", "mills", "slims", "refix", "spoor", "dishy", "hiker", "holes", "tires", "lucky", "spues", "kiddy", "pores", "fresh", "thelf", "chica", "crops", "scone", "chews", "pests", "dawed", "swamp", "blond", "glass", "prove", "plate", "toned", "brass", "yikes", "dimes", "pulps", "slide", "gawky", "hully", "abort", "crest", "spade", 
    "showy", "selfs", "batch", "lands", "peggy", "glams", "resaw", "chick", "tenes", "claws", "fonts", "spend", "frist", "brake", "gooky", "punty", "vasts", "revel", "yumps", "scugs", "merge", "tabes", "jelly", "couch", "balms", "sandy", "memos", "fisks", "saucy", "maker", "pasts", "puree", "shams", "sleet", "gyrus", "stash", "wolve", "gasps", "roams", "shoos", 
    "straw", "bring", "stein", "mends", "blain", "shook", "birds", "creds", "fully", "walks", "biles", "layed", "genes", "daint", "tween", "levee", "fisty", "cough", "heist", "enate", "porks", "eared", "tying", "gauge", "gator", "grate", "paler", "homes", "apted", "guppy", "limps", "saner", "slump", "caddy", "calfs", "soppy", "beady", "ditty", "cries", "knoll", 
    "borms", "works", "rasps", "wedge", "bills", "elops", "joked", "tower", "brava", "flock", "fenis", "nests", "steal", "three", "songs", "trods", "hawed", "breed", "bears", "merry", "hurry", "grace", "mated", "cones", "croon", "voted", "linen", "sound", "gifts", "cover", "shere", "faded", "vibes", "bated", "tilts", "verse", "bakes", "funks", "mixed", "fling", 
    "felts", "blunt", "solar", "slabs", "waked", "grasp", "rooky", "dunes", "swats", "feuds", "scale", "chive", "daddy", "tapes", "fixer", "facts", "dicey", "dined", "smore", "jeeps", "paste", "cleft", "crits", "flump", "stunk", "carts", "croak", "petti", "tangs", "thick", "ruses", "potty", "trial", "jaded", "wings", "heels", "ratty", "goths", "sages", "cyans", 
    "eases", "scaws", "cards", "goods", "flims", "spats", "beach" 
];
}
// These are in functions to make code easier and accessibility for changing list of words

// #endregion

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Game Functions
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// starts the game
function gameStart() {
  // resets for replay 
  reset();

  // calls and sets difficulty 
  setDifficulty();

  // Calls and gets multiplayer
  multiplayer();
  
// Logs difficulty and multiplayer levels
  console.log(
    "Difficulty :" , setDifficulty() , "\n" ,
    "Multiplayer :" , multiplayer()
  )

  // sets messagelabel to player 1 to start
  if (multiplayer()) {
    setMessage("Player 1", correctcolor);
  } 

  // Calls random Word function
  randomWordGen();

}

//function that tests each userinput
function enterKeyDown(event) {
  // only execute if the game is on (if the play div is visible)
  if (playDiv.style.visibility == "visible" && event.key == "Enter") {
    // gets value of what user inputed and what the last word was
    var userInput = userInputBox.value.toLowerCase();  
    var lastWord = oldInputLabelI.textContent.toLowerCase();

    // plays click sound 
    playSound(clickSound);

    // Logs for readability and debugging
    console.log(
      // gives what user inputted and what the last input was
      userInput , lastWord , "\n" ,
      // True or false for if there is a one letter difference
      "one letter difference?", oneLetterDifference(userInput, lastWord), "\n" , 
      // True or false if the word is in the dictionary
      "word in dictionary?" , wordInDictionary(userInput, dictionaryArray)
    )

    // Tests for if there is both a one letter difference and if it is a word
    if (oneLetterDifference(userInput, lastWord) && wordInDictionary(userInput, dictionaryArray)) {
      // logs output
      console.log("Both conditions are true");
    
      // Calls the shiftdown function
      shiftDown();


      // conditions for if either there is not a one letter difference or not a word
    } else {
        // logs output
        console.log("One or both conditions are false");
        
        // calls attempts function
        updateAttempts();
    }
  }
}

// endgame function
function endGame () {
  // shows message game over and displays accordingly
  messageLabel.textContent = "game over";
  messageLabel.style.color = incorrectcolor; 
  messageLabel.style.opacity = 1

  playSound(gameoverSound);
  
  // after displaying game over 
  // tests for a new highscore and if there is it pulls up the highscore div 
  setTimeout(function() {
    if (highscoreTest(score)) {
      // resets the past highscore username input
      usernameInput.value = '';

      // shows high score div and hides the play screen
      show(highscoreDiv, 'moveUp');
      hide(playDiv, 'moveDown');

      // plays highscore sound
      playSound(highscoreSound);

      // logs new highscore
      console.log("new highscore");
    } else {
      // goes to menu screen and resets message
      toggleMenuScreen();
      messageLabel.style.opacity = 0;

      // logs no new highscore
      console.log("no new highscore")
    }
  }, 1500); 
  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Update game values
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Shift down function , shifts userinput to oldinputI and so on
function shiftDown() {
  // Variables of the text contents of the last four words
  var oldTextI = oldInputLabelI.textContent;
  var oldTextII = oldInputLabelII.textContent;
  var oldTextIII = oldInputLabelIII.textContent;
  var oldTextIV = oldInputLabelIV.textContent;

  // Shift the text down by one element then sets the inputbox to blank
  oldInputLabelI.textContent = userInputBox.value;
  oldInputLabelII.textContent = oldTextI;
  oldInputLabelIII.textContent = oldTextII;
  oldInputLabelIV.textContent = oldTextIII;
  userInputBox.value = "";

  // plays the click sound when shifted down
  playSound(clickSound);

  // check if the new word matches the goal word
  if (isWordGoalWord(oldInputLabelI.textContent, goalWord)) {
    // creates new set
    randomWordGen();
    // update score
    updateScore();
  }
}

// updates score
function updateScore() {
  // increases score variable by one and then sets contents of score label to score value
  score++;
  scoreLabel.textContent = score * scoreMultiplier;

  // sets highscore score label to current score
  highscoreLabel.textContent = parseInt(score * scoreMultiplier);

  // plays ding sound when player scores
  playSound(correctSound);

  // gets positive message
  positiveMessage();
}
// updates attempts
function updateAttempts() {
  // Attempts character value
  var str = "X ";
  
  // decreases attempts by one and then sets the label to how many attempts are left
  attempts--;
  attemptsLabel.textContent = str.repeat(attempts);

  // plays wrong sound
  playSound(wrongSound);

  // brings attention to userinput to show that they were wrong
  userInputBox.style.transition = "all .5s";
  userInputBox.style.fontSize = "6.5vh";
  userInputBox.style.color = incorrectcolor;

  // returns to default settings and clears the input after half a second
  setTimeout(function() {
    userInputBox.style.fontSize = "5vh";
    userInputBox.style.color = "";
    userInputBox.value = "";
  }, 500);
  
  // tests for when no more attempts are left
  if (attempts == 0) {
    // runs if multiplayer is enabled
    if (multiplayer()) {
      // if there is no first player score
      console.log("score is", score);
      console.log("player 1 score is" , firstplayerscore);
      if (firstplayerscore < 0) {
        // sets firstplayer score to the score they got
        firstplayerscore = score;

        // logs first score 
        console.log(firstplayerscore);


        // 
        reset();
        randomWordGen();
        
        // announce player 2's turn
        setMessage("Player 2", correctcolor);

        // start game for next player by resetting and creating new word set after a short delay
        


        // if first player has played before
      } else {
        
        // announces winner and ends thee game
        multiplayerWinner(firstplayerscore, score);
      }
      
    } else {
      // ends game for singleplayer
      endGame();
    }
    
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Testing Functions 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Tests for one letter difference
function oneLetterDifference(word1, word2) {
  // strings need to be same length
  if (word1.length != word2.length) {
    return false;
  }
// iterates through each letter in both words. 
// if difference, difference variable increase by one
  let difference = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] != word2[i]) {
      difference++; 
    }
  }
// returns true or false if difference is more than one
  return difference == 1;
}

// test for word in the dictionary array
function wordInDictionary(word, dictionary) {
  // returns true or false if word is in array
  return dictionary.includes(word);
}

// checks if userinput is the goal word
function isWordGoalWord(word1, word2) {
  // returns true or false if words are the same
  if (word1 == word2) {
    return true;
  } else {
    return false;
  }
}

function multiplayerWinner(score1, score2) {
  console.log("Scores:", score1, score2); // Log the scores to the console

  if (score1 > score2) {
    console.log("First Player Won");
    setMessage("Player 1 Wins!");
  } else {
    console.log("Second player won");
    setMessage("Player 2 Wins!");
  }

  setTimeout(function() {
    // ends the game
    endGame();
    // resets firstplayerscore
    firstplayerscore = -1;
  }, 1500);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Event listeners for Game
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// starts game when play button on menu screen is clicked
playButton.addEventListener("click", gameStart);


// calls enterkeydown function for when key is pressed
document.addEventListener('keydown',enterKeyDown);

// #endregion

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Leaderboard Functions
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #region

// table element
var rows = document.querySelectorAll('.leaderboard table tbody tr');

// arrays to hold usernames
var usernames = [];
var scores = [];



// uploads leaderboard table values to the arrays
function getLeaderboard() {
  // resets arrays from previous
  usernames = [];
  scores = [];

  // goes through each row in the table and gets username and score
  for (let i = 0; i < rows.length; i++) {
    // gets elements from row
    var cells = rows[i].querySelectorAll('td');

    // sets username and score to value of cell
    var username = cells[0].textContent;
    var score = parseInt(cells[1].textContent);

    // appends value to the arrays
    usernames.push(username);
    scores.push(score);
  }

  console.log(usernames);
  console.log(scores);
}

// updates leaderboard with new scores
function updateLeaderboard() {
  // loop through each row in the table and update username and score values
  for (let i = 0; i < rows.length; i++) {
    // get elements from row
    var cells = rows[i].querySelectorAll('td');

    // update username and score values
    cells[0].textContent = usernames[i];
    cells[1].textContent = scores[i];
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Testing functions 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// tests if score fits into leaderboard
function highscoreTest(score) {
  // gets current leaderboard
  getLeaderboard();

  // goes through each score and sees if it is bigger
  for (let i = 0; i < scores.length; i++) {
    // returns true if score is greater than or equal to index in array
    if (score >= scores[i]) {
      return true;
    }
  }
  return false;
}

// inserts the score into the leaderboard
function insertScore(score) {

  // index number used to iterate through the list
  let index = 0;

  // finds the position where new score should be put
  while (score < scores[index] && index < scores.length - 1) {
    index++;
  }

  // shifts scores to down without overriding ones before it 
  for (let i = scores.length - 1; i > index; i--) {
    scores[i] = scores[i - 1];
  }

  // shifts usernames down without overriding
  for (let i = usernames.length - 1; i > index; i--) {
    usernames[i] = usernames[i - 1];
  }

  // sets empty spot to the new score
  scores[index] = score;

  // sets empty spot to new username
  usernames[index] = usernameInput.value;


  // removes last items in the array so it stays at the top ten
  scores.splice(10, 1);
  usernames.splice(10,1);

  // filter out any NaN values from scores array
  scores = scores.filter(score => !isNaN(score));

  // logs the leaderboard arrays
  console.log(scores , "\n", usernames);

  // updates the leaderboard to show new information
  updateLeaderboard();
}

// #endregion


