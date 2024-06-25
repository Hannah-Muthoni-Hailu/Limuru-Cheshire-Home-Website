//Function for when the Signup button is clicked
function formOpen(){
    document.getElementById("selection-form").style.display = "block"; //Display the form
    document.getElementById("form-background").style.display = "block"; //Display the form background that blurs the rest of the elements
}

//Function for when the close button is clicked
function formClose(){
    document.getElementById("selection-form").style.display = "none"; //Hide the form
    document.getElementById("form-background").style.display = "none";//Hide the form background that blurs the rest of the elements
}
