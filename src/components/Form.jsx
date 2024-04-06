import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Form({ isDark }) {
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
		<form
			className="w-[70%] h-full flex flex-col gap-2 mx-auto justify-center items-center row-start-2 ls:ml-[30%]"
			ref={form}
			onSubmit={sendEmail}
		>
			<h2 className="relative h-10 z-10 text-2xl before:absolute before:border-b-[0.7rem] before:-z-10 before:border-b-my-red before:w-[7.7rem] before:h-1/2 before:top-3 before:translate-x-[1rem]">
				Contact Me
			</h2>
			<input
				className={
					"form-input w-full h-5 pl-1 text-sm ls:h-8" +
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
					"form-input w-full h-5 pl-1 text-sm ls:h-8" +
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
					"form-input w-full h-28 pl-1 text-sm ls:h-36" +
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
						(submitStatus === "success" ? " bg-green-700" : " bg-my-red")
					}
				>
					{submitMsg}
				</span>
				<button
					type="submit"
					value="Send"
					disabled={submitMsg.length > 0 ? true : false}
					className={
						"relative w-[25%] overflow-hidden border-b-4 border-my-red shadow-2xl transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-my-red after:duration-500 hover:after:h-full" +
						(isDark
							? " text-white hover:text-dark-bg"
							: " text-black hover:text-light-bg")
					}
				>
					<span className="relative z-10 text-sm">Submit</span>
				</button>
			</div>
		</form>
	);
}

export default Form;
