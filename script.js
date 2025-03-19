const container = document.querySelector(".container");

let gridSize = 16;

const createGrid = (numOfGrids) => {
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

        container.appendChild(row);
    }
}

createGrid(gridSize);