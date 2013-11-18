/*Creates the header information for every page.
We decided to not use PHP includes to simplify the viewing process of the client
so that they do not have to use a LAMP stack to view later
*/
$(document).ready(function() {
	//Creates the top nav bar
	$("header").append("<div id='interact'></div>");
	$("#interact").append("<h5>Interact:</h5>");
	$("#interact").append("<ul id='top-nav'></ul");
	$("#top-nav").append("<li><a href='#'>Member Login</a></li>");
	$("#top-nav").append("<li><a href='#'>Join</a></li>");
	$("#top-nav").append("<li><a href='#'>Forums</a></li>");
	$("#top-nav").append("<li><a href='#'>Blog</a></li>");
	//Creates search bar
	$("header").append("<form id='search'></form>");
	$("#search").append("<input type='text' class='input' placeholder='Search...'>");
	//Creates the logo
	$("header").append("<div id='logo'></div>");
	$("#logo").append("<img src='img-sprites/logo.gif'>");
	$("#logo").append("<div id='title'></div>");
	$("#title").append("<h4>Allegheney Health Network<br><span>Women in Medicine</span></h4>");
	// Creates the main nav bar
    $("header").append("<nav><ul id='main-nav'></ul></nav>");
    $("#main-nav").append("<li id='home'><a href='#'>Home</a></li>");
    $("#main-nav").append("<li id='about'><a href='#'>About WiM</a></li>");
    $("#main-nav").append("<li id='events'><a href='#'>Events</a></li>");
    $("#main-nav").append("<li id='pdev'><a href='#'>Professional Development</a></li>");
    $("#main-nav").append("<li id='resc'><a href='#'>Community Resources</a></li>");
    $("#main-nav").append("<li id='members'><a href='#'>Members</a></li>");
    $("#main-nav").append("<li id='contact'><a href='#'>Contact Us</a></li>");
	 
	 
	 var aboutdropdown = "<ul class='dropdown drop-about'><li><a href='#'>Mission and History</a></li><li><a href='#'>Program Administrators</a></li></ul>";
	 
	 
	 $("#main-nav #about").append(aboutdropdown);
	 
});