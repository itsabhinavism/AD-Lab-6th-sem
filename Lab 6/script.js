// Initial list of people
const people = [
    { name: 'Alice', count: 0 },
    { name: 'Bob', count: 0 },
    { name: 'Charlie', count: 0 }
];

// Function to render the list
function renderList() {
    const peopleList = document.getElementById('peopleList');
    peopleList.innerHTML = '';
    people.forEach((person, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${person.name} - Clicked ${person.count} times`;
        listItem.addEventListener('click', () => {
            person.count++;
            renderList();
        });
        peopleList.appendChild(listItem);
    });
}

// Function to add a new user
function addUser() {
    const newUserInput = document.getElementById('newUser');
    const newUserName = newUserInput.value.trim();
    if (newUserName) {
        people.push({ name: newUserName, count: 0 });
        newUserInput.value = '';
        renderList();
    }
}

// Initial render
renderList();
