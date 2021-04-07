onload = () => {
    const resetButton = document.getElementById("reset");
    const gridSize = 16;
    
    setGrid(gridSize);
    createGridItems(gridSize);

    resetButton.addEventListener("click", resetGrid);
}

const createGridItems = (n) => {
    const grid = document.querySelector(".grid");
    const multiple = n * n;

    for(let i = 0; i < multiple; i++){
        let node = document.createElement("div");
        node.classList.add("grid-item");
        node.addEventListener('mouseover', setGridItemHover);
        
        grid.append(node);
    }   
}

const setGrid = (n) => {
    const container = document.querySelector(".grid-container");
    const grid = document.createElement("div");

    grid.classList.add("grid");
    grid.style.setProperty('grid-template-columns', `repeat(${n}, auto)`);
    container.append(grid);
}

const generateRandomColor = () => {
    //return Math.floor(Math.random()*16777215).toString(16); 
    // the above line produces white and I don't like it while the code below does not since it's ranged from 1 to 255
    let r = Math.floor(Math.random() * (255 - 1) + 1);
    let g = Math.floor(Math.random() * (255 - 1) + 1);
    let b = Math.floor(Math.random() * (255 - 1) + 1);
    return `rgb(${r},${g},${b})`;
}

const resetGrid = () => {
    let n = prompt("Enter a number from 1-100");

    if(n !== null) {
        n = parseInt(n);
        if(n < 1 || n > 100 || isNaN(n)) {
            alert("Please type a number between 1-100");
            resetGrid();
        } else {
            let grid = document.querySelector(".grid");
            grid.remove();
            setGrid(n);
            createGridItems(n);
        }
    }
    
}

const setGridItemHover= e => {
    e.target.style.background = generateRandomColor();
}

