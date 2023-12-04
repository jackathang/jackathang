var gameBoard = document.querySelector("#game-holes");

// creates grid of holes on game board
for (var i = 1; i <=5; i++) {
    var holeRow = document.createElement("div");

    holeRow.className = "game-hole-row";
    holeRow.id = "game-hole-row-"+i;
    
    gameBoard.appendChild(holeRow)
    var row = document.querySelector(`#game-hole-row-${i}`)
    for (var j = 1; j <=11;j++) {
        var hole = document.createElement("div");
        hole.className = `hole r${i}`;
        hole.id = `c${j}`;

        row.appendChild(hole);
    }
}

var overlayGameBoard = document.querySelector(".game-overlay");



var pieceBoard = document.querySelector(".piece-holes");

// creates grid of holes on piece board
for (var i = 1; i <=4; i++) {
    var holeRow = document.createElement("div");

    holeRow.className = "piece-hole-row";
    holeRow.id = "piece-hole-row-"+i;
    
    pieceBoard.appendChild(holeRow);

    var row = document.querySelector(`#piece-hole-row-${i}`)
    for (var j = 1; j <=4;j++) {
        var hole = document.createElement("div");
        hole.className = `hole r${i}`;
        hole.id = `c${j}`;

        row.appendChild(hole);
    }
}


var overlayPieceBoard = document.querySelector(".overlay");

// creates grid of holes on piece board
for (var i = 1; i <=4; i++) {
    var holeRow = document.createElement("div");

    holeRow.className = "overlay-hole-row";
    holeRow.id = "overlay-hole-row-"+i;
    
    overlayPieceBoard.appendChild(holeRow)

    var row = document.querySelector(`#overlay-hole-row-${i}`)
    for (var j = 1; j <=4;j++) {
        var hole = document.createElement("div");
        hole.className = `hole overlayr${i}`;
        hole.id = `c${j}`;

        row.appendChild(hole);
    }
}



