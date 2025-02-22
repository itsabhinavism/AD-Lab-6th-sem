
function toggleButton() {
    const userInput = document.getElementById('userInput');
    const submitButton = document.getElementById('submitButton');

    if (userInput.value.trim() === '') {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}


document.getElementById('userInput').addEventListener('input', toggleButton);
