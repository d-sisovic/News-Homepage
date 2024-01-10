(() => {
    const menuElement = document.querySelector('#menu');
    const closeElement = document.querySelector('#close');
    const overlayElement = document.querySelector('#overlay');
    const sidemenuElement = document.querySelector('#sidemenu');

    const closeSidemenu = () => {
        document.body.style.overflow = 'auto';
        sidemenuElement.style.right = '-100%';
        overlayElement.style.visibility = 'hidden';
    };

    menuElement.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        sidemenuElement.style.right = '0';
        overlayElement.style.visibility = 'visible';
    });

    closeElement.addEventListener('click', () => closeSidemenu());

    overlayElement.addEventListener('click', event => {
        if (!event.target.classList.contains('overlay')) { return; }

        closeSidemenu();
    });
})();