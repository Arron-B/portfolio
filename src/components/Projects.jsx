import { useState } from "react";
import Button from "./Button";
import Form from "./Form";

function Projects({ isDark, sectionRefProj, sectionRefContact }) {
	const [isHovered, setIsHovered] = useState(false);

	const youtubeRegex = new RegExp("https:\/\/www\.youtube\.com\/.*");

	const projects = [
		{
			title: "Events Platform",
			desc: "This full-stack web app is my first freelance project and is an event organising platform built with React, TailwindUI/CSS, Node.sj, Express.js and PostgreSQL",
			media: "https://www.youtube.com/embed/WvKOJIuOabw?si=ZC2GjuoREbCrXztI",
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
			media: "https://www.youtube.com/embed/9G4nvV82eZg?si=_gL8Dc0q8cQJy6et",
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
			media: "https://www.youtube.com/embed/fR2Xv5OEUfM?si=WOGiDGutWoCWDPVg&amp;start=261",
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
		},
		{
			title: "Portfolio",
			desc: "This portfolio was built with React and TailwindCSS. It was my first time using Tailwind and this project really helped step my front-end skills up a level.",
			media: "https://i.ibb.co/KGnmhqd/portfolio-image.png",
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
			title: "Pokematch",
			desc: "A quick and fun front-end only game to play around with the DOM.",
			media: "https://i.ibb.co/Wyxr3s4/poke-match.png",
			buttons: [
				{
					text: "LIVE APP",
					link: "https://arron-b.github.io/pokemon-memory-game/"
			}
		]
		}
	]

	return (
		<>
			<div
				ref={sectionRefProj}
				className={
					"projects relative mt-nav flex flex-col portrait:gap-32 portrait:pt3:gap-20 landscape:w-[70vw] landscape:mx-auto landscape:gap-20 landscape:ls:max-ls3:gap-32" +
					(isDark ? " text-dark-text" : " text-gray-700")
				}
			>
				<a
					id="projects"
					className="absolute -top-6 landscape:-top-22"
				></a>
				<h2
					className={
						"relative h-10 my-10 portrait:pt:max-pt3:mb-0 text-3xl before:absolute before:border-b-[0.7rem] before:-z-10 before:w-[10rem] landscape:before:w-[10.5rem] before:h-1/2 before:top-4 before:translate-x-[1.6rem] landscape:col-span-2 landscape:top-0 font-bold landscape:ls:max-ls3:mb-0 landscape:ls:max-ls3:mt-4" +
						(isDark
							? " before:border-b-my-red-dark"
							: " before:border-b-my-red-light text-gray-800")
					}
				>
					My Projects
				</h2>
				{projects.map((project, i) => {
					return (
						<div className={"relative box-border portrait:w-[100vw] landscape:w-3/4 landscape:landscape:ls:hover:scale-95 landscape:ls:active:scale-95 landscape:ls:transition-all landscape:ls:duration-300 " + (project.desc.length > 175 ? " my-2" : "") + (i % 2 === 0 ? "" : " ml-auto")}
							key={`proj${i+1}`}>
							{youtubeRegex.test(project.media) ?
							<iframe className={"w-[65%] aspect-video border-y-[1.5rem] landscape:border-[2rem]" + (i % 2 === 0 ? " border-r-[1.5rem]" : " ml-auto border-l-[1.5rem]") + (isDark ? " border-slate-900/20" : " border-gray-900/5")}
							width="" height="" src={project.media} title="YouTube video player" frameBorder="0" allow="web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> :
							<img
							className={"w-[65%] border-y-[1.5rem] landscape:border-[2rem]" + (i % 2 === 0 ? " border-r-[1.5rem]" : " ml-auto border-l-[1.5rem]") + (isDark ? " border-slate-900/20" : " border-gray-900/5")}
							src={project.media}></img>}
							<div className={"absolute flex flex-col justify-center top-0 w-[37%] text-left h-full" + (i % 2 === 0 ? " right-0 mr-2 pl-1 landscape:pl-3" : " ml-2")}>
							<h3 className={"text-md portrait:max-pt1:text-[4vw] portrait:max-pt1:leading-tight portrait:pt2:text-lg mb-2 font-semibold landscape:ls2:text-[1.2vw] landscape:ls:max-ls2:text-xl landscape:mb-4" + (isDark ? "" : " text-gray-800")}>
							{project.title}
							</h3>
							<p className="text-sm portrait:max-pt1:text-[4vw] portrait:max-pt1:leading-tight landscape:mb-2 portrait:pt2:max-ls:text-base landscape:ls:max-ls2:text-xl landscape:ls2:text-[1.1vw] landscape:ls2:leading-snug">{project.desc}</p>
							{project.buttons.map((button, i) => {
								return <Button key={`button${i}`} text={button.text} link={button.link} isDark={isDark}/>
							})}
						
							 </div>
						</div>
					)
				})}
				<Form isDark={isDark} sectionRef={sectionRefContact} projectCount={projects.length}></Form>
			</div>
		</>
	);
}

export default Projects;
