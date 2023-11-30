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

// displays piece
function drawPiece(piece,color) {
    // resets board
    for (i=1;i<=4;i++) {
        for (let j = 1; j <= 4; j++) {
            var hole = document.querySelector(`.overlayr${i}#c${j}`);
            hole.style.backgroundColor = "var(--transparent)";  
            hole.classList.remove("piece-object");
        }
    }

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

var pieceHoles = document.querySelectorAll(".overlay-hole-row .hole");
var gameHoles = document.querySelectorAll(".game-overlay-hole-row .hole") ;

var pieceBoard = document.querySelector(".overlay");
var currentX = parseInt(pieceBoard.style.left);
var currentY = parseInt(pieceBoard.style.bottom); 


// deals with logic behind moving the piece
function mouseMovement(event) {
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
    const touchEvent = event.touches ? event.touches[0] : event;
    // touch original click
    initX = touchEvent.clientX;
    initY = touchEvent.clientY;

    // pieces current position
    currentX = parseInt(pieceBoard.style.left);
    currentY = parseInt(pieceBoard.style.bottom);

    document.addEventListener('touchmove', movePiece);
}

// is called whenever mouse/touch moves on the screen
function movePiece(event) {
    const touchEvent = event.touches ? event.touches[0] : event;

    // Finds distance between original click point and new mouse position, then adds value to the piece's position
    const x = currentX + (touchEvent.clientX - initX);
    const y = currentY + (initY - touchEvent.clientY);
    

    pieceBoard.style.bottom = y+"px";
    pieceBoard.style.left = x+"px";

}

// function when piece is released
function pieceRelease(event) {
    const touchEvent = event.changedTouches ? event.changedTouches[0] : event;
    let onBoard = 0;

    // checks whether or not release position is over any gameboard piece
    // checks all game board piecesm so need to return true for if any
    gameHoles.forEach(function(element) {
        var rect = element.getBoundingClientRect();
        if (
            touchEvent.clientX >= rect.left &&
            touchEvent.clientX <= rect.right &&
            touchEvent.clientY >= rect.top &&
            touchEvent.clientY <= rect.bottom
        ) {
            onBoard += 1;
        } else {
        }
    });
    
    
    if (onBoard==1) {
        console.log(onBoard);
        // add snap to board logic function here
    } else {
        pieceBoard.style.bottom = 0+"px";
        pieceBoard.style.left = 0+"px";
        
    }

}


// adds event lister to pieces
for (i=0;i<pieceHoles.length;i++) {

    let element = pieceHoles[i]

    // when pressed down; run respective movement function depending on screen only if it's a colored piece;
    element.addEventListener('mousedown', (event) => {
        if (element.classList[2] == 'piece-object') {
            mouseMovement(event);
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