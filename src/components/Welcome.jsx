import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

function Welcome({ isDark, sectionRef }) {
	const welcomeLine1 = ["Hello,", "I'm", "Arron", ","];

	return (
		<div
			id="welcome"
			ref={sectionRef}
			className={
				"welcome h-screen px-4 pb-nav flex flex-col justify-center items-center" +
				(isDark ? " text-dark-text" : " text-light-text")
			}
		>
			<div className="inline-block">
				<p className="welcome-msg-1 mr-2 text-2xl ls:text-5xl">
					Hello I'm <span className="text-my-red-dark">Arron</span>,
				</p>
			</div>
			<div>
				<p className="welcome-msg-2 text-2xl ls:text-5xl ls:leading-tight">
					a full-stack developer.
				</p>
			</div>
			<a href="#about">
				<FontAwesomeIcon
					className="absolute opacity-0 animate-fadeIn text-4xl left-1/2 top-1/2 -translate-x-1/2 translate-y-[1rem] hover:scale-125 ls:translate-y-[3rem]"
					icon={faAngleDoubleDown}
				/>
			</a>
		</div>
	);
}

export default Welcome;
