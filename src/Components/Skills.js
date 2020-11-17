import React from 'react';
import { Progress } from "reactstrap";
import './skills.css';

export default function Skills() {
    return (
			<div>
				<section id="skills" class="skills section-bg">
					<div class="container" data-aos="fade-up">
						<div class="section-title">
							<h2>Skills</h2>
							<p>
								Full Stack Web Developer| Quick Learner | Analytically apt | C++
							</p>
						</div>

						<div class="row skills-content">
							<div class="col-lg-6">
								<div class="progress">
									<span class="skill">
										React <i class="val">75%</i>
									</span>
									<div class="progress-bar-wrap">
										<Progress animated value="70" />
									</div>
								</div>

								<div class="progress">
									<span class="skill">
										MongoDB <i class="val">62%</i>
									</span>
									<div class="progress-bar-wrap">
										<Progress animated value="62" />
									</div>
								</div>

								<div class="progress">
									<span class="skill">
										Express <i class="val">61%</i>
									</span>
									<div class="progress-bar-wrap">
										<Progress animated value="61" />
									</div>
								</div>
							</div>

							<div class="col-lg-6">
								<div class="progress">
									<span class="skill">
										DSA <i class="val">70%</i>
									</span>
									<div class="progress-bar-wrap">
										<Progress animated value="70" />
									</div>
								</div>

								<div class="progress">
									<span class="skill">
										Java Script<i class="val">64%</i>
									</span>
									<div class="progress-bar-wrap">
										<Progress animated value="64" />
									</div>
								</div>

								<div class="progress">
									<span class="skill">
										HTML/CSS <i class="val">65%</i>
									</span>
									<div class="progress-bar-wrap">
										<Progress animated value="65" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
}
