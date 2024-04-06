function About({ isDark }) {
	return (
		<>
			<div
				className={
					"about relative h-screen pt-nav w-full grid grid-rows-9 px-2 ls:mt-2 ls:grid-cols-19 ls:grid-rows-11" +
					(isDark ? " text-white" : " text-black")
				}
			>
				<a
					id="about"
					className="absolute top-2 ls:top-10"
				></a>
				<h2 className="relative h-10 top-10 text-3xl before:absolute before:border-b-[0.5rem] before:border-b-my-red before:-z-10 before:w-[8rem] before:h-1/2 before:top-3 before:translate-x-5 ls:col-start-8 ls:col-span-5 ls:row-start-1 ls:row-span-2 ls:top-20">
					About Me
					{/* <h2 className="text-2xl z-10 w-32 absolute -translate-x-[50%] ls:text-4xl ls:w-full ls:-translate-x-0">
						About Me
					</h2>
					<div className="red-line z-0 bg-my-red absolute w-[6.5rem] h-2 -translate-x-9 translate-y-[0.63rem] ls:translate-x-[7.8rem] ls:w-[9.8rem] ls:h-[0.7rem] ls:translate-y-[0.9rem]"></div> */}
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

		// <>
		// 	<div
		// 		className={
		// 			"about h-screen pt-nav flex flex-col" +
		// 			(isDark ? " text-white" : " text-black")
		// 		}
		// 	>
		// 		<div className="flex pt:max-ls:flex-col p-4 pb-0 pt:max-ls:h-[65%] justify-center gap-4 items-center ls:grid ls:grid-cols-10 ls:grid-rows-11 ls:h-full">
		// 			<div className="title h-[10%] relative ls:col-start-5 ls:col-span-2 ls:row-start-2 ls:mx-auto">
		// 				<a
		// 					id="about"
		// 					className="absolute -top-24 ls:-top-40"
		// 				></a>
		// 				<h2 className="text-2xl z-10 w-32 absolute -translate-x-[50%] -top-8">
		// 					About Me
		// 				</h2>
		// 				<div className="red-line z-0 bg-my-red absolute w-[6.5rem] h-2 -translate-x-9 -translate-y-2.5"></div>
		// 			</div>
		// <div className="profile h-[80%] flex flex-col gap-7 ls:flex-row justify-end">
		// 	<img
		// 		className="rounded-full pt:max-ls:w-1/2 mx-auto aspect-square ls:row-start-4 ls:row-span-5 ls:col-start-4 ls:col-span-2 ls:w-full"
		// 		src="./src/assets/default-profile.jpg"
		// 		alt=""
		// 	/>
		// 	<p className="text-sm ls:col-start-6 ls:row-start-4 ls:col-span-2 ls:row-span-5">
		// 		React, TailwindCSS and SQL are my main go to technologies. I'm
		// 		interested in developing web apps, but in the future would like to
		// 		makes games as a hobby with Godot or Unreal Engine. <br></br> In
		// 		my free time you'll find me playing table tennis, badminton,
		// 		games, board games, at the gym or just bingeing my favourite tv
		// 		series.
		// 	</p>
		// </div>
		// <img
		// 	className="pt:max-ls:hidden col-start-3 row-start-1"
		// 	src="./src/assets/bootstrap.png"
		// 	alt=""
		// />
		// <img
		// 	className="pt:max-ls:hidden col-start-8 row-start-1"
		// 	src="./src/assets/bootstrap.png"
		// 	alt=""
		// />
		// <img
		// 	className="pt:max-ls:hidden col-start-3 row-start-3"
		// 	src="./src/assets/bootstrap.png"
		// 	alt=""
		// />
		// <img
		// 	className="pt:max-ls:hidden col-start-8 row-start-3"
		// 	src="./src/assets/bootstrap.png"
		// 	alt=""
		// />
		// <img
		// 	className="pt:max-ls:hidden col-start-3 row-start-5"
		// 	src="./src/assets/bootstrap.png"
		// 	alt=""
		// />
		// <img
		// 	className="pt:max-ls:hidden col-start-8 row-start-5"
		// 	src="./src/assets/bootstrap.png"
		// 	alt=""
		// />
		// <img
		// 	className="pt:max-ls:hidden col-start-3 row-start-7"
		// 	src="./src/assets/bootstrap.png"
		// 	alt=""
		// />
		// <img
		// 	className="pt:max-ls:hidden col-start-8 row-start-7"
		// 	src="./src/assets/bootstrap.png"
		// 	alt=""
		// />
		// <img
		// 	className="pt:max-ls:hidden col-start-3 row-start-9"
		// 	src="./src/assets/bootstrap.png"
		// 	alt=""
		// />
		// <img
		// 	className="pt:max-ls:hidden col-start-8 row-start-9"
		// 	src="./src/assets/bootstrap.png"
		// 	alt=""
		// />
		// <img
		// 	className="pt:max-ls:hidden col-start-3 row-start-1"
		// 	src="./src/assets/bootstrap.png"
		// 	alt=""
		// />
		// <img
		// 	className="pt:max-ls:hidden col-start-8 row-start-1"
		// 	src="./src/assets/bootstrap.png"
		// 	alt=""
		// />
		// <img
		// 	className="pt:max-ls:hidden col-start-3 row-start-1"
		// 	src="./src/assets/bootstrap.png"
		// 	alt=""
		// />
		// <img
		// 	className="pt:max-ls:hidden col-start-8 row-start-1"
		// 	src="./src/assets/bootstrap.png"
		// 	alt=""
		// />
		// 		</div>
		// <img
		// 	src="./src/assets/tech-stack-dark.png"
		// 	className={"mx-auto h-[35%] ls:hidden" + (isDark ? "" : " hidden")}
		// ></img>
		// <img
		// 	src="./src/assets/tech-stack-light.png"
		// 	className={"mx-auto h-[35%] ls:hidden" + (!isDark ? "" : " hidden")}
		// ></img>
		// 	</div>
		// </>
	);
}

export default About;
