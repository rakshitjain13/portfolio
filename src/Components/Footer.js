import React from 'react'
import './footer.css'
export default function Footer() {
    return (
			<div>
				<footer id="footer">
					<div class="container">
						<h3>Rakshit Jain</h3>
						<p>
							A productive day doesn't mean to do something great,It is making
							yourself great!!
						</p>
						<div class="social-links">
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
							>
								<i class="fa fa-instagram"></i>
							</a>
							<a
								href="https://github.com/rakshitjain13"
								target="_blank"
								class="fa fa-github"
							>
								<i class="bx bxl-skype"></i>
							</a>
							<a
								href="https://www.linkedin.com/in/rakshit-jain-9b83b5170/"
								target="_blank"
								class="fa fa-linkedin"
							>
								<i class="bx bxl-linkedin"></i>
							</a>
							<a href="mailto:rakshitjain19@cse.iiitp.ac.in" class="">
								<i class="fa  fa-paper-plane"></i>
							</a>
						</div>
						<div class="copyright">
							&copy; Copyright{" "}
							<strong>
								<span>Rakshit Jain</span>
							</strong>
							. All Rights Reserved
						</div>
					</div>
				</footer>
			</div>
		);
}
