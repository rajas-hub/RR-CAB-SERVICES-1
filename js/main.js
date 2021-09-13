// $(function() {

//   var siteSticky = function() {
// 		$(".js-sticky-header").sticky({topSpacing:0});
// 	};
// 	siteSticky();

// 	var siteDropdown = function() {

// 		$('nav .dropdown').hover(function(){
// 			var $this = $(this);
// 			$this.addClass('show');
// 			$this.find('> a').attr('aria-expanded', true);
// 			$this.find('.dropdown-menu').addClass('show');
// 		}, function(){
// 			var $this = $(this);
// 				$this.removeClass('show');
// 				$this.find('> a').attr('aria-expanded', false);
// 				$this.find('.dropdown-menu').removeClass('show');
// 		});


// 		$('#dropdown04').on('show.bs.dropdown', function () {
// 		  console.log('show');
// 		});

// 	  $('.navbar .dropdown > a').click(function(){
// 	    location.href = this.href;
// 	  });
// 	}; 
// 	siteDropdown();
// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// });


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}