let rowArr = [];
const container = document.querySelector("#container");
function createRows(numRows) {
    for(let i = 0; i < numRows; i++) {
        let tempRow = document.createElement("div");
        tempRow.className = "row";
        rowArr.push(tempRow);
        container.appendChild(tempRow);
    }

}
function createCols(numCols) {
    rowArr = document.querySelectorAll(".row");
    rowArr.forEach((row) => {
        for(let i = 0; i < numCols; i++) {
        let tempBox = document.createElement("div");
        tempBox.className = "box";
        row.appendChild(tempBox);
    }
    });

    

}
function startGame() {
    container.innerHtml = "";
    const dimension = prompt("Enter a natural number n to create an n * n grid");
    while(typeof dimension != "number" && dimension <= 0) {
        dimension = prompt("Your input was not a natural number (an integer greater than 0). Please enter a natural number.");
        console.log("a");
    }
    createRows(dimension); createCols(dimension); 
}

startGame();