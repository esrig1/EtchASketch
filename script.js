let rowArr = [];
const container = document.querySelector("#container");
function createRows(numRows) {
    for(let i = 0; i < numRows; i++) {
        let tempRow = document.createElement("div");
        tempRow.className = "box";
        rowArr.push(tempRow);
        container.appendChild(tempRow);
    }

}

function createCols(numCols) {

}