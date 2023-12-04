// Kanoodle button
const kanoodleButton = document.querySelector("#title")

kanoodleButton.addEventListener("click", function() {
    window.location.href = window.location.href;
})

// Selects Piece
const colorElements = document.querySelectorAll('.color-selection');
const numOfElements = colorElements.length;

const pieces = {
    gray: [
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]
    ],
    white: [
        [0, 0, 0, 0],
        [0, 2, 2, 0],
        [0, 2, 0, 0],
        [0, 0, 0, 0]
    ],
    peach: [
        [0, 3, 0, 0],
        [0, 3, 3, 0],
        [0, 3, 0, 0],
        [0, 3, 0, 0]
    ],
    pink: [
        [4, 4, 0, 0],
        [0, 4, 4, 0],
        [0, 0, 4, 0],
        [0, 0, 0, 0]
    ],
    red: [
        [0, 0, 5, 0],
        [0, 5, 5, 0],
        [0, 5, 5, 0],
        [0, 0, 0, 0]
    ],
    orange: [
        [0, 6, 0, 0],
        [0, 6, 0, 0],
        [0, 6, 6, 0],
        [0, 0, 0, 0]
    ],
    yellow: [
        [0, 7, 7, 0],
        [0, 7, 0, 0],
        [0, 7, 7, 0],
        [0, 0, 0, 0]
    ],
    lime: [
        [0, 0, 0, 0],
        [0, 8, 8, 0],
        [0, 8, 8, 0],
        [0, 0, 0, 0]
    ],
    green: [
        [0, 0, 9, 0],
        [0, 9, 9, 0],
        [0, 9, 0, 0],
        [0, 9, 0, 0]
    ],
    aqua: [
        [0, 0, 0, 0],
        [0, 10, 10, 10],
        [0, 10, 0, 0],
        [0, 10, 0, 0]
    ],
    blue: [
        [0, 11, 0, 0],
        [0, 11, 0, 0],
        [0, 11, 0, 0],
        [0, 11, 11, 0]
    ],
    purple: [
        [0, 12, 0, 0],
        [0, 12, 0, 0],
        [0, 12, 0, 0],
        [0, 12, 0, 0]
    ],
};

// selects piece 
var selectedPiece = '';
function selectColor() {
    selectedPiece = this.id;
    drawPiece(pieces[selectedPiece],selectedPiece);
    
}

function resetPiece() {
    pieceBoard.style.display = "none";
    pieceOverlayHoles.forEach(function(hole) {
        hole.style.backgroundColor = "var(--transparent)";  
        hole.classList.remove("piece-object");
    })
    pieceBoard.style.display = "unset";
}

// displays piece
function drawPiece(piece,color) {
    // resets board
    resetPiece()

    // draws piece
    for (i=0;i<piece.length;i++){
        for (j=0;j<piece[i].length;j++) {
            if (piece[i][j] != 0) {
                hole = document.querySelector(`.overlayr${i+1}#c${j+1}`);
                if (hole) {
                    hole.style.backgroundColor = `var(--piece-${color}`; 
                    hole.classList.add("piece-object");
                } 
            }
        }
    }
}

// Adds function to color buttons
for (i=0;i<numOfElements;i++) {
    colorElements[i].addEventListener('click',selectColor);
}

// ======================================================================================================

// rotate + flip functionality
// Modified piece Memory
const rotateRightButton = document.querySelector("#rotate-right");
const flipButton = document.querySelector("#flip");
const rotateLeftButton = document.querySelector("#rotate-left");


// Creates and populates arrays of pieces that will be modified, and displayed.
const modifiedPieces = Array.from({ length: 12 }, () =>
    Array.from({ length: 4 }, () => Array(4).fill(0))
);

for (const key in pieces) {
    for (i=0;i<pieces[key].length;i++) {
        for (j=0;j<pieces[key].length;j++){
            modifiedPieces[Object.keys(pieces).indexOf(key)][i][j] = pieces[key][i][j];
        }
    }
}

function rowToColumn(matrix){
    const temp = Array.from({length: matrix.length}, () => Array(matrix.length).fill(0));
    for (i=0;i<matrix.length;i++) {
        for (j=0;j<matrix[i].length;j++) {
            temp[i][j] = matrix[j][i];
        }
    }
    for (i=0;i<matrix.length;i++) {
        for (j=0;j<matrix[i].length;j++) {
            matrix[i][j] = temp[i][j];
        }
    }
    
}
function reverseColumn(matrix) {
    const temp = Array.from({length: matrix.length}, () => Array(matrix.length).fill(0));
    for (i=0;i<matrix.length;i++) {
        for (j=0;j<matrix[i].length;j++) {
            temp[i][j] = matrix[i][(temp[i].length)-j-1];
        }
    }
    for (i=0;i<matrix.length;i++) {
        for (j=0;j<matrix[i].length;j++) {
            matrix[i][j] = temp[i][j];
        }
    }
    

}
function reverseRow(matrix) {
    const temp = Array.from({length: matrix.length}, () => Array(matrix.length).fill(0));
    for (i=0;i<matrix.length;i++) {
        temp[i] = matrix[(temp.length)-i-1];
    }
    for (i=0;i<matrix.length;i++) {
        matrix[i]=temp[i];
    }
}
function rotateRight() {
    piece = modifiedPieces[Object.keys(pieces).indexOf(selectedPiece)]
    rowToColumn(piece);
    reverseColumn(piece);
    drawPiece(piece,selectedPiece);
}
function rotateLeft() {
    piece = modifiedPieces[Object.keys(pieces).indexOf(selectedPiece)]
    rowToColumn(piece);
    reverseRow(piece);
    drawPiece(piece,selectedPiece);
}
function flip() {
    piece = modifiedPieces[Object.keys(pieces).indexOf(selectedPiece)]
    reverseColumn(piece);
    drawPiece(piece,selectedPiece);
}

rotateRightButton.addEventListener("click", rotateRight)
rotateLeftButton.addEventListener("click", rotateLeft)
flipButton.addEventListener("click", flip)


// Draggin functionality of Pieces

// overlays' holes
var pieceOverlayHoles = document.querySelectorAll(".overlay-hole-row .hole");
var gameOverlayHoles = document.querySelectorAll(".game-overlay-hole-row .hole") ;
// boards' holes
var pieceBoardHoles = document.querySelectorAll(".piece-hole-row .hole");
var gameBoardHoles = document.querySelectorAll(".game-hole-row .hole");

//  boards
var pieceBoard = document.querySelector(".overlay");
var gameBoard = document.querySelector("#game-board");

// moving piece original position
var currentX = parseInt(pieceBoard.style.left);
var currentY = parseInt(pieceBoard.style.bottom); 


// deals with logic behind moving the piece
function mouseMovement(event) {
    resizePiece(pieceBoardHoles[0].offsetWidth)
    // mouse original click
    initX = event.clientX;
    initY = event.clientY;
 
    // pieces current position
    currentX = parseInt(pieceBoard.style.left);
    currentY = parseInt(pieceBoard.style.bottom);
    
    // Move with mouse
    document.addEventListener('mousemove', movePiece); 
}

// touchscreen movement
function touchMovement(event) {
    resizePiece(pieceBoardHoles[0].offsetWidth);
    const touchEvent = event.touches ? event.touches[0] : event;
    // touch original click
    initX = touchEvent.clientX;
    initY = touchEvent.clientY;

    // pieces current position
    currentX = parseInt(pieceBoard.style.left);
    currentY = parseInt(pieceBoard.style.bottom);

    document.addEventListener('touchmove', movePiece, { passive: false});
}

// is called whenever mouse/touch moves on the screen
function movePiece(event) {
    event.preventDefault();
    
    const touchEvent = event.touches ? event.touches[0] : event;

    // Finds distance between original click point and new mouse position, then adds value to the piece's position
    const x = currentX + (touchEvent.clientX - initX);
    const y = currentY + (initY - touchEvent.clientY);
    
    pieceBoard.style.bottom = y+"px";
    pieceBoard.style.left = x+"px";
}

// resizes the moving piece
function resizePiece(size) {
    if (size == pieceBoardHoles[0].offsetWidth) {
        for (i=0;i<pieceOverlayHoles.length;i++) {
            pieceOverlayHoles[i].style.width = `${gameBoardHoles[0].offsetWidth}px`
        }
    } else if (size == gameBoardHoles[0].offsetWidth){ 
        for (i=0;i<pieceOverlayHoles.length;i++) {
            pieceOverlayHoles[i].style.width = `${pieceBoardHoles[0].offsetWidth}px`
        }      
    }

    pieceBoard.style.width = "fit-content";
    pieceBoard.style.height = "fit-content";
}

// function when piece is released
function pieceRelease(event) {
    const touchEvent = event.changedTouches ? event.changedTouches[0] : event;

    let onBoard = 0;
    let totalPiece = 0
    
    let filledHoles = [];
    gameBoardBoundingBox = gameBoard.getBoundingClientRect()

    // figures out what holes on the board the piece is over
    pieceOverlayHoles.forEach(function(element) {
        // checks if every piece-object is on board 
        if (element.classList[2] == 'piece-object') {
            totalPiece += 1
            var pieceBoundingBox = element.getBoundingClientRect();
            if (
                // if the pieces are on the board
                gameBoardBoundingBox.left <= pieceBoundingBox.left &&
                gameBoardBoundingBox.right >= pieceBoundingBox.right &&
                gameBoardBoundingBox.bottom >= pieceBoundingBox.bottom &&
                gameBoardBoundingBox.top <= pieceBoundingBox.top 
            ) {
                // updates total pieces on board
                onBoard += 1
                // figures out hole the piece segment is over
                let holePadding = gameBoardHoles[0].offsetWidth*.5;
                gameBoardHoles.forEach(function(gameHole) {
                    var gameBoardHoleBoundingBox = gameHole.getBoundingClientRect();
                    if (
                        gameBoardHoleBoundingBox.left - holePadding <= pieceBoundingBox.left &&
                        gameBoardHoleBoundingBox.right + holePadding >= pieceBoundingBox.right &&
                        gameBoardHoleBoundingBox.bottom + holePadding >= pieceBoundingBox.bottom &&
                        gameBoardHoleBoundingBox.top - holePadding <= pieceBoundingBox.top 
                    ) {
                        filledHoles.push(gameHole);                                   
                    }
                })
            }
       }
    })

    const hasPiece = Array.from(filledHoles).some(element => element.classList.contains('piece-object')); // Replace 'your-class' with the class you're checking for
    
    // only copies the piece onto board when;
    // all pieces are on the board
    // all pieces are not ontop of another piece
    if (onBoard>=totalPiece && !hasPiece) {
        for (i=0;i<filledHoles.length;i++) {
            filledHoles[i].style.backgroundColor = `var(--piece-${selectedPiece}`;
            filledHoles[i].classList.add("piece-object");
        }
        resetPiece();  
        test();
    }
    resizePiece(gameBoardHoles[0].offsetWidth);
    pieceBoard.style.bottom = 0+"px";
    pieceBoard.style.left = 0+"px";

}

function test() {
    const pieceValue = Object.keys(pieces).indexOf(selectedPiece)
    colorElements[pieceValue].removeEventListener("click",selectColor);
    colorElements[pieceValue].classList.add("disabled");

}

// gets x,y values of event
// used to get coords of piece when clicked and released
function getCoordinates(element) {
    x = parseInt(element.id.match(/\d+/)[0])
    y = parseInt(element.classList[1].match(/\d+/)[0])
    return [x,y];
}




// Functionality for when mouse is clicked, dragged, and released
for (i=0;i<pieceOverlayHoles.length;i++) {

    let element = pieceOverlayHoles[i]

    // when pressed down; run respective movement function depending on screen only if it's a colored piece;
    element.addEventListener('mousedown', (event) => {
        if (element.classList[2] == 'piece-object') {
            mouseMovement(event);
            // console.log(getCoordinates(event.target));
        }
    })
    element.addEventListener('touchstart', (event) => {
        if (element.classList[2] == 'piece-object') {
            touchMovement(event);
        }
        
    })

    // when piece is released, removes moving function, and calls release function
    element.addEventListener('mouseup', (event) => {
        document.removeEventListener('mousemove', movePiece);
        pieceRelease(event);
        
    })
    element.addEventListener('touchend', (event) => {
        document.removeEventListener('touchmove', movePiece);
        pieceRelease(event);
    })
}



// only one piece at a time
// styling buttons for when piece is already on the board