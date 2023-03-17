
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
  "comae", "slush", "slots", "leuco", "daker", "deshi", "creek", "total", "hotel", "stack", "lefty", "saick", "idols", "agave", "gryke", "damme", "paysd", "thebe", "bravo", "souls", "wexed", "voars", "limos", "bajus", "abort", "amain", "bogey", "massy", "perky", "donna", "press", "gales", "brogs", "pesto", "flush", "anent", "jiffy", "ooses", "slams", "yawed", 
  "rumpy", "louma", "goxes", "feese", "varan", "human", "pargo", "arett", "glaik", "hault", "laces", "seeks", "bowet", "faine", "sexts", "readd", "bosks", "nosey", "suety", "kotos", "reefs", "blown", "peaty", "skirt", "yampy", "smowt", "fraus", "decaf", "beaks", "tawer", "windy", "tores", "triff", "yechs", "tacky", "birth", "moils", "romas", "bakes", "scugs", 
  "ohone", "swish", "cheka", "whoso", "tulle", "duces", "upjet", "crump", "mosts", "punas", "urnal", "bulky", "sways", "since", "geste", "bulbs", "repin", "gnaws", "nebek", "kells", "shave", "local", "dholl", "draff", "lunge", "shuns", "heuch", "felly", "hasty", "treen", "nidus", "sodic", "sewen", "calla", "jakes", "kelty", "jambs", "almud", "yaups", "apage", 
  "embar", "chard", "ruche", "rejon", "shtum", "anole", "latex", "trunk", "whids", "syens", "calmy", "samen", "metho", "pound", "maron", "almas", "biome", "toyon", "gerne", "copra", "moola", "choko", "civil", "kipes", "waker", "glens", "lupin", "icier", "cundy", "shear", "begum", "wreak", "codex", "pulka", "snead", "piton", "prats", "serry", "jurel", "caird", 
  "ingle", "sowed", "ravin", "coded", "nodal", "pongo", "chica", "blain", "yoops", "hoots", "gaups", "kings", "newer", "foyne", "cines", "luter", "swack", "buffe", "seity", "swank", "oncer", "grike", "peeve", "fovea", "etape", "hawed", "narcs", "thigh", "voles", "crack", "pudus", "nonis", "perdy", "tocks", "sprug", "siren", "bemix", "slate", "laldy", "arums", 
  "dents", "picks", "chive", "lofty", "glaum", "buffo", "seifs", "togas", "macon", "bloom", "ables", "delly", "strew", "koaps", "sheol", "peaky", "spray", "jutes", "salvo", "moats", "nanny", "divis", "eldin", "taals", "types", "hayey", "borde", "rance", "opted", "pelon", "rayah", "plyer", "stubs", "scrow", "bitsy", "saucy", "tesla", "sluff", "beret", "cymes", 
  "snaky", "firth", "revel", "toyer", "maths", "hilch", "pates", "milos", "primp", "crops", "count", "wonky", "swerf", "rajas", "whamo", "agate", "cocoa", "genty", "yarks", "corbe", "sieve", "eaned", "purin", "qanat", "taigs", "exing", "luaus", "bajri", "frowy", "tines", "axmen", "cants", "claes", "takas", "nonce", "oupas", "racer", "saree", "gusli", "table", 
  "twiny", "selfs", "racks", "stall", "melon", "vrous", "eases", "posit", "prore", "bungs", "bises", "randy", "iambs", "pirls", "toped", "prism", "kiers", "reans", "fibro", "crims", "abbed", "posed", "coths", "tarty", "sessa", "corgi", "cirri", "punny", "mitts", "ulnar", "frugs", "betas", "swies", "lowed", "evets", "hoary", "doree", "apter", "pilei", "ramis", 
  "piths", "mooli", "toric", "wimps", "haars", "tweet", "noyed", "drant", "glisk", "urges", "jomon", "faery", "coses", "amber", "tuned", "biked", "surah", "carby", "wayed", "centu", "soups", "nudie", "tacks", "gormy", "cloam", "salol", "unrip", "chime", "sapan", "frats", "crepe", "sayne", "groan", "lieus", "laugh", "cloot", "galea", "cangs", "brens", "manly", 
  "delis", "leets", "skear", "speil", "tanga", "yales", "demos", "stunk", "routh", "altos", "lunks", "shalt", "skoff", "theek", "allee", "munga", "rebit", "cadee", "glede", "guids", "betel", "sirih", "ramet", "tryma", "aedes", "tossy", "enows", "paned", "tiges", "looks", "twats", "cleek", "linin", "deled", "minas", "began", "pilot", "blond", "lagan", "poupe", 
  "steer", "molla", "sados", "gusts", "hists", "clock", "muxed", "hayer", "orate", "colts", "moops", "scuts", "bowed", "apsos", "aglet", "tames", "jujus", "etage", "noels", "talls", "scray", "shags", "pongy", "towse", "soyle", "gript", "pucka", "bluet", "seame", "chelp", "shuln", "vuggs", "blype", "dadas", "atria", "redry", "chals", "tophi", "parky", "mined", 
  "rushy", "untin", "katis", "congo", "vints", "dunts", "bales", "ikans", "dough", "corms", "situp", "ghaut", "rugby", "biccy", "kasha", "parra", "speos", "evite", "whine", "begun", "royst", "segos", "chiks", "sloid", "pulse", "cesta", "spoil", "cabob", "homes", "loops", "mirky", "fuffy", "delfs", "kemps", "mowed", "blobs", "hemes", "frore", "dance", "swoln", 
  "tabes", "gnows", "pelas", "peece", "large", "cinct", "derby", "mensh", "bogie", "least", "liars", "salue", "hoons", "beset", "scree", "lassu", "tewel", "adaws", "offed", "didie", "penks", "navar", "copes", "buteo", "panel", "wawes", "camus", "lurgy", "arepa", "diner", "raves", "yarta", "exies", "floor", "peril", "bugle", "mothy", "tacts", "balti", "lento", 
  "meads", "grana", "trend", "wooer", "tooth", "ridgy", "miser", "dicta", "sneak", "scuta", "hoven", "lifes", "spiry", "gimpy", "veiny", "benis", "temes", "nates", "mosso", "sexer", "japed", "steep", "suent", "exits", "prunt", "cauls", "erics", "throw", "trans", "tatus", "korun", "hamal", "idled", "tubar", "meows", "ahind", "simps", "churn", "corby", "dules", 
  "baffs", "minks", "psion", "baths", "foggy", "cased", "muntu", "vogue", "fanga", "guide", "feats", "ionic", "boxen", "weens", "risus", "culch", "scrab", "stipe", "midge", "todde", "coots", "betta", "snoot", "glibs", "tribe", "pools", "exine", "joins", "camas", "burds", "wager", "mammy", "snook", "reink", "sicks", "gemel", "doseh", "jumps", "flume", "motte", 
  "timid", "ruble", "gager", "aleck", "dekko", "nowty", "scand", "koses", "scant", "quote", "nenes", "creak", "donny", "booth", "antar", "saker", "oasis", "soyas", "rives", "tenes", "reges", "satin", "yonic", "locks", "maaed", "winey", "gater", "cafes", "truer", "velds", "lemes", "middy", "drest", "pyres", "raser", "daman", "slubb", "faqir", "renin", "sensi", 
  "huffy", "shuts", "sissy", "cough", "knell", "tryke", "vehme", "biped", "lynes", "utile", "shool", "petti", "grice", "budis", "fared", "naevi", "genes", "scums", "calps", "lamby", "nooks", "bloke", "ticks", "waded", "venue", "helix", "tangy", "algas", "spout", "yoofs", "tsadi", "prime", "mange", "fidos", "farts", "frust", "mucic", "posts", "unfit", "trest", 
  "lassi", "crabs", "vired", "yesks", "scram", "haiku", "skelf", "dared", "chich", "cocco", "blaes", "hadal", "totty", "curie", "gawcy", "welke", "bunje", "resow", "corks", "freak", "sofar", "rines", "vamps", "avoid", "lerps", "chota", "piles", "shirr", "demon", "omits", "riped", "nimbi", "gates", "vants", "exode", "roily", "yeven", "blank", "salic", "crees", 
  "halfs", "kedgy", "sawer", "bevel", "glary", "kaphs", "jacky", "amins", "freer", "patus", "reame", "tryer", "rises", "woald", "yirth", "tater", "ogled", "dowie", "susus", "sonic", "arede", "auger", "coils", "girls", "poohs", "toged", "pries", "stims", "herbs", "axled", "dumas", "glady", "vixen", "abyss", "leads", "alkos", "welch", "prove", "bancs", "eaves", 
  "lined", "pursy", "frosh", "goral", "teade", "rower", "tying", "boney", "lobed", "taxes", "hawse", "nicky", "triac", "lakin", "funny", "kibbe", "lobus", "balky", "resaw", "herds", "saves", "pansy", "fermi", "mires", "sopra", "predy", "rites", "gores", "cheat", "flank", "costa", "ileal", "palpi", "reird", "arson", "kente", "khuds", "karat", "tomes", "tirls", 
  "dopes", "marka", "demes", "flawn", "mules", "jolty", "ridge", "ratoo", "vesta", "sprod", "clads", "bufos", "sowth", "stump", "lovey", "tapir", "ugali", "saran", "jotty", "pagod", "urdee", "vised", "wries", "yince", "close", "begem", "thirl", "hurly", "clime", "raths", "coits", "mungo", "renew", "bayes", "pawaw", "conia", "blink", "binks", "mynah", "gurly", 
  "largo", "cooed", "spain", "braid", "duppy", "emeer", "caphs", "dicer", "ylems", "decoy", "skelm", "diked", "doilt", "hahas", "volti", "veily", "shawl", "sweep", "wicks", "rieve", "prese", "maven", "nodus", "tawas", "vibes", "admit", "curny", "redia", "delts", "belie", "pioye", "kanga", "genip", "salve", "unsew", "oller", "scudi", "bores", "homed", "cutto", 
  "kites", "kilps", "douks", "irony", "coyed", "cargo", "thoft", "pupas", "skols", "waurs", "blaws", "maids", "telos", "afros", "frati", "fires", "lutea", "pavis", "airts", "idler", "pains", "talea", "fucks", "caneh", "shads", "aband", "butts", "morra", "porae", "rumal", "yanks", "gluey", "yelks", "kyars", "nould", "cribs", "deary", "dormy", "enarm", "cardy", 
  "nancy", "caved", "fatty", "fribs", "maras", "weise", "curbs", "tasks", "holks", "roans", "thans", "mythi", "barns", "leman", "lirks", "toddy", "gangs", "moist", "gowks", "wheel", "sinky", "recut", "stare", "baser", "whack", "allod", "burnt", "tynes", "hogan", "eking", "swill", "scapa", "hooks", "nemns", "uraos", "trial", "honey", "grouf", "tawed", "women", 
  "frier", "jebel", "belee", "marvy", "banco", "clipe", "crony", "hills", "orach", "poods", "tenue", "tifts", "toils", "valid", "polly", "pooja", "steel", "doing", "vinas", "basse", "lowne", "login", "techs", "crude", "earth", "mythy", "hunks", "mutes", "stoat", "wived", "burbs", "balds", "arsed", "memes", "pixel", "debag", "subas", "abaya", "gawsy", "sting", 
  "meint", "tried", "hoick", "mosks", "aided", "hiant", "akene", "ferns", "kraft", "hakea", "nicks", "nempt", "ombre", "jests", "hiver", "besit", "bleys", "riven", "grese", "fleas", "spaer", "lodes", "kiddo", "anigh", "wanly", "shlub", "appal", "rebec", "steek", "leuds", "bunjy", "wince", "salep", "eathe", "awner", "murrs", "reded", "bunch", "muids", "alpha", 
  "nikau", "porch", "gamed", "waxes", "ancle", "fluor", "credo", "albas", "hulas", "hashy", "diker", "pangs", "budge", "carap", "bowne", "runic", "pause", "ghast", "spars", "tolus", "prick", "brash", "ludos", "rales", "bardy", "neeld", "baddy", "naffs", "tenia", "monal", "cynic", "soots", "ofter", "wales", "fluid", "piggy", "pride", "surfy", "umbra", "coopt", 
  "nylon", "sayid", "props", "blimy", "ready", "unpeg", "mikes", "maill", "caulk", "pales", "penne", "agene", "janny", "liers", "quena", "hawms", "rates", "genal", "babus", "shiva", "prent", "shone", "slats", "slued", "deter", "semen", "lurve", "meted", "plots", "pings", "touks", "wussy", "cedar", "bonne", "chout", "peris", "ileac", "mools", "yiked", "sough", 
  "oaken", "prexy", "intis", "lered", "jefes", "folly", "yuked", "borms", "chack", "birle", "rills", "redds", "maims", "hosen", "crews", "soggy", "fisks", "super", "yelts", "fytte", "metes", "foule", "dirts", "levis", "hotly", "where", "dorps", "wynds", "bleed", "cries", "sides", "gaucy", "mangy", "spoke", "baith", "hived", "major", "parry", "alowe", "fowth", 
  "pygmy", "loord", "maces", "dekes", "gryce", "molls", "longe", "reate", "limed", "aarti", "winks", "gemmy", "dalis", "theme", "fluky", "eched", "slaes", "bitch", "boeps", "tweer", "dobie", "thigs", "rapid", "vaire", "flyte", "hoggs", "twine", "hears", "lemel", "lumme", "psoas", "ceros", "raxed", "kecks", "linch", "unwit", "nopal", "bring", "snary", "rusas", 
  "laity", "sieth", "anise", "units", "darns", "bedel", "dhows", "kangs", "skier", "labis", "rakus", "syphs", "humfs", "lamps", "wends", "shell", "sorts", "onset", "spifs", "harms", "lotes", "sauch", "glams", "spado", "hymns", "spick", "loafs", "soops", "gawds", "tight", "defis", "reech", "agmas", "kebar", "dalts", "shorn", "spalt", "twins", "sites", "crays", 
  "runds", "aumil", "hebes", "roomy", "broch", "morse", "ybore", "fussy", "bewet", "lenos", "chowk", "kreng", "vimen", "wekas", "anils", "doter", "ruddy", "oundy", "laers", "snirt", "magic", "krans", "goors", "vireo", "yites", "conin", "creme", "flype", "barde", "rival", "miler", "gyppy", "crowd", "chubs", "rorid", "grigs", "inerm", "wicky", "whale", "sammy", 
  "ferry", "amuse", "fauns", "erick", "leaps", "flota", "livre", "tushy", "ariot", "snide", "nixie", "soupy", "brank", "mardy", "slipe", "aquae", "bunas", "sokes", "daric", "roses", "youse", "erase", "mirex", "moyas", "tophs", "borna", "terse", "warst", "arene", "cylix", "obits", "ranke", "remap", "goary", "tronk", "outed", "dowls", "jewel", "cluck", "curdy", 
  "house", "opens", "mangs", "dwang", "tiddy", "seals", "sakis", "scoot", "simas", "froes", "slorm", "tamer", "pyned", "stung", "kinos", "tinny", "kayos", "alecs", "baccy", "craps", "aping", "scrod", "balks", "murks", "shwas", "fists", "lurex", "dense", "spook", "hello", "spean", "rimus", "teddy", "dicot", "uncos", "jeans", "aweel", "stout", "dodge", "slips", 
  "optic", "grift", "hoagy", "cocas", "seedy", "wecht", "wrast", "fouet", "domic", "nacre", "sleep", "gadso", "micky", "snout", "butch", "pleat", "peeoy", "biros", "north", "uplit", "psoae", "smout", "dirks", "glout", "billy", "minae", "sophs", "tired", "bilge", "fenis", "drice", "spaul", "while", "sorex", "reiki", "queyn", "gelid", "barfs", "unwet", "grime", 
  "trull", "shaft", "karks", "wryly", "hyped", "pipal", "sleds", "amies", "skuas", "balls", "pigmy", "exeat", "jedis", "lares", "vivat", "waged", "dears", "doses", "slily", "totem", "manna", "saner", "boxed", "grand", "swaly", "torii", "comas", "minty", "debud", "atone", "thiol", "quant", "glime", "worse", "holed", "skive", "anele", "fundi", "shlep", "yarrs", 
  "milor", "meane", "round", "fiery", "clepe", "vexes", "cabas", "melds", "foray", "musca", "cymas", "plank", "plong", "yumps", "boyau", "plain", "foils", "croup", "kaput", "mumms", "jived", "sighs", "senna", "magus", "armet", "caput", "boyfs", "lathy", "taboo", "creds", "bings", "space", "plane", "upped", "shays", "ympes", "carvy", "toxin", "draws", "duffs", 
  "jukus", "rowth", "moppy", "fight", "cinch", "valor", "grego", "finos", "alkyl", "mayos", "peens", "hoard", "agers", "linky", "slick", "meffs", "omers", "loath", "write", "wyted", "rewan", "quota", "galls", "eagle", "homie", "ceder", "block", "rakee", "elder", "poovy", "pills", "sepia", "galop", "braai", "wetly", "glade", "cabal", "lowse", "sises", "hakam", 
  "prate", "curvy", "missa", "rabis", "cruck", "gypsy", "nines", "kiefs", "alarm", "jaunt", "rough", "unbed", "resew", "reede", "atomy", "askos", "beton", "kraut", "sarky", "stein", "tholi", "strut", "slang", "nasal", "keeks", "lolog", "hicks", "tinds", "piony", "sewar", "hemps", "shama", "fungi", "frost", "sines", "rawly", "slews", "viper", "fibre", "leapt", 
  "emend", "smear", "happy", "trapt", "gaudy", "diver", "phase", "hoods", "nomas", "kroon", "sairs", "honor", "fidge", "phial", "pulas", "deray", "buyer", "tanky", "maneh", "inept", "petar", "stagy", "yamun", "fakir", "fumet", "labia", "bossy", "refix", "cubeb", "hauls", "teats", "hedgy", "dryer", "abaca", "stuff", "niffs", "camos", "irade", "minim", "fayer", 
  "greed", "prang", "fonda", "pilus", "gonif", "scald", "amirs", "abacs", "bared", "spags", "gurge", "doobs", "apish", "yoghs", "musky", "aloin", "toots", "cesti", "relic", "sirup", "colly", "samey", "grama", "fents", "fader", "ripen", "bimah", "peavy", "amort", "casts", "soman", "pacas", "recce", "plack", "clerk", "mince", "adays", "gecks", "crogs", "nards", 
  "sense", "padis", "elves", "cetes", "varna", "drily", "corer", "leery", "guaco", "maker", "wacks", "anear", "steam", "flews", "clips", "sdein", "pyats", "thack", "cerge", "frate", "debes", "ratch", "rangi", "shock", "bantu", "crwth", "taper", "fritt", "apeek", "order", "feers", "buggy", "poofy", "linen", "sawah", "waled", "fraps", "emote", "iodin", "scare", 
  "groin", "pylon", "waugh", "fugue", "dorba", "apers", "trike", "mummy", "hithe", "panda", "decos", "araks", "heles", "fouds", "shyer", "thymi", "clegs", "mesel", "cered", "muddy", "tabby", "repos", "sages", "trigo", "kavas", "blins", "pores", "skatt", "buats", "margs", "shirk", "helos", "musty", "sient", "tabun", "aidoi", "fossa", "raven", "swabs", "reeds", 
  "niche", "serra", "drink", "newed", "kieve", "looie", "ended", "oared", "breem", "bolar", "wards", "abler", "yerks", "genii", "prial", "indow", "spelt", "kexes", "weils", "pouks", "laund", "pudgy", "lades", "satis", "hitch", "erven", "learn", "copal", "lammy", "winge", "perks", "farce", "fleme", "lymes", "toter", "trode", "prima", "plies", "twist", "abode", 
  "knurl", "licit", "pyrex", "riant", "micro", "bucko", "mamee", "serer", "brake", "swept", "hatch", "rawer", "bunds", "soave", "gumbo", "harps", "dorky", "kiths", "griot", "clams", "mobby", "furor", "suids", "jucos", "numbs", "moory", "eigne", "lipid", "urare", "bouts", "steem", "booms", "nerve", "traik", "madam", "drips", "socas", "heyed", "poral", "wryer", 
  "flown", "wuses", "esnes", "lyart", "yowes", "gibel", "holms", "axons", "pommy", "trugs", "dover", "peter", "stops", "think", "cobra", "gable", "holes", "urite", "sloot", "packs", "vitta", "haoma", "necks", "tempi", "warty", "tatts", "tules", "silly", "porky", "aloes", "asset", "odder", "smelt", "wifey", "oubit", "treck", "machs", "feals", "fands", "gaths", 
  "perry", "keens", "sagas", "coost", "leady", "samel", "sadhu", "clary", "hight", "durst", "washy", "aptly", "gayer", "antes", "ghest", "kynds", "fence", "varus", "loams", "feels", "holts", "mulga", "bunty", "kalif", "spaed", "paeon", "wests", "crout", "tryps", "civic", "dread", "unfix", "lewis", "dutch", "blimp", "garth", "fugal", "gator", "fouer", "juves", 
  "stonn", "booed", "shyly", "redid", "atony", "konks", "lills", "wanky", "forex", "dares", "tatie", "feare", "ravel", "clats", "lithe", "gravy", "beaut", "lippy", "nomos", "ecads", "folic", "yechy", "gibus", "bumbo", "rifer", "laved", "bekah", "barro", "kylin", "vower", "gooby", "souct", "bhels", "buffs", "bumpy", "drabs", "loral", "pryse", "atuas", "spode", 
  "jeeps", "hiker", "patly", "spims", "chays", "rusty", "lefte", "cadie", "wigga", "padri", "brick", "snogs", "cored", "draps", "horns", "pulao", "fasci", "burls", "upset", "sikes", "bonus", "wisht", "abrin", "kedge", "wives", "druse", "knarl", "duals", "kains", "quino", "shoes", "hussy", "piker", "gulch", "baker", "axile", "brava", "fetus", "rails", "pasta", 
  "bombs", "budas", "braxy", "jours", "arena", "pasty", "roums", "scale", "mucky", "doric", "stoln", "kinky", "texes", "drams", "edged", "downy", "aside", "horme", "redub", "roads", "stane", "adobe", "mease", "aglee", "hings", "joint", "shoon", "oasts", "scoff", "varas", "flogs", "grant", "sepad", "sutra", "sangh", "bocce", "casco", "focus", "pilea", "chump", 
  "coble", "leafy", "alans", "noria", "sanes", "skens", "chimo", "boohs", "inter", "rosit", "skart", "labra", "flamy", "luach", "scaud", "swims", "mitch", "slope", "kanas", "paint", "gorse", "tunny", "dicky", "muted", "kvell", "teaed", "awash", "poulp", "saims", "herse", "porny", "sweir", "humus", "twaes", "yukes", "sains", "caver", "kurre", "weans", "speir", 
  "whops", "edile", "hoved", "bandh", "storm", "vatus", "gally", "snots", "punts", "tenty", "ribas", "rhime", "pitta", "wispy", "poots", "beady", "ewers", "rudas", "serow", "hours", "conks", "nirly", "macer", "champ", "mochs", "natch", "drere", "loved", "dadah", "honks", "birks", "fired", "panto", "bruin", "clubs", "verge", "buran", "kurta", "slart", "abash", 
  "wadts", "roneo", "vares", "bindi", "anoas", "starr", "bilbo", "lends", "raits", "grypt", "hosey", "smirs", "avert", "bouge", "cream", "phono", "allyl", "gulfs", "kinas", "paths", "scorn", "blogs", "knowe", "ikats", "fling", "akita", "pules", "puses", "golds", "kores", "radio", "intra", "rewth", "chafe", "acres", "haafs", "maria", "verve", "mauls", "unmix", 
  "bally", "dibbs", "gasts", "robes", "fairs", "ensew", "numen", "soths", "rishi", "capes", "clast", "fluff", "fries", "nudes", "solos", "irons", "kaing", "torcs", "lanks", "penal", "gouts", "ruler", "rants", "stens", "recks", "seres", "roofy", "skyfs", "sural", "bloop", "rests", "seirs", "goris", "seems", "yards", "shark", "jurat", "vasal", "lawny", "shout", 
  "pagri", "waved", "burps", "stept", "letup", "mania", "armor", "sorda", "tamin", "feria", "coppy", "woold", "aunts", "yarns", "manic", "typal", "pling", "mongo", "haunt", "sedum", "ovals", "crine", "metif", "terra", "clash", "peons", "sanga", "pious", "cuter", "mecks", "yirrs", "shack", "alley", "ammon", "barks", "macho", "comfy", "delay", "abore", "jaaps", 
  "ratha", "frets", "dumka", "coomb", "saman", "agony", "nicer", "thymy", "stomp", "boody", "daily", "gilas", "mumus", "cages", "gloam", "trats", "goers", "plebs", "tynde", "fanos", "kants", "mulch", "minos", "quips", "lepta", "wauks", "tents", "cuddy", "naves", "oints", "sokah", "ganof", "teams", "netty", "trips", "makis", "snipe", "lumen", "thete", "whort", 
  "yurts", "coned", "films", "alifs", "clues", "lyams", "splat", "idola", "wamus", "shets", "tapas", "vinos", "stroy", "wreck", "lunes", "skins", "norma", "sidle", "marry", "eales", "fully", "ulnad", "parae", "spiks", "mihis", "ports", "kissy", "looms", "germs", "thali", "prose", "shmek", "nitre", "docks", "pasha", "spyal", "bowrs", "karas", "kojis", "parly", 
  "pacts", "grebe", "celts", "recon", "porta", "beano", "awake", "mulls", "becke", "shoos", "devil", "logic", "tosas", "dilly", "gofer", "lyted", "seism", "oches", "teers", "udder", "evens", "hauds", "weets", "bidon", "pulli", "ruers", "color", "eider", "mixes", "curli", "chasm", "vitae", "tacet", "feist", "snood", "humic", "morat", "flote", "amahs", "linns", 
  "doona", "gippy", "leccy", "spuer", "horse", "groom", "villa", "vaded", "tahas", "dicht", "glial", "wheal", "looey", "visas", "gnars", "veins", "derma", "pulls", "jonty", "tends", "anted", "nival", "twerp", "guava", "waifs", "pined", "larks", "corky", "brock", "earls", "sling", "narco", "spicy", "drusy", "surly", "ginks", "rolls", "cared", "fixit", "gilet", 
  "honer", "dives", "barps", "merry", "shuck", "unmet", "fused", "liefs", "rotte", "sinus", "epics", "soums", "blear", "suave", "motet", "ploys", "tutti", "piums", "meaty", "tusky", "jirga", "shawm", "gusto", "mopey", "feens", "lured", "whelm", "garis", "crewe", "tepee", "dwale", "spent", "teloi", "torta", "sered", "noris", "cornu", "gumma", "coled", "dyads", 
  "salon", "foley", "sonse", "staps", "mixen", "feral", "roost", "pebas", "plait", "argol", "hoops", "nasty", "mohel", "yarco", "bully", "nisus", "strad", "scoog", "sorer", "paire", "porns", "flock", "crypt", "bacon", "bocca", "marsh", "share", "taxus", "cyder", "fever", "donne", "trier", "dites", "mayan", "wents", "sneed", "duans", "furth", "bourn", "rojis", 
  "cosie", "lound", "logie", "rorie", "dript", "sidas", "mints", "three", "jowly", "waste", "gyron", "wefte", "solar", "saros", "gelly", "pekes", "batta", "diwan", "rubes", "waked", "girts", "facer", "dools", "pyxes", "juror", "doved", "sadhe", "nones", "muils", "gambs", "tided", "yawny", "waift", "claro", "porno", "saris", "circs", "picra", "swarf", "gride", 
  "nutso", "trout", "bykes", "thump", "fango", "felty", "deads", "lurch", "skene", "gammy", "rimes", "duple", "potch", "howls", "utter", "cairn", "capot", "scuse", "shily", "smews", "rhomb", "pirns", "motto", "levin", "owner", "rahed", "ankle", "sleek", "thing", "touch", "peeks", "urned", "coast", "vowel", "riced", "purls", "heare", "mails", "flute", "lanky", 
  "pitas", "moues", "semis", "fagot", "chose", "deres", "bavin", "fifes", "syren", "syver", "fichu", "moste", "maare", "wilis", "drill", "greve", "poule", "shown", "fubby", "kobos", "janes", "pical", "eying", "byres", "drone", "rutin", "oread", "nulls", "cobby", "minds", "skelp", "tarot", "shire", "shame", "vleis", "oncus", "haets", "baulk", "pokes", "bored", 
  "loose", "bonks", "ryked", "grasp", "adhan", "sasin", "tepid", "wakas", "acred", "caner", "suite", "cides", "hasps", "frack", "pened", "pinto", "poses", "vawte", "sneer", "hallo", "froth", "bevor", "glims", "stray", "bolos", "girns", "odahs", "melas", "fonts", "dhals", "wenny", "brede", "flier", "pilar", "serks", "grade", "hamba", "massa", "sorus", "folds", 
  "corey", "force", "warby", "aimer", "poeps", "novae", "joist", "crock", "nares", "rodes", "liart", "roams", "doups", "whits", "fugio", "crate", "russe", "shish", "snaws", "askew", "syrup", "metal", "drain", "magma", "murex", "naval", "parse", "resto", "raxes", "baldy", "hales", "torsi", "brast", "vales", "gursh", "axoid", "ataps", "mayor", "easle", "aiver", 
  "solan", "south", "coats", "ruana", "yells", "syped", "duroc", "melik", "knive", "howff", "swipe", "bomas", "foxes", "cives", "nitty", "combo", "hains", "fawns", "furol", "ither", "sider", "fiars", "toros", "unmew", "noway", "flawy", "fenks", "chace", "lowly", "rages", "tuart", "polys", "kofta", "moles", "hying", "dunks", "soral", "geeky", "wadds", "clave", 
  "gadis", "vices", "carte", "astir", "soddy", "batty", "reaks", "fives", "troke", "scold", "doers", "prows", "fados", "jivey", "herby", "eloge", "topes", "dagos", "doucs", "coarb", "welkt", "merge", "skips", "eggar", "slice", "spied", "halms", "seers", "lumas", "tinty", "duked", "skoal", "agape", "fyces", "typed", "gutty", "blame", "frond", "coxal", "doats", 
  "sakes", "damar", "manor", "onces", "stirp", "brief", "buses", "asker", "heils", "bento", "seles", "balms", "palla", "weigh", "darre", "rebut", "peare", "donor", "rosti", "dying", "mutha", "ylike", "sicko", "matey", "hovea", "keyed", "daunt", "globe", "dolls", "prise", "galvo", "apert", "fugie", "gleby", "clued", "aryls", "tsars", "comma", "broad", "kuias", 
  "ousts", "afara", "chaco", "cults", "shies", "gelts", "vails", "swive", "hobos", "waler", "shote", "range", "eaved", "rifte", "nubby", "gadje", "mucus", "siens", "parvo", "reefy", "tilak", "bijou", "cowps", "dicts", "prole", "pulis", "defer", "merls", "deens", "dolce", "towel", "kalam", "elint", "sleer", "glass", "stour", "quyte", "menad", "javel", "plows", 
  "quash", "hubby", "hoten", "sords", "irids", "poted", "finds", "clear", "piper", "curds", "runes", "smote", "goops", "poppa", "drugs", "poney", "stony", "rurps", "aloft", "woods", "acini", "stilt", "canes", "mashy", "vinal", "files", "siver", "abele", "dropt", "pubic", "lythe", "renig", "wared", "kippa", "blued", "hated", "bible", "urena", "bread", "colon", 
  "joyed", "roary", "scuds", "slubs", "smolt", "grown", "bohos", "techy", "aredd", "mimsy", "rater", "cursi", "topos", "wench", "deevs", "santo", "nerks", "blady", "remen", "inlay", "chavs", "unled", "blore", "vinew", "waken", "infer", "lotas", "ether", "phyle", "edger", "stupe", "teggs", "nifes", "droop", "hewer", "rokes", "piped", "tamal", "aitus", "yaird", 
  "droll", "saved", "vocab", "clart", "blite", "talpa", "dobro", "carex", "rheas", "furry", "seeld", "brays", "blows", "jaggs", "neums", "amate", "knuts", "caboc", "boons", "wilja", "ledgy", "ureic", "chias", "hyens", "turfy", "perns", "cyber", "chirl", "carps", "crepy", "medal", "snobs", "sabes", "perdu", "curve", "sored", "spoom", "houff", "certs", "nurdy", 
  "ronne", "trogs", "locus", "monos", "turfs", "beefs", "going", "umber", "doula", "pukes", "menta", "worth", "gages", "loran", "heths", "resat", "natty", "nabob", "marle", "unsod", "surds", "genoa", "basil", "murre", "gotta", "dures", "idles", "ering", "heart", "gandy", "modus", "would", "rabid", "fords", "preys", "crisp", "rores", "temps", "nites", "hoiks", 
  "riems", "turds", "scent", "taint", "argal", "motey", "masks", "fasts", "paspy", "forte", "eyrir", "oumas", "idees", "gully", "tiros", "hapus", "whirs", "metic", "daine", "gripe", "aport", "chook", "coups", "runty", "abuts", "winch", "pirai", "igged", "chico", "pedal", "basks", "augur", "weald", "tosed", "quate", "garbo", "pinko", "exile", "flams", "pelts", 
  "jiver", "goels", "aloud", "urari", "nomes", "tegua", "tumps", "ogler", "ainga", "areic", "kutas", "eased", "shogs", "malty", "synes", "whews", "sixth", "panes", "cager", "orgue", "nevus", "swami", "niger", "myths", "poach", "tasty", "dukes", "tohos", "sixty", "chado", "bimas", "knaps", "pikas", "react", "umbel", "pongs", "bombe", "whets", "lated", "leams", 
  "lilos", "prune", "sever", "axone", "taluk", "pouff", "musha", "scams", "unces", "manto", "sensa", "ksars", "trail", "stupa", "verbs", "pones", "hater", "drown", "salop", "flamm", "scala", "ships", "shard", "kaies", "regos", "fugly", "sacks", "iliac", "whelk", "shook", "kabob", "hamed", "scurf", "genas", "molds", "goads", "phage", "korai", "daffy", "amine", 
  "crool", "hinky", "lobos", "derns", "bushy", "vaned", "dupes", "acold", "rakis", "babel", "kaneh", "ribby", "scowp", "artis", "bogle", "kaims", "fryer", "lusus", "sawed", "segar", "dribs", "tuxes", "bream", "flosh", "unsay", "mohrs", "repot", "basho", "flied", "bough", "blend", "brume", "eared", "faced", "raine", "rooks", "finer", "rudie", "tiffs", "slaty", 
  "pheon", "talcy", "dukas", "reiks", "jouks", "drags", "pokey", "pipas", "wembs", "inset", "aroha", "rudds", "minus", "alder", "yoick", "haled", "pooch", "thana", "fanon", "banes", "logoi", "ranch", "kaugh", "thraw", "haffs", "likin", "notch", "remex", "burgs", "tranq", "pisos", "takis", "relet", "troat", "keech", "orval", "wacky", "anile", "amoks", "bruit", 
  "scath", "thawy", "arval", "cramp", "caned", "kevel", "voxel", "lords", "smash", "chevy", "horsy", "soote", "swops", "uraei", "dries", "typos", "apays", "binal", "moody", "clomp", "aldea", "rammy", "coste", "synod", "quoll", "bedew", "allot", "coifs", "faces", "deave", "vapid", "sonsy", "dally", "nippy", "codec", "molal", "rinds", "stint", "pilow", "chirk", 
  "weeny", "coved", "bears", "eorls", "esses", "coyer", "aunes", "sided", "haufs", "vivid", "stoas", "docos", "wanks", "manse", "monte", "roars", "boyar", "gosse", "trads", "thelf", "voter", "prost", "pujah", "noser", "swart", "filly", "troak", "whirr", "bolas", "dower", "fayre", "aloed", "raffs", "cuppy", "spews", "brawl", "jerky", "misty", "sophy", "sente", 
  "clows", "semes", "bouse", "slish", "gorms", "thumb", "terai", "noxes", "korus", "gynae", "roofs", "awned", "agoge", "gunny", "whist", "lavas", "filos", "often", "buhrs", "curls", "mucid", "nowls", "argue", "saugh", "treks", "quake", "feyer", "slosh", "bitte", "hiree", "urson", "flash", "sabir", "threw", "goons", "chemo", "grace", "stoor", "lough", "kyats", 
  "mumsy", "comer", "scups", "gooey", "virga", "wally", "atoks", "blags", "laics", "yocks", "vivas", "brere", "grone", "toads", "hoked", "royne", "gucks", "sloth", "coder", "swale", "leish", "stets", "biota", "treat", "murva", "trays", "whish", "bield", "moult", "aulos", "tanks", "carta", "fixes", "teuch", "urged", "bytes", "yoked", "foods", "beers", "bleep", 
  "cadet", "brent", "minge", "unlit", "cusks", "skugs", "veeps", "phone", "doles", "forty", "labda", "spume", "owlet", "kelly", "stell", "geode", "loins", "scabs", "geres", "tways", "sumph", "kanae", "alive", "fried", "mommy", "steds", "suets", "skits", "onlay", "backs", "deism", "gated", "sture", "stern", "brame", "posey", "knubs", "cacao", "dinks", "copsy", 
  "acyls", "story", "xysts", "autos", "gawps", "kipps", "byrls", "frith", "neons", "ludes", "blash", "blase", "dwaum", "bubas", "plays", "cards", "raked", "daces", "frame", "kudus", "loamy", "gawky", "darks", "dills", "campi", "kypes", "plans", "cliff", "lauan", "blaer", "pauls", "amlas", "lucks", "rolfs", "plier", "canto", "dowps", "picot", "modii", "dumpy", 
  "suers", "favus", "chirt", "fonds", "mates", "afore", "cuing", "seder", "bafts", "ayahs", "rarer", "quill", "genet", "plums", "mauby", "alert", "yearn", "abled", "nixer", "rowen", "cukes", "chill", "funds", "barry", "hoord", "tondi", "pulmo", "lyard", "pawks", "palms", "wists", "nomad", "teiid", "hests", "reses", "watch", "yapps", "wanty", "amici", "wafts", 
  "cooms", "owrie", "caste", "luxes", "regal", "belle", "acker", "vives", "mieve", "bowes", "loupe", "smore", "benty", "whiny", "derro", "cerne", "foals", "genus", "judge", "lines", "media", "burke", "noose", "conic", "howdy", "turps", "dogey", "canty", "spies", "dorbs", "kukus", "erses", "pines", "opals", "sexes", "arret", "scend", "neese", "wools", "momus", 
  "chefs", "wader", "bousy", "whole", "hypos", "gimel", "nelly", "chibs", "plues", "flips", "pance", "stela", "laser", "geare", "flops", "loges", "sekos", "bydes", "tubal", "colic", "sebum", "choir", "hared", "steen", "nanna", "pudic", "vasty", "cheap", "semee", "oyers", "rhyne", "jinks", "prods", "lurgi", "fests", "ronde", "raged", "clump", "rebar", "kilos", 
  "soles", "silts", "apses", "ardor", "chord", "sames", "paven", "cleve", "undee", "faker", "waves", "wynns", "mouls", "gooly", "deely", "leaky", "ditas", "place", "blurb", "taxer", "cloak", "buchu", "staph", "madge", "bones", "bulge", "mesto", "jails", "guana", "godso", "setts", "dacha", "spelk", "puler", "hurst", "fundy", "hirer", "flays", "joram", "nabla", 
  "boned", "neems", "dells", "spale", "negus", "tsade", "dicks", "spade", "plink", "plume", "geese", "mower", "debel", "bigot", "ponga", "jooks", "tenny", "krona", "papes", "brogh", "gambe", "gassy", "tacos", "revie", "theed", "spier", "gouty", "motor", "whorl", "wites", "lycea", "yours", "comal", "stars", "chape", "famed", "teals", "durrs", "gipsy", "chugs", 
  "downa", "malis", "clove", "rhine", "recit", "sambo", "noops", "krabs", "pinky", "punty", "quail", "facet", "skort", "dryly", "apode", "pupus", "guyle", "fasti", "daled", "shoot", "marms", "pareu", "amino", "walds", "hetes", "gives", "babul", "speed", "absey", "eskar", "slyly", "awarn", "powny", "vulva", "boule", "chase", "mount", "causa", "betid", "laufs", 
  "scops", "phohs", "brisk", "rewed", "talma", "wexes", "sewel", "gynny", "arked", "bepat", "chalk", "tokos", "gived", "fauts", "bowie", "korat", "husky", "mugga", "unite", "kalis", "kylix", "alays", "dabba", "ponks", "taxis", "stoai", "yeses", "elver", "yecch", "haems", "stoss", "fated", "auric", "staws", "brods", "knees", "oracy", "alfas", "lefts", "sonny", 
  "codon", "cacky", "snake", "cisco", "tramp", "vowed", "winos", "saxes", "siler", "daynt", "heeds", "sneck", "spang", "didos", "cleep", "thens", "mulse", "again", "tiles", "wifty", "kinds", "yirds", "strae", "girds", "party", "bluff", "peaks", "rowan", "stimy", "weird", "jager", "puces", "mealy", "debar", "reaps", "grame", "jumpy", "weels", "genom", "rerig", 
  "loirs", "gouge", "trone", "seepy", "crawl", "ganch", "caple", "stave", "buffa", "urial", "gests", "chawk", "abray", "khats", "dauby", "hades", "third", "swede", "broil", "wings", "brine", "chais", "gleed", "showd", "timps", "ashed", "angel", "polka", "giron", "taken", "ocher", "dunch", "jenny", "onery", "thong", "breds", "missy", "cycad", "idyll", "tarts", 
  "sweer", "saith", "humpy", "yeuks", "suber", "pulps", "hoppy", "kiley", "antis", "skaws", "vigas", "virls", "wongi", "leans", "crags", "wigan", "blini", "reast", "glees", "ticky", "spues", "might", "tined", "reedy", "meers", "gilpy", "throb", "tammy", "baboo", "shake", "piano", "nalla", "blive", "xeric", "truss", "clefs", "chivs", "roted", "cruse", "stabs", 
  "grisy", "tappa", "burks", "pyets", "rager", "furls", "yagis", "stale", "remix", "hoxed", "label", "bitts", "straw", "yowls", "arbor", "avast", "somas", "pitch", "swith", "trues", "dargs", "yugas", "scans", "telia", "plats", "niter", "caged", "quite", "rides", "acidy", "stems", "boink", "leafs", "aspen", "bower", "vibex", "blots", "volte", "tirrs", "smerk", 
  "flurr", "nills", "valve", "slums", "basic", "logan", "emove", "segol", "apply", "jiffs", "bombo", "crane", "bitos", "sewin", "whens", "spald", "salse", "dexes", "drake", "smart", "wonks", "humps", "swopt", "vagal", "clack", "limpa", "dusty", "girth", "solid", "twyer", "woads", "bayed", "faffs", "hefte", "skags", "huffs", "woman", "bolus", "biffo", "darts", 
  "serre", "ology", "gills", "strag", "gimps", "polks", "wonts", "dirke", "maiks", "rifty", "teads", "wedge", "monie", "ligge", "alcos", "basin", "yetts", "moove", "drool", "dowel", "jarks", "perve", "tamed", "queen", "scrae", "meets", "weeks", "boron", "rands", "toxic", "payed", "sidhe", "ehing", "skimp", "lande", "smurs", "tupik", "saine", "artal", "yawns", 
  "hangs", "chink", "kenos", "whins", "terry", "faves", "gaged", "orant", "laten", "inapt", "jirds", "gadid", "camps", "rayas", "limma", "losen", "berth", "ribes", "ahent", "apsis", "capas", "girsh", "until", "tamps", "goofs", "roker", "urent", "spank", "swapt", "pisco", "yummy", "repps", "hiply", "kopek", "yente", "fykes", "laids", "strig", "crone", "loans", 
  "vangs", "quims", "twain", "tarok", "pogey", "resid", "spods", "brown", "puddy", "pilis", "enfix", "quits", "dolci", "frows", "beaky", "ached", "panne", "disks", "clunk", "frorn", "taver", "chums", "yorps", "ferms", "visto", "coupe", "belly", "appui", "bunya", "thema", "woofs", "effed", "slurb", "raced", "herms", "crept", "sikas", "hurra", "roups", "milko", 
  "tumpy", "mussy", "uredo", "confs", "viler", "stays", "clied", "eilds", "dowts", "fural", "vughs", "risps", "slopy", "yarer", "clang", "pibal", "leare", "picky", "mouse", "boars", "jesse", "frena", "slaid", "durgy", "choof", "tikes", "grogs", "flies", "liner", "acids", "farls", "maxis", "gilly", "crook", "choux", "pudsy", "yokes", "yuppy", "deash", "navel", 
  "pears", "lawer", "nurrs", "tenno", "shive", "kests", "tabus", "flack", "puffy", "sedan", "teaks", "piers", "sorry", "gluts", "trass", "huers", "mense", "snebs", "horny", "rafts", "fillo", "lives", "coyly", "tungs", "rajah", "atimy", "harpy", "laris", "rusks", "riels", "wrapt", "taxor", "mucro", "gular", "hakus", "vades", "tolls", "knits", "flake", "momma", 
  "plump", "splay", "nuffs", "pinot", "olive", "staun", "rated", "scary", "cheer", "waldo", "scope", "neats", "chola", "photo", "mufti", "odals", "stick", "burse", "agent", "brook", "money", "tuffs", "wroth", "fetts", "eiked", "araba", "cissy", "dulls", "rhumb", "hulls", "jeton", "mesne", "event", "relie", "guano", "peghs", "sniff", "butle", "rumbo", "torot", 
  "lager", "karts", "barmy", "gambo", "rerun", "trins", "dikey", "cigar", "natis", "titch", "fiest", "boles", "rayle", "mural", "typps", "reave", "cooee", "paisa", "jolts", "villi", "mercs", "geats", "kamme", "shans", "colas", "nonny", "yuans", "swage", "renne", "leese", "voice", "dhole", "pouke", "shott", "sythe", "yangs", "parev", "halid", "conge", "shorl", 
  "waqfs", "forme", "malwa", "diffs", "twite", "banjo", "style", "boite", "matin", "staig", "raggy", "quass", "apace", "quilt", "soaks", "pated", "nouls", "molly", "loofa", "limby", "hotty", "looby", "mamey", "potto", "damns", "lingy", "chiel", "etats", "about", "opter", "joust", "emery", "flora", "tweed", "sarge", "stoae", "bound", "deedy", "belts", "virus", 
  "dicty", "tansy", "tempt", "prude", "setup", "groks", "besaw", "poles", "korma", "reuse", "sayed", "khaya", "ticed", "filet", "maxes", "masus", "viola", "start", "raper", "kaury", "piler", "arias", "kibbi", "duddy", "metis", "naunt", "knars", "picas", "ungot", "borer", "ranas", "poove", "atman", "makos", "warns", "powns", "gugas", "loxed", "teils", "yeves", 
  "snarf", "scatt", "beery", "speer", "stoit", "scull", "caber", "seils", "exons", "flirs", "geeps", "hawks", "teths", "vases", "jumbo", "seric", "bunks", "creed", "prigs", "overt", "pilaf", "fleys", "limps", "cores", "nuder", "paddy", "acnes", "patio", "chuck", "lofts", "noisy", "ahing", "dashy", "asper", "bogus", "mired", "tawts", "meals", "woons", "spurt", 
  "unpen", "cajon", "medii", "wases", "asked", "secco", "premy", "murri", "avens", "salty", "beeps", "bints", "teems", "fifed", "palps", "guilt", "mebos", "gummy", "tecta", "cymae", "klick", "hunts", "ariel", "nudge", "sixes", "dorrs", "albee", "vibey", "parks", "cocks", "haram", "monas", "sargo", "rumly", "fjeld", "sorbo", "luged", "chank", "spawn", "banal", 
  "jougs", "neigh", "pluff", "parer", "begad", "gimme", "molas", "fetwa", "ovens", "chave", "jinns", "tendu", "marah", "curet", "yores", "lomed", "cwtch", "noggs", "ponty", "tonal", "agree", "wides", "abune", "brome", "shuls", "bacco", "reccy", "stope", "houts", "pandy", "peyse", "knurs", "pareo", "biggy", "habus", "soldo", "oiler", "quick", "banty", "ovels", 
  "lamia", "gleys", "manat", "aulas", "grief", "cuffs", "dedal", "lochs", "chott", "liney", "shall", "angle", "easer", "lists", "bapus", "frees", "riled", "ferly", "short", "burly", "syncs", "maggs", "marls", "spate", "haulm", "fetta", "snabs", "peggy", "samas", "deaws", "goaty", "fouat", "twals", "sects", "yappy", "rumpo", "conto", "bajan", "franc", "proud", 
  "claps", "deils", "tarns", "knots", "platy", "glads", "tests", "risky", "dosed", "chino", "hulky", "suede", "sprat", "draco", "plaid", "chock", "delft", "miles", "kyles", "graip", "terms", "gamin", "papal", "imply", "barbe", "welds", "lakes", "merks", "becks", "willy", "helot", "hynde", "bilgy", "wanle", "atilt", "prank", "gaper", "mutch", "thaws", "favel", 
  "sodas", "swiss", "putti", "avels", "deers", "fakey", "rejig", "sweed", "axils", "buddy", "ditts", "kades", "lites", "quine", "skeed", "lomes", "skool", "wagga", "gilds", "flite", "snowk", "joked", "taupe", "calid", "culpa", "safer", "hooka", "tabid", "spark", "sowms", "kikes", "roman", "crier", "noxal", "shape", "pomps", "guffs", "vista", "rimed", "claut", 
  "cyano", "tufty", "weepy", "norms", "mopsy", "musos", "jiber", "poley", "terce", "swoun", "ureas", "vaunt", "kirks", "rotas", "iodid", "clods", "sijos", "scoup", "motty", "oping", "kakas", "firms", "naker", "ebbet", "aurar", "stime", "hanky", "death", "coset", "seine", "pauas", "wedel", "pynes", "weeke", "twigs", "lanch", "woken", "snuck", "ratel", "hypes", 
  "gruel", "sheel", "edges", "ponts", "glent", "carry", "kerky", "mason", "moras", "retem", "vexer", "bikes", "dotes", "scows", "foram", "peres", "degas", "hoove", "lolls", "warps", "endow", "toles", "retia", "pimas", "fanal", "stone", "depot", "blist", "curia", "geest", "board", "light", "oinks", "soapy", "dwine", "priss", "tocky", "gland", "clews", "cymar", 
  "leach", "kilns", "widdy", "payee", "rotos", "gudes", "anlas", "lulus", "signa", "seats", "towed", "notal", "frabs", "datto", "hippo", "vegos", "amble", "brins", "favor", "crank", "hexad", "frons", "gauds", "malar", "flunk", "molts", "bines", "scyes", "twier", "vined", "boats", "tyros", "malas", "midis", "ahigh", "kraal", "roach", "gairs", "ragis", "hecks", 
  "scaws", "group", "retry", "kiter", "diets", "sones", "spays", "riots", "beare", "gerle", "trock", "kamas", "swore", "frock", "naive", "unred", "epode", "stirs", "vigor", "tabla", "leses", "byked", "diebs", "lings", "biles", "tegus", "slake", "corns", "pells", "glode", "raird", "skate", "petre", "gusle", "tufts", "flubs", "robed", "janty", "quids", "samps", 
  "pogos", "bhang", "blare", "synth", "spial", "glide", "soree", "dummy", "bowel", "cholo", "stonk", "realm", "retie", "tango", "spink", "tacho", "bares", "moses", "rewet", "chiru", "banda", "clans", "copay", "deals", "hopes", "koras", "domal", "miner", "poufs", "pushy", "wares", "loyal", "tenge", "wring", "rubin", "pyric", "jigot", "annal", "roton", "moped", 
  "glias", "vials", "dames", "caper", "herma", "buiks", "serge", "hooch", "wawls", "shtup", "baits", "croak", "sopor", "homos", "jeers", "chere", "eyras", "fards", "jibes", "quays", "grume", "calks", "escot", "smoor", "hyper", "punto", "yapok", "curat", "topis", "liker", "citer", "dunsh", "iodic", "yucas", "hurls", "glans", "kesar", "focal", "gowns", "ligan", 
  "blabs", "deros", "pried", "cleat", "shrub", "vocal", "teres", "khans", "paled", "benne", "wined", "fount", "loons", "bahts", "shade", "yenta", "gowan", "breve", "dregs", "libel", "valis", "glugs", "clous", "palay", "codas", "naris", "taste", "skiff", "witch", "paces", "agars", "chang", "orles", "alary", "gisms", "areas", "howes", "cubed", "pecks", "madid", 
  "canst", "kahal", "chiro", "veles", "sorta", "spend", "loggy", "skein", "theta", "plash", "brool", "teste", "tarre", "wyles", "frill", "walla", "comet", "malik", "arars", "coped", "mulsh", "skeef", "scail", "hires", "lasts", "fears", "hasks", "kulak", "newsy", "bania", "jilts", "bawds", "mends", "pured", "gnarl", "caxon", "yaars", "breys", "esile", "cling", 
  "biali", "goody", "basts", "leavy", "erica", "cowry", "skeen", "route", "fusty", "syker", "stowp", "ledge", "cavel", "clept", "baffy", "ritts", "soger", "sadis", "fewer", "sorbs", "tolan", "hecht", "grege", "peats", "waide", "ragga", "welsh", "match", "pants", "slave", "frags", "macks", "brier", "rivos", "bemas", "roopy", "rarks", "lungs", "ratal", "besee", 
  "viols", "sumps", "likes", "dolos", "waned", "right", "venus", "forbs", "lawin", "pawns", "frisk", "earns", "primy", "basso", "namer", "swing", "muffs", "selle", "merit", "norks", "quint", "voila", "mondo", "skink", "grans", "gulag", "pinny", "supra", "chams", "lotos", "cabin", "supes", "curly", "snick", "veney", "togae", "rocks", "abram", "keros", "blest", 
  "brits", "druid", "mirvs", "poind", "foots", "stirk", "value", "figos", "kayle", "atoke", "micht", "sowff", "wheat", "sheaf", "egmas", "escar", "boyed", "durry", "barge", "thief", "jaspe", "calos", "acorn", "tombs", "fusil", "faugh", "longa", "cases", "douse", "snare", "sownd", "poons", "ferer", "boils", "carns", "basti", "sable", "ailed", "heave", "gamay", 
  "owned", "tyres", "sears", "paper", "yeeds", "frigs", "roger", "terns", "cloys", "pocks", "spill", "yucca", "micks", "snowy", "gonia", "balun", "fancy", "clype", "gaits", "knows", "motis", "slobs", "vells", "wocks", "hiked", "ganev", "poems", "demic", "moods", "evert", "plant", "bubby", "doody", "miffs", "melic", "stock", "silen", "blast", "mamma", "molar", 
  "dairy", "doven", "lytes", "bucku", "bongs", "grins", "kinks", "clift", "fairy", "fores", "boors", "tyers", "lucid", "deere", "weeds", "areae", "hilts", "scrog", "boric", "bandy", "ginge", "morns", "plews", "eaten", "noted", "merle", "apaid", "ponce", "repay", "foamy", "wiled", "lubra", "ickle", "duras", "swath", "ornis", "glove", "cowls", "toffs", "daris", 
  "puked", "hoody", "clonk", "bourg", "stoup", "clasp", "troop", "fleet", "piked", "enews", "mokis", "kufis", "mooed", "scowl", "dulia", "reamy", "mists", "duads", "hatha", "playa", "skunk", "kybos", "bhoot", "nahal", "gules", "prees", "logos", "nixed", "loppy", "churr", "clint", "cooky", "roset", "tithe", "maned", "unlid", "crues", "wakfs", "bingy", "briss", 
  "scrap", "lasso", "hilly", "lying", "peers", "lifer", "areca", "gasps", "fines", "titre", "clipt", "sutta", "fyked", "rhone", "weary", "biner", "braks", "mills", "godly", "moray", "haugh", "casus", "basta", "candy", "steed", "stylo", "cuits", "throe", "logon", "cardi", "sooks", "chaps", "busts", "esker", "pinon", "reeks", "tonks", "wawas", "argus", "situs", 
  "staid", "owres", "cames", "maist", "dowry", "stear", "diota", "sands", "halva", "huias", "kliks", "cower", "moyle", "lieve", "vairs", "hefty", "whelp", "bursa", "prams", "abbey", "angas", "parle", "skies", "tawse", "holds", "oorie", "ghees", "lants", "tyler", "baste", "atoms", "nanua", "calls", "stank", "gamer", "dried", "poked", "liman", "feyed", "judas", 
  "bidis", "fitte", "brute", "medle", "ranis", "scarf", "vaute", "vital", "nexts", "exude", "bubba", "valet", "stedd", "hoast", "chyme", "kerel", "locum", "harim", "lader", "floss", "goats", "towsy", "oiled", "voile", "pinas", "shoji", "capos", "litai", "syces", "ronts", "borty", "meare", "stele", "tongs", "ghost", "whare", "whiss", "maise", "dines", "fatwa", 
  "blays", "quich", "rewax", "deawy", "lowps", "knife", "graft", "nerds", "imped", "gadjo", "dawts", "shakt", "twixt", "devas", "hocus", "hutch", "shunt", "suint", "waite", "minor", "cavie", "koker", "twoer", "wisha", "mould", "cooer", "emong", "holey", "coven", "raphe", "murid", "tries", "sewan", "boree", "tepas", "canns", "toker", "gouks", "moves", "china", 
  "tippy", "wacke", "horah", "dunny", "lurry", "loser", "swots", "trots", "redan", "potae", "dikes", "snush", "lumpy", "passe", "swarm", "laced", "james", "crick", "saice", "pouch", "murti", "waspy", "bling", "tubae", "enorm", "sprag", "triad", "folie", "tench", "ninny", "cagot", "jimmy", "marly", "agons", "minar", "blood", "gundy", "scots", "ascot", "eisel", 
  "lipos", "murry", "breed", "compo", "laree", "loris", "fyrds", "heavy", "omber", "femme", "skyre", "barra", "badge", "tints", "spits", "cawks", "caves", "tonus", "loave", "parti", "tains", "kabar", "heroe", "cepes", "hover", "lased", "frush", "senti", "bukes", "nalas", "point", "pricy", "wafer", "scoop", "borak", "plied", "ramen", "luges", "small", "redly", 
  "toney", "snows", "limas", "ronin", "embay", "festy", "forge", "biggs", "doole", "homer", "pinch", "leant", "mucin", "wheys", "blurs", "could", "tymps", "spugs", "smush", "aloha", "talak", "janns", "flood", "penni", "obias", "salad", "paiks", "comic", "mimer", "agism", "hance", "firry", "sinks", "stoop", "feces", "gleba", "curch", "opine", "crith", "singe", 
  "shins", "slaps", "spail", "gulps", "blats", "livor", "gears", "shoed", "kooks", "roque", "sanko", "taunt", "almeh", "jills", "benny", "klang", "bundh", "laver", "doges", "knurr", "skosh", "dowse", "spina", "cotta", "probs", "shiel", "boyos", "spans", "nooky", "alews", "cheth", "butty", "jukes", "amide", "sicht", "wharf", "ovoid", "saics", "sores", "praos", 
  "thill", "newts", "soily", "yests", "cogon", "latte", "deity", "navew", "alway", "chimb", "cubit", "neifs", "hewgh", "papas", "reeky", "jeats", "luser", "putty", "wiels", "campo", "harns", "orbit", "pukka", "slipt", "drouk", "rotor", "milty", "arose", "smith", "henna", "liber", "bungy", "wound", "karsy", "leres", "alone", "saver", "loper", "suing", "casks", 
  "grues", "farer", "mamas", "sobas", "sword", "wheen", "barbs", "flare", "tense", "heist", "pater", "filth", "libra", "biogs", "qophs", "motts", "rugal", "earst", "lacks", "lupus", "blahs", "howfs", "neele", "baton", "handy", "titty", "palls", "pepos", "dungs", "perms", "sella", "lathe", "kawed", "targe", "savin", "gutsy", "dotal", "pryer", "doted", "tuber", 
  "brood", "puers", "axles", "donah", "opahs", "sango", "ogive", "motus", "dered", "lowes", "raiks", "tolar", "jatos", "stogy", "adrad", "heame", "butes", "pyral", "hongi", "pends", "trape", "world", "pluck", "canoe", "tower", "spoor", "surgy", "monde", "golpe", "plage", "novas", "losed", "oaves", "never", "torts", "subby", "dants", "forgo", "dykey", "plate", 
  "brads", "brung", "hokis", "dimly", "amens", "bract", "dreks", "caups", "court", "teels", "festa", "potin", "bicep", "soaps", "onely", "leats", "radon", "cumin", "shove", "coles", "dobra", "aghas", "purty", "oaten", "argot", "beres", "knead", "gnats", "fawny", "foids", "gynie", "clops", "scopa", "tread", "wiver", "leger", "hoyle", "snail", "tabor", "hilus", 
  "malam", "douce", "hyleg", "smalm", "blunk", "heals", "golly", "ottar", "tings", "pinta", "tease", "oncet", "sulus", "wooly", "piste", "batch", "solei", "whear", "copse", "chile", "coper", "murky", "skats", "chara", "mynas", "boxes", "jinne", "speks", "tales", "graal", "disci", "drave", "tatar", "grass", "wheep", "colls", "tache", "spams", "docht", "strop", 
  "kebab", "belon", "nadas", "shola", "wiper", "roate", "pooed", "clean", "hakes", "scaup", "stere", "walks", "busty", "hongs", "kirri", "mated", "reist", "cutis", "paris", "masse", "cutie", "drubs", "capon", "coach", "kapok", "globy", "swine", "snoop", "ketas", "jones", "rukhs", "noddy", "culms", "ender", "hylas", "sield", "soras", "poops", "telex", "soare", 
  "snyes", "chaya", "chela", "proof", "cuifs", "malmy", "cobbs", "softy", "steil", "biled", "blent", "ernes", "rorty", "umped", "aunty", "aheap", "carbo", "dawed", "clavi", "filum", "tawie", "conky", "fordo", "piccy", "naped", "lakhs", "sugar", "price", "riper", "cross", "ylkes", "shiso", "sonce", "ishes", "roust", "whity", "varve", "ketch", "cavil", "humas", 
  "sharp", "stown", "pipes", "ansae", "flesh", "hillo", "smalt", "folks", "ureal", "probe", "deans", "axman", "neemb", "shews", "infra", "moyls", "cumec", "tayra", "braes", "fiefs", "discs", "nirls", "bipod", "veers", "dunes", "cires", "deeve", "japer", "puggy", "taxol", "beray", "crans", "stoma", "mylar", "aroid", "chare", "deist", "clots", "casas", "ebons", 
  "ackee", "liane", "nodes", "damps", "yealm", "fluty", "buppy", "beads", "leers", "rungs", "soler", "amply", "pease", "aulic", "spaes", "skyey", "wants", "conus", "bajra", "incle", "tondo", "aider", "lyses", "womyn", "bigos", "alate", "lysin", "goony", "coral", "khafs", "nying", "hulks", "paler", "proll", "cirls", "gonef", "helms", "haika", "proso", "rumen", 
  "black", "bluid", "yirks", "gamma", "haded", "sowar", "sunny", "teach", "bodge", "catty", "slide", "yummo", "nerka", "wages", "vutty", "bowls", "dress", "droid", "lordy", "withy", "keefs", "whoop", "boxer", "iller", "kokra", "weest", "halfa", "torso", "lethe", "raids", "moits", "curer", "blunt", "decal", "yexed", "ruggy", "duett", "pubes", "germy", "snibs", 
  "poddy", "whoot", "mewls", "sowse", "taras", "tatty", "mawrs", "mucks", "souks", "fusts", "breis", "derat", "jarps", "grimy", "algal", "toked", "begin", "nonas", "boabs", "domed", "lowry", "borel", "titer", "maars", "cagey", "redes", "juked", "cours", "pilum", "gleek", "micra", "haick", "penie", "bardo", "pulus", "ocker", "blart", "easts", "lobes", "fleam", 
  "gaffe", "berks", "sware", "treed", "fusel", "shahs", "torus", "camis", "hates", "mbira", "regie", "dikas", "doums", "lyric", "lawed", "surer", "perps", "botch", "atmas", "roven", "chins", "stove", "aster", "wells", "jobes", "shist", "galas", "phots", "resin", "misos", "monad", "peace", "naggy", "acned", "murls", "pupae", "panga", "noint", "herry", "jural", 
  "liang", "botas", "gappy", "payer", "kerry", "hexes", "doled", "meves", "rosts", "robin", "twill", "eliad", "fixed", "ahold", "swayl", "jells", "woven", "baals", "courd", "vills", "burka", "erred", "shady", "tride", "etens", "globs", "attap", "fleer", "sooms", "gurns", "celli", "kench", "dingo", "bowse", "prong", "lisks", "riyal", "eager", "bells", "mauds", 
  "scuba", "shirt", "byded", "emmer", "limba", "powan", "tween", "mache", "worst", "piled", "gloss", "flued", "tilts", "poncy", "wrung", "taser", "tapes", "fyles", "penis", "indew", "palki", "gurls", "field", "flump", "carve", "poofs", "stark", "stede", "burns", "newly", "yeggs", "feeds", "after", "vapor", "mauri", "gites", "reams", "apods", "fakes", "sunks", 
  "weirs", "yewen", "sprue", "corps", "coact", "topee", "today", "solum", "toffy", "mumps", "peery", "crusy", "pavin", "knoll", "yobbo", "popsy", "fehme", "qadis", "sowfs", "buist", "unrig", "wairs", "firer", "softs", "breme", "jupon", "tates", "milch", "dital", "poake", "flabs", "yukky", "drums", "muses", "slash", "manul", "rucks", "hokes", "wooed", "along", 
  "deles", "fenny", "cadgy", "dowds", "resty", "ketol", "fungs", "myops", "broos", "snips", "horas", "slays", "trite", "frail", "manta", "leirs", "heady", "tears", "debug", "meins", "plesh", "burry", "scaur", "level", "cocci", "flims", "shrug", "teugh", "demob", "shaky", "moose", "byssi", "jeels", "pross", "hairs", "homey", "wrote", "riggs", "punks", "tubes", 
  "lotus", "arsey", "culet", "taels", "acrid", "khets", "cruet", "doest", "seron", "vampy", "dirls", "icing", "tommy", "ample", "gadge", "bedad", "notes", "print", "sills", "hides", "lints", "quats", "romal", "blams", "sacra", "spurn", "wonga", "awing", "ebony", "akees", "huggy", "merse", "sedgy", "yapon", "flory", "pikey", "prana", "rexes", "topek", "yorks", 
  "vires", "foins", "tarps", "chads", "sabra", "tauts", "coude", "jowed", "cabre", "jetty", "fifer", "couch", "sured", "karri", "cosec", "gents", "cleck", "yucks", "aquas", "hurry", "apted", "rules", "tanhs", "takin", "fuses", "heads", "kotch", "wudus", "auras", "looed", "gelee", "lotic", "volva", "henry", "fohns", "algin", "pagan", "raita", "turms", "spiff", 
  "stade", "heres", "fouls", "kists", "merde", "haute", "veale", "vertu", "admen", "folky", "grees", "shute", "pepla", "wauls", "sloom", "fruit", "donas", "kicky", "rends", "toted", "brose", "nieve", "acute", "gussy", "convo", "vlies", "cooks", "filmi", "sechs", "hemal", "lease", "gesse", "viewy", "weedy", "kerfs", "repel", "poser", "belay", "toled", "duchy", 
  "shivs", "train", "flaps", "fails", "sonly", "undue", "euros", "skirl", "tubed", "winds", "cauld", "jupes", "kagos", "daube", "limey", "tafia", "fanny", "vroom", "spiky", "foyle", "imine", "polos", "pecky", "pight", "clade", "pesty", "touse", "baler", "aroba", "jasps", "trill", "pyros", "barby", "riser", "laigh", "milky", "sumos", "memos", "saggy", "cloth", 
  "clach", "stymy", "genic", "brios", "cripe", "grith", "lusty", "wrack", "expat", "goafs", "quads", "louts", "overs", "balas", "chons", "freed", "samba", "biker", "swees", "coley", "towny", "meany", "lepra", "yokel", "qorma", "choke", "cubby", "first", "tummy", "inwit", "pardi", "oxter", "bused", "gongs", "spice", "moots", "stook", "laker", "scrip", "chirm", 
  "frays", "aleft", "jowar", "poupt", "genny", "carls", "cures", "ouphe", "girrs", "skyer", "tripy", "sposh", "summa", "swain", "aeros", "bocks", "profs", "arsis", "chars", "pronk", "adown", "strum", "lures", "taker", "ebbed", "safes", "kaifs", "slype", "yrapt", "hurds", "justs", "kerve", "thugs", "dates", "brats", "ogres", "spoon", "boult", "tofts", "fanes", 
  "adore", "abase", "agone", "bases", "brags", "elfin", "kendo", "links", "spoof", "maser", "gulls", "dexie", "smoke", "decry", "crake", "hules", "bialy", "wains", "caked", "choli", "uncus", "paced", "vines", "spots", "jehus", "syrah", "muhly", "cents", "build", "deare", "ergot", "mahua", "tanto", "curio", "borks", "cloye", "gamic", "clour", "dings", "maxim", 
  "lossy", "slabs", "pikul", "baken", "bokes", "prowl", "loach", "axite", "dight", "dater", "scraw", "boofy", "beaus", "queer", "mamba", "yourt", "crost", "veils", "mises", "vegie", "piing", "sunns", "wisps", "malms", "denim", "nache", "twits", "amman", "dreed", "jades", "manky", "sires", "tapus", "joles", "ripes", "togue", "amiga", "sifts", "perst", "vealy", 
  "avers", "quart", "grein", "huhus", "raile", "blocs", "jaups", "slojd", "climb", "roues", "slade", "danny", "skeer", "casky", "yokul", "slaws", "slits", "savor", "brust", "refry", "lexis", "birse", "bliny", "broth", "rowts", "sefer", "silos", "motel", "redon", "eyres", "gleam", "genre", "egers", "snool", "taces", "bates", "taira", "cokes", "flail", "daffs", 
  "eards", "drawl", "musar", "muist", "rewon", "debut", "wrick", "apple", "feued", "yarfa", "friar", "nerol", "thorn", "louns", "pratt", "mesic", "gelds", "tahrs", "baurs", "guyse", "pinna", "larky", "dwile", "uveal", "plaps", "ranee", "besom", "skald", "trump", "caman", "phese", "thagi", "scarp", "dirge", "helps", "goety", "quina", "mofos", "talaq", "given", 
  "scapi", "shank", "goldy", "there", "mouth", "speel", "racon", "stoic", "rains", "tratt", "haste", "emirs", "biddy", "slugs", "rinks", "forth", "fifty", "triol", "boose", "strip", "fades", "store", "neaps", "oaths", "gurus", "sprig", "ulans", "balus", "droog", "kamis", "trois", "halve", "skint", "peise", "glare", "enols", "drook", "leaks", "endue", "kerne", 
  "quags", "truly", "bumfs", "inarm", "aiery", "lawks", "kneed", "trona", "smirr", "frits", "sward", "oases", "parps", "runny", "stash", "udals", "judos", "marks", "tiger", "fondu", "bices", "buffy", "bribe", "molto", "amias", "crudy", "arses", "spica", "amene", "vouge", "shaul", "boson", "grate", "freit", "twink", "fumer", "elute", "munts", "berme", "larns", 
  "munch", "nides", "ayrie", "raggs", "skyte", "doily", "jutty", "gerbe", "rewin", "tryst", "smeek", "beath", "wines", "oonts", "midgy", "sonar", "lyres", "noups", "duply", "sauba", "bleat", "unget", "fresh", "muirs", "impel", "jugal", "roins", "modem", "bravi", "deify", "stich", "skids", "rearm", "melty", "voids", "grece", "powin", "rasps", "spued", "himbo", 
  "sowle", "neist", "owing", "droil", "sells", "gombo", "doped", "gourd", "potts", "cooly", "prill", "demit", "loses", "heder", "fitts", "sweat", "fremd", "under", "leben", "hohed", "porty", "jarls", "reens", "toing", "abbes", "fosse", "fiere", "hilum", "silty", "brach", "fract", "rouge", "rowdy", "madre", "culty", "kolas", "cuffo", "volts", "apart", "fills", 
  "piend", "pappy", "mooch", "bouns", "dully", "ontic", "polyp", "ragee", "boong", "freet", "trait", "beard", "fixer", "chain", "toile", "blade", "xebec", "frist", "armer", "flaws", "sugan", "slimy", "lyase", "tyran", "praus", "soled", "seans", "raree", "slank", "mamie", "hefts", "derms", "lames", "droob", "tiers", "urger", "blind", "fices", "novel", "stair", 
  "taggy", "grape", "hardy", "linds", "wolfs", "finks", "daggy", "whams", "boobs", "bleak", "wilds", "jocks", "doggy", "dreck", "bouks", "apayd", "neume", "guest", "snarl", "boing", "arles", "cords", "potsy", "reads", "scena", "shale", "carny", "fares", "sluts", "milks", "limax", "limes", "hajes", "renal", "swone", "yeans", "lusks", "clink", "adorn", "hoyed", 
  "snoek", "crems", "fecit", "sexto", "saint", "cadis", "boked", "hoped", "noirs", "boast", "moans", "lokes", "upsey", "yomps", "faith", "potoo", "frape", "covey", "trick", "fetes", "stive", "comps", "cions", "wolds", "gwine", "tsked", "thews", "which", "cowks", "pises", "gamme", "agley", "deeds", "lenis", "remet", "seton", "abets", "hewed", "pokal", "reins", 
  "cohos", "walty", "named", "glean", "nidal", "meeds", "ooped", "sties", "terne", "tagma", "texas", "gobos", "limns", "crore", "pians", "lapel", "stipa", "gripy", "wirra", "jeffs", "sents", "yikes", "shalm", "wrate", "howks", "bluey", "briny", "unfed", "thaim", "ronte", "feted", "groat", "bauks", "mungs", "maund", "sarus", "loves", "diddy", "slant", "toran", 
  "hanks", "rotal", "pavid", "cusps", "lavra", "worms", "moggy", "eagre", "yills", "older", "gowds", "glair", "napas", "wirer", "urped", "pasts", "revue", "meous", "ormer", "bodes", "dinos", "teend", "fulls", "quern", "quins", "enter", "venom", "dinna", "cense", "worts", "viner", "resay", "wordy", "calfs", "craws", "baked", "unket", "appay", "geeks", "layer", 
  "naifs", "mings", "lurer", "hired", "youks", "tabis", "fogey", "tinks", "nappe", "noter", "getup", "baron", "fools", "horde", "swink", "ratan", "tousy", "cital", "gifts", "knelt", "durns", "pails", "capul", "reifs", "muset", "spred", "poult", "brims", "bards", "pyxed", "feods", "moten", "divan", "corso", "trope", "needs", "rownd", "campy", "shrew", "menes", 
  "wurst", "cutin", "nagas", "tuque", "webby", "tichy", "nemas", "doabs", "beses", "rynds", "siree", "savey", "bonie", "posse", "talus", "monks", "grens", "livid", "mabes", "eloin", "vasts", "kasme", "games", "bedes", "smarm", "chaff", "tachs", "gauss", "smock", "sigma", "argil", "starn", "peart", "wails", "sansa", "stiff", "ruled", "rawns", "arrah", "hoghs", 
  "grist", "gecko", "polis", "slops", "lever", "seely", "duets", "anger", "limbs", "ruder", "jibed", "noily", "greet", "offer", "prase", "token", "poppy", "berms", "loric", "iched", "tinct", "vairy", "nurls", "almah", "ducat", "fikes", "pulik", "quare", "refer", "wands", "bambi", "nixes", "taiga", "liana", "ciggy", "tiled", "anima", "clays", "gigas", "saunt", 
  "skers", "nulla", "crest", "bloat", "plebe", "hoars", "luger", "raspy", "ranid", "kembs", "lexes", "gulpy", "chert", "pingo", "cowal", "siker", "mawky", "kempt", "delve", "jodel", "smite", "quipo", "myopy", "leeps", "stows", "denar", "sloyd", "woody", "coati", "lurks", "truck", "towts", "beans", "ditch", "balmy", "bakra", "talar", "stulm", "troad", "yippy", 
  "unapt", "linty", "putto", "ydred", "desks", "maced", "calpa", "poxes", "spewy", "cleik", "corni", "oscar", "coney", "intel", "costs", "melee", "senas", "choco", "crass", "geits", "croft", "cysts", "plods", "anker", "rasta", "antra", "cedis", "snies", "grope", "thesp", "puris", "spawl", "meynt", "aware", "claws", "lulls", "veges", "halal", "quirk", "nauch", 
  "antae", "snags", "kiang", "cameo", "waffs", "gonys", "naked", "feast", "kacha", "kaama", "lehrs", "realo", "liens", "scuft", "machi", "bundt", "coves", "bumps", "hempy", "sagos", "hansa", "waxer", "apeak", "hoper", "cromb", "sower", "mango", "roils", "gloom", "reked", "beefy", "serin", "bolls", "flics", "phyla", "lurid", "rhino", "walis", "ramus", "lalls", 
  "cares", "alant", "comte", "sypes", "laird", "airth", "cauda", "malax", "noule", "sight", "gonof", "poise", "oobit", "sipes", "amigo", "datal", "rotis", "array", "crust", "velar", "slues", "taube", "derry", "manis", "ducky", "titis", "ratus", "wefts", "unwed", "direr", "gross", "mases", "slier", "nicht", "cache", "clies", "snars", "yesty", "seams", "dodos", 
  "sowls", "hards", "eerie", "snort", "gaurs", "rheme", "briks", "breer", "jolls", "steme", "hoosh", "neuks", "atocs", "ouphs", "trade", "speld", "kuris", "brigs", "graff", "penes", "bulse", "paved", "hooty", "moors", "abris", "telic", "tubas", "renay", "shaps", "monty", "twirl", "dowdy", "warks", "harls", "tonga", "scags", "abbas", "cater", "allow", "brand", 
  "dwelt", "jiaos", "miche", "booty", "ryper", "dwams", "perts", "shako", "carat", "hikes", "koppa", "fogie", "nance", "agile", "daurs", "musts", "cakey", "goner", "ingot", "romeo", "psoai", "snell", "sykes", "timbo", "debit", "chark", "emmew", "dogma", "chore", "virge", "reify", "furrs", "tauon", "pelfs", "plaas", "serif", "yolky", "spumy", "hyles", "tardo", 
  "ilial", "whang", "easel", "swell", "infix", "matts", "swoop", "blude", "kagus", "farse", "hocks", "unhip", "jaded", "kytes", "shoat", "swigs", "oriel", "femal", "porgy", "mitre", "trace", "iotas", "mokos", "unked", "curns", "mouch", "koans", "admin", "spart", "screw", "trigs", "paseo", "gumps", "hurts", "krone", "veals", "weids", "brill", "crios", "sinhs", 
  "jembe", "gibes", "comix", "scrag", "sabre", "kilty", "bunce", "glost", "reive", "retax", "ciaos", "skite", "abysm", "tetri", "comes", "kawau", "nimbs", "mavin", "quoin", "walls", "frise", "hippy", "poxed", "grill", "sated", "colog", "jagir", "poets", "pares", "aures", "hollo", "title", "namma", "fames", "vison", "anomy", "enlit", "reals", "comus", "aeons", 
  "alack", "hammy", "dyers", "gamps", "pages", "ogles", "pyxis", "laith", "melts", "talks", "urate", "serum", "varec", "yeuky", "items", "quale", "wrist", "lubes", "undug", "busby", "telly", "final", "aroma", "nurse", "wavey", "skios", "loxes", "sheds", "macle", "perch", "copen", "dwell", "rider", "moldy", "flong", "watts", "mirks", "armed", "chocs", "menge", 
  "lests", "rusts", "aurae", "strap", "toshy", "meath", "terfe", "gyals", "aphid", "birrs", "vomer", "armil", "bromo", "prest", "eight", "tally", "drack", "relax", "drive", "biffy", "rooky", "fecht", "lisps", "shier", "quair", "still", "hames", "flyer", "adios", "wowee", "sworn", "shend", "fluke", "query", "sowce", "hents", "suras", "names", "yipes", "front", 
  "pooks", "stole", "glows", "douma", "messy", "benni", "botel", "sarod", "swire", "tices", "simar", "mixer", "timed", "viral", "mawks", "ydrad", "gamey", "showy", "vends", "moony", "gryde", "xenic", "jokey", "assay", "iambi", "junta", "tythe", "natal", "brain", "rubby", "tawai", "dilli", "snark", "auris", "nexus", "lacer", "thick", "kheth", "qaids", "gloop", 
  "styli", "woosh", "dorsa", "minis", "dumbo", "dolma", "viver", "quack", "skiey", "gants", "radix", "mauts", "mured", "forts", "grams", "leeks", "prays", "wowed", "islet", "musse", "meuse", "tooms", "tract", "ashet", "leave", "scaff", "alapa", "meril", "owler", "doner", "drent", "peels", "bider", "spane", "plush", "drows", "halon", "toses", "aread", "glint", 
  "burro", "withs", "rotes", "malts", "blubs", "clout", "stoke", "wingy", "polls", "chair", "grids", "quaky", "theow", "simba", "mered", "dauts", "shogi", "ungod", "yucky", "being", "diols", "beany", "mowas", "cebid", "kerns", "flaff", "rayed", "plast", "siled", "bronc", "faded", "guard", "nanas", "taxon", "carbs", "rebus", "indue", "kylie", "skill", "tomos", 
  "denet", "fauld", "flout", "nighs", "trams", "retro", "scart", "sprad", "myope", "labor", "aways", "jawed", "ciels", "every", "pairs", "pukus", "scuff", "fitly", "souts", "baric", "shops", "yodel", "tress", "farcy", "kynde", "spivs", "goths", "flats", "cists", "poled", "sheep", "pendu", "getas", "boche", "flits", "palmy", "alefs", "kohls", "lands", "whore", 
  "gauge", "skimo", "hanch", "pussy", "craft", "seels", "bason", "ulvas", "bords", "forks", "meith", "totes", "rappe", "tuyer", "hafts", "bibbs", "phare", "tires", "grail", "mooks", "click", "witan", "apism", "drunk", "goold", "pombe", "chary", "rosin", "spaws", "yogic", "magot", "yules", "pooka", "faros", "rutty", "dawds", "sates", "merer", "tipsy", "potes", 
  "braws", "jisms", "quipu", "award", "crime", "grows", "selah", "scalp", "briar", "trons", "sadly", "coure", "herye", "slime", "wiggy", "latke", "haint", "flues", "terts", "hucks", "fiked", "inner", "scurs", "corno", "satem", "ficos", "quist", "abide", "typic", "woops", "qualm", "smoko", "dongs", "sayer", "guans", "refly", "lingo", "slags", "gutta", "longs", 
  "darga", "nonet", "lolly", "tucks", "reply", "frere", "stain", "faena", "eosin", "boras", "fecks", "unlay", "decor", "goier", "maxed", "pengo", "resod", "sheer", "gunky", "stott", "ambos", "dandy", "swail", "untie", "crapy", "kents", "vitex", "warms", "whips", "bails", "skets", "varix", "radii", "sures", "rurus", "retes", "sucky", "gucky", "fishy", "sandy", 
  "wipes", "fumes", "swans", "sowps", "undid", "nests", "gools", "haggs", "purse", "micos", "vinyl", "maile", "rifts", "bendy", "snees", "hoyas", "japes", "grave", "pikes", "richt", "torsk", "vents", "sassy", "cimar", "mirth", "hooky", "darbs", "hives", "knawe", "carpi", "ahint", "teles", "bites", "plugs", "mopes", "embed", "symar", "tough", "nided", "cuppa", 
  "tenne", "tromp", "ohias", "broom", "kines", "elops", "lunas", "loast", "sweel", "beats", "surfs", "inker", "adder", "botte", "avgas", "fecal", "girly", "chivy", "stork", "swear", "whigs", "kempy", "burin", "moria", "wasts", "spell", "tofus", "kyloe", "odyle", "kythe", "sooth", "mover", "uncle", "busky", "qursh", "paras", "pubis", "gloms", "salsa", "clame", 
  "flags", "lamed", "cloop", "amass", "lownd", "sings", "volks", "sloes", "stoun", "botts", "bunco", "heben", "noses", "laich", "kabab", "therm", "troth", "taber", "pilaw", "popes", "coons", "ramal", "badly", "thees", "slogs", "alter", "nabks", "biter", "debts", "bongo", "mavie", "haith", "annat", "blads", "crame", "lowan", "mimeo", "tuffe", "vespa", "plead", 
  "auloi", "waney", "lichi", "clung", "dices", "faddy", "soole", "kimbo", "cloke", "jibbs", "argon", "doyen", "cided", "hided", "shaws", "chine", "plops", "shaya", "tidal", "queys", "scall", "toper", "jakey", "alcid", "spile", "cooch", "shied", "sired", "ninon", "deman", "luces", "teffs", "yulan", "ruffs", "poaka", "budos", "blaff", "goofy", "volta", "moner", 
  "caffs", "reach", "kooky", "beamy", "doura", "heald", "puton", "besat", "jumby", "catch", "grays", "cowed", "krait", "rabic", "reeve", "drail", "servo", "laves", "glute", "sprew", "tokes", "elans", "wenge", "ashen", "ikons", "argan", "liard", "mafic", "tuina", "mochy", "lores", "gushy", "kanes", "weals", "grued", "rased", "veldt", "bilks", "netts", "spall", 
  "arcus", "dimes", "gains", "omens", "fient", "swirl", "peeps", "temse", "fraim", "punky", "grout", "seamy", "boygs", "viers", "heron", "duped", "raved", "lindy", "lived", "pimps", "terga", "helve", "raker", "drony", "piece", "annul", "tilly", "trews", "exert", "sputa", "wifed", "patte", "float", "purge", "lowns", "sharn", "lenes", "hemin", "grump", "fadge", 
  "becap", "trugo", "carob", "tikas", "humph", "pally", "jammy", "nabes", "tripe", "karns", "troll", "tunes", "duros", "giddy", "cried", "motif", "vauch", "dashi", "mohur", "stots", "spine", "malic", "roles", "wider", "cowan", "harsh", "raise", "banns", "goles", "rural", "kaiks", "mavis", "pelma", "rones", "slive", "pacey", "snoep", "flimp", "otter", "fatly", 
  "boaks", "peony", "sedes", "thorp", "verse", "jerks", "ewked", "madly", "toque", "belch", "feuds", "laded", "helio", "manet", "tunic", "saned", "surge", "curfs", "rekey", "viold", "farci", "nails", "reset", "shoal", "wetas", "unset", "bison", "kolos", "dixie", "fille", "sigla", "dearn", "airns", "cushy", "bosom", "filar", "gored", "roosa", "trows", "parrs", 
  "jewed", "artel", "drome", "lemma", "score", "toges", "solve", "suits", "ditsy", "hoing", "micas", "haler", "bangs", "yetis", "agila", "drama", "fells", "hykes", "keets", "knags", "bairn", "study", "gooky", "booky", "liege", "dewar", "aurei", "other", "torte", "craal", "geums", "jerry", "ablet", "louie", "henny", "dorse", "lusts", "leany", "swift", "crumb", 
  "bagel", "preps", "tapen", "plook", "brees", "glued", "sibbs", "bundu", "almes", "rainy", "scape", "narky", "recto", "knout", "tanti", "choky", "gytes", "guars", "bachs", "goras", "eyrie", "nugae", "pards", "downs", "rings", "rawin", "pechs", "smees", "alang", "irone", "pesky", "drees", "lenti", "pacha", "fease", "hogen", "forky", "droit", "luffs", "mokes", 
  "berko", "tasse", "cully", "spiny", "palet", "gramp", "gamas", "peach", "reran", "gybes", "salix", "fable", "ashes", "pumps", "sails", "flame", "eyers", "gonad", "jocko", "aphis", "knobs", "urali", "wroot", "volve", "wedgy", "sculk", "delos", "aglow", "dooms", "datos", "donga", "knack", "herls", "fauna", "boart", "glits", "seral", "trust", "duroy", "grunt", 
  "chogs", "dayan", "finny", "haiks", "adred", "taths", "bests", "unpin", "swamy", "taits", "nairu", "refit", "coals", "mures", "klaps", "salle", "sudsy", "warts", "betty", "giber", "spear", "buras", "rasse", "bawdy", "mayas", "shoer", "nappy", "puled", "beget", "abaci", "harks", "picul", "scaly", "scout", "giant", "rocky", "ligne", "punga", "aging", "hoofs", 
  "bassi", "mased", "tiara", "above", "hoses", "dojos", "vichy", "boysy", "doves", "dudes", "lotte", "sheen", "joled", "kadis", "wrens", "arise", "tajes", "loped", "lopes", "pownd", "torch", "progs", "boggy", "gogos", "pungs", "sited", "yawls", "yolks", "lapin", "gluer", "palsy", "rubel", "burqa", "carle", "cutty", "honed", "lunts", "ahead", "minny", "birds", 
  "nolls", "poyse", "pagle", "orals", "arear", "kyaks", "wadis", "tehrs", "gonna", "glume", "gilts", "yeads", "ulnae", "nabis", "tyees", "louis", "leech", "views", "gawks", "dewed", "vuggy", "paged", "culls", "lense", "danks", "folia", "kebob", "rifle", "jelly", "retch", "roods", "sault", "sheva", "upper", "kyack", "locos", "dived", "ideal", "firks", "amowt", 
  "sours", "tulpa", "tarry", "sabal", "rooms", "maror", "tarsi", "irate", "toner", "wears", "fiats", "dauds", "nongs", "sarin", "hosel", "parge", "jalap", "abord", "viced", "aking", "stong", "afars", "snigs", "farms", "sughs", "wised", "erugo", "split", "hoxes", "calyx", "cunts", "divot", "yarto", "wiped", "guile", "dynes", "venin", "whose", "cyans", "perce", 
  "shots", "glebe", "combs", "allay", "lauds", "wolve", "mines", "gaols", "stewy", "whisk", "iliad", "denis", "legge", "samek", "blush", "topic", "hails", "nuked", "ragas", "hemic", "dumky", "teind", "inned", "manos", "coofs", "burst", "testa", "moxas", "bumph", "buhls", "flick", "mosed", "salet", "stire", "ditty", "arled", "jagas", "morel", "ryals", "caped", 
  "keeps", "pacos", "runch", "heled", "solde", "flitt", "bhuts", "fiver", "crows", "cajun", "skied", "antic", "bries", "gaumy", "stile", "canid", "stent", "gaids", "trued", "golfs", "divas", "agist", "voled", "kinin", "tauld", "nowed", "these", "clote", "duper", "loony", "yonis", "rayne", "isled", "gorge", "hinny", "souce", "ganef", "crave", "stamp", "ratty", 
  "derth", "cosey", "gowfs", "twang", "kutch", "empty", "amban", "moths", "defat", "vests", "ragde", "dykes", "slyer", "jeely", "courb", "pleon", "flans", "paver", "fubar", "septa", "faiks", "doyly", "hiems", "bonce", "slept", "brule", "roule", "drops", "kudos", "tolts", "woose", "thunk", "kames", "drove", "vauts", "flint", "pheer", "loued", "baels", "decay", 
  "hands", "kyrie", "lucky", "tetra", "erode", "mayed", "dukka", "cruel", "immew", "klong", "rorts", "diced", "tilth", "frump", "snuff", "flocs", "ginny", "roked", "drays", "snore", "golps", "smell", "gyred", "bubus", "waist", "aides", "fella", "sapor", "gulfy", "ledum", "hoist", "bemad", "commo", "canna", "gapos", "cocos", "aerie", "tenet", "bitou", "twire", 
  "berry", "hayle", "wanna", "skeet", "males", "mohua", "chart", "dobby", "rapes", "reney", "goura", "tamis", "porks", "sonne", "abuse", "ruths", "track", "mojos", "krewe", "hosta", "joule", "bacha", "vague", "dinar", "metro", "scamp", "dowle", "flegs", "licht", "sheas", "decks", "rotch", "coops", "laura", "serac", "covet", "pawer", "serai", "meats", "moons", 
  "rente", "fifth", "yelms", "brond", "aboma", "ulnas", "nunny", "felon", "pions", "imido", "cavas", "aviso", "tawny", "iches", "lunet", "charm", "nashi", "winna", "rumba", "phony", "parka", "dirty", "borne", "laked", "pyins", "vardy", "flair", "lanai", "eeven", "muxes", "tokay", "jokes", "daubs", "noyes", "frass", "runts", "bonds", "aback", "mooly", "quire", 
  "yukos", "domes", "barca", "pacer", "silds", "lungi", "scone", "brace", "sleet", "fayne", "murra", "praty", "obang", "quiet", "falls", "waive", "vinca", "braky", "mells", "stilb", "thank", "yacca", "those", "camel", "hants", "early", "piney", "yodle", "agloo", "gault", "green", "yogas", "repro", "henge", "neral", "skims", "blurt", "fiend", "huger", "enmew", 
  "uplay", "gobbi", "kaons", "deems", "buffi", "arame", "gnawn", "inkle", "rosed", "foams", "cates", "coxes", "cruve", "chute", "axels", "corse", "seven", "spayd", "crise", "battu", "laden", "delta", "stalk", "tools", "visor", "garbs", "laiks", "recti", "spool", "duars", "quasi", "writs", "sorns", "kibei", "spics", "faxed", "bogan", "chyle", "sabin", "mengs", 
  "dawks", "koala", "waxen", "yeahs", "scats", "chode", "batts", "cured", "rhyme", "gyres", "fetas", "bland", "intro", "javas", "disco", "upend", "matte", "dhaks", "ropes", "nutty", "scrub", "thurl", "assot", "grain", "icers", "greek", "wodge", "colds", "nowts", "uptie", "elide", "cease", "smile", "loden", "meiny", "bisks", "goory", "elsin", "kails", "furan", 
  "dorms", "smaik", "tyned", "nomen", "abuna", "agast", "songs", "holla", "gauje", "proul", "bight", "roded", "scudo", "curry", "gybed", "airer", "umbre", "anime", "hullo", "glaur", "pixie", "scrum", "bassy", "layin", "sared", "asway", "darcy", "cones", "areal", "fiber", "goals", "halls", "luted", "toras", "holly", "draft", "duels", "roose", "sloop", "firns", 
  "movie", "chewy", "dusks", "sasse", "footy", "musks", "lilts", "garre", "lowts", "gobbo", "votes", "pawed", "fowls", "gayly", "ceric", "nipas", "sweys", "chuse", "twank", "verry", "forby", "lover", "rebid", "meths", "snift", "dross", "talky", "wamed", "hissy", "facts", "salto", "heapy", "bingo", "kondo", "ratio", "dolts", "blaud", "proxy", "ceils", "orfes", 
  "gippo", "tufas", "busti", "junks", "lacey", "serfs", "thyme", "ovate", "elogy", "goban", "combe", "ethos", "spats", "losel", "boord", "devel", "hilar", "coomy", "kutis", "purer", "sweal", "dodgy", "shawn", "jinni", "verra", "doeks", "inked", "gaums", "dopey", "mocks", "poker", "ghats", "patsy", "donee", "conte", "coxae", "slink", "mimes", "rived", "banak", 
  "prior", "bends", "silex", "boffo", "ogees", "toise", "dubbo", "woofy", "dingy", "dorks", "blatt", "risen", "kerma", "roral", "lomas", "whups", "wroke", "wyled", "talas", "couth", "masas", "wrang", "hayed", "jambo", "peins", "spake", "yeast", "yowed", "bosun", "oaked", "volar", "tical", "pomos", "ruins", "cotts", "lamas", "spree", "ovine", "grips", "scour", 
  "moble", "drank", "husks", "tapis", "fuffs", "presa", "soldi", "stoep", "music", "flour", "sampi", "ohing", "lipin", "abear", "doggo", "plonk", "suses", "wangs", "felts", "musit", "manga", "rooty", "dinge", "rowed", "spare", "tours", "speug", "tolly", "mushy", "syned", "toeas", "mayst", "slung", "yrent", "hosed", "fayed", "begat", "stums", "tangs", "comms", 
  "coeds", "dawns", "siles", "wormy", "iring", "naric", "bokos", "paean", "urvas", "bobac", "sepal", "youth", "goods", "fiers", "doits", "gloat", "nelis", "silks", "pieta", "quops", "weeps", "oners", "kales", "baled", "pupil", "desse", "honky", "loury", "heugh", "bunny", "paals", "whomp", "blate", "blume", "umble", "feyly", "heaps", "kerbs", "pikau", "sonde", 
  "mound", "vouch", "lions", "culti", "leggy", "scran", "mahwa", "cooey", "amyls", "loner", "noils", "feebs", "lutes", "broke", "trave", "dogie", "binds", "eyots", "riley", "ceili", "snods", "ducts", "miter", "smirk", "gulas", "softa", "fitch", "hound", "filer", "fangs", "swits", "phene", "fucus", "theca", "roupy", "wulls", "boded", "drats", "spirt", "leary", 
  "bacca", "coala", "styte", "milts", "solah", "pases", "brack", "navvy", "slurs", "redip", "carts", "icker", "break", "words", "mater", "swelt", "marse", "ergos", "shash", "rumps", "styme", "alist", "turme", "class", "feint", "redox", "bated", "tanna", "dated", "folio", "rakes", "nerts", "rigol", "drole", "dwarf", "umbos", "basal", "amids", "water", "roons", 
  "babes", "lunar", "seare", "meres", "tocos", "mopus", "dampy", "bents", "tunds", "plumy", "yedes", "churl", "liken", "fetid", "junto", "flung", "baned", "pisky", "culex", "rehem", "tikis", "lathi", "coate", "drape", "hokey", "vrouw", "peles", "koffs", "welks", "unkid", "kawas", "lauch", "tardy", "seise", "toned", "arish", "bever", "miffy", "saids", "rouse", 
  "doors", "jemmy", "stobs", "avine", "sordo", "trild", "coted", "stead", "greys", "wiles", "hakim", "tweel", "johns", "gades", "scads", "owled", "forms", "spacy", "crimp", "jambe", "agrin", "reest", "terfs", "marts", "tills", "cites", "clamp", "comby", "oaker", "yodhs", "noise", "quoth", "loids", "decad", "acing", "allel", "rille", "recap", "smoot", "moral", 
  "barky", "manty", "hints", "calif", "curst", "ripps", "wield", "crush", "femmy", "pyots", "rondo", "felid", "aidos", "heath", "hends", "moxie", "phang", "duits", "cohog", "pilch", "slove", "steal", "false", "snipy", "bundy", "cauks", "spins", "dimps", "sklim", "smits", "gleis", "limen", "thine", "seyen", "gunge", "quean", "miked", "houfs", "rathe", "canal", 
  "rials", "cubes", "shiny", "warre", "dorty", "upsee", "skees", "tangi", "foyer", "kicks", "anglo", "sidha", "weems", "dulse", "nouny", "tumid", "virtu", "tavas", "testy", "talcs", "attic", "ensue", "taffy", "onkus", "swaps", "temed", "soken", "gaily", "lidos", "spore", "proms", "smack", "pithy", "tutus", "muggs", "darer", "resit", "sally", "kembo", "neper", 
  "muter", "waits", "saist", "agios", "stags", "elate", "lobby", "netes", "pucer", "tavah", "grews", "letch", "dream", "pawas", "wraps", "white", "hells", "knock", "radge", "chips", "sedge", "titan", "whift", "sappy", "highs", "solus", "wifes", "slump", "menus", "laika", "marcs", "skeps", "neves", "stond", "gavel", "bowat", "yelps", "burgh", "carrs", "algae", 
  "lorry", "minke", "plumb", "kelpy", "grufe", "baggy", "dints", "varia", "durra", "cohoe", "strep", "honda", "swags", "bauds", "funky", "mikra", "ricks", "eughs", "model", "moted", "steno", "deuce", "puker", "bliss", "salal", "makes", "signs", "bonny", "jowls", "organ", "bawty", "remit", "tails", "mongs", "rears", "stews", "wires", "sculs", "chirr", "dados", 
  "ruing", "shope", "bants", "sapid", "siped", "riata", "lodge", "stang", "cleft", "whats", "rudes", "rivet", "morae", "rubus", "septs", "naiks", "katas", "clons", "sycee", "mobes", "canso", "alike", "vogie", "darky", "purim", "rumes", "lacet", "etude", "sabed", "arbas", "ponds", "rotan", "manus", "deice", "artic", "lapis", "commy", "dumbs", "keels", "coaly", 
  "shush", "timer", "sucks", "graph", "borts", "teeny", "bride", "later", "bobas", "nocks", "fends", "rugae", "socks", "rebuy", "euked", "pujas", "kelps", "snoke", "makar", "flaxy", "keeno", "growl", "chews", "fonly", "jongs", "latch", "skivy", "wanes", "yabby", "carks", "scars", "frown", "clems", "mesal", "douar", "aimed", "puffs", "torse", "echos", "bless", 
  "ferny", "deeps", "podgy", "goosy", "rents", "child", "herns", "speck", "bigha", "sauls", "shent", "japan", "pawky", "lanes", "slain", "gnash", "twilt", "acerb", "quest", "shill", "teens", "bunts", "grove", "ryots", "dyked", "pints", "cella", "cable", "jubas", "ouped", "panty", "skegs", "bawns", "merch", "geals", "heirs", "benet", "rivel", "shims", "quoif", 
  "cheek", "pogge", "wited", "pakka", "socle", "galah", "synds", "borax", "parts", "yield", "ablow", "basis", "shams", "kalpa", "tiars", "butte", "spike", "decko", "arras", "licks", "rekes", "volae", "honds", "fomes", "lotah", "hasta", "birsy", "hesps", "perse", "gyral", "dewan", "metol", "wrong", "loopy", "tacit", "agita", "hully", "toyed", "acted", "chirp", 
  "kelts", "paxes", "acmes", "nosed", "meter", "jobed", "savoy", "lysis", "gnarr", "sengi", "chats", "biffs", "krill", "nevel", "haole", "heels", "gruff", "nobby", "aired", "kiddy", "fugus", "brush", "doxie", "cills", "lycra", "jacks", "caums", "dales", "arpas", "deked", "flaks", "lamer", "limit", "muons", "river", "winns", "haply", "coxed", "stats", "rindy", 
  "bubal", "meant", "thole", "aahed", "panic", "vitas", "tenth", "moups", "eidos", "muser", "hevea", "carse", "kidge", "hence", "nears", "muras", "beths", "drawn", "runed", "works", "bathe", "yawey", "skirr", "haily", "sneap", "gajos", "dobla", "doser", "punch", "peepe", "pusle", "roper", "tragi", "bilby", "based", "pucks", "loure", "scene", "caddy", "dined", 
  "laths", "pioys", "bourd", "stand", "gipon", "puree", "diary", "lance", "alums", "podal", "cakes", "miggs", "paves", "kaids", "roped", "modge", "cobia", "appel", "naeve", "rover", "books", "giros", "fuels", "bayts", "orris", "stopt", "conne", "spilt", "derig", "baghs", "vanes", "subah", "poynt", "soppy", "tunas", "maple", "flees", "bidet", "egads", "hajis", 
  "tuner", "jubes", "redos", "nutsy", "snubs", "cutch", "routs", "trets", "enate", "faurd", "dusts", "cloud", "spoot", "turks", "pocky", "xysti", "stunt", "belah", "silky", "sales", "poesy", "denay", "genro", "chide", "thrae", "unbid", "retag", "flary", "stake", "stood", "nurds", "newel", "layed", "cogie", "slane", "trawl", "mixed", "payor", "chick", "tiler", 
  "quirt", "rangy", "atrip", "blawn", "cadre", "bunia", "stuck", "times", "thars", "sauce", "sleys", "traps", "beech", "sheal", "finis", "neddy", "rares", "palea", "sices", "lushy", "styes", "cider", "petal", "trios", "prion", "patch", "odyls", "coram", "kivas", "elfed", "lawns", "built", "prosy", "gobby", "chaft", "pumas", "joker", "chuff", "pawls", "cytes", 
  "peans", "kurus", "cutey", "shows", "tuans", "skran", "clomb", "calix", "hoser", "litho", "sceat", "ricey", "pygal", "trefa", "ditto", "amove", "rivas", "proyn", "gigot", "polts", "outer", "lours", "kapas", "dunce", "merel", "kakis", "tanka", "daint", "ounce", "troys", "jalop", "foxed", "bludy", "shiur", "slack", "fuddy", "relay", "silva", "fiscs", "bobby", 
  "clapt", "drupe", "soars", "spire", "wheft", "dreys", "adobo", "skull", "lower", "peals", "brosy", "ranks", "saser", "sinds", "floes", "lears", "pipul", "nervy", "spets", "wills", "yauds", "faked", "homas", "strow", "urine", "chows", "debus", "loups", "whims", "vrows", "topoi", "baaed", "rimer", "relit", "devot", "yourn", "manes", "barny", "recal", "antre", 
  "vexed", "idyls", "amend", "cadge", "griff", "gapes", "besti", "drier", "slunk", "carer", "tyred", "holon", "musth", "nerdy", "agria", "hoise", "moers", "penna", "check", "terek", "sakia", "roguy", "malva", "sofas", "basan", "yucch", "liked", "fugle", "vagus", "pashm", "husos", "coria", "funks", "kilts", "colin", "cover", "jetes", "tipis", "roved", "brers", 
  "nuddy", "limbo", "elope", "mesas", "vises", "plasm", "mincy", "canon", "googs", "genie", "corny", "brise", "kinda", "mairs", "tanas", "punce", "pixes", "liras", "bulls", "leash", "nomoi", "creel", "revet", "emmys", "pardy", "alods", "mewed", "trank", "noles", "sudds", "pulpy", "ladle", "fetch", "truce", "koban", "guess", "ducks", "babas", "thewy", "gists", 
  "padre", "shift", "mulla", "skell", "woxen", "yamen", "ceded", "jives", "boogy", "tubby", "pents", "video", "kitty", "bench", "mobie", "linga", "yoker", "peppy", "fatal", "spule", "spard", "sager", "nacho", "piets", "kevil", "aitch", "pesos", "cheep", "haves", "sools", "waxed", "arnas", "honan", "mitis", "yufts", "dorts", "groof", "pands", "laxes", "sully", 
  "vetch", "ceria", "gungy", "amped", "maiko", "mowra", "kutus", "disas", "faggy", "hacks", "kamik", "haros", "argle", "birls", "piert", "puhas", "unlaw", "drift", "donsy", "pippy", "apres", "brant", "patty", "yupon", "oohed", "grype", "liths", "blees", "pilau", "bodle", "finca", "whata", "fesse", "munis", "ergon", "valse", "logia", "wried", "found", "belar", 
  "chomp", "sorgo", "steak", "snash", "grubs", "elegy", "modes", "nappa", "rodeo", "unify", "laxer", "vughy", "prims", "touns", "kaika", "napes", "rally", "moust", "ratas", "ceres", "kauru", "ratos", "maire", "yurta", "bands", "dawen", "neals", "roops", "jasey", "dopas", "ramie", "bosky", "fanks", "arere", "coffs", "hangi", "rajes", "clown", "cesse", "ourie", 
  "pager", "moder", "clogs", "pugil", "avise", "salps", "hotch", "yacka", "mille", "deids", "lases", "stumm", "wired", "grise", "dwalm", "solas", "years", "dault", "surra", "dempt", "arpen", "cotan", "erned", "peags", "macro", "pyxie", "waulk", "whaps", "rummy", "farad", "wasms", "seeds", "souse", "sclim", "sixer", "tewed", "burrs", "arced", "great", "lotto", 
  "styre", "niece", "tempo", "pikis", "stria", "gooks", "motes", "mutts", "lengs", "cited", "promo", "karst", "skyrs", "civie", "urase", "femes", "lumps", "verts", "bills", "specs", "rebel", "tinge", "imids", "manas", "blowy", "lytic", "mossy", "sweet", "lysed", "cello", "rhies", "beaux", "coins", "punka", "worry", "cocky", "dufus", "conch", "patin", "sojas", 
  "bulgy", "trash", "borgo", "roist", "creep", "glike", "farle", "sulky", "pipit", "cabby", "kited", "hauld", "paise", "crape", "chaos", "mocha", "boets", "globi", "tolas", "bothy", "attar", "parve", "kophs", "adage", "yexes", "annas", "brans", "jambu", "ficus", "texts", "wrier", "acers", "sooey", "setal", "naled", "moira", "crare", "civet", "amole", "narre", 
  "trine", "nouns", "neeps", "shand", "beaty", "galax", "riles", "calms", "shaly", "ramps", "brail", "vegan", "vrils", "index", "duing", "abate", "wilga", "kneel", "ducal", "dynel", "tetes", "reddy", "chimp", "cronk", "wades", "legal", "wrawl", "sculp", "speat", "milds", "koura", "stean", "alias", "cains", "gyved", "reels", "intil", "brave", "trant", "pavan", 
  "jesus", "cline", "olent", "solon", "linny", "regur", "leugh", "phuts", "wilts", "abaka", "known", "welly", "rases", "shits", "dovie", "umpty", "shere", "hushy", "ammos", "pulks", "dowly", "sease", "crown", "aches", "harem", "ideas", "pyran", "basto", "bluer", "sewed", "nomic", "pures", "marid", "noble", "petty", "niffy", "medic", "trior", "nitry", "rykes", 
  "amice", "pipet", "teeth", "glues", "sitar", "morne", "prier", "leper", "paste", "tuple", "fraud", "speak", "koels", "meris", "rigor", "awave", "yates", "avant", "depth", "buroo", "nimps", "trees", "warbs", "kotow", "chest", "gemma", "botty", "cogue", "sewer", "beets", "tepal", "chops", "houri", "mourn", "added", "dryad", "pleas", "douts", "pedes", "trods", 
  "whirl", "fains", "malls", "kills", "talon", "sauna", "druxy", "ukase", "flisk", "tronc", "cawed", "fleck", "prone", "crams", "blebs", "denes", "dinky", "lairs", "marae", "mingy", "chief", "crena", "speal", "goose", "tapet", "faxes", "duxes", "icons", "ricer", "hakas", "tasar", "siege", "rouen", "tusks", "litas", "among", "masts", "spunk", "primi", "night", 
  "hoves", "fendy", "gleds", "axing", "heros", "taler", "naras", "pelta", "haven", "flows", "dangs", "momes", "trema", "adits", "cloff", "stied", "roric", "stage", "blues", "brunt", "steps", "cress", "wises", "jimpy", "hairy", "rared", "lummy", "trabs", "flors", "flaky", "quoit", "curse", "binge", "mensa", "glory", "kbars", "baloo", "oulks", "pomes", "pivot", 
  "roots", "stivy", "tonne", "kithe", "pours", "horis", "moire", "gaspy", "reman", "synch", "thilk", "yaffs", "favas", "imino", "gaitt", "bocci", "fumed", "gusty", "podex", "bayle", "proke", "faint", "withe", "touts", "xenia", "cusec", "rayon", "sials", "bides", "atlas", "stend", "boral", "serrs", "arete", "finch", "jingo", "muley", "pared", "towns", "atopy", 
  "snack", "sades", "thuds", "compt", "goffs", "tupek", "below", "wytes", "kandy", "smugs", "dolia", "animi", "arris", "ember", "typey", "upter", "sithe", "shris", "spide", "bawls", "devon", "indol", "nebel", "latah", "bools", "morts", "homme", "mousy", "muled", "phons", "pouty", "shore", "rices", "bolts", "scute", "unary", "polar", "whilk", "gabby", "cento", 
  "taxed", "coapt", "onned", "dippy", "sists", "olden", "pupal", "isles", "sluse", "hares", "hexed", "glums", "stool", "lubed", "verst", "forum", "brugh", "marri", "proin", "shewn", "swung", "solds", "wolly", "stuns", "barye", "coden", "sober", "brink", "cells", "moved", "noons", "perai", "bided", "pence", "teene", "mucho", "liger", "gorps", "elite", "scrim", 
  "dials", "libri", "misch", "gings", "meson", "dixit", "abyes", "algid", "glops", "whiff", "filmy", "halos", "pappi", "geans", "begot", "heids", "caaed", "purpy", "brawn", "mirly", "mercy", "rotls", "fogle", "lardy", "neath", "doris", "recta", "moper", "gunks", "smuts", "chics", "doddy", "ament", "repla", "dited", "cause", "reata", "bergs", "croon", "torah", 
  "cosed", "kibes", "taped", "ugged", "riffs", "brusk", "state", "hause", "swash", "sends", "metre", "vying", "leges", "calve", "unity", "abies", "nitro", "soils", "skews", "alloy", "caret", "dalle", "moron", "fates", "prads", "sulks", "knops", "oater", "shine", "junco", "hyena", "dured", "circa", "heast", "dolly", "chufa", "hovel", "socko", "sants", "hosts", 
  "salts", "daisy", "karma", "wames", "beams", "mifty", "mambo", "hoaed", "apery", "ameer", "smogs", "palas", "narks", "unarm", "adman", "egged", "bevue", "modal", "lepid", "dolor", "fudge", "porge", "shule", "swoon", "bawrs", "charr", "neive", "savvy", "liter", "gismo", "horal", "nolos", "siris", "wasps", "pecke", "gulph", "fuggy", "beted", "sayst", "dusky", 
  "doorn", "scrat", "gonks", "trove", "dhols", "morro", "gases", "spurs", "mulct", "garbe", "petto", "harry", "bruts", "virid", "jomos", "nukes", "sirra", "recur", "halma", "roast", "wakes", "gyros", "wersh", "mains", "toady", "booby", "oxers", "tones", "jotas", "sorra", "loads", "venal", "fiche", "endew", "aural", "grits", "gymps", "toons", "kindy", "twice", 
  "amido", "sards", "surat", "rauns", "weros", "wiser", "doomy", "hooly", "spite", "heard", "brews", "gibed", "hooey", "smoky", "canny", "frory", "brass", "bagie", "means", "meved", "thoro", "feres", "venge", "prawn", "abask", "levee", "plunk", "altar", "tutty", "fisty", "hythe", "debby", "emmet", "preed", "clags", "alane", "styed", "smaak", "sprit", "yonks", 
  "duded", "abrim", "antas", "dewax", "yogis", "shite", "halse", "biers", "sunna", "dooks", "races", "venae", "shred", "whoof", "staff", "incus", "glift", "sined", "twirp", "knave", "shrow", "lifts", "risks", "ramee", "dacks", "daddy", "dimer", "fubsy", "bunde", "lambs", "foist", "britt", "haver", "yawps", "bolds", "titup", "gamba", "meses", "cuber", "miens", 
  "murly", "crocs", "bemud", "sarks", "yerds", "conga", "cotes", "elain", "afire", "leuch", "panim", "teras", "blets", "mened", "theft", "flask", "kreep", "bulks", "privy", "waver", "toits", "snaps", "betes", "ropey", "loofs", "sheet", "croci", "ascus", "aigas", "ludic", "torrs", "horst", "chaws", "sekts", "pudge", "boost", "brows", "filed", "befit", "halts", 
  "cycas", "benes", "awoke", "geyer", "quell", "hable", "thane", "caids", "egger", "lynch", "yacks", "alkyd", "glace", "hinge", "toman", "codes", "chiao", "jarta", "foody", "hough", "lorel", "jaggy", "lited", "balsa", "geoid", "hoers", "sayon", "dural", "caese", "serve", "boots", "putts", "resee", "niefs", "appuy", "skegg", "anode", "raver", "tides", "barms", 
  "bobak", "rowel", "mares", "groma", "marge", "fours", "pouts", "ymolt", "lards", "gyves", "orang", "upled", "lousy", "peage", "sepic", "yakka", "gaffs", "tharm", "barre", "ayins", "askoi", "cools", "rache", "dotty", "kirns", "cecal", "rogue", "besot", "papaw", "wight", "kyang", "gowls", "eches", "aland", "doffs", "taros", "pilao", "quark", "guise", "gyrus", 
  "empts", "barer", "colby", "womby", "sexed", "harts", "heedy", "waddy", "quais", "romps", "salpa", "kulas", "breid", "fault", "dervs", "toast", "parch", "jello", "quayd", "shirs", "arets", "blert", "cedes", "filch", "primo", "potty", "seeps", "treys", "yowie", "poler", "sport", "saiga", "grody", "hanse", "jawan", "fluey", "gomer", "sylva", "drear", "pearl", 
  "semie", "boffs", "birch", "faver", "hedge", "yogin", "luffa", "mites", "hones", "sorel", "irked", "asses", "jiggy", "sauts", "witty", "sippy", "boner", "mawed", "polio", "trims", "whipt", "tonic", "meshy", "gaunt", "covin", "hider", "porer", "combi", "bunns", "lemed", "cutes", "vault", "crits", "simis", "eater", "flirt", "slurp", "needy", "gurry", "quods", 
  "slows", "jolly", "nobly", "safed", "mafia", "skail", "hunky", "roshi", "coirs", "ploat", "coked", "uveas", "volet", "keeve", "bitty", "cruds", "cades", "banks", "dicey", "thins", "aline", "sooty", "digit", "proas", "muggy", "daven", "condo", "tells", "noyau", "pacta", "dunno", "humid", "wacko", "yeard", "giver", "erose", "gesso", "grots", "stull", "bunko", 
  "jorum", "brith", "skeos", "sukhs", "beach", "chant", "kohas", "masty", "scoug", "weete", "grabs", "elude", "swang", "busks", "degum", "frank", "frogs", "sprog", "saber", "buret", "weave", "geist", "mages", "dishy", "skyed", "kauri", "dumps", "snits", "welts", "conns", "guppy", "sowne", "liver", "dagga", "unlet", "wrath", "heats", "imbed", "loots", "gleet", 
  "selva", "turns", "kight", "litre", "preen", "unsex", "mosey", "abeam", "wimpy", "regar", "spyre", "clank", "padle", "dowed", "ayres", "dealt", "begar", "saury", "raias", "crome", "wombs", "chili", "spiel", "beast", "hinds", "junky", "alaps", "redux", "sherd", "inlet", "prems", "grind", "hexer", "fined", "scogs", "roves", "kappa", "admix", "emits", "taroc", 
  "amiss", "clone", "dowar", "gravs", "ruses", "shelf", "mimed", "imide", "chunk", "yager", "imbar", "aorta", "krang", "boomy", "sixte", "gyppo", "unrid", "pinks", "mores", "sound", "cubic", "bigly", "cacas", "piety", "chapt", "liven", "swobs", "parki", "teary", "arils", "fetal", "tared", "rouls", "genua", "swats", "indie", "podge", "snugs", "gorsy", "mixte", 
  "swamp", "voted", "refel", "widen", "takes", "guild", "plouk", "almug", "afear", "blips", "power", "golem", "sneds", "slims", "jafas", "roble", "gliff", "inert", "louse", "tinea", "limbi", "voces", "mudra", "loipe", "plims", "gusla", "ester", "paten", "niton", "skulk", "bucks", "forel", "qubit", "preve", "toyos", "studs", "dungy", "emmas", "hunch", "nifty", 
  "recco", "sinew", "spait", "dooly", "skean", "raped", "tophe", "fouth", "lohan", "chess", "larch", "linos", "lairy", "grads", "bulla", "lycee", "purrs", "sangs", "tonka", "lunch", "snath", "edits", "towie", "fungo", "bimbo", "gaped", "skank", "ousel", "spuds", "pests", "ramin", "kulan", "yucko", "naira", "fusee", "pipis", "prief", "crash", "doper", "chits", 
  "mutis", "stink", "eland", "pored", "veery", "goopy", "penny", "keirs", "lanas", "mused", "perea", "swads", "verso", "march", "month", "grapy", "repeg", "setae", "tares", "yabba", "pervs", "deets", "sturt", "foxie", "saute", "truth", "refed", "trist", "unpay", "mudge", "choom", "whump", "wrest", "hobby", "lemon", "puppy", "prink", "royal", "agger", "ruffe", 
  "currs", "vanda", "jauks", "tykes", "mento", "heigh", "vegas", "trice", "dawah", "yauld", 
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


