import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Form({ isDark, sectionRef, projectCount }) {
	const form = useRef();

	const [submitMsg, setSubmitMsg] = useState("");
	const [submitStatus, setSubmitStatus] = useState("success");

	const sendEmail = (e) => {
		e.preventDefault();
		let fieldsFilled = 0;
		document.querySelectorAll(".form-input").forEach((input, i) => {
			if (input.value.length < 1) {
				setSubmitMsg("Fill all fields");
				setSubmitStatus("failed");
				setTimeout(() => {
					setSubmitMsg("");
					setSubmitStatus("success");
				}, 3000);
			} else if (input.value.length >= 1 && fieldsFilled < 2) {
				fieldsFilled++;
			} else if (input.value.length >= 1 && fieldsFilled === 2) {
				emailjs
					.sendForm("service_zz8xsjl", "template_e1tgbro", form.current, {
						publicKey: "pvE2yssw6DJ_7sUcR",
					})
					.then(
						() => {
							setSubmitStatus("success");
							setSubmitMsg("Message Sent");
							setTimeout(() => {
								setSubmitMsg("");
							}, 5000);
							e.target.reset();
						},
						(error) => {
							setSubmitStatus("failed");
							setSubmitMsg("Message Failed");
							setTimeout(() => {
								setSubmitMsg("");
								setSubmitStatus("success");
							}, 3000);
						}
					);
			}
		});
	};

	return (
		<div
			ref={sectionRef}
			className={
				"portrait:-mt-32 portrait:pt3:-mt-20 w-full h-[50vh] landscape:left-0 landscape:w-1/2 landscape:pt:max-ls1:mb-4 landscape:-mt-12" +
				(isDark ? " text-dark-text" : " text-gray-700") + (projectCount % 2 === 0 ? " landscape:mr-auto" : " landscape:ml-auto")
			}
		>
			{" "}
			<form
				className="w-[70%] portrait:pt2:w-1/2 h-full flex flex-col gap-2 mx-auto justify-center items-center row-start-2 landscape:w-3/4 landscape:gap-3"
				ref={form}
				onSubmit={sendEmail}
			>
				<h2
					className={
						"relative h-10 z-10 text-2xl before:absolute before:border-b-[0.7rem] before:-z-10 before:w-[8.2rem] landscape:before:w-[8.7rem] before:h-1/2 before:top-3 before:translate-x-[1rem] font-bold" +
						(isDark
							? " before:border-b-my-red-dark"
							: " before:border-b-my-red-light text-gray-800")
					}
				>
					Contact Me
				</h2>
				<input
					className={
						"form-input w-full h-5 pl-1 text-sm landscape:h-12 landscape:pl-6 landscape:mt-4" +
						(isDark
							? " bg-slate-900/20 placeholder-dark-text"
							: " bg-gray-900/5 placeholder-gray-700")
					}
					type="text"
					name="user_name"
					placeholder="Name"
				/>

				<input
					className={
						"form-input w-full h-5 pl-1 text-sm landscape:h-12 landscape:pl-6" +
						(isDark
							? " bg-slate-900/20 placeholder-dark-text"
							: " bg-gray-900/5 placeholder-gray-700")
					}
					type="email"
					name="user_email"
					placeholder="Email"
				/>

				<textarea
					name="message"
					className={
						"form-input w-full h-28 pl-1 text-sm landscape:h-40 landscape:pl-6 landscape:pt-2" +
						(isDark
							? " bg-slate-900/20 placeholder-dark-text"
							: " bg-gray-900/5 placeholder-gray-700")
					}
					placeholder="Message"
				/>
				<div className="w-full flex justify-end">
					<span
						className={
							"submit-notification w-[40%] h-full text-sm" +
							(submitMsg.length > 0
								? " flex items-center justify-center"
								: " hidden") +
							(submitStatus === "success" ? " bg-green-700" : " bg-my-red-dark")
						}
					>
						{submitMsg}
					</span>
					<button
						type="submit"
						value="Send"
						disabled={submitMsg.length > 0 ? true : false}
						className={
							"relative w-[25%] overflow-hidden border-b-4 shadow-2xl transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full  after:duration-500 landscape:ls1:hover:after:h-full landscape:pt:max-ls1:border-b-2" +
							(isDark
								? " text-dark-text landscape:ls:hover:text-dark-bg border-my-red-dark after:bg-my-red-dark"
								: " text-gray-700 landscape:ls:hover:text-light-bg border-my-red-light after:bg-my-red-light")
						}
					>
						<span className="relative z-10 text-sm">Submit</span>
					</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
