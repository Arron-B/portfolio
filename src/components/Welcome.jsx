import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

function Welcome({ isDark, sectionRef }) {
	const welcomeLine1 = ["Hello,", "I'm", "Arron", ","];

	return (
		<div
			id="welcome"
			ref={sectionRef}
			className={
				"welcome h-screen px-4 flex flex-col justify-center items-center portrait:pb-nav" +
				(isDark ? " text-dark-text" : " text-light-text")
			}
		>
			<div className="absolute w-full h-full overflow-hidden -z-10">
				<div className="bubbles relative flex w-full mx-auto">
					{[...Array(10)].map((bubble, i) => (
						<span
							className={
								"w-[1vw] h-[1vw] landscape:w-[0.4vw] landscape:h-[0.4vw]" +
								(isDark ? " bubble-dark" : " bubble-light")
							}
							key={i}
							style={{
								"--i": Math.random() * (30 - 10) + 20,
								"--d": Math.random() * 3,
							}}
						></span>
					))}
				</div>
			</div>
			<div>
				<p className="welcome-msg-1 mr-2 text-2xl landscape:text-5xl">
					Hello I'm <span className="text-my-red-dark">Arron</span>,
				</p>
			</div>
			<div>
				<p className="welcome-msg-2 text-2xl landscape:text-5xl landscape:leading-tight">
					a full-stack developer.
				</p>
			</div>
			<a href="#about">
				<FontAwesomeIcon
					className="absolute opacity-0 animate-fadeInDelayed text-4xl left-1/2 top-1/2 -translate-x-1/2 translate-y-[1rem] hover:scale-125 landscape:translate-y-[4rem]"
					icon={faAngleDoubleDown}
				/>
			</a>
		</div>
	);
}

export default Welcome;
