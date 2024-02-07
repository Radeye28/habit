document.getElementById('habit-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const habitName = document.getElementById('habit-name').value;
    const habitType = document.getElementById('habit-type').value;

    const response = await fetch('http://localhost:1337/habits', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: habitName,
            type: habitType
        })
    });

    if (response.ok) {
        const habit = await response.json();
        displayHabit(habit);
    } else {
        alert('Error adding habit');
    }
});

function displayHabit(habit) {
            const habitList = document; }