document.addEventListener('DOMContentLoaded', function () {
    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll('nav ul li a');

    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });
});