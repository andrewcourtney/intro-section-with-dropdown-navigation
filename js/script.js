document.addEventListener("DOMContentLoaded", function () {
    const headerNav = document.querySelector('.header__navcontainer__inner');
    const headerNavLinks = headerNav.querySelectorAll('.header__navcontainer__inner a, .header__navcontainer__inner button');
    const siteOverlay = document.querySelector('.overlay');

    const mobileNavToggle = document.querySelector('.mobile-menu-toggle--open');

    // Mobile navigation toggle
    mobileNavToggle.addEventListener('click', () => {
        siteOverlay.classList.toggle('fade');
        headerNav.classList.toggle('show');

        // Reset menu view
        hideAllSubmenus();
    });

    // Site overlay toggle
    siteOverlay.addEventListener('click', () => {
        siteOverlay.classList.remove('fade');
        headerNav.classList.toggle('show');

        // Reset menu view
        hideAllSubmenus();
    });

    // Loop through and target header links
    for (let headerNavLink of headerNavLinks) {
        headerNavLink.addEventListener('click', () => {
            siteOverlay.classList.toggle('fade');
            headerNav.classList.toggle('show');

            // Reset menu view
            hideAllSubmenus();
        });
    };

    // Target clicks across document in relation to menu
    document.addEventListener('click', (e) => {
        const target = e.target;
        const submenu = target.nextElementSibling;

        // If submenu exists and has overlay class
        if (submenu && submenu.matches('.header__navcontainer__inner__submenu__overlay')) {
            // If submenu is hidden...
            if (submenu.classList.contains('hidden')) {
                // Initially hide all submenus
                hideAllSubmenus();

                // Show target submenu
                submenu.classList.remove('hidden');

                // Toggle arrow
                submenu.closest('.header__navcontainer__inner__submenu').classList.add('header__navcontainer__inner__submenu--open');

            // Otherwise hide submenu element
            } else {
                submenu.classList.add('hidden');
                submenu.closest('.header__navcontainer__inner__submenu').classList.remove('header__navcontainer__inner__submenu--open');

            }
        // If target doesn't have a submenu nearby, hide all submenus
        // Used for clicks outside of the menu
        } else if (!target.closest('.header__navcontainer__inner__submenu')) {
            hideAllSubmenus();
        }
    });

    // Function: Hide all submenus when called
    function hideAllSubmenus() {
        document.querySelectorAll('.header__navcontainer__inner__submenu ul').forEach((submenu) => {
            submenu.classList.add('hidden');
        });

        document.querySelectorAll('.header__navcontainer__inner__submenu').forEach((submenuContainer) => {
            submenuContainer.classList.remove('header__navcontainer__inner__submenu--open');
        });
    }

});