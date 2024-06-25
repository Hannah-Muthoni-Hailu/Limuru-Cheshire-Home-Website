//obtain the elements within the program class
let programsArrayOne = document.getElementsByClassName('program-one');
let programsArrayTwo = document.getElementsByClassName('program-two');

//mark for the number of elements that have been accessed
let holderOne = 0;
let holderTwo = 0;

//iterate through the first three elements and set their display to flex
for(let i = 0 ; i < 3; i++){
    programsArrayOne[i].classList.add('slide-in');
    programsArrayTwo[i].classList.add('slide-in');
    programsArrayOne[i].style.display = 'flex';
    programsArrayTwo[i].style.display = 'flex';
    holderOne ++;
    holderTwo ++;
}

//render more content when load more button is clicked
function loadMore(x){
    let programsArray
    let holder

    //check which button has beeen clicked
    if(x == 'one'){
        programsArray = programsArrayOne;
        holder = holderOne;
    }
    else{
        programsArray = programsArrayTwo;
        holder = holderTwo;
    }

    //rendering the last element if the number of elements in the class is odd
    if(programsArray.length - holder == 1){
        programsArray[programsArray.length - 1].classList.add('slide-in');
        programsArray[programsArray.length - 1].style.display = 'flex';
        document.getElementById('load-more-button-' + x).style.display = 'none';
        return;
    }

    //display two elements when load more button is pressed
    for(let i = holder; i < holder + 2; i++){
        programsArray[i].classList.add('slide-in');
        programsArray[i].style.display = 'flex';
    }

    //Increment the holder value to reflect the two new elements that have been displayed
    holder += 2;

    //remove the loadmore button if all elements have been displayed
    if(holder == programsArray.length){
        document.getElementById('load-more-button-' + x).style.display = 'none'
    }

    //ensure the holder information is retained after the function completes
    if(x == 'one'){
        holderOne = holder;

    }
    else{
        holderTwo = holder;
    }

}
