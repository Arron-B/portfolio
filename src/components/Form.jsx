import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Form({ isDark }) {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_zz8xsjl", "template_e1tgbro", form.current, {
				publicKey: "pvE2yssw6DJ_7sUcR",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					e.target.reset();
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<form
			className="w-[70%] h-full flex flex-col gap-2 mx-auto justify-center items-center"
			ref={form}
			onSubmit={sendEmail}
		>
			<input
				className={
					"w-full h-5 pl-1 text-sm" +
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
					"w-full h-5 pl-1 text-sm" +
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
					"w-full h-28 pl-1 text-sm" +
					(isDark
						? " bg-dark-secondary placeholder-white"
						: " bg-light-secondary placeholder-black")
				}
				placeholder="Message"
			/>

			<button
				type="submit"
				value="Send"
				class={
					"relative w-[25%] ml-auto overflow-hidden border-b-4 border-my-red shadow-2xl transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-my-red after:duration-500 hover:after:h-full" +
					(isDark
						? " text-white hover:text-dark-bg"
						: " text-black hover:text-light-bg")
				}
			>
				<span class="relative z-10 text-sm">Submit</span>
			</button>

			{/* <button
				className="w-[25%] ml-auto"
				
			>
				Submit
			</button> */}
		</form>
	);
}

export default Form;
