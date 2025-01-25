function calculateFactorial() {
    const numberInput = document.getElementById('numberInput').value;
    const number = parseInt(numberInput, 10);

    if (isNaN(number) || number < 0) {
        document.getElementById('result').innerText = 'Please enter a valid non-negative integer.';
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    document.getElementById('result').innerText = `The factorial of ${number} is ${factorial}.`;
}
