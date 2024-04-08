import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
			<p className="text-xs ls:absolute ls:right-1/4">Arron Bent @2024</p>
			<a href="#welcome">
				<FontAwesomeIcon
					className="absolute text-4xl top-[0] left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-125"
					icon={faAngleDoubleUp}
				/>
			</a>
			<span className="h-full flex gap-2 absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 items-center ls:left-1/4 ls:right-auto">
				<a
					className="h-8 w-8 hover:scale-125"
					href="https://github.com/Arron-B"
					target="_blank"
				>
					<FontAwesomeIcon
						className="h-full w-full"
						icon={faGithub}
					/>
				</a>
				<a
					className="h-8 w-8 hover:scale-125"
					href="https://www.linkedin.com/in/arron-bent-939959159/"
					target="_blank"
				>
					<FontAwesomeIcon
						className="h-8 w-8 hover:scale-125"
						icon={faLinkedin}
					/>
				</a>
			</span>
		</div>
	);
}

export default Footer;
