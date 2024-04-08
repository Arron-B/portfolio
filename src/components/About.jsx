function About({ isDark, sectionRef }) {
	return (
		<>
			<div
				ref={sectionRef}
				className={
					"about relative h-screen pt-nav w-full grid grid-rows-9 px-2 ls:mt-2 ls:grid-cols-19 ls:grid-rows-11" +
					(isDark ? " text-dark-text" : " text-black")
				}
			>
				<a
					id="about"
					className="absolute top-2 ls:top-10"
				></a>
				<h2
					className={
						"relative h-10 top-10 text-3xl before:absolute before:border-b-[0.7rem] before:-z-10 before:w-[9rem] before:h-1/2 before:top-4 before:translate-x-5 ls:col-start-8 ls:col-span-5 ls:row-start-1 ls:row-span-2 ls:top-20 font-bold" +
						(isDark
							? " before:border-b-my-red-dark"
							: " before:border-b-my-red-light")
					}
				>
					About Me
				</h2>
				<div className="profile row-start-2 row-span-5 flex flex-col justify-center gap-4 ls:flex-row ls:items-center ls:row-start-4 ls:row-span-5 ls:col-start-6 ls:col-span-9">
					<img
						className="rounded-full pt:max-ls:w-1/2 mx-auto aspect-square ls:w-1/2"
						src="./src/assets/default-profile.jpg"
						alt=""
					/>
					<p className="text-sm ls:w-1/2 ls:text-lg">
						React, TailwindCSS and SQL are my main go to technologies. I'm
						interested in developing web apps, but in the future would like to
						makes games as a hobby with Godot or Unreal Engine. <br></br> In my
						free time you'll find me playing table tennis, badminton, games,
						board games, at the gym or just bingeing my favourite tv series.
					</p>
				</div>
				<img
					src="./src/assets/tech-stack-dark.png"
					className={
						"mx-auto ls:hidden row-start-7 row-span-3 h-full" +
						(isDark ? "" : " hidden")
					}
				></img>
				<img
					src="./src/assets/tech-stack-light.png"
					className={
						"mx-auto ls:hidden row-start-7 row-span-3 h-full" +
						(!isDark ? "" : " hidden")
					}
				></img>

				<span className="pt:max-ls:hidden col-start-5 row-start-3">
					<img
						className=""
						src="./src/assets/bootstrap.png"
						alt=""
					/>
					Bootstrap
				</span>

				<span className="pt:max-ls:hidden col-start-3 row-start-4">
					<img
						src="./src/assets/html.png"
						alt=""
					/>{" "}
					HTML
				</span>
				<span className="pt:max-ls:hidden col-start-4 row-start-6">
					<img
						src="./src/assets/react.png"
						alt=""
					/>
					React
				</span>
				<span className="pt:max-ls:hidden col-start-2 col-span-3 row-start-8 flex items-center">
					<img
						className="w-3/4 mx-auto"
						src="./src/assets/axios.png"
						alt=""
					/>
				</span>
				<span className="pt:max-ls:hidden col-start-5 row-start-9">
					<img
						src="./src/assets/MongoDB.png"
						alt=""
					/>
					MongoDb
				</span>
				<span className="pt:max-ls:hidden col-start-[15] row-start-9">
					<img
						src="./src/assets/jest.png"
						alt=""
					/>
					Jest.js
				</span>
				<span className="pt:max-ls:hidden col-start-[11] row-start-10 row-span-2 my-auto">
					<img
						src="./src/assets/github.png"
						alt=""
					/>
					Github
				</span>
				<span className="pt:max-ls:hidden col-start-[16] row-start-6">
					<img
						src="./src/assets/tailwind.png"
						alt=""
					/>
					TailwindCSS
				</span>
				<span className="pt:max-ls:hidden col-start-[17] row-start-4">
					<img
						src="./src/assets/css.png"
						alt=""
					/>
					CSS
				</span>
				<span className="pt:max-ls:hidden col-start-[15] row-start-3">
					<img
						src="./src/assets/Vue.png"
						alt=""
					/>
					Vue.js
				</span>
				<span className="pt:max-ls:hidden col-start-7 row-start-10">
					<img
						src="./src/assets/javascript.png"
						alt=""
					/>
					JavaScript
				</span>
				<span className="pt:max-ls:hidden col-start-9 row-start-10 row-span-2 my-auto">
					<img
						src="./src/assets/git.png"
						alt=""
					/>
					Git
				</span>
				<span
					className={
						"pt:max-ls:hidden col-start-[16] col-span-3 row-start-8 flex items-center" +
						(isDark ? "" : " hidden")
					}
				>
					<img
						className="w-3/4 mx-auto"
						src="./src/assets/node-dark.png"
						alt=""
					/>
				</span>
				<span
					className={
						"pt:max-ls:hidden col-start-[16] col-span-3 row-start-8 flex items-center" +
						(isDark ? " hidden" : "")
					}
				>
					<img
						className="w-3/4 mx-auto"
						src="./src/assets/node-light.png"
						alt=""
					/>
				</span>
				<span className="pt:max-ls:hidden col-start-13 row-start-10">
					<img
						src="./src/assets/Postgresql.png"
						alt=""
					/>
					PostgreSQL
				</span>
			</div>
		</>
	);
}

export default About;
