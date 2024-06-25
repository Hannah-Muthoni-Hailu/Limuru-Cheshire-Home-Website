document.addEventListener('DOMContentLoaded', function() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {scrollFunction()};

    // Get the navbar
    var navbar = document.getElementById("navbar");
    var header = document.getElementById('head_banner');

    // Get the offset position of the navbar
    var stick = navbar.offsetTop;

    //Scroll Function
    function scrollFunction(){
        if (window.pageYOffset >= stick) { //check that the user has scrolled down the page
            navbar.style.position = 'fixed'; //make the navbar fixed to the top
            navbar.style.top = '0'; //set the navbar's top property
            navbar.style.width = '100%'; //set the navbar's width
            header.style.marginTop = '100px'; //add an extra margin over the header bar to prevent the navbar from hiding it.
        } 
        else {
            navbar.style.position = 'absolute'; //give the navbar an absolute position property
        }    
    }
});
