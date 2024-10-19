document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('nav ul li a');

    navItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            // Menambahkan efek menjauh ke header lain
            navItems.forEach((otherItem, otherIndex) => {
                if (otherIndex !== index) {
                    otherItem.parentElement.classList.add('move-away');
                }
            });

            // Menambahkan efek elektron berputar pada header yang di-hover
            item.parentElement.classList.add('atom-effect');
        });

        item.addEventListener('mouseleave', () => {
            // Mengembalikan posisi header lain
            navItems.forEach((otherItem) => {
                otherItem.parentElement.classList.remove('move-away');
            });

            // Menghapus efek elektron
            item.parentElement.classList.remove('atom-effect');
        });
    });
});
