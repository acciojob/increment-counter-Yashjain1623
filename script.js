//your JS code here. If required.
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
let counterValue = 0;

// Function to handle button click
function handleIncrement() {
    // Show alert with current counter value
    alert(`Current counter value: ${counterValue}`);
    
    // Increment counter value
    counterValue += 1;
    
    // Update the counter element
    counterElement.textContent = counterValue;
}

// Attach event listener to the button
incrementBtn.addEventListener('click', handleIncrement);