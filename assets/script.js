document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('nav ul li a');

    // Mendapatkan URL laman saat ini (jika index.html, bisa kosong atau berisi index.html)
    const currentPage = window.location.pathname.split('/').pop() || 'index.html'; // Default ke index.html jika kosong
    navItems.forEach((item) => {
        const hrefPage = item.getAttribute('href').split('/').pop() || 'index.html'; // Menangani href yang kosong

        // Menandai header aktif berdasarkan halaman saat ini
        if (currentPage === hrefPage) {
            item.parentElement.classList.add('active');
        }

        // Menambahkan event hover
        item.addEventListener('mouseenter', () => {
            // Menambahkan efek menjauh ke header lain
            navItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.parentElement.classList.add('move-away');
                }
            });

            // Menambahkan efek hover pada header yang di-hover
            item.parentElement.classList.add('atom-effect');
        });

        item.addEventListener('mouseleave', () => {
            // Mengembalikan posisi header lain
            navItems.forEach((otherItem) => {
                otherItem.parentElement.classList.remove('move-away');
            });

            // Menghapus efek hover
            item.parentElement.classList.remove('atom-effect');
        });
    });
});
