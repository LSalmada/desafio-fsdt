document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const names = [];
        for (let i = 1; i <= 5; i++) {
            const nameInput = document.getElementById(`nome${i}`);
            if (nameInput.value.trim() !== '') {
                names.push(nameInput.value.trim());
            }
        }

        const message = document.getElementById('historia').value.trim();

        const data = {
            names: names,
            message: message
        };

        await fetch('https://fsdt-contact.onrender.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        form.reset();
    });
});
