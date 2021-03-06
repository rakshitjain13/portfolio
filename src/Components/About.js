import React from 'react'
import './about.css';
import Rakshitimg from '../0-removebg-preview.png';
export default function About() {
    return (
			<div>
				<section id="about" class="about">
					<div class="container" data-aos="fade-up">
						<div class="section-title">
							<h2>About</h2>
							<p>
								Hello! I'm Rakshit Jain,studying Computer Science Engineering
								(2ND Year) from{" "}
								<strong>Indian Institue of Information Technology,Pune.</strong>
							</p>
						</div>

						<div class="row">
							<div class="col-lg-4">
								<img src={Rakshitimg} class="img-fluid" alt="Rakshit Jain" />
							</div>
							<div class="col-lg-8 pt-4 pt-lg-0 content mt-5">
								<h3>Web Developer &amp; Competitve Programmer</h3>
								<p class="font-italic"></p>
								<div class="row">
									<div class="col-lg-6 ">
										<ul>
											<li>
												<i class="fa fa-angle-right"></i>{" "}
												<strong>Birthday:</strong> 3 March 2001
											</li>
											<li>
												<i class="fa fa-angle-right"></i>{" "}
												<strong>Website:</strong> www.example.com
											</li>
											<li>
												<i class="fa fa-angle-right"></i> <strong>City:</strong>{" "}
												Mumbai,Maharashtra,India
											</li>
										</ul>
									</div>
									<div class="col-lg-6">
										<ul>
											<li>
												<i class="fa fa-angle-right"></i>{" "}
												<strong>Degree:</strong> B.Tech in CSE
											</li>
											<li>
												<i class="fa fa-angle-right"></i>{" "}
												<strong>Email:</strong> rakshitdhoka13@gmail.com
											</li>
											<li>
												<i class="fa fa-angle-right"></i>{" "}
												<strong>Freelance:</strong> Available
											</li>
										</ul>
									</div>
								</div>
								<p>
			
										Started my journey with C++ with evolution till OOPS.I
										always seek for what is behind the scences which lead me to
										a Full Stack MERN Developer.Currently engaged in DSA and CP
										Visualizer for all programmers(MERN + Python).
	
							</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
}
