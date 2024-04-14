import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Form({ isDark, sectionRef }) {
	const form = useRef();

	const [submitMsg, setSubmitMsg] = useState("");
	const [submitStatus, setSubmitStatus] = useState("success");

	const sendEmail = (e) => {
		e.preventDefault();
		document.querySelectorAll(".form-input").forEach((input, i) => {
			if (input.value.length < 1) {
				setSubmitMsg("Fill all fields");
				setSubmitStatus("failed");
				setTimeout(() => {
					setSubmitMsg("");
					setSubmitStatus("success");
				}, 3000);
			} else if (input.value.length >= 1 && i === 2) {
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
				"w-full h-[50vh] ls:left-0 ls:w-[50vw]" +
				(isDark
					? " pt:max-ls:bg-[url('https://i.ibb.co/HgdgLkb/dark-background-Copy.jpg')] bg-cover bg-center text-dark-text"
					: " pt:max-ls:bg-[url('https://i.ibb.co/zJfpKrH/light-background-Copy.jpg')] bg-cover bg-center text-black")
			}
		>
			{" "}
			<form
				className="w-[70%] h-full flex flex-col gap-2 mx-auto justify-center items-center row-start-2 ls:w-1/2 ls:gap-3"
				ref={form}
				onSubmit={sendEmail}
			>
				<h2
					className={
						"relative h-10 z-10 text-2xl before:absolute before:border-b-[0.7rem] before:-z-10 before:w-[8.2rem] ls:before:w-[8.7rem] before:h-1/2 before:top-3 before:translate-x-[1rem] font-bold" +
						(isDark
							? " before:border-b-my-red-dark"
							: " before:border-b-my-red-light")
					}
				>
					Contact Me
				</h2>
				<input
					className={
						"form-input w-full h-5 pl-1 text-sm ls:h-12 ls:pl-6 ls:mt-4" +
						(isDark
							? " bg-dark-secondary placeholder-white"
							: " bg-light-secondary placeholder-black")
					}
					type="text"
					name="user_name"
					placeholder="Name"
				/>

				<input
					className={
						"form-input w-full h-5 pl-1 text-sm ls:h-12 ls:pl-6" +
						(isDark
							? " bg-dark-secondary placeholder-white"
							: " bg-light-secondary placeholder-black")
					}
					type="email"
					name="user_email"
					placeholder="Email"
				/>

				<textarea
					name="message"
					className={
						"form-input w-full h-28 pl-1 text-sm ls:h-40 ls:pl-6 ls:pt-2" +
						(isDark
							? " bg-dark-secondary placeholder-white"
							: " bg-light-secondary placeholder-black")
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
							"relative w-[25%] overflow-hidden border-b-4 shadow-2xl transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full  after:duration-500 ls:hover:after:h-full" +
							(isDark
								? " text-dark-text ls:hover:text-dark-bg border-my-red-dark after:bg-my-red-dark"
								: " text-black ls:hover:text-light-bg border-my-red-light after:bg-my-red-light")
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
