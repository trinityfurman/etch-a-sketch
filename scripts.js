
// Generate random integer 
function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

// Generate random color 
function getRandomColor() {
    // Generate random integers for r, g, & b values
    let r = getRandomInteger(0, 255);
    let g = getRandomInteger(0, 255);
    let b = getRandomInteger(0, 255);

    let newColor = `rgb(${r}, ${g}, ${b})`;
    return newColor;
 }

// Create grid of set size
function createGrid(numberOfBoxes) {
 for (let i = 0; i < numberOfBoxes; i++) {
    for (let j = 0; j < numberOfBoxes; j++) {

        const div = document.createElement('div');
        div.classList.add('grid');

        // Calculate size based on number of columns and size of margin
        let width = (800 - (2 * numberOfBoxes))/ numberOfBoxes;
        
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

// Create variable for container
const container = document.querySelector('#container');

// Initialize number of boxes to 16
let boxes = 20;

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

// Create constant for rainbow button
const rainbow = document.querySelector("#rainbow");
// Add event listener to rainbow button
rainbow.addEventListener('click', () => {
    // Create nodelist of every div in grid 
    const divList = document.querySelectorAll('.grid');
    // Loop through each div and add random color background
    divList.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = getRandomColor();
        });
     });
 });

 // Create constant for grayscale button
 const grayscale = document.querySelector("#grayscale");
 // Change divs to grayscale when button is clicked
 grayscale.addEventListener('click', () => {
     const divList = document.querySelectorAll('.grid');
     divList.forEach((div) => {
         div.addEventListener("mouseenter", () => {

            // Check classes of each div
            let classes = div.classList;
            // If div has gray class, decrease lightness by 10%
            if (classes.contains('gray')) {
                let lightness = classes[3];
                div.classList.remove(`${lightness}`);
                lightness -= 10;
                div.classList.add(`${lightness}`);
                div.style.backgroundColor = `hsl(0, 0%, ${lightness}%`;
            } else {
                // Else, add gray class to div and initialize lightness at 100%
                div.classList.add('gray');
                let lightness = 100;
                div.classList.add('100');
                div.style.backgroundColor = `hsl(0, 0%, ${lightness}%`;
            }
         });
     });
 });

 // Change each div to body background color when clicked
 const eraser = document.querySelector('#eraser');
 eraser.addEventListener('click', () => {
    const divList = document.querySelectorAll('.grid');
    divList.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = '#C3D1C4';
        });
    });
 });

 // Change each div to black when clicked
 const black = document.querySelector('#black');
 black.addEventListener('click', () => {
     const divList = document.querySelectorAll('.grid');
     divList.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = "black";
        });
     });
 });



 




