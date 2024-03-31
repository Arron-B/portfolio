import { useState } from "react";

function Projects({ isNavOpen, isDark }) {
	return (
		<>
			<div
				className={
					"projects relative h-[100dvh] py-12 flex flex-col justify-around" +
					(isNavOpen ? " hidden" : "") +
					(isDark ? " bg-dark-bg text-white" : " bg-light-bg text-black")
				}
			>
				<div className="absolute left-[50%] top-10">
					<h2 className="text-2xl z-10 w-32 relative -left-[50%]">
						My Projects
					</h2>
					<div className="red-line z-0 bg-my-red relative w-[7.5rem] h-2.5 -left-[32%] -translate-y-2.5"></div>
				</div>
				<section className="nc-news relative top-12 h-[30%] w-[100vw] flex hover:scale-95">
					<div className="w-[70vw] h-full absolute z-0 bg-[#3216bb]"></div>
					<img
						className="w-[62vw] object-scale-down z-10"
						src="./src/assets/ncnews-cropped.png"
					></img>
					<div className="absolute bg-transparent h-[90%] w-[35vw] right-0 top-[5%] flex flex-col gap-1 px-1 text-left">
						<h3 className="text-md">Nc News</h3>
						<p className="text-sm">
							A full-stack news web app using React, Bootstrap, Node.js,
							Express.js and PostgreSQL
						</p>
						<a
							className="text-sm underline decoration-my-red underline-offset-2"
							href="https://arron-nc-news.netlify.app/?sort_by=created_at&order=desc&topic="
							target="_blank"
						>
							LIVE APP
						</a>
						<a
							className="text-sm underline decoration-my-red underline-offset-2"
							href="https://github.com/Arron-B/nc-news"
							target="_blank"
						>
							REPO
						</a>
						<a
							className="text-sm underline decoration-my-red underline-offset-2"
							href="https://github.com/Arron-B/API-nc-news"
							target="_blank"
						>
							API
						</a>
					</div>
				</section>

				<section className="travel-buddy relative bottom-0 h-[30%] w-[100vw] flex ml-auto justify-end hover:scale-95">
					<div className="w-[70vw] h-full absolute z-0 bg-[#3216bb]"></div>
					<img
						className="w-[62vw] object-scale-down z-10"
						src="./src/assets/travel-buddy-screens-cropped.png"
					></img>
					<div className="absolute bg-transparent h-[90%] w-[37vw] left-0 top-[5%] flex flex-col gap-1 pl-5 text-left">
						<h3 className="text-md">Travel Buddy</h3>
						<p className="text-sm">
							A full-stack mobile app using Vue, Typescript, Axios, and MongoDB.
						</p>
						<a
							className="text-sm underline decoration-my-red underline-offset-2"
							href="https://travel-app-npm-jog.netlify.app/home?utm_source=pocket_saves"
							target="_blank"
						>
							LIVE APP
						</a>
						<a
							className="text-sm underline decoration-my-red underline-offset-2"
							href="https://github.com/npm-jog/travel-proj"
							target="_blank"
						>
							REPO
						</a>
					</div>
				</section>
			</div>
		</>
	);
}

export default Projects;
