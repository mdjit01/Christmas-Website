// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function(){
	if(document.documentElement.scrollTop > 20){
		nav.classList.add('header_scrolled');
	}else{
		nav.classList.remove('header_scrolled');
	}
}

// nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.foreach(function(a){
	a.addEventListner("click", function(){
		navCollapse.classList.remove("show");
	})
})