function bottomSlide(){
    //obtain the stories element
    const stories = document.getElementById('success-stories');

    //determine the height from the top of the page
    const storiesHeight = window.pageYOffset + stories.getBoundingClientRect().top;

    //Check if the user has scrolled to the point above the user stories
    if(window.scrollY > storiesHeight - 1485){
        stories.style.animationName = 'bottomslide'; //Set the animation that allows the stories to slide in
        stories.style.marginTop = '50px'
    }
}

//Call the function when the user scrolls through the window
window.addEventListener("scroll", bottomSlide);

bottomSlide();
