import React, { Component } from "react";
import "./contactus.scss";
import axios from "axios";

function ValidationMessage(props) {
	if (!props.valid) {
		return <div className="error-msg">{props.message}</div>;
	}
	return null;
}

export default class Contactus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			usernameValid: false,
			email: "",
			emailValid: false,
			message: "",
			messageValid: false,
			formValid: false,
			errorMsg: {},
		};
	}
	validateForm = () => {
		const { usernameValid, emailValid, messageValid } = this.state;
		this.setState({
			formValid: usernameValid && emailValid && messageValid,
		});
	};
	updateUsername = (username) => {
		this.setState({ username }, this.validateUsername);
	};
	validateUsername = () => {
		const { username } = this.state;
		let usernameValid = true;
		let errorMsg = { ...this.state.errorMsg };

		if (username.length < 3) {
			usernameValid = false;
			errorMsg.username = "Must be at least 3 characters long";
		}

		this.setState({ usernameValid, errorMsg }, this.validateForm);
	};
	updateEmail = (email) => {
		this.setState({ email }, this.validateEmail);
	};
	validateEmail = () => {
		const { email } = this.state;
		let emailValid = true;
		let errorMsg = { ...this.state.errorMsg };

		// checks for format _@_._
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			emailValid = false;
			errorMsg.email = "Invalid email format";
		}

		this.setState({ emailValid, errorMsg }, this.validateForm);
	};
	updateMessgae = (message) => {
		this.setState({ message }, this.validateMessage);
	};
	validateMessage = () => {
		const { message } = this.state;
		let messageValid = true;
		let errorMsg = { ...this.state.errorMsg };

		if (message.length < 4) {
			messageValid = false;
			errorMsg.message = "Must be at least 4 characters long";
		}

		this.setState({ messageValid, errorMsg }, this.validateForm);
	};
	submit = (e) => {
		e.preventDefault();
		// if (this.state.formValid) {
		// 	axios
		// 		.post(
		// 			"https://cors-anywhere.herokuapp.com/https://www.elformo.com/forms/e470a1dd-6b8b-4f27-8da7-4ea501c3c8d0",
		// 			{
		// 				name: this.state.username,
		// 				email: this.state.email,
		// 				message: this.state.message,
		// 			}
		// 		)
		// 		.then((res) => res.data)
		// 		.catch((err) => console.log(err));
		// 	alert("Thank You for your valuable time.");
		// }
	};

	render() {
		return (
			<div>
				<section id="contact" class="contact">
					<div class="container" data-aos="fade-up">
						<div class="section-title">
							<h2>Contact</h2>
						</div>
						<div className="contact__form">
							<div class="wrap-contact100">
								<form class="contact100-form validate-form">
									<ValidationMessage
										valid={this.state.usernameValid}
										message={this.state.errorMsg.username}
									/>
									<div
										class="wrap-input100 validate-input"
										data-validate="Please enter your name"
									>
										<input
											class="input100"
											type="text"
											name="username"
											id="username"
											value={this.state.username}
											onChange={(e) => this.updateUsername(e.target.value)}
											placeholder="Full Name"
										/>

										<span class="focus-input100"></span>
									</div>
									<ValidationMessage
										valid={this.state.emailValid}
										message={this.state.errorMsg.email}
									/>

									<div
										class="wrap-input100 validate-input"
										data-validate="Please enter email: e@a.x"
									>
										<input
											class="input100"
											type="text"
											name="email"
											id="email"
											placeholder="Email"
											value={this.state.email}
											onChange={(e) => this.updateEmail(e.target.value)}
										/>

										<span class="focus-input100"></span>
									</div>
									<ValidationMessage
										valid={this.state.messageValid}
										message={this.state.errorMsg.message}
									/>
									<div
										class="wrap-input100 validate-input"
										data-validate="Please enter your message"
									>
										<textarea
											class="input100"
											name="message"
											placeholder="Your Message"
											value={this.state.message}
											onChange={(e) => this.updateMessgae(e.target.value)}
										></textarea>

										<span class="focus-input100"></span>
									</div>

									<div class="container-contact100-form-btn">
										<button
											onClick={(e) => this.submit(e)}
											class="contact100-form-btn"
										>
											Send Email
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
