/*Creates the header information for every page.
We decided to not use PHP includes to simplify the viewing process of the client
so that they do not have to use a LAMP stack to view later
*/

/* See comment at top of top-level.js for explanation of how this file differs */


$(document).ready(function() {
	//Creates the top nav bar
	$("header").append("<div id='interact'></div>");
	$("#interact").append("<h5>INTERACT:</h5>");
	$("#interact").append("<ul id='top-nav'></ul");
	$("#top-nav").append("<li><a href='../interact/login.html'>Member Login</a></li>");
	$("#top-nav").append("<li><a href='../interact/join.html'>Join</a></li>");
	$("#top-nav").append("<li><a href='../interact/forums.html'>Forums</a></li>");
	$("#top-nav").append("<li><a href='../interact/blog.html'>Blog</a></li>");
	//Creates search bar
	$("header").append("<form id='search'></form>");
	$("#search").append("<input type='text' class='input' placeholder='Search...'><input type='submit' class='searchbtn' value='Go' />");
	//Creates the logo
	$("header").append("<div id='logo'></div>");
	$("#logo").append("<a href='../index.html'><img src='../img-sprites/logo.gif' alt='Allegheny Health Network Women in Medicine Group'></a>");
	$("#logo").append("<div id='title'></div>");
	$("#title").append("<h4>Allegheny Health Network<br><span>Women in Medicine</span></h4>");
	// Creates the main nav bar
    $("header").append("<nav><ul id='main-nav'></ul></nav>");
    $("#main-nav").append("<li class='nav-home'><a href='../index.html'>Home</a></li>");
    $("#main-nav").append("<li class='nav-about'><a href='../about/mission.html'>About WiM</a></li>");
    $("#main-nav").append("<li class='nav-events'><a href='../events/calendar.html'>Events</a></li>");
    $("#main-nav").append("<li class='nav-pdev'><a href='../development/career.html'>Professional Development</a></li>");
    $("#main-nav").append("<li class='nav-resc'><a href='../resources/recreation.html'>Community Resources</a></li>");
    $("#main-nav").append("<li class='nav-members'><a href='../members/directory.html'>Members</a></li>");
    $("#main-nav").append("<li class='nav-contact'><a href='../contact.html'>Contact Us</a></li>");
	 
	 
	var aboutDropdown = "<ul class='dropdown drop-about'><li><a href='../about/mission.html'>Mission and History</a></li><li><a href='../about/administrators.html'>Program Administrators</a></li></ul>";
	 
	var eventsDropdown = "<ul class='dropdown drop-events'><li><a href='../events/calendar.html'>Calendar of Events</a></li><li><a href='../events/pastevents.html'>Past Events</a></li></ul>";
	 
	var pdevDropdown = "<ul class='dropdown drop-pdev'><li><a href='../development/career.html'>Career Opportunities</a></li><li><a href='../development/scholarships.html'>Scholarships</a></li></ul>";
		 
	var rescDropdown = "<ul class='dropdown drop-resc'><li><a href='../resources/recreation.html'>Recreation &amp; Wellness</a></li><li><a href='../resources/family.html'>Family Resources</a></li><li><a href='../resources/pittsburgh.html'>Living in Pittsburgh</a></li><li><a href='../resources/support.html'>Personal Support Groups</a></li><li><a href='../resources/religious.html'>Religious Organizations</a></li></ul>";

	var membersDropdown = "<ul class='dropdown drop-members'><li><a href='../members/directory.html'>Member Directory</a></li><li><a href='../interact/join.html'>Join WiM</a></li><li><a href='../interact/login.html'>Member Login</a></li><li><a href='../members/mentorship.html'>Mentorship</a></li></ul>";
	 
	 $("#main-nav .nav-about").append(aboutDropdown);
	 $("#main-nav .nav-events").append(eventsDropdown);
	 $("#main-nav .nav-pdev").append(pdevDropdown);
	 $("#main-nav .nav-resc").append(rescDropdown);
	 $("#main-nav .nav-members").append(membersDropdown);

	var footer = "<div class='copyright'>&copy; 2013 Allegheny Health Network. All Rights Reserved. <br /><a href='#'>Privacy Policy</a>  |  <a href='#'>Site Map</a>  |  <a href='../contact.html'>Contact Us</a></div>";
	
	var footNewsletter = "<div class='newsletter'>Join our newsletter:&nbsp;&nbsp;&nbsp;<input type='text' class='input' placeholder='Your Name' /><input type='text' class='input' placeholder='Your Email' /><input type='submit' class='submit' value='Join' /></div><a href='#' class='back-to-top'>&uarr; Back to Top</a>";
	
	$("footer").append(footer);
	$("footer").append(footNewsletter);
	
	
	var offset = 220;
				var duration = 500;
				jQuery(window).scroll(function() {
					if (jQuery(this).scrollTop() > offset) {
						jQuery('.back-to-top').fadeIn(duration);
					} else {
						jQuery('.back-to-top').fadeOut(duration);
					}
				});
				
				jQuery('.back-to-top').click(function(event) {
					event.preventDefault();
					jQuery('html, body').animate({scrollTop: 0}, duration);
					return false;
				})
});

function login() {
    window.location.assign("loggedin.html");
};

function register() {
    event.preventDefault();
    window.location.assign("thankyou.html");
};
