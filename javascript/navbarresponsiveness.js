//[2]W3schools.com, 'How TO - Responsive Top Navigation', 1999.[Online]. Available: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp [Accessed: 09- Feb- 2024]
//Allow the user's click to toggle the navbar from 3 lines to displaying the navbar on small screens.
function navbarOpen() {
    //Obtain the nav link DOM elements
    var x = document.getElementById("nav-links");
    if (x.className === "navbar-nav") { //check if the navbar has already been opened
      x.className += " responsive"; //add the responsive class to it thus opening it.
    } else {
      x.className = "navbar-nav"; //remove the responsive class thus closing the navbar
    }
  }
