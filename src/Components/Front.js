import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./front.css";
import { Link, Events, scrollSpy } from "react-scroll";
import Typed from "react-typed";

export default class Front extends Component {
  componentDidMount() {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
    AOS.init({
      // initialise with other settings
      duration: 1500,
      once: true,
    });
  }
  render() {
    return (
      <div>
        <button type="button" class="mobile-nav-toggle d-xl-none">
          <i style={{ color: "#f1d4d4" }} class="fa fa-bars"></i>
        </button>

        <header id="header" class="d-flex flex-column justify-content-center">
          <nav class="nav-menu">
            <ul>
              <li class="active" data-aos="fade-right">
                <Link href="#hero" to="App" smooth={true}>
                  <i class="fa fa-home"></i> <span>Home</span>
                </Link>
              </li>
              <li data-aos="fade-right" data-aos-delay="100">
                <Link href="#about" to="About" smooth={true}>
                  <i class="fa fa-address-card"></i> <span>About</span>
                </Link>
              </li>

              <li data-aos="fade-right" data-aos-delay="200">
                <Link href="#skills" to="Skills" smooth={true}>
                  <i className="fa fa-tasks"></i>
                  <span>Skills</span>
                </Link>
              </li>
              <li data-aos="fade-right" data-aos-delay="300">
                <Link href="#projects" to="Projects" smooth={true}>
                  <i class="fa fa-briefcase"></i> <span>Projects</span>
                </Link>
              </li>
              <li data-aos="fade-right" data-aos-delay="400">
                <Link href="#contact" to="Contactus" smooth={true}>
                  <i class="fa fa-envelope-open"></i> <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <section id="hero" class="d-flex flex-column justify-content-center">
          <div class="container">
            <h1 data-aos="zoom-in" data-aos-delay="100">
              Rakshit Jain
            </h1>
            <p data-aos="zoom-in" data-aos-delay="200">
              I'm{" "}
              <span
                class="typed"
                data-typed-items="MERN Stack developer,Competitve Programmer"
              ></span>
              <Typed
                typedRef={(typed) => {
                  this.typed = typed;
                }}
                strings={["MERN Stack developer", "Competitve Programmer"]}
                typeSpeed={100}
				backSpeed={50}
				backDelay={2000}
				loop
              />
            </p>
            <div class="social-links" data-aos="zoom-in" data-aos-delay="300">
              <a
                href="https://www.facebook.com/rakshit.dhoka/"
                class="facebook"
              >
                <i class="fa fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/rakshitjain13/"
                target="_blank"
                class="instagram"
                rel="noreferrer"
              >
                <i class="fa fa-instagram"></i>
              </a>
              <a
                href="https://github.com/rakshitjain13"
                target="_blank"
                class="fa fa-github"
                rel="noreferrer"
              >
                <i class="bx bxl-skype"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rakshit-jain-9b83b5170/"
                target="_blank"
                class="fa fa-linkedin"
                rel="noreferrer"
              >
                <i class="bx bxl-linkedin"></i>
              </a>
              <a href="mailto:rakshitjain19@cse.iiitp.ac.in" class="">
                <i class="fa  fa-paper-plane"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
