
let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset');


let isPlayer0Turn = true;


const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6],            
];

// Event listener for each box
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        if (!box.innerHTML) { 
            box.innerHTML = isPlayer0Turn ? '0' : 'X'; 
            box.disabled = true; 
            checkWinner(); 
            isPlayer0Turn = !isPlayer0Turn; 
        }
    });
});


const checkWinner = () => {
    let boxValues = Array.from(boxes).map(box => box.innerHTML);

    
    for (let pattern of winningPatterns) {
        const [a, b, c] = pattern;
        if (boxValues[a] && boxValues[a] === boxValues[b] && boxValues[a] === boxValues[c]) {
            document.getElementById('Result').innerText = `Player ${boxValues[a]} wins!`;
            disableAllBoxes(); 
            return;
        }
    }
};

const disableAllBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

resetButton.addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerHTML = ''; 
        box.disabled = false; 
    });
    document.getElementById('Result').innerText = 'The winner is: ';
    isPlayer0Turn = true; 
});
