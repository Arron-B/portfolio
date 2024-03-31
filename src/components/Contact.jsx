function Contact({ isDark, isNavOpen }) {
	return (
		<div
			className={
				"h-[92dvh] w-full p-4" +
				(isDark
					? " bg-[url('./src/assets/dark-background.jpg')] bg-cover bg-center"
					: " bg-[url('./src/assets/light-background.jpg')] bg-cover bg-center")
			}
		>
			Contact Me
		</div>
	);
}

export default Contact;
