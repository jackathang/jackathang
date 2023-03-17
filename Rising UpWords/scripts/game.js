
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
    if (difficulty == 3) {
      threeLetterDictionary();
    } else if (difficulty == 4) {
      fourLetterDictionary();
    } else if (difficulty == 5) {
      fiveLetterDictionary();
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
    'about', 'aback', 'abbie', 'abbot', 'abide', 'above', 'abuse', 'abyss', 'acorn', 'actor', 'acute', 'adage', 'adapt', 'adept', 'admit', 'adobe', 'adopt', 'adore', 'adult', 'aegis',
    'afoot', 'after', 'again', 'agent', 'agile', 'aging', 'agony', 'agree', 'ahead', 'ahold', 'aisle', 'alarm', 'album', 'alert', 'alias', 'alien', 'align', 'alike', 'alive', 'allay',
    'alley', 'allow', 'alloy', 'aloft', 'aloha', 'alone', 'along', 'aloof', 'aloud', 'alpha', 'altar', 'alter', 'amber', 'amend', 'amino', 'amiss', 'among', 'ample', 'amuse', 'angel',
    'anger', 'angle', 'angry', 'angst', 'ankle', 'annex', 'apart', 'apple', 'apply', 'apron', 'arbor', 'arena', 'argue', 'arise', 'armor', 'aroma', 'arose', 'array', 'arrow', 'arson',
    'aside', 'aspen', 'assay', 'asset', 'atlas', 'attic', 'audio', 'audit', 'avail', 'avert', 'avoid', 'await', 'awake', 'award', 'aware', 'awash', 'awful', 'awoke', 'axial', 'axiom',
    'bacon', 'badge', 'badly', 'baked', 'baker', 'barge', 'baron', 'basal', 'bases', 'basil', 'basin', 'batch', 'baton', 'beach', 'beard', 'beast', 'beech', 'begun', 'belly', 'bench',
    'benny', 'berry', 'berth', 'bingo', 'birch', 'birth', 'blade', 'blame', 'bland', 'blank', 'blast', 'blaze', 'bleak', 'blend', 'bless', 'blind', 'blink', 'bliss', 'blitz', 'block',
    'blond', 'blood', 'bloom', 'blown', 'blues', 'bluff', 'blunt', 'boast', 'bogus', 'bonus', 'boost', 'booth', 'borne', 'bound', 'bowel', 'boxer', 'brace', 'brain', 'brake', 'brand',
    'brass', 'brave', 'bread', 'break', 'breed', 'brick', 'bride', 'brief', 'brink', 'brisk', 'broad', 'broke', 'brook', 'brown', 'brush', 'buddy', 'bulky', 'bully', 'bunch', 'bunny',
    'burnt', 'burst', 'buyer', 'cabin', 'cable', 'cache', 'calif', 'canal', 'candy', 'canon', 'cargo', 'carol', 'carry', 'catch', 'cater', 'cause', 'cease', 'cedar', 'chain', 'chair',
    'chalk', 'chaos', 'charm', 'chart', 'chase', 'cheap', 'check', 'cheek', 'cheer', 'chess', 'chest', 'chick', 'chief', 'child', 'chile', 'chill', 'china', 'choir', 'chord', 'chose',
    'chuck', 'chunk', 'cigar', 'cisco', 'civic', 'civil', 'claim', 'clash', 'class', 'clean', 'clear', 'clerk', 'click', 'cliff', 'climb', 'clock', 'close', 'cloth', 'cloud', 'coach',
    'coast', 'cocoa', 'colon', 'color', 'comic', 'condo', 'coral', 'corps', 'costa', 'couch', 'cough', 'could', 'count', 'court', 'cover', 'crack', 'craft', 'crane', 'crash', 'crawl',
    'crazy', 'cream', 'creed', 'creek', 'creep', 'crept', 'crest', 'cried', 'cries', 'crime', 'crisp', 'cross', 'crowd', 'crown', 'crude', 'cruel', 'crush', 'crust', 'cubic', 'curry',
    'curse', 'curve', 'cycle', 'daddy', 'daily', 'dairy', 'daisy', 'dally', 'dance', 'dandy', 'dated', 'datum', 'dealt', 'death', 'debit', 'debug', 'debut', 'decal', 'decay', 'decor',
    'decoy', 'decry', 'defer', 'degas', 'deity', 'delay', 'delft', 'delta', 'delve', 'demon', 'demos', 'denim', 'dense', 'depot', 'depth', 'derby', 'deter', 'deuce', 'devil', 'diary',
    'dicey', 'digit', 'diner', 'dingy', 'diode', 'dirty', 'disco', 'ditch', 'ditto', 'diver', 'dizzy', 'dodge', 'dodgy', 'doing', 'dolce', 'dolly', 'donor', 'donut', 'dotty', 'doubt',
    'dough', 'dowdy', 'dowry', 'dozen', 'draft', 'drain', 'drake', 'drama', 'drank', 'drape', 'drawl', 'drawn', 'dread', 'dream', 'dregs', 'dress', 'dried', 'drier', 'dries', 'drift',
    'drill', 'drink', 'drive', 'droll', 'drone', 'dross', 'drove', 'drown', 'drunk', 'dryer', 'ducal', 'duchy', 'dummy', 'dumps', 'durst', 'dusty', 'duvet', 'dwarf', 'dwell', 'dwelt',
    'dying', 'eager', 'eagle', 'eared', 'early', 'earth', 'easel', 'eaten', 'eaves', 'ebony', 'eclat', 'edema', 'edger', 'edict', 'edify', 'eerie', 'eggar', 'egger', 'egret', 'eidos',
    'eight', 'eject', 'elate', 'elbow', 'elder', 'elect', 'elegy', 'elite', 'elope', 'elude', 'elute', 'elves', 'embed', 'ember', 'emcee', 'emend', 'emery', 'emote', 'empty', 'enact',
    'endow', 'enema', 'enemy', 'enjoy', 'ennui', 'ensue', 'enter', 'entry', 'enure', 'envoi', 'envoy', 'eosin', 'epact', 'epoch', 'epode', 'epoxy', 'equal', 'equip', 'erase', 'erect',
    'ergot', 'erica', 'erode', 'error', 'erupt', 'essay', 'ester', 'ether', 'ethic', 'ethos', 'ethyl', 'etude', 'evade', 'event', 'evert', 'every', 'evict', 'evoke', 'exact', 'exalt',
    'excel', 'exert', 'exile', 'exist', 'expat', 'expel', 'extol', 'extra', 'exude', 'exult', 'eyrie', 'facet', 'faint', 'fairy', 'faith', 'false', 'famed', 'fancy', 'farce', 'fatal',
    'fatty', 'fault', 'fauna', 'favor', 'feast', 'feces', 'fence', 'ferry', 'fetal', 'fetch', 'fetus', 'fever', 'fiber', 'fibre', 'field', 'fiery', 'fifth', 'fifty', 'fight', 'final',
    'finch', 'first', 'fitch', 'fixed', 'flair', 'flake', 'flame', 'flank', 'flare', 'flash', 'flask', 'fleet', 'flesh', 'flick', 'flies', 'fling', 'flint', 'float', 'flock', 'flood',
    'floor', 'flora', 'flour', 'flown', 'fluid', 'fluke', 'flung', 'fluor', 'flush', 'flute', 'flyer', 'focal', 'focus', 'foley', 'folio', 'folly', 'foray', 'force', 'forge', 'forgo',
    'forte', 'forth', 'forty', 'forum', 'found', 'fours', 'foyer', 'frail', 'frame', 'frank', 'fraud', 'freak', 'fresh', 'friar', 'fried', 'fries', 'fritz', 'front', 'frost', 'frown',
    'froze', 'fruit', 'fudge', 'fully', 'fungi', 'funky', 'funny', 'furry', 'fuzzy', 'gable', 'gaily', 'gamer', 'gamma', 'garth', 'gator', 'gaudy', 'gauge', 'gaunt', 'gauze', 'geese',
    'gemma', 'genet', 'genie', 'genre', 'genus', 'geode', 'ghost', 'giant', 'giddy', 'girth', 'given', 'giver', 'glade', 'gland', 'glare', 'glass', 'glaze', 'gleam', 'glean', 'glide',
    'glint', 'glitz', 'globe', 'gloom', 'glory', 'gloss', 'glove', 'gnome', 'godly', 'going', 'golly', 'goody', 'gooey', 'goofy', 'goose', 'gorge', 'gouge', 'grace', 'grade', 'graft',
    'grail', 'grain', 'grams', 'grand', 'grant', 'grape', 'graph', 'grasp', 'grass', 'grate', 'grave', 'gravy', 'graze', 'great', 'greed', 'green', 'greet', 'grief', 'grill', 'grime',
    'grimy', 'grind', 'gripe', 'grist', 'groan', 'groin', 'groom', 'gross', 'group', 'grout', 'grove', 'growl', 'grown', 'gruff', 'grunt', 'guard', 'guess', 'guest', 'guide', 'guild',
    'guilt', 'guise', 'gulch', 'gully', 'gusto', 'gutsy', 'habit', 'haiku', 'hairy', 'halal', 'halve', 'hamza', 'handy', 'happy', 'hardy', 'harem', 'harsh', 'haste', 'hasty', 'hatch',
    'haugh', 'haunt', 'haute', 'haven', 'haver', 'havoc', 'hazel', 'heart', 'heath', 'heave', 'heavy', 'hedge', 'hefty', 'heist', 'helix', 'hello', 'hence', 'henna', 'henry', 'heron',
    'hertz', 'hijab', 'hilly', 'hinge', 'hippo', 'hippy', 'hitch', 'hives', 'hoard', 'hoary', 'hobby', 'hocus', 'hogan', 'hoist', 'holey', 'holly', 'homer', 'homey', 'honey', 'honky',
    'honor', 'hooch', 'hooky', 'horde', 'horse', 'hotel', 'hotly', 'hound', 'house', 'hovel', 'hover', 'howdy', 'hubby', 'huffy', 'human', 'humic', 'humid', 'humor', 'humus', 'hunch',
    'hunks', 'hunky', 'hurry', 'husky', 'hutch', 'hydra', 'hydro', 'hyena', 'hymen', 'hyper', 'icily', 'icing', 'ictus', 'ideal', 'ideas', 'idiom', 'idiot', 'idled', 'idler', 'idles',
    'idols', 'idyll', 'idyls', 'igloo', 'ileus', 'iliac', 'ilium', 'image', 'imbed', 'imbue', 'impel', 'imply', 'inane', 'inapt', 'incur', 'incus', 'index', 'indie', 'indue', 'inept',
    'inert', 'infer', 'infix', 'infos', 'infra', 'ingle', 'ingot', 'inion', 'inked', 'inker', 'inlay', 'inlet', 'inned', 'inner', 'input', 'inset', 'intro', 'inure', 'invar', 'iodic',
    'ionic', 'iotas', 'irade', 'irate', 'irked', 'irons', 'irony', 'isled', 'isles', 'islet', 'issue', 'itchy', 'items', 'ivied', 'ivies', 'ivory', 'jacks', 'jades', 'jaggs', 'jaggy',
    'jails', 'jakes', 'jambs', 'janty', 'japan', 'jarls', 'jaunt', 'javas', 'jawed', 'jazzy', 'jeans', 'jeeps', 'jello', 'jelly', 'jerks', 'jerky', 'jewel', 'jiffy', 'jiggy', 'jocks',
    'joint', 'joist', 'joker', 'jokey', 'jolly', 'joule', 'joust', 'jowly', 'judge', 'juice', 'juicy', 'jujus', 'juked', 'jukes', 'jumbo', 'jumps', 'jumpy', 'junks', 'junky', 'jural',
    'juror', 'justs', 'jutty', 'kabob', 'kaput', 'karat', 'karma', 'karst', 'kayak', 'kazoo', 'kebab', 'kebob', 'kelps', 'kelpy', 'kelts', 'kendo', 'khaki', 'kicky', 'kiddo', 'kiddy',
    'kiosk', 'kissy', 'kitty', 'klutz', 'knack', 'knave', 'knead', 'kneel', 'knell', 'knelt', 'knife', 'knock', 'knoll', 'knout', 'known', 'koala', 'kooky', 'kraft', 'kraut', 'krill',
    'kudos', 'kudzu', 'kugel', 'label', 'labor', 'lacey', 'laden', 'ladle', 'lager', 'laird', 'laker', 'lance', 'lanky', 'lapel', 'lapse', 'large', 'largo', 'laser', 'latch', 'later',
    'latex', 'lathe', 'latte', 'laugh', 'layer', 'leach', 'leafy', 'leaky', 'leapt', 'learn', 'lease', 'leash', 'least', 'leave', 'ledge', 'leech', 'lefty', 'legal', 'lemon', 'level',
    'lever', 'lewis', 'lexis', 'light', 'lilac', 'limbo', 'limit', 'linen', 'liner', 'lingo', 'links', 'lipid', 'liter', 'lithe', 'litre', 'liver', 'lives', 'livid', 'loath', 'lobby',
    'local', 'lodge', 'lofty', 'logic', 'login', 'logon', 'loner', 'loony', 'loopy', 'loose', 'loser', 'lotto', 'lotus', 'lousy', 'lover', 'lower', 'lowly', 'loyal', 'lucid', 'lucky',
    'lumen', 'lumpy', 'lunar', 'lunch', 'lupus', 'lurch', 'lurid', 'lying', 'lymph', 'lynch', 'lyric', 'macho', 'macro', 'madly', 'mafic', 'magic', 'magma', 'maize', 'major', 'maker',
    'mamma', 'mango', 'mania', 'manic', 'manly', 'manor', 'maple', 'march', 'marry', 'marsh', 'mason', 'masse', 'match', 'mater', 'maths', 'matte', 'mauve', 'maven', 'mavis', 'maybe',
    'mayor', 'meant', 'meaty', 'mecca', 'medal', 'media', 'medic', 'melon', 'mercy', 'merge', 'merit', 'merry', 'messy', 'metal', 'meter', 'metre', 'metro', 'micro', 'midst', 'might',
    'milky', 'mimic', 'mince', 'miner', 'minor', 'minus', 'misty', 'mitre', 'mixed', 'mixer', 'model', 'modem', 'mogul', 'moist', 'molar', 'money', 'month', 'moody', 'moose', 'moral',
    'moray', 'mores', 'morph', 'motel', 'motif', 'motor', 'motto', 'mould', 'mound', 'mount', 'mourn', 'mouse', 'mouth', 'mover', 'movie', 'mucus', 'muddy', 'mulch', 'mummy', 'munch',
    'mural', 'murky', 'music', 'musty', 'muted', 'nacho', 'naive', 'naked', 'nanny', 'nappy', 'narco', 'narky', 'nasal', 'nasty', 'natch', 'natty', 'naval', 'neath', 'needs', 'needy',
    'neigh', 'nerve', 'nervy', 'netty', 'never', 'newly', 'newsy', 'nexus', 'niche', 'niece', 'nifty', 'night', 'ninja', 'ninth', 'nippy', 'nitro', 'nobby', 'noble', 'nodal', 'noise',
    'noisy', 'nomad', 'nonce', 'nooky', 'noose', 'north', 'nosey', 'notch', 'noted', 'novel', 'nudge', 'nurse', 'nutsy', 'nutty', 'nylon', 'nymph', 'oasis', 'oaten', 'oater', 'obese',
    'occur', 'ocean', 'ochre', 'octal', 'octet', 'offer', 'often', 'oiled', 'oiler', 'okapi', 'olden', 'oldie', 'olive', 'ombre', 'omega', 'onion', 'onset', 'opera', 'opium', 'optic',
    'orate', 'orbit', 'order', 'organ', 'osmic', 'other', 'otter', 'ought', 'ounce', 'outdo', 'outer', 'outgo', 'ovary', 'ovate', 'overt', 'ovule', 'owing', 'owlet', 'owned', 'owner',
    'oxide', 'ozone', 'paddy', 'pagan', 'pager', 'paint', 'panda', 'panel', 'panic', 'papal', 'paper', 'parry', 'party', 'pasta', 'paste', 'patch', 'patio', 'patsy', 'patty', 'pause',
    'payer', 'peace', 'peach', 'pearl', 'pedal', 'penal', 'pence', 'penis', 'penny', 'perch', 'peril', 'perry', 'peter', 'petit', 'petty', 'phase', 'phone', 'photo', 'piano', 'piece',
    'piety', 'piggy', 'piles', 'pilot', 'pinch', 'pinot', 'pinto', 'pious', 'piper', 'pitch', 'pivot', 'pixel', 'pizza', 'place', 'plain', 'plane', 'plank', 'plant', 'plate', 'plaza',
    'plead', 'pluck', 'plumb', 'plume', 'plump', 'plush', 'point', 'poise', 'poker', 'polar', 'polio', 'poppy', 'porch', 'posse', 'pouch', 'pound', 'power', 'press', 'price', 'prick',
    'pride', 'prime', 'print', 'prior', 'prism', 'privy', 'prize', 'probe', 'prone', 'proof', 'prose', 'proud', 'prove', 'proxy', 'psalm', 'pulse', 'punch', 'pupil', 'puppy', 'purge',
    'purse', 'quack', 'quads', 'quags', 'quail', 'quais', 'quake', 'quaky', 'quant', 'quark', 'quart', 'quasi', 'quass', 'quays', 'queen', 'queer', 'quell', 'query', 'quest', 'queue',
    'queys', 'quick', 'quids', 'quiet', 'quill', 'quilt', 'quips', 'quire', 'quirk', 'quite', 'quits', 'quota', 'quote', 'rabbi', 'rabid', 'racer', 'radar', 'radio', 'rainy', 'raise',
    'rally', 'ralph', 'ramps', 'ranch', 'range', 'rapid', 'ratio', 'raven', 'razor', 'reach', 'react', 'ready', 'realm', 'rebar', 'rebel', 'rebut', 'recap', 'recon', 'recur', 'refer',
    'regal', 'rehab', 'reign', 'reins', 'relax', 'relay', 'relic', 'remit', 'remix', 'renew', 'repay', 'repel', 'reply', 'rerun', 'reset', 'resin', 'retro', 'reuse', 'rhino', 'rhyme',
    'ricin', 'rider', 'ridge', 'rifle', 'right', 'rigid', 'rigor', 'rinse', 'ripen', 'riser', 'risky', 'rival', 'river', 'rivet', 'roach', 'roast', 'robin', 'robot', 'rocky', 'rodeo',
    'roger', 'rogue', 'roman', 'roomy', 'rotor', 'rouge', 'rough', 'round', 'rouse', 'route', 'rover', 'rowan', 'rowdy', 'royal', 'ruble', 'ruddy', 'ruler', 'rumor', 'runny', 'rural',
    'rusty', 'saint', 'salad', 'sandy', 'sauce', 'scale', 'scene', 'scope', 'score', 'scrap', 'sense', 'serve', 'seven', 'shade', 'shake', 'shall', 'shame', 'shape', 'share', 'sharp',
    'sheep', 'sheer', 'sheet', 'shelf', 'shell', 'shift', 'shirt', 'shock', 'shook', 'shoot', 'shore', 'short', 'shown', 'sight', 'silly', 'since', 'sixth', 'sixty', 'sized', 'skill',
    'sleep', 'slide', 'small', 'smart', 'smell', 'smile', 'smith', 'smoke', 'solar', 'solid', 'solve', 'sorry', 'sound', 'south', 'space', 'spare', 'speak', 'speed', 'spell', 'spend',
    'spent', 'split', 'spoke', 'sport', 'spray', 'squad', 'stack', 'staff', 'stage', 'stake', 'stamp', 'stand', 'start', 'state', 'steam', 'steel', 'steep', 'stick', 'stiff', 'still',
    'stock', 'stone', 'stood', 'store', 'storm', 'story', 'strip', 'stuck', 'study', 'stuff', 'style', 'sugar', 'suite', 'super', 'surge', 'sweep', 'sweet', 'swept', 'swift', 'swing',
    'table', 'taboo', 'tacit', 'taken', 'tales', 'tally', 'taste', 'tasty', 'taxes', 'taxis', 'teach', 'tease', 'teeth', 'tempo', 'tenor', 'tense', 'tenth', 'terry', 'texas', 'thank',
    'theft', 'their', 'theme', 'there', 'these', 'thick', 'thief', 'thigh', 'thing', 'think', 'third', 'thorn', 'those', 'three', 'threw', 'throw', 'thumb', 'tidal', 'tiger', 'tight',
    'timer', 'times', 'timid', 'tired', 'title', 'toast', 'today', 'token', 'tonic', 'tooth', 'topaz', 'topic', 'torch', 'torso', 'total', 'touch', 'tough', 'towel', 'tower', 'toxic',
    'toxin', 'trace', 'track', 'tract', 'trade', 'trail', 'train', 'trait', 'trash', 'tread', 'treat', 'trend', 'trial', 'tribe', 'trick', 'tried', 'tries', 'troop', 'trout', 'truce',
    'truck', 'truly', 'trump', 'trunk', 'trust', 'truth', 'tuner', 'turbo', 'tutor', 'tweed', 'twice', 'twist', 'tying', 'udder', 'ulcer', 'ultra', 'umber', 'umbra', 'unarm', 'unban',
    'unbar', 'unbox', 'uncap', 'uncle', 'uncut', 'under', 'undid', 'undue', 'unfed', 'unfit', 'unfix', 'unify', 'union', 'unite', 'units', 'unity', 'unlit', 'unpeg', 'unpen', 'unpin',
    'unsay', 'unset', 'unsew', 'untie', 'until', 'unwed', 'unwit', 'unzip', 'upend', 'upper', 'upset', 'urban', 'urged', 'urges', 'urine', 'usage', 'usher', 'usual', 'usurp', 'utter',
    'uvula', 'wacko', 'wacky', 'wafer', 'wager', 'wagon', 'waist', 'waive', 'waken', 'wally', 'waltz', 'washy', 'waste', 'watch', 'water', 'waver', 'weary', 'weave', 'wedge', 'weedy',
    'weepy', 'weigh', 'weird', 'welch', 'welsh', 'wench', 'whack', 'whale', 'wharf', 'wheat', 'wheel', 'where', 'which', 'whiff', 'while', 'whine', 'whirl', 'whisk', 'whist', 'white',
    'whole', 'whoop', 'whose', 'widen', 'widow', 'width', 'wield', 'wight', 'willy', 'wince', 'winch', 'windy', 'wiper', 'wired', 'witch', 'witty', 'wives', 'woken', 'woman', 'women',
    'wonky', 'woody', 'wooly', 'woozy', 'wordy', 'world', 'worry', 'worse', 'worst', 'worth', 'would', 'wound', 'woven', 'wrath', 'wreak', 'wreck', 'wring', 'wrist', 'write', 'wrong',
    'wrote', 'wrung', 'xenia', 'xenon', 'xerox', 'yacht', 'yacks', 'yahoo', 'yanks', 'yards', 'yarns', 'yawed', 'yawls', 'yawns', 'yeahs', 'yearn', 'years', 'yeast', 'yells', 'yelps',
    'yield', 'yikes', 'yodel', 'yogas', 'yoked', 'yokes', 'yolks', 'yolky', 'young', 'yours', 'youth', 'yucca', 'yucky', 'yummy', 'zappy', 'zeals', 'zebra', 'zeros', 'zilch', 'zincs',
    'zings', 'zippy', 'zoned', 'zones', 'zooms'
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
  scoreLabel.textContent = score;

  // sets highscore score label to current score
  highscoreLabel.textContent = score;

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


