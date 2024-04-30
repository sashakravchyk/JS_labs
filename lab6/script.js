document.addEventListener("DOMContentLoaded", (event) => {
    const GRID_SIZE = 5;
    const LIGHT_OFF_CLASS = "off";
    const DATA_JSON_URL = "data.json";

    const loader = document.getElementById("loader");
    const gameContainer = document.getElementById("game-container");
    const movesDisplay = document.getElementById("moves");
    const timerDisplay = document.getElementById("timer");
    const targetDisplay = document.getElementById("target");
    const resetButton = document.getElementById("reset-button");
    const newGameButton = document.getElementById("new-game-button");

    let grid;
    let movesCount = 0;
    let timer = 0;
    let timerInterval = null;
    let targetMoves;
    let currentLayout = null;
    let lastLayout = null;

    const showLoader = () => (loader.style.display = "block");
    const hideLoader = () => (loader.style.display = "none");
    const updateGameStatus = () => {
        movesDisplay.innerText = `Moves: ${movesCount}`;
        timerDisplay.innerText = `Timer: ${timer}s`;
        targetDisplay.innerText = `Target Moves: ${targetMoves}`;
    };

    const createLight = (row, col, state) => {
        const light = document.createElement("div");
        light.className = "light";
        light.dataset.row = row;
        light.dataset.col = col;
        if (state === 0) light.classList.add(LIGHT_OFF_CLASS);
        light.addEventListener("click", (event) => {
            movesCount++;
            updateGameStatus();
            toggleLight(row, col);
        });
        return light;
    };

    const createGameGrid = (layout) => {
        gameContainer.innerHTML = "";
        grid = [];
        movesCount = 0;
        timer = 0;
        updateGameStatus();

        for (let row = 0; row < GRID_SIZE; row++) {
            const gridRow = [];
            for (let col = 0; col < GRID_SIZE; col++) {
                const light = createLight(row, col, layout[row][col]);
                gameContainer.appendChild(light);
                gridRow.push(light);
            }
            grid.push(gridRow);
        }

        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            timer++;
            timerDisplay.innerText = `Timer: ${timer}s`;
        }, 1000);
    };

    const toggleLight = (row, col) => {
        toggleLightState(row, col);
        if (row > 0) toggleLightState(row - 1, col);
        if (row < GRID_SIZE - 1) toggleLightState(row + 1, col);
        if (col > 0) toggleLightState(row, col - 1);
        if (col < GRID_SIZE - 1) toggleLightState(row, col + 1);
        checkWinCondition();
    };

    const toggleLightState = (row, col) => {
        const light = grid[row][col];
        light.classList.toggle(LIGHT_OFF_CLASS);
    };

    const checkWinCondition = () => {
        const allOff = grid.every((row) =>
            row.every((light) => light.classList.contains(LIGHT_OFF_CLASS))
        );
        if (allOff) {
            clearInterval(timerInterval);
            let resultMessage = `Вітаю! Ви пройшли гру за ${movesCount} ходів!\n`;
           
            alert(resultMessage);
            newGame();
        }
    };

    const resetGame = (event) => createGameGrid(currentLayout.grid);

    const newGame = (event) => {
        showLoader();
        const xhr = new XMLHttpRequest();
        xhr.open("GET", DATA_JSON_URL, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);

                    const filteredData = data.filter(
                        (layout) => JSON.stringify(layout) !== JSON.stringify(lastLayout)
                    );
                    const randomLayout =
                        filteredData[Math.floor(Math.random() * filteredData.length)];

                    currentLayout = randomLayout;
                    lastLayout = currentLayout;

                    targetMoves = randomLayout.targetMoves;
                    hideLoader();
                    createGameGrid(randomLayout.grid);
                    hideLoader();
                }
            }
        };
        xhr.send();
    };

    resetButton.addEventListener("click", resetGame);
    newGameButton.addEventListener("click", newGame);

    newGame();
});
