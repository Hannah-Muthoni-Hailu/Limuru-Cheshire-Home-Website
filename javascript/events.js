function slideIn(){
  //obtain the events item element
  var eventsArray = document.getElementsByClassName('event-item');
  
  //Initialize the variable that determines the height of the event element
  let eventHeight

  for (var i = 0; i < eventsArray.length; i++) {
    //calculate the height of the event item and assign it to eventHeight variable
    eventHeight = eventsArray[i].getBoundingClientRect().bottom-eventsArray[i].getBoundingClientRect().top

    //check if the user has scrolled to over the element and display it.
    if(window.scrollY > ((i * eventHeight)) && window.scrollY < (200 + ((i + 1) * eventHeight))){
      eventsArray[i].classList.add('activeleft');
      eventsArray[i].style.left = '10px'
    }
    else{
      eventsArray[i].classList.remove('activeleft');
      eventsArray[i].style.left = '-1500px'
    }
  }
}

//Call slideIn function when the user scrolls the window
window.addEventListener("scroll", slideIn);

//Initial function call
slideIn();

