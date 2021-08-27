// Create variable for container
const container = document.querySelector('#container');

// Create 16 rows of 16 divs each
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {

        const div = document.createElement('div');

        // Calculate size based on number of columns and size of margin
        let width = (960 - (2 * 16))/ 16;
        
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


