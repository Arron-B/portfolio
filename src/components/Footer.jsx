function Footer({ isDark }) {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div
			className={
				"h-nav w-full px-4 flex items-center" +
				(isDark
					? " bg-dark-secondary text-white"
					: " bg-light-secondary text-black")
			}
		>
			<p className="text-xs">Arron Bent @2024</p>
			<a
				className="h-8 w-8 ml-auto hover:scale-125"
				href="https://github.com/Arron-B"
				target="_blank"
			>
				<img
					className={"h-full w-full ml-auto" + (isDark ? " hidden" : "")}
					src=".\src\assets\github-logo-light.png"
					alt=""
				/>
				<img
					className={"h-full w-full ml-auto" + (isDark ? "" : " hidden")}
					src=".\src\assets\github-logo-dark.png"
					alt=""
				/>
			</a>
		</div>
	);
}

export default Footer;
