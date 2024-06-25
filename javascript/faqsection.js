//extract the elements from the DOM
let faqsArray = document.getElementsByClassName('faq');
let openButton = document.getElementsByClassName('faq-open')
let closeButton = document.getElementsByClassName('faq-close')

//faqOpen function
function faqOpen(x){
    faqsArray[x].getElementsByTagName('p')[0].style.display = 'block'; //change the display of the p element from none to block
    openButton[x].style.display = 'none'; //remove the open button
    closeButton[x].style.display = 'block'; //add the close button
    faqsArray[x].children[0].style.borderBottom = '1px solid black'; //give the question div a bottom border
}

//faqClose function
function faqClose(x){
    faqsArray[x].getElementsByTagName('p')[0].style.display = 'none'; //hide the paragraph
    openButton[x].style.display = 'block'; //add the open button
    closeButton[x].style.display = 'none'; //remove the close button
    faqsArray[x].children[0].style.borderBottom = 'none'; //remove the bottom border of the question div
}
