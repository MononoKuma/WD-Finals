document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple validation (you can enhance it if needed)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && subject && message) {
        document.getElementById('success-message').style.display = 'block';
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
