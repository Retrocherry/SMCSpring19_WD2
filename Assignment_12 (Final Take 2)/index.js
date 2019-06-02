var hamburgerIcon = $('#hamburger-icon');
var mobileMenuContainer = $('#mobile-menu');

// Mobile Menu Handler
hamburgerIcon.click(toggleMobileMenu);


function toggleMobileMenu() {
    mobileMenuContainer.toggleClass('open');

    // if has class name of 'open' {
    //     remove open from selected element
    // } else if it doesn't have class name of open {
    //     add 'open' to select element
    // }
}