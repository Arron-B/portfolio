import { useState } from "react";

function Projects({ isDark }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<>
			<div
				className={
					"projects relative h-screen mt-nav py-12 flex flex-col justify-around" +
					(isDark ? " text-white" : " text-black")
				}
			>
				<a
					id="projects"
					className="absolute -top-12"
				></a>
				<div className="absolute left-[50%] top-10">
					<h2 className="text-2xl z-10 w-32 relative -left-[50%]">
						My Projects
					</h2>
					<div className="red-line z-0 bg-my-red relative w-[7.5rem] h-2.5 -left-[32%] -translate-y-2.5"></div>
				</div>

				<section className="nc-news relative top-12 h-[30%] w-[100vw] flex hover:scale-95">
					<div className="w-[70vw] h-full absolute z-[1] bg-[#3216bb]"></div>
					<img
						className="w-[62vw] object-scale-down z-[2]"
						src="./src/assets/ncnews-cropped.png"
					></img>
					<div className="absolute z-[3] bg-transparent h-[90%] w-[35vw] right-0 top-[5%] flex flex-col gap-1 px-1 text-left justify-center">
						<h3 className="text-md">Nc News</h3>
						<p className="text-sm">
							A full-stack news web app using React, Bootstrap, Node.js,
							Express.js and PostgreSQL
						</p>
						<a
							className="text-sm"
							href="https://arron-nc-news.netlify.app/?sort_by=created_at&order=desc&topic="
							target="_blank"
						>
							<div
								className={
									"relative w-[60%] overflow-hidden border-b-4 border-my-red transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-my-red after:duration-500 hover:after:h-full px-1" +
									(isDark
										? " text-white hover:text-dark-bg"
										: " text-black hover:text-light-bg")
								}
							>
								<span className="relative z-10 text-sm">LIVE APP</span>
							</div>
						</a>
						<a
							className="text-sm"
							href="https://github.com/Arron-B/nc-news"
							target="_blank"
						>
							<div
								className={
									"relative w-[55%] overflow-hidden border-b-4 border-my-red transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-my-red after:duration-500 hover:after:h-full px-1" +
									(isDark
										? " text-white hover:text-dark-bg"
										: " text-black hover:text-light-bg")
								}
							>
								<span className="relative z-10 text-sm">REPO</span>
							</div>
						</a>
						<a
							className="text-sm"
							href="https://github.com/Arron-B/API-nc-news"
							target="_blank"
						>
							<div
								className={
									"relative w-[50%] overflow-hidden border-b-4 border-my-red transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-my-red after:duration-500 hover:after:h-full px-1" +
									(isDark
										? " text-white hover:text-dark-bg"
										: " text-black hover:text-light-bg")
								}
							>
								<span className="relative z-10 text-sm">API</span>
							</div>
						</a>
					</div>
				</section>

				<section
					className="travel-buddy relative bottom-0 h-[30%] w-[100vw] flex ml-auto justify-end hover:scale-95"
					onMouseEnter={() => {
						setIsHovered(true);
					}}
					onMouseLeave={() => {
						setIsHovered(false);
					}}
				>
					<div
						className={
							"bg-[rgba(0,0,0,0.54)] absolute z-20 h-full w-[70vw] flex flex-col justify-center items-center text-sm pl-6" +
							(isHovered ? "" : " hidden")
						}
					>
						<p>Note:</p>
						<p className="text-white">
							This app was not intended to be a web app and should be viewed in
							a mobile viewport.
						</p>
					</div>
					<div className="w-[70vw] h-full absolute z-0 bg-[#3216bb]"></div>

					<img
						className="w-[62vw] object-scale-down z-10"
						src="./src/assets/travel-buddy-screens-cropped.png"
					></img>
					<div className="absolute z-30 bg-transparent h-[100%] w-[37vw] left-0 flex flex-col gap-1 pl-5 text-left justify-center">
						<h3 className="text-md">Travel Buddy</h3>
						<p className="text-xs">
							A full-stack mobile app built in a team of 6 during my bootcamp.
							It utilises Vue, Typescript, Axios, and MongoDB, all of which none
							of the team had any prior experience with.
						</p>
						<a
							className="text-sm"
							href="https://travel-app-npm-jog.netlify.app/home?utm_source=pocket_saves"
							target="_blank"
						>
							<div
								className={
									"relative w-[60%] overflow-hidden border-b-4 border-my-red transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-my-red after:duration-500 hover:after:h-full px-1" +
									(isDark
										? " text-white hover:text-dark-bg"
										: " text-black hover:text-light-bg")
								}
							>
								<span className="relative z-10 text-sm">LIVE APP</span>
							</div>
						</a>
						<a
							className="text-sm"
							href="https://github.com/npm-jog/travel-proj"
							target="_blank"
						>
							<div
								className={
									"relative w-[55%] overflow-hidden border-b-4 border-my-red transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-my-red after:duration-500 hover:after:h-full px-1" +
									(isDark
										? " text-white hover:text-dark-bg"
										: " text-black hover:text-light-bg")
								}
							>
								<span className="relative z-10 text-sm">REPO</span>
							</div>
						</a>
					</div>
				</section>
			</div>
		</>
	);
}

export default Projects;
