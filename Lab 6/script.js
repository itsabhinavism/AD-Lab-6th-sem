document.addEventListener('DOMContentLoaded', () => {
    const peopleList = document.getElementById('peopleList');
    const people = {};

    function addPerson(name) {
        if (!name) return;
        if (!people[name]) {
            people[name] = 0;
        }
        updateList();
    }

    function updateList() {
        peopleList.innerHTML = '';
        for (const name in people) {
            const li = document.createElement('li');
            li.textContent = `${name} - Clicked ${people[name]} times`;
            li.addEventListener('click', () => {
                people[name]++;
                updateList();
            });
            peopleList.appendChild(li);
        }
    }

    document.getElementById('newPerson').addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            const name = event.target.value.trim();
            if (name) {
                addPerson(name);
                event.target.value = '';
            }
        }
    });

    window.addPerson = addPerson;
});
