import { useState } from "react";

function Projects({ isDark, sectionRef }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<>
			<div
				ref={sectionRef}
				className={
					"projects relative mt-nav mb-10 flex flex-col justify-around portrait:gap-32 landscape:h-[170vh] landscape:grid landscape:grid-cols-2 landscape:grid-rows-[5rem_1fr_1fr_1fr_1fr] landscape:mt-[6rem] overflow-x-clip" +
					(isDark ? " text-dark-text" : " text-black")
				}
			>
				<a
					id="projects"
					className="absolute -top-6 landscape:-top-20"
				></a>
				<h2
					className={
						"relative h-10 top-10 text-3xl before:absolute before:border-b-[0.7rem] before:-z-10 before:w-[10rem] landscape:before:w-[10.5rem] before:h-1/2 before:top-4 before:translate-x-[1.6rem] landscape:col-span-2 landscape:top-0 font-bold" +
						(isDark
							? " before:border-b-my-red-dark"
							: " before:border-b-my-red-light")
					}
				>
					My Projects
				</h2>

				<section
					className={
						"nc-news relative h-[30%] w-[100vw] flex landscape:landscape:ls:hover:scale-95 active:scale-95 transition-all duration-300 landscape:col-start-1 landscape:row-start-2 landscape:row-span-2 landscape:h-[90%] landscape:w-[95%] landscape:top-0 landscape:flex-col landscape:gap-7 landscape:py-7 landscape:pr-7" +
						(isDark
							? " landscape:bg-dark-secondary"
							: " landscape:bg-light-secondary")
					}
				>
					<div
						className={
							"w-[70vw] h-[115%] absolute z-0 landscape:w-full landscape:h-full" +
							(isDark ? " bg-dark-secondary" : " bg-light-secondary")
						}
					></div>
					<img
						className="w-[62vw] object-scale-down mt-[7%] z-[2] landscape:w-full landscape:h-[70%] landscape:object-fill landscape:mt-0"
						src="https://i.ibb.co/3STZsVM/ncnews-cropped-Copy.png"
						alt="nc-news app"
					></img>
					<div className="absolute z-[3] bg-transparent h-[90%] w-[35vw] right-0 top-[5%] flex flex-col gap-1 px-1 text-left justify-center landscape:h-[30%] landscape:static landscape:ml-auto landscape:w-[90%] landscape:top-0">
						<h3 className="text-md portrait:pt2:text-lg font-semibold landscape:ls:text-[1.3vw]">
							Nc News
						</h3>
						<p className="text-sm portrait:pt2:max-ls:text-base landscape:text-[1.2vw] landscape:leading-tight landscape:my-1">
							A full-stack news web app using React, Bootstrap, Node.js,
							Express.js and PostgreSQL
						</p>
						<a
							className="text-sm portrait:pt2:max-ls:w-2/3"
							href="https://arron-nc-news.netlify.app/?sort_by=created_at&order=desc&topic="
							target="_blank"
						>
							<div
								className={
									"relative w-[60%] overflow-hidden border-b-[0.35rem] transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:duration-500 landscape:landscape:ls:hover:after:h-full px-1 landscape:w-[15%]" +
									(isDark
										? " text-dark-text landscape:landscape:ls:hover:text-dark-bg border-my-red-dark after:bg-my-red-dark"
										: " text-black landscape:landscape:ls:hover:text-light-bg border-my-red-light after:bg-my-red-light")
								}
							>
								<span className="relative z-10 text-sm">LIVE APP</span>
							</div>
						</a>
						<a
							className="text-sm portrait:pt2:max-ls:w-2/3"
							href="https://github.com/Arron-B/nc-news"
							target="_blank"
						>
							<div
								className={
									"relative w-[55%] overflow-hidden border-b-[0.35rem] transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:duration-500 landscape:landscape:ls:hover:after:h-full px-1 landscape:w-[12%]" +
									(isDark
										? " text-dark-text landscape:landscape:ls:hover:text-dark-bg border-my-red-dark after:bg-my-red-dark"
										: " text-black landscape:landscape:ls:hover:text-light-bg border-my-red-light after:bg-my-red-light")
								}
							>
								<span className="relative z-10 text-sm">REPO</span>
							</div>
						</a>
						<a
							className="text-sm portrait:pt2:max-ls:w-2/3"
							href="https://github.com/Arron-B/API-nc-news"
							target="_blank"
						>
							<div
								className={
									"relative w-[50%] overflow-hidden border-b-[0.35rem] transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:duration-500 landscape:landscape:ls:hover:after:h-full px-1 landscape:w-[9%]" +
									(isDark
										? " text-dark-text landscape:hover:text-dark-bg border-my-red-dark after:bg-my-red-dark"
										: " text-black landscape:hover:text-light-bg border-my-red-light after:bg-my-red-light")
								}
							>
								<span className="relative z-10 text-sm">API</span>
							</div>
						</a>
					</div>
				</section>

				<section
					className={
						"travel-buddy relative h-[30%] w-[100vw] flex ml-auto justify-end landscape:landscape:ls:hover:scale-95 transition-all duration-300 landscape:h-[90%] landscape:w-[95%] landscape:mt-auto landscape:col-start-2 landscape:row-start-2 landscape:row-span-2 landscape:-bottom-[30%] landscape:flex-col landscape:py-7 landscape:pl-7" +
						(isDark
							? " landscape:bg-dark-secondary"
							: " landscape:bg-light-secondary")
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
							"w-[70vw] h-[115%] absolute z-0 landscape:w-full landscape:bottom-0 landscape:h-full" +
							(isDark ? " bg-dark-secondary" : " bg-light-secondary")
						}
					></div>

					<img
						className="w-[62vw] mt-[7%] landscape:mt-[3%] object-scale-down z-10 landscape:w-full landscape:h-[67%] landscape:object-cover landscape:order-2 landscape:object-right-top"
						src="https://i.ibb.co/mh1mtD8/travel-buddy-screens-cropped.png"
						alt="Travel Buddy mobile app"
					></img>
					<div className="absolute portrait:mt-2 z-30 bg-transparent h-[100%] w-[37vw] left-0 flex flex-col gap-1 pl-5 text-left justify-center landscape:static landscape:order-1">
						<h3 className="text-md portrait:pt2:text-lg landscape:text-[1.3vw] font-semibold">
							Travel Buddy
						</h3>
						<p className="text-xs portrait:pt2:text-base landscape:text-[1.2vw] landscape:leading-tight">
							A full-stack mobile app built in a team of 6 during my bootcamp.
							It utilises Vue, Typescript, Axios, and MongoDB, all of which none
							of the team had any prior experience with. Please use in a mobile
							view.
						</p>
						<a
							className="text-sm portrait:pt2:w-2/3"
							href="https://travel-app-npm-jog.netlify.app/home?utm_source=pocket_saves"
							target="_blank"
						>
							<div
								className={
									"relative w-[60%] overflow-hidden border-b-[0.35rem] transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:duration-500 landscape:ls:hover:after:h-full px-1 landscape:ls2:w-[15%] landscape:pt:max-ls2:w-[18%]" +
									(isDark
										? " text-dark-text landscape:ls:hover:text-dark-bg border-my-red-dark after:bg-my-red-dark"
										: " text-black landscape:ls:hover:text-light-bg border-my-red-light after:bg-my-red-light")
								}
							>
								<span className="relative z-10 text-sm">LIVE APP</span>
							</div>
						</a>
						<a
							className="text-sm portrait:pt2:w-2/3 landscape:mb-1"
							href="https://github.com/npm-jog/travel-proj"
							target="_blank"
						>
							<div
								className={
									"relative w-[55%] overflow-hidden border-b-[0.35rem] border-my-red transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-my-red after:duration-500 landscape:ls:hover:after:h-full px-1 landscape:w-[12%]" +
									(isDark
										? " text-dark-text landscape:ls:hover:text-dark-bg border-my-red-dark after:bg-my-red-dark"
										: " text-black landscape:ls:hover:text-light-bg border-my-red-light after:bg-my-red-light")
								}
							>
								<span className="relative z-10 text-sm">REPO</span>
							</div>
						</a>
					</div>
				</section>
				<section
					className={
						"portfolio-proj relative h-[30%] w-[100vw] flex landscape:ls:hover:scale-95 active:scale-95 transition-all duration-300 landscape:col-start-1 landscape:row-start-4 landscape:row-span-2 landscape:h-[90%] landscape:w-[95%] landscape:flex-col landscape:gap-4 landscape:py-7 landscape:pr-7 landscape:translate-y-[5%]" +
						(isDark
							? " landscape:bg-dark-secondary"
							: " landscape:bg-light-secondary")
					}
				>
					<div
						className={
							"w-[70vw] h-[115%] absolute z-0 landscape:w-full landscape:h-full" +
							(isDark ? " bg-dark-secondary" : " bg-light-secondary")
						}
					></div>
					<img
						className="w-[62vw] mt-[7%] object-scale-down z-[2] landscape:w-full landscape:h-[70%] landscape:object-cover landscape:mt-0 landscape:object-right-top"
						src="https://i.ibb.co/KGnmhqd/portfolio-image.png"
						alt="Github repo for my portfolio"
					></img>
					<div className="absolute z-[3] bg-transparent h-[90%] w-[35vw] right-0 top-[5%] flex flex-col gap-1 px-1 text-left justify-center landscape:h-[30%] landscape:static landscape:ml-auto landscape:w-[90%]">
						<h3 className="text-md portrait:pt2:text-lg font-semibold landscape:text-[1.3vw]">
							Portfolio
						</h3>
						<p className="text-sm portrait:pt2:text-base landscape:text-[1.2vw] landscape:leading-tight landscape:my-1">
							This portfolio was built with React and TailwindCSS. It was my
							first time using Tailwind and this project really helped step my
							front-end skills up a level.
						</p>
						<a
							className="text-sm portrait:pt2:w-2/3"
							href="https://github.com/Arron-B/portfolio/tree/main"
							target="_blank"
						>
							<div
								className={
									"relative w-[50%] overflow-hidden border-b-[0.35rem] transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full  after:duration-500 landscape:ls:hover:after:h-full px-1 landscape:w-[15%]" +
									(isDark
										? " text-dark-text landscape:ls:hover:text-dark-bg border-my-red-dark after:bg-my-red-dark"
										: " text-black landscape:ls:hover:text-light-bg border-my-red-light after:bg-my-red-light")
								}
							>
								<span className="relative z-10 text-sm">REPO</span>
							</div>
						</a>
					</div>
				</section>

				<section
					className={
						"pokematch relative h-[30%] w-[100vw] flex ml-auto justify-end landscape:ls:hover:scale-95 transition-all duration-300 landscape:h-[110%] landscape:w-[95%] landscape:mt-auto landscape:col-start-2 landscape:row-start-4 landscape:row-span-2 landscape:-bottom-[40%] landscape:flex-col landscape:py-7 landscape:pl-7 landscape:gap-4" +
						(isDark
							? " landscape:bg-dark-secondary"
							: " landscape:bg-light-secondary")
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
							"w-[70vw] h-[110%] absolute z-0 landscape:w-full landscape:bottom-0 landscape:h-full" +
							(isDark ? " bg-dark-secondary" : " bg-light-secondary")
						}
					></div>

					<img
						className="w-[62vw] mt-[7%] object-scale-down z-10 landscape:w-full landscape:h-[85%] landscape:object-cover landscape:order-2 landscape:mt-2 landscape:object-left-top"
						src="https://i.ibb.co/Wyxr3s4/poke-match.png"
						alt="pokemon matching game"
					></img>
					<div className="absolute pt:max-ls:mt-2 z-30 bg-transparent h-[100%] w-[37vw] left-0 flex flex-col gap-1 pl-5 text-left justify-center landscape:max-h-[10%] landscape:static landscape:order-1">
						<h3 className="text-md portrait:pt2:text-lg font-semibold landscape:text-[1.3vw]">
							Pokematch
						</h3>
						<p className="text-xs portrait:pt2:text-base landscape:text-[1.2vw] landscape:leading-tight">
							A quick and fun front-end only game to play around with the DOM.
						</p>
						<a
							className="text-sm portrait:pt2:w-2/3"
							href="https://arron-b.github.io/pokemon-memory-game/"
							target="_blank"
						>
							<div
								className={
									"relative w-[60%] overflow-hidden border-b-[0.35rem] transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:duration-500 landscape:ls:hover:after:h-full px-1 landscape:ls2:w-[15%] landscape:pt:max-ls2:w-[18%]" +
									(isDark
										? " text-dark-text landscape:ls:hover:text-dark-bg border-my-red-dark after:bg-my-red-dark"
										: " text-black landscape:ls:hover:text-light-bg border-my-red-light after:bg-my-red-light")
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
