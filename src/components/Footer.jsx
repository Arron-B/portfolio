import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

function Footer({ isDark }) {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div
			id="contact"
			className={
				"relative h-nav w-full px-4 flex items-center" +
				(isDark
					? " bg-dark-secondary text-dark-text"
					: " bg-light-secondary text-black")
			}
		>
			<p className="text-xs">Arron Bent @2024</p>
			<a href="#welcome">
				<FontAwesomeIcon
					className="absolute text-4xl top-[0] left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-125"
					icon={faAngleDoubleUp}
				/>
			</a>
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
