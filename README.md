# Limuru-Cheshire-Home-Website
A front end website for the Limuru Cheshire Home
<br>
(This site is not owned by the Home and has no links to it, it is just a model)

<h1>Web Developement Final Project Report</h1>
<h2>By</h2>
<h2><em>Hannah Muthoni Hailu</em></h2>

<h2>Introduction</h2>
<p>The site is meant for a children’s home near my hometown known as Limuru Cheshire Home. The Home is meant for girls living with disabilities. I have designed a site that provides basic information on the Home and provides a way for the site user to contact the home for any further information.</p>

<h2>Inspiration</h2>
<p>
    <ul>
        <li>The structure of the website was partly inspired by the <a href="https://nyumbani.or.ke/">Nyumbani Children’s Home website</a> where I derived a general idea for the layout of the pages on my website </li>
        <li>The site’s color scheme was inspired by the <a href="https://www.pcrf.net/pages/our-humanitarian-work">PCRF website</a> with its blue, white and black base colors and use of brighter colors like red for buttons.</li>
        <li>I was inspired to work on the website based on a children’s home by a Ted Talk by Amy Eldridge known as ‘Heart of an Orphan’. </li>
    </ul>
</p>

<h2>Accessibility</h2>
<p>
    <ul>
        <li>I have used a <a href="https://coolors.co/contrast-checker/000000-86b6fe">color contrast checker</a> to ensure that the background colors have a good contrast with the text color. This is necessary to allow people with color blindness to easily read the text against the background without straining.</li>
        <li>The role and aria-label attributes have been used to provide extra information on interactive elements on the website. These attributes help screen readers correctly identify the function of an element and convey this information effectively to people with visual imparements.</li>
        <li>The media elements have been made accessible by using an alt attribute for all images to allow screen readers to explain an image to the visually impared as well as adding captions to all videos on the site for the benefit of the hearing impared.</li>
    </ul>
</p>

<h2>Usability</h2>
<p>
    <ul>
        <li>White space around text has been implemented by creating margins between div and section elements as well as using padding within a div element. This white space makes the page content more legible to users and reduces unnecessary distractions. </li>
        <li>The website utilizes attractive calls to action by giving them brighter backgrounds as compared to the rest of the elements and using CSS animations to draw the users eyes to the CTAs. This improves the click through rate as the user is prompted to click on the button.</li>
        <li>Consistency has been implemented across the various pages on the site. The element background have blue, grey or white backgrounds and text is black except for areas where a different text color is necessary for visual distinction. The pages’ headers, navigation bars and footers have the same template to ensure they are consistent across the site. This provides a visually appealing experience for the user as well as enabling them to quickly learn how to navigate across the website.</li>
    </ul>
</p>

<h2>Learning</h2>
<p>
    <ul>
        <li>On the events page, the system needs to determine what position the user has scrolled to in order to display the appropriate event section. To do this, I needed to understand how to work with the window DOM object. I therefore went through the <a href="https://www.w3schools.com/jsref/obj_window.asp">W3schools short course</a> on the Window object to be able to understand how it works and use it for the events page.</li>
        <li>While trying to embed videos onto the site, I realized it was very difficult to try and download the videos then convert them into a file format that was compatible with html and that didn't slow down the site's loading speed. I therefore decided to learn how to embed videos directly from Youtube by reading through a <a href="https://www.w3schools.com/html/html_youtube.asp">W3schools article</a> on the topic.</li>
        <li>I wanted to allow visitors to the website to be able to contact the organization by linking the email and phone number of the home. I used hubspot's articles on linking <a href="https://blog.hubspot.com/website/html-telephone-link">phone numbers</a> and <a href="https://knowledge.hubspot.com/website-pages/create-a-click-to-call-or-mailto-link#:~:text=Email%3A%20In%20your%20HubSpot%20account%2C%20navigate%20to%20Marketing,Link%20to%20dropdown%20menu%20and%20select%20Email%20address.">email addresses</a></li>
    </ul>
</p>

<h2>Evaluation 1: Successful aspects of my work</h2>
<p>
    <ul>
        <li>The responsiveness of the code has been very well implemented. I have used Microsoft Edge browser's responsiveness feature to test how my website appears on mobile phones, laptops and tablets as well as using various devices around my house to see how the website appears on them. This has allowed me to make a site that can be easily and effectively used on any device with relatively few glitches.</li>
        <li>The site has a number of elements that overlap over other elements such as the navigation bar and the signup form on the careers page. I have used z-index effectively to prevent these overlapping elements from clashing with the rest of the underlying elements.</li>
        <li>I have done plently of research on the facility as well as conducting a visit to the place allowing me to have extremely accurate content for the site. I have been able to use videos and images taken from the actual insitution and I also have success stories obtained from actual girls at the Home.</li>
    </ul>
</p>

<h2>Evaluation 2: Unsuccessful aspects of my work</h2>
<p>
    <ul>
        <li>The JavaScript used is relatively basic and doesn't contained many advanced features. I could have improved my work by adding more complex libraries such as Handlebars.js to automate the creation of elements that were in list form.</li>
        <li>The text is not very accessible for people with visual imparements due to its font size. This could have been improved by adding buttons that increase the text size and spacing when clicked.</li>
        <li>Some of the images appear to have a poor quality due to their small size when they are used to fill large elements like the slideshow element. This could have been made better by first editing the image to increase size without losing quality or gathering images more judiciously so that only large images are used for large elements</li>
    </ul>
</p>

<h2>Resources</h2>
<p>
    <ul>
        <li><a href="https://www.w3schools.com/">W3schools</a> and <a href="https://www.hubspot.com/">Hubspot</a> were used for learning various concepts that I did not understand as well as obtaining code that was modified to suit the website.</li>
        <li>Visual Studio code was used as the text editor for writing the scripts and code for the site.</li>
        <li>Github was used to create remote private repository of the files as a backup.</li>
    </ul>
</p>

<h2>Appendix</h2>
<h3>Wireframes</h3>
<h4>Homepage</h4>
<img src="Wireframes and mockups/Homepage.png">

<h4>Our Programs</h4>
<img src="Wireframes and mockups/Our programs (1).png">

<h4>Careers</h4>
<img src="Wireframes and mockups/Careers.png">

<h4>Success stories</h4>
<img src="Wireframes and mockups/Success Stories.png">

<h4>Events</h4>
<img src="Wireframes and mockups/Events.png">

<h3>Mockups</h3>
<h4>Homepage</h4>
<img src="Wireframes and mockups/Homepage Mockup.png">

<h4>Our programs</h4>
<img src="Wireframes and mockups/Our Program Mockup.png">

<h4>Careers</h4>
<img src="Wireframes and mockups/Careers Page Mockup.png">

<h4>Success stories</h4>
<img src="Wireframes and mockups/Success Stories Mockup.png">

<h4>Events</h4>
<img src="Wireframes and mockups/Events Mockup.png">

## Technologies
The site utilises the following languages:
- HTML and CSS
- JavaScript

The site uses the following frameworks:
- Bootstrap
- Font awesome icons

The website uses CSS modelling alongside JavaScript code to allow the webpages to be viewed on mobile devices, tablets and desktop computers.
