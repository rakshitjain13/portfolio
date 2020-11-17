import React from "react";
import IngenuityLarge from'../images/ingenuity_large1.png';
import IngenuitySmall from "../images/ingenuity_small.png";
import InfinityLarge from '../images/InfinityLarge.png';
import InfinitySmall from '../images/InfinitySmall.png';
import './project.css';
export default function Projects() {
	return (
		<div>
			<section id="projects">
				<div class="container">
					<div className="section-title project" data-aos="fade-up">
						<h2>Projects</h2>
					</div>
					<div className="row" data-aos="fade-up">
						<div className="col-md-8 img-row">
							<div className="img-1">
								<img src={IngenuityLarge} className="img-fluid" alt="..." />
							</div>
							<div className="img-2" data-aos="fade-up" data-aos-delay="50">
								<img src={IngenuitySmall} className="img-fluid" alt="..." />
							</div>
						</div>
						<div className=" fh5co-text col-md-4">
							<h2>A Blog Site</h2>
							<p>
								Ingenuity, a website for student media body ,IIIT Pune.It uses
								rich text editor for making your own blog.<b>React</b> as
								frontend,<b>Express</b> as an backend and <b>mongodb</b> Atlas
								for storage has been used here.
							</p>
							<p>
								<a
									href="http://ingenuity.iiitp.ac.in/"
									target="__blank"
									class="btn btn-light btn-outline transition"
								>
									Live
								</a>
								<a
									href="https://github.com/rakshitjain13/ingenuity-iiitp"
									target="__blank"
									class="btn btn-light btn-outline transition ml-1"
								>
									Frontend Code
								</a>
								<a
									href="https://github.com/Mukhrit/Backend-Student-Media-Body-"
									target="__blank"
									class="btn btn-light btn-outline transition ml-1"
								>
									backend Code
								</a>
							</p>
						</div>
					</div>
					<div className="new-row">
						<div
							className="row flex-column-reverse flex-md-row"
							data-aos="fade-up"
						>
							<div className=" fh5co-text col-md-4 ">
								<h2>A Contest Site</h2>
								<p>
									A run-through contest and details including registartion,live
									stats using web scraping (<b>Puppeter</b>) and many more
									.Technologies used were <b>React,Express,MongoDB</b>.
								</p>
								<p>
									<a
										href="http://infinity.iiitp.ac.in/"
										target="__blank"
										class="btn btn-light btn-outline transition"
									>
										Live
									</a>
									<a
										href="https://github.com/rakshitjain13/InfInITy-Website-2k20"
										target="__blank"
										class="btn btn-light btn-outline transition ml-1"
									>
										Frontend Code
									</a>
									<a
										href="https://github.com/Mukhrit/Infinity2k20-Server"
										target="__blank"
										class="btn btn-light btn-outline transition ml-1"
									>
										backend Code
									</a>
								</p>
							</div>
							<div className="col-md-8 img-row">
								<div className="img-1">
									<img src={InfinityLarge} className="img-fluid" alt="..." />
								</div>
								<div className="img-2" data-aos="fade-up" data-aos-delay="50">
									<img src={InfinitySmall} className="img-fluid" alt="..." />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
