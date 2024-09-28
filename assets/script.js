document.addEventListener("DOMContentLoaded", function () {
    const profileCards = document.querySelectorAll('.profile-card');

    profileCards.forEach(card => {
        card.addEventListener('click', function () {
            alert('Card clicked: ' + card.querySelector('h3').innerText);
        });
    });
});
