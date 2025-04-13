// Select elements from each flip container
const flipTopWords = document.querySelectorAll('#flipTop div');
const flipBottomWords = document.querySelectorAll('#flipBottom div');
const totalSteps = flipTopWords.length; // Expecting 4 items in each container
let cycle = 0;

function updateFlips() {
    // Update top container (flip from top)
    flipTopWords.forEach((word, index) => {
        word.classList.remove('active', 'exiting');
        if (index === (cycle % totalSteps)) {
            word.classList.add('active');
        } else if (index === ((cycle - 1 + totalSteps) % totalSteps)) {
            word.classList.add('exiting');
        }
    });
  
    // Update bottom container (flip from bottom)
    flipBottomWords.forEach((word, index) => {
        word.classList.remove('active', 'exiting');
        if (index === (cycle % totalSteps)) {
            word.classList.add('active');
        } else if (index === ((cycle - 1 + totalSteps) % totalSteps)) {
            word.classList.add('exiting');
        }
    });
  
    cycle++;
}

// Start the animation immediately and update every 2.5 seconds
updateFlips();
setInterval(updateFlips, 2500);