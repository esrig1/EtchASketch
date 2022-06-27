let rowArr = [];
let container = document.querySelector("#container");
function createRows(numRows) {
    for(let i = 0; i < numRows; i++) {
        let tempRow = document.createElement("div");
        tempRow.className = "row";
        container.appendChild(tempRow);
    }

}
function createCols(numCols) {
    rowArr = document.querySelectorAll(".row");
    rowArr.forEach((row) => {
        for(let i = 0; i < numCols; i++) {
        let tempBox = document.createElement("div");
        tempBox.className = "box";
        tempBox.addEventListener("hover", (box) => {
            box.style.backgroundColor = "black";
            
        });
        row.appendChild(tempBox);
    }
    });

    

}
function startGame() {
    const container2 = document.querySelector("#container");
    container2.innerHTML = "";
    let dimension = prompt("Enter a natural number n to create an n * n grid");
    while(dimension <= 0) {
        dimension = prompt("Your input was not a natural number (an integer greater than 0). Please enter a natural number.");
        
    }
    
    createRows(dimension); createCols(dimension); 
    let boxPercent = 500/dimension;
    const boxArr = document.querySelectorAll(".box");
    boxArr.forEach((box) => {
        box.style.padding = boxPercent + "px";
        
    });
}

startGame();
