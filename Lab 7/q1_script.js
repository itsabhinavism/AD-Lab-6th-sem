function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);
    const today = new Date();

    if (isNaN(dob)) {
        document.getElementById('result').innerText = 'Please enter a valid date.';
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `Your age is ${age} years.`;
}
