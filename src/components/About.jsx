function About({ isDark }) {
	return (
		<>
			<div
				className={"h-screen pt-nav" + (isDark ? " text-white" : " text-black")}
			>
				<div className="flex flex-col p-4 h-[60%] justify-center gap-4 items-center">
					<div className="relative">
						<a
							id="about"
							className="absolute -top-24"
						></a>
						<h2 className="text-2xl z-10 w-32 absolute -translate-x-[50%] -top-8">
							About Me
						</h2>
						<div className="red-line z-0 bg-my-red absolute w-[6.5rem] h-2 -translate-x-9 -translate-y-2.5"></div>
					</div>
					<img
						className="rounded-full h-40"
						src="./src/assets/default-profile.jpg"
						alt=""
					/>
					<p className="text-sm">
						React, TailwindCSS and SQL are my main go to technologies. I'm
						interested in developing web apps, but in the future would like to
						makes games as a hobby with Godot or Unreal Engine. <br></br> In my
						free time you'll find me playing table tennis, badminton, games,
						board games, at the gym or just bingeing my favourite tv series.
					</p>
				</div>
				<img
					src="./src/assets/tech-stack-dark.png"
					className={"mx-auto h-[40%]" + (isDark ? "" : " hidden")}
				></img>
				<img
					src="./src/assets/tech-stack-light.png"
					className={"mx-auto h-[40%]" + (!isDark ? "" : " hidden")}
				></img>
			</div>
		</>
	);
}

export default About;
