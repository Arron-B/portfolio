import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

function Welcome({ isDark }) {
	const welcomeLine1 = ["Hello,", "I'm", "Arron", ","];

	return (
		<div
			id="welcome"
			className={
				"welcome h-screen px-4 pb-nav flex flex-col justify-center items-center" +
				(isDark ? " text-white" : " text-black")
			}
		>
			<div className="flex">
				{welcomeLine1.map((word, i) => {
					if (i === 2) {
						return (
							<p
								key={`${word}${i}`}
								className="text-my-red text-2xl"
							>
								{word}
							</p>
						);
					} else {
						return (
							<p
								key={`${word}${i}`}
								className="mr-1 text-2xl"
							>
								{word}
							</p>
						);
					}
				})}
			</div>
			<p className="text-2xl">a full-stack developer.</p>
			<a href="#about">
				<FontAwesomeIcon
					className="absolute text-4xl left-1/2 top-1/2 -translate-x-1/2 translate-y-[1rem] animate-pulse hover:scale-125"
					icon={faAngleDoubleDown}
				/>
			</a>
		</div>
	);
}

export default Welcome;
