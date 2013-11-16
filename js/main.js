/*Creates the header information for every page.
We decided to not use PHP includes to simplify the viewing process of the client
so that they do not have to use a LAMP stack to view later
*/
$(document).ready(function() {
	//Creates the top nav bar
	$("header").append("<div id='interact'></div>");
	$("#interact").append("<h5>Interact:</h5>");
	$("#interact").append("<ul id='top-nav'></ul");
	$("#top-nav").append("<li><a>Member Login</a></li>");
	$("#top-nav").append("<li><a>Join</a></li>");
	$("#top-nav").append("<li><a>Forums</a></li>");
	$("#top-nav").append("<li><a>Blog</a></li>");
	//Creates the logo
	$("header").append("<div id='logo'></div>");
	$("#logo").append("<img src='img-sprites/logo.gif'>");
	$("#logo").append("<div id='title'></div>");
	$("#title").append("<h4>Allegheney Health Network<br><span>Women in Medicine</span></h4>");
	// Creates the main nav bar
    $("header").append("<nav><ul id='main-nav'></ul></nav>");
    $("#main-nav").append("<li id='home'><a>Home</a></li>");
    $("#main-nav").append("<li id='about'><a>About WiM</a></li>");
    $("#main-nav").append("<li id='events'><a>Events</a></li>");
    $("#main-nav").append("<li id='pdev'><a>Professional Development</a></li>");
    $("#main-nav").append("<li id='resc'><a>Community Resources</a></li>");
    $("#main-nav").append("<li id='members'><a>Members</a></li>");
    $("#main-nav").append("<li id='contact'><a>Contact Us</a></li>");
});