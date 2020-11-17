/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import $ from "jquery";
import './App.css';
import About from './Components/About';
import Front from './Components/Front';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
import {
	Link,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
} from "react-scroll";



class App extends React.Component {
  componentDidMount(){
	  Events.scrollEvent.register("begin", function (to, element) {
			console.log("begin", arguments);
		});

		Events.scrollEvent.register("end", function (to, element) {
			console.log("end", arguments);
		});

		scrollSpy.update();

			// Hero typed
			if ($(".typed").length) {
				var typed_strings = $(".typed").data("typed-items");
				typed_strings = typed_strings.split(",");
				// eslint-disable-next-line no-undef
				new Typed(".typed", {
					strings: typed_strings,
					loop: true,
					typeSpeed: 100,
					backSpeed: 50,
					backDelay: 2000,
				});
			}

			// Smooth scroll for the navigation menu and links with .scrollto classes
		

			// Activate smooth scroll on page load with hash links in the url


			$(document).on("click", ".mobile-nav-toggle", function (e) {
				$("body").toggleClass("mobile-nav-active");
				$(".mobile-nav-toggle i").toggleClass(
					"icofont-navigation-menu icofont-close"
				);
			});

			$(document).click(function (e) {
				var container = $(".mobile-nav-toggle");
				if (!container.is(e.target) && container.has(e.target).length === 0) {
					if ($("body").hasClass("mobile-nav-active")) {
						$("body").removeClass("mobile-nav-active");
						$(".mobile-nav-toggle i").toggleClass(
							"icofont-navigation-menu icofont-close"
						);
					}
				}
			});

			// Navigation active state on scroll
			var nav_sections = $("section");
			var main_nav = $(".nav-menu, #mobile-nav");

			$(window).on("scroll", function () {
				var cur_pos = $(this).scrollTop() + 300;

				nav_sections.each(function () {
					var top = $(this).offset().top,
						bottom = top + $(this).outerHeight();

					if (cur_pos >= top && cur_pos <= bottom) {
						if (cur_pos <= bottom) {
							main_nav.find("li").removeClass("active");
						}
						main_nav
							.find('a[href="#' + $(this).attr("id") + '"]')
							.parent("li")
							.addClass("active");
					}
					if (cur_pos < 200) {
						$(".nav-menu ul:first li:first").addClass("active");
					}
				});
			});

			// Back to top button
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$(".back-to-top").fadeIn("slow");
				} else {
					$(".back-to-top").fadeOut("slow");
				}
			});

			// jQuery counterUp


			// Skills section
		

			// Init AOS

			// Porfolio isotope and filter
		
				// Initiate aos_init() function

			// Testimonials carousel (uses the Owl Carousel library)
		
			// Portfolio details carousel
		
  }
   componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
   scrollToTop() {
    scroll.scrollToTop();
  }
  render(){
  return (
		<Element name="App" className="App">
			<Front />
			<Element name="About">
				<About />
			</Element>
			<Element name="Skills">
				<Skills />
			</Element>
			<Element name="Projects">
				<Projects />
			</Element>
			<Element name="Contactus">
				<Contactus />
			</Element>
			<Footer />
			<Link to="App" activeClass="active" class="back-to-top" smooth={true}>
				<i class="fa fa-arrow-up"></i>
			</Link>
		</Element>
	);
  }
}

export default App;
