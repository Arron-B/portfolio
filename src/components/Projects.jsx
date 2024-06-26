import { useState } from "react";

function Projects({ isDark, sectionRef }) {
	const [isHovered, setIsHovered] = useState(false);

	const projects = [
		{
			title: "Events Platform",
			desc: "This full-stack web app is my first freelance project and is an event organising platform built with React, TailwindUI/CSS, Node.sj, Express.js and PostgreSQL",
			video: "https://www.youtube.com/embed/WvKOJIuOabw?si=ZC2GjuoREbCrXztI",
			buttons: [
				{
					text: "LIVE APP",
					link: "https://arron-events-app.netlify.app/"
			},
			{
				text: "REPO",
				link: "https://github.com/Arron-B/events-app"
		}
		]
		},
		{
			title: "Nc News",
			desc: "My first full-stack project. Nc News is a web app built using React, Bootstrap, Node.js, Express.js and PostgreSQL",
			video: "https://www.youtube.com/embed/9G4nvV82eZg?si=_gL8Dc0q8cQJy6et",
			buttons: [
				{
					text: "LIVE APP",
					link: "https://arron-nc-news.netlify.app/?sort_by=created_at&order=desc&topic="
			},
			{
				text: "REPO",
				link: "https://github.com/Arron-B/nc-news"
		},
		{
			text: "API",
			link: "https://github.com/Arron-B/API-nc-news"
	}
		]
		},
		{
			title: "Travel Buddy",
			desc: "A full-stack mobile app built in a team of 6 during my bootcamp. It utilises Vue, Typescript, Ionic, and MongoDB, all of which none of the team had any prior experience with. Please use in a mobile view.",
			video: "https://www.youtube.com/embed/fR2Xv5OEUfM?si=WOGiDGutWoCWDPVg&amp;start=261",
			buttons: [
				{
					text: "LIVE APP",
					link: "https://travel-app-npm-jog.netlify.app/home?utm_source=pocket_saves"
			},
			{
				text: "REPO",
				link: "https://github.com/npm-jog/travel-proj"
		}
		]
		}
	]

	return (
		<>
			<div
				ref={sectionRef}
				className={
					"projects relative mt-nav mb-10 portrait:flex portrait:flex-col portrait:gap-2" +
					(isDark ? " text-dark-text" : " text-light-text")
				}
			>
				<a
					id="projects"
					className="absolute -top-6 landscape:-top-20"
				></a>
				<h2
					className={
						"relative h-10 my-10 text-3xl before:absolute before:border-b-[0.7rem] before:-z-10 before:w-[10rem] landscape:before:w-[10.5rem] before:h-1/2 before:top-4 before:translate-x-[1.6rem] landscape:col-span-2 landscape:top-0 font-bold" +
						(isDark
							? " before:border-b-my-red-dark"
							: " before:border-b-my-red-light")
					}
				>
					My Projects
				</h2>
				{projects.map((project, i) => {
					return (
						<div className="relative portrait:h-60 box-border">
							<iframe className={"portrait:w-80 border-y-[1.5rem] border-slate-900/15" + (i % 2 === 0 ? " border-r-[1.5rem]" : " ml-auto border-l-[1.5rem]")} width="" height="" src={project.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
							<div className={"absolute flex flex-col justify-center portrait:top-0 portrait:w-40 portrait:text-left portrait:h-full" + (i % 2 === 0 ? " portrait:right-0 portrait:mr-2" : " portrait:ml-2")}>
							<h3 className="text-md portrait:max-pt1:text-[4vw] portrait:max-pt1:leading-tight portrait:pt2:text-lg font-semibold">
							{project.title}
							<p className="text-sm portrait:max-pt1:text-[4vw] portrait:max-pt1:leading-tight portrait:pt2:max-ls:text-base">{project.desc}</p>
						</h3>
							 </div>
						</div>
					)
				})}
			</div>
		</>
	);
}

export default Projects;