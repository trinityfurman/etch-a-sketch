// Create variable for container
const container = document.querySelector('#container');

// Initialize number of boxes to 16
let boxes = 16;

// Create grid of set size
function createGrid(numberOfBoxes) {

for (let i = 0; i < numberOfBoxes; i++) {
    for (let j = 0; j < numberOfBoxes; j++) {

        const div = document.createElement('div');

        // Calculate size based on number of columns and size of margin
        let width = (960 - (2 * numberOfBoxes))/ numberOfBoxes;
        
        // For the first div of each row, clear to the next line
        if (i > 0 && j == 0) {
            div.classList.add('clear');
            div.classList.add('float');
        } else {
            div.classList.add('float');
        }
        // Set divs to proper width and height with template literal
        div.style.width = `${width}px`;
        div.style.height = `${width}px`;

        // Change background color of div when moused over
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
        });
        // Add new div to the container
        container.appendChild(div);
    }
}
}

// Create initial grid on page
createGrid(boxes);

// Create button constant
const btn = document.querySelector('#btn');

// Remove all grid divs when button is clicked
btn.addEventListener('click', () => {
    const divList = document.querySelectorAll('.float');
    const length = divList.length;

    // Loop through each div and remove it 
    for (i = 0; i < length; i++){
        divList[i].remove();
    }

    // Ask user for size
    let userSize = parseInt(prompt("How many boxes wide?"));

    // Ensure user size is an integer between 1 and 100
    if (userSize < 1) {
        userSize = parseInt(prompt("Please enter a number greater than 0! How many boxes wide?"));
    } else if (userSize > 100) {
        userSize = parseInt(prompt("Please enter a number under 100. How many boxes wide?"));
    } else if (isNaN(userSize) == true) {
        userSize = parseInt(prompt("Please enter an integer. How many boxes wide?"));
    } else if (userSize != null) {
        createGrid(userSize);
    }
});




