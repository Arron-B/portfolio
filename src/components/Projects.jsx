import { useState } from "react";

function Projects({ isDark, sectionRef }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<>
			<div
				ref={sectionRef}
				className={
					"projects relative mt-nav mb-10 flex flex-col justify-around pt:max-ls:gap-32 ls:h-[170vh] ls:grid ls:grid-cols-2 ls:grid-rows-[5rem_1fr_1fr_1fr_1fr] ls:mt-[6rem]" +
					(isDark ? " text-dark-text" : " text-black")
				}
			>
				<a
					id="projects"
					className="absolute -top-6 ls:-top-20"
				></a>
				<h2
					className={
						"relative h-10 top-10 text-3xl before:absolute before:border-b-[0.7rem] before:-z-10 before:w-[10.5rem] before:h-1/2 before:top-4 before:translate-x-[1.6rem] ls:col-span-2 ls:top-0 font-bold" +
						(isDark
							? " before:border-b-my-red-dark"
							: " before:border-b-my-red-light")
					}
				>
					My Projects
				</h2>

				<section
					className={
						"nc-news relative h-[30%] w-[100vw] flex hover:scale-95 active:scale-95 transition-all duration-300 ls:col-start-1 ls:row-start-2 ls:row-span-2 ls:h-[90%] ls:w-[95%] ls:top-0 ls:flex-col ls:gap-7 ls:py-7 ls:pr-7" +
						(isDark ? " ls:bg-dark-secondary" : " ls:bg-light-secondary")
					}
				>
					<div
						className={
							"w-[70vw] h-[115%] absolute z-0 ls:w-full ls:h-full" +
							(isDark ? " bg-dark-secondary" : "bg-light-secondary")
						}
					></div>
					<img
						className="w-[62vw] object-scale-down mt-[7%] z-[2] ls:w-full ls:h-[70%] ls:object-cover ls:mt-0"
						src="./src/assets/ncnews-cropped.png"
					></img>
					<div className="absolute z-[3] bg-transparent h-[90%] w-[35vw] right-0 top-[5%] flex flex-col gap-1 px-1 text-left justify-center ls:h-[30%] ls:static ls:ml-auto ls:w-[90%] ls:top-0">
						<h3 className="text-md ls:text-lg font-semibold">Nc News</h3>
						<p className="text-sm ls:text-[0.9rem] ls:my-1">
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
									"relative w-[60%] overflow-hidden border-b-[0.35rem] transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:duration-500 hover:after:h-full px-1 ls:w-[15%]" +
									(isDark
										? " text-dark-text hover:text-dark-bg border-my-red-dark after:bg-my-red-dark"
										: " text-black hover:text-light-bg border-my-red-light after:bg-my-red-light")
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
									"relative w-[55%] overflow-hidden border-b-[0.35rem] transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:duration-500 hover:after:h-full px-1 ls:w-[12%]" +
									(isDark
										? " text-dark-text hover:text-dark-bg border-my-red-dark after:bg-my-red-dark"
										: " text-black hover:text-light-bg border-my-red-light after:bg-my-red-light")
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
									"relative w-[50%] overflow-hidden border-b-[0.35rem] transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:duration-500 hover:after:h-full px-1 ls:w-[9%]" +
									(isDark
										? " text-dark-text hover:text-dark-bg border-my-red-dark after:bg-my-red-dark"
										: " text-black hover:text-light-bg border-my-red-light after:bg-my-red-light")
								}
							>
								<span className="relative z-10 text-sm">API</span>
							</div>
						</a>
					</div>
				</section>

				<section
					className={
						"travel-buddy relative h-[30%] w-[100vw] flex ml-auto justify-end hover:scale-95 transition-all duration-300 ls:h-[90%] ls:w-[95%] ls:mt-auto ls:col-start-2 ls:row-start-2 ls:row-span-2 ls:-bottom-[30%] ls:flex-col ls:py-7 ls:pl-7 ls:gap-4" +
						(isDark ? " ls:bg-dark-secondary" : " ls:bg-light-secondary")
					}
					onMouseEnter={() => {
						setIsHovered(true);
					}}
					onMouseLeave={() => {
						setIsHovered(false);
					}}
				>
					<div
						className={
							"w-[70vw] h-[115%] absolute z-0 ls:w-full ls:bottom-0 ls:h-full" +
							(isDark ? " bg-dark-secondary" : "bg-light-secondary")
						}
					></div>

					<img
						className="w-[62vw] mt-[7%] object-scale-down z-10 ls:w-full ls:h-[70%] ls:object-cover ls:order-2 ls:object-right-top"
						src="./src/assets/travel-buddy-screens-cropped.png"
					></img>
					<div className="absolute pt:max-ls:mt-2 z-30 bg-transparent h-[100%] w-[37vw] left-0 flex flex-col gap-1 pl-5 text-left justify-center ls:max-h-[30%] ls:static ls: order-1">
						<h3 className="text-md font-semibold">Travel Buddy</h3>
						<p className="text-xs ls:text-sm">
							A full-stack mobile app built in a team of 6 during my bootcamp.
							It utilises Vue, Typescript, Axios, and MongoDB, all of which none
							of the team had any prior experience with. Please use in a mobile
							view.
						</p>
						<a
							className="text-sm"
							href="https://travel-app-npm-jog.netlify.app/home?utm_source=pocket_saves"
							target="_blank"
						>
							<div
								className={
									"relative w-[60%] overflow-hidden border-b-[0.35rem] transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:duration-500 hover:after:h-full px-1 ls:w-[15%]" +
									(isDark
										? " text-dark-text hover:text-dark-bg border-my-red-dark after:bg-my-red-dark"
										: " text-black hover:text-light-bg border-my-red-light after:bg-my-red-light")
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
									"relative w-[55%] overflow-hidden border-b-[0.35rem] border-my-red transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-my-red after:duration-500 hover:after:h-full px-1 ls:w-[12%]" +
									(isDark
										? " text-dark-text hover:text-dark-bg border-my-red-dark after:bg-my-red-dark"
										: " text-black hover:text-light-bg border-my-red-light after:bg-my-red-light")
								}
							>
								<span className="relative z-10 text-sm">REPO</span>
							</div>
						</a>
					</div>
				</section>
				<section
					className={
						"portfolio-proj relative h-[30%] w-[100vw] flex hover:scale-95 active:scale-95 transition-all duration-300 ls:col-start-1 ls:row-start-4 ls:row-span-2 ls:h-[90%] ls:w-[95%] ls:flex-col ls:gap-4 ls:py-7 ls:pr-7 ls:translate-y-[5%]" +
						(isDark ? " ls:bg-dark-secondary" : " ls:bg-light-secondary")
					}
				>
					<div
						className={
							"w-[70vw] h-[115%] absolute z-0 ls:w-full ls:h-full" +
							(isDark ? " bg-dark-secondary" : "bg-light-secondary")
						}
					></div>
					<img
						className="w-[62vw] mt-[7%] object-scale-down z-[2] ls:w-full ls:h-[70%] ls:object-cover ls:mt-0 ls:object-right-top"
						src="./src/assets/portfolio-image.png"
					></img>
					<div className="absolute z-[3] bg-transparent h-[90%] w-[35vw] right-0 top-[5%] flex flex-col gap-1 px-1 text-left justify-center ls:h-[30%] ls:static ls:ml-auto ls:w-[90%]">
						<h3 className="text-md ls:text-lg font-semibold">Portfolio</h3>
						<p className="text-sm ls:text-[0.9rem] ls:my-1">
							This portfolio was built with React and TailwindCSS. It was my
							first time using Tailwind and this project really helped step my
							front-end skills up a level.
						</p>
						<a
							className="text-sm"
							href="https://github.com/Arron-B/portfolio/tree/main"
							target="_blank"
						>
							<div
								className={
									"relative w-[50%] overflow-hidden border-b-[0.35rem] transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full  after:duration-500 hover:after:h-full px-1 ls:w-[15%]" +
									(isDark
										? " text-dark-text hover:text-dark-bg border-my-red-dark after:bg-my-red-dark"
										: " text-black hover:text-light-bg border-my-red-light after:bg-my-red-light")
								}
							>
								<span className="relative z-10 text-sm">REPO</span>
							</div>
						</a>
					</div>
				</section>

				<section
					className={
						"pokematch relative h-[30%] w-[100vw] flex ml-auto justify-end hover:scale-95 transition-all duration-300 ls:h-[120%] ls:w-[95%] ls:mt-auto ls:col-start-2 ls:row-start-4 ls:row-span-2 ls:-bottom-[40%] ls:flex-col ls:py-7 ls:pl-7 ls:gap-4" +
						(isDark ? " ls:bg-dark-secondary" : " ls:bg-light-secondary")
					}
					onMouseEnter={() => {
						setIsHovered(true);
					}}
					onMouseLeave={() => {
						setIsHovered(false);
					}}
				>
					<div
						className={
							"w-[70vw] h-[110%] absolute z-0 ls:w-full ls:bottom-0 ls:h-full" +
							(isDark ? " bg-dark-secondary" : "bg-light-secondary")
						}
					></div>

					<img
						className="w-[62vw] mt-[7%] object-scale-down z-10 ls:w-full ls:h-[90%] ls:object-cover ls:order-2 ls:mt-2 ls:object-left-top"
						src="./src/assets/poke-match.png"
					></img>
					<div className="absolute pt:max-ls:mt-2 z-30 bg-transparent h-[100%] w-[37vw] left-0 flex flex-col gap-1 pl-5 text-left justify-center ls:max-h-[10%] ls:static ls: order-1">
						<h3 className="text-md font-semibold">Pokematch</h3>
						<p className="text-xs ls:text-sm">
							A quick and fun front-end only game to play around with the DOM.
						</p>
						<a
							className="text-sm"
							href="https://arron-b.github.io/pokemon-memory-game/"
							target="_blank"
						>
							<div
								className={
									"relative w-[60%] overflow-hidden border-b-[0.35rem] transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:duration-500 hover:after:h-full px-1 ls:w-[15%]" +
									(isDark
										? " text-dark-text hover:text-dark-bg border-my-red-dark after:bg-my-red-dark"
										: " text-black hover:text-light-bg border-my-red-light after:bg-my-red-light")
								}
							>
								<span className="relative z-10 text-sm">LIVE APP</span>
							</div>
						</a>
					</div>
				</section>
			</div>
		</>
	);
}

export default Projects;
