import { useEffect, useState } from "react";

function About({ isDark, sectionRef }) {
	const [fadesActivated, setFadesActivated] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const me = entry.target.querySelector(".me");
				const meText = entry.target.querySelector(".me-text");
				const logos = entry.target.querySelectorAll(".logo");
				if (entry.isIntersecting) {
					me.classList.add("landscape:animate-slideInLeft");
					meText.classList.add("landscape:animate-slideInRight");
					let delay;

					logos.forEach((el, i) => {
						delay = Math.random() * (2.5 - 0.5) + 0.5;
						el.style.animationDelay = `${delay}s`;
						el.classList.add(`animate-[fadeIn_2s_ease-in_forwards]`);
						if (i >= logos.length - 1) {
							setTimeout(() => {
								setFadesActivated(true);
							}, 4000);
						}
					});
					return;
				}
			});
		});

		observer.observe(document.querySelector(".about"));
	}, []);

	return (
		<>
			<div
				ref={sectionRef}
				className={
					"about relative h-screen pt-nav w-full flex flex-col justify-around px-2 landscape:mt-2 landscape:grid landscape:grid-cols-19 landscape:grid-rows-11 landscape:pt:max-ls1:h-[100vh]" +
					(isDark ? " text-dark-text" : " text-gray-700")
				}
			>
				<a
					id="about"
					className="absolute top-4 landscape:top-16"
				></a>
				<h2
					className={
						"relative h-10 text-3xl before:absolute before:border-b-[0.7rem] before:-z-10 before:w-[8.5rem] landscape:before:w-[9rem] before:h-1/2 before:top-4 before:translate-x-5 landscape:pt:max-ls:row-start-1 landscape:pt:max-ls:-translate-y-1/3 landscape:col-start-8 landscape:col-span-5 landscape:row-start-2 landscape:row-span-2 landscape:top-20 font-bold landscape:ls:max-ls2:top-5" +
						(isDark
							? " before:border-b-my-red-dark"
							: " before:border-b-my-red-light text-gray-800")
					}
				>
					About Me
				</h2>
				<div className="profile-ls my-auto flow-root portrait:hidden px-4 pb-4 row-start-2 row-span-5 justify-center gap-4 landscape:flex-row landscape:items-center landscape:row-start-4 landscape:row-span-6 landscape:col-start-6 landscape:col-span-9">
					<img
						className="me float-left w-1/3"
						src="https://i.ibb.co/ssm1sNM/profile-jpg.jpg"
						alt="Profile Photo"
					/>
					<p className="me-text text-left w-full h-[100%] text-[1.2vw]">
						React, TailwindCSS, Express.js and SQL are my main stack. My time on
						the Northcoders software development bootcamp gave me extensive
						problem solving experience with Javascript and introduced me to many
						of the technologies you see on this page. <br></br> I have my Lvl 4
						in IT and intend to complete my degree part-time while I
						work ( however an apprenticeship offer would be great ). Web apps are my current focus, but in the future I'd like to
						make games as a hobby with Unity or Unreal Engine. In my free time
						you'll find me playing table tennis, badminton, games, board games,
						at the gym or just bingeing my favourite tv series.
					</p>{" "}
				</div>
				<img
					className="landscape:hidden rounded-full portrait:w-1/2 mx-auto aspect-square landscape:w-1/2"
					src="https://i.ibb.co/ssm1sNM/profile-jpg.jpg"
					alt="Profile Photo"
				/>
				<p className="me-text text-sm portrait:max-pt1:text-[3.3vw] portrait:max-pt1:leading-tight portrait:pt2:w-3/4 mx-auto landscape:hidden">
					React, TailwindCSS, Express.js and SQL are my main stack. My time on
					the Northcoders software development bootcamp gave me extensive
					problem solving experience with Javascript and introduced me to many
					of the technologies you see on this page. <br></br> I have my Lvl 4 in
					IT (Software) and intend to complete my degree part-time while I work.
					Web apps are my career focus, but in the future I'd like to makes
					games as a hobby with Godot or Unreal Engine. In my free time you'll
					find me playing table tennis, badminton, games, board games, at the
					gym or just bingeing my favourite tv series.
				</p>

				<img
					src="https://i.ibb.co/41PZ6N4/tech-stack-dark.png"
					alt="logos of my tech-stack"
					className={
						"mx-auto landscape:hidden row-start-7 row-span-3 h-1/3" +
						(isDark ? "" : " hidden")
					}
				></img>
				<img
					src="https://i.ibb.co/gVLF8JJ/tech-stack-light.png"
					alt="logos of my tech-stack"
					className={
						"mx-auto landscape:hidden row-start-7 row-span-3 h-1/3" +
						(!isDark ? "" : " hidden")
					}
				></img>

				<span className="logo opacity-0 portrait:hidden col-start-5 row-start-3">
					<img
						src="https://i.ibb.co/9tJYD52/Bootstrap-Copy.png"
						alt="Bootstrap"
					/>
					Bootstrap
				</span>

				<span className="logo opacity-0 portrait:hidden col-start-3 row-start-4">
					<img
						src="https://i.ibb.co/pzw0CfT/html-Copy.png"
						alt="HTML5"
					/>
					HTML
				</span>
				<span className="logo opacity-0 portrait:hidden col-start-4 row-start-6">
					<img
						src="https://i.ibb.co/h9GWy1r/React.png"
						alt="React"
					/>
					React
				</span>
				<span className="logo opacity-0 portrait:hidden col-start-2 col-span-3 row-start-8 flex items-center">
					<img
						className="w-3/4 mx-auto"
						src="https://i.ibb.co/YTJZLw4/axios-Copy.png"
						alt="Axios"
					/>
				</span>
				<span className="logo opacity-0 portrait:hidden col-start-5 row-start-9">
					<img
						src="https://i.ibb.co/74Yfcwq/Mongo-DB-Copy.png"
						alt="MongoDB"
					/>
					MongoDb
				</span>
				<span className="logo opacity-0 portrait:hidden col-start-[15] row-start-9">
					<img
						src="https://i.ibb.co/hstPrCp/jest-Copy.png"
						alt="Jestjs"
					/>
					Jest.js
				</span>
				<span className="logo opacity-0 portrait:hidden col-start-[11] row-start-10 row-span-2 my-auto">
					<img
						src="https://i.ibb.co/TqjG6vP/github-Copy.png"
						alt="Github"
					/>
					Github
				</span>
				<span className="logo opacity-0 portrait:hidden col-start-[16] row-start-6">
					<img
						src="https://i.ibb.co/s3m5qLS/tailwind.png"
						alt="TailwindCSS"
					/>
					TailwindCSS
				</span>
				<span className="logo opacity-0 portrait:hidden col-start-[17] row-start-4">
					<img
						src="https://i.ibb.co/0rSggx8/css-Copy.png"
						alt="CSS3"
					/>
					CSS
				</span>
				<span className="logo opacity-0 portrait:hidden col-start-[15] row-start-3">
					<img
						src="https://i.ibb.co/MDBzDWc/Vue.png"
						alt="Vuejs"
					/>
					Vue.js
				</span>
				<span className="logo opacity-0 portrait:hidden col-start-7 row-start-10">
					<img
						src="https://i.ibb.co/K0zSnw1/javascript-Copy.png"
						alt="JavaScript"
					/>
					JavaScript
				</span>
				<span className="logo opacity-0 portrait:hidden col-start-9 row-start-10 row-span-2 my-auto">
					<img
						src="https://i.ibb.co/hMnZzg8/git-Copy.png"
						alt="Git"
					/>
					Git
				</span>
				<span
					className={
						"opacity-0 portrait:hidden col-start-[16] col-span-3 row-start-8 flex items-center" +
						(isDark ? "" : " hidden") +
						(fadesActivated ? " opacity-100" : " logo")
					}
				>
					<img
						className="w-3/4 mx-auto"
						src="https://i.ibb.co/LznVfVR/node-dark.png"
						alt="Nodejs"
					/>
				</span>
				<span
					className={
						"opacity-0 portrait:hidden col-start-[16] col-span-3 row-start-8 flex items-center" +
						(isDark ? " hidden" : "") +
						(fadesActivated ? " opacity-100" : " logo")
					}
				>
					<img
						className="w-3/4 mx-auto"
						src="https://i.ibb.co/yQ4Zkxx/node-light.png"
						alt="Nodejs"
					/>
				</span>

				<span className="logo opacity-0 portrait:hidden col-start-13 row-start-10">
					<img
						src="https://i.ibb.co/rb3CvFy/Postgresql.png"
						alt="PostgreSQL"
					/>
					PostgreSQL
				</span>
			</div>
		</>
	);
}

export default About;
