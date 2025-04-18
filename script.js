const container = document.querySelector(".container");
const resetButton = document.querySelector("button");

let gridSize = 16;

const createGrid = (numOfGrids) => {
    //Create new container for new grid dimensions
    const newContainer = document.createElement("div");
    newContainer.classList.add("newContainer");

    for (let r = 0; r < numOfGrids; r++){
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for (let b = 0; b <numOfGrids; b++){
            const box = document.createElement("div");
            const widthAndHeight = 960 / gridSize;
            box.classList.add("grid-box");

            //setting box' width and height
            box.style.width = `${widthAndHeight}px`;
            box.style.height = `${widthAndHeight}px`;

            //Add event listener when mouse hovers
            box.addEventListener("mouseenter", () => {
                box.style.backgroundColor = "black";
            })
            row.appendChild(box);
        }

        newContainer.appendChild(row);
    }

    container.appendChild(newContainer);
}

resetButton.addEventListener('click', () => {
    let userGridSize = Number(prompt("Enter dimensions for the new grid not more than 100: "));

    //display prompt again if user gave a number greater than 100
    if(userGridSize > 100){
        userGridSize = Number(prompt("You entered a number greater than 100, please enter a number less than 100: "));
    }

    const newContainer = document.querySelector(".newContainer");
    newContainer.remove(); //Remove existing grid
    createGrid(userGridSize);
});

createGrid(gridSize);