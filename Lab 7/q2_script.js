function addToList() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') {
        alert('Please enter a value.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = userInput;

    const dynamicList = document.getElementById('dynamicList');
    dynamicList.appendChild(listItem);

    document.getElementById('userInput').value = '';
}
