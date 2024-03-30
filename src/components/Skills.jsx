function Skills({ isNavOpen, isDark }) {
	return (
		<>
			<section
				className={
					"h-dvh w-vw px-4 py-6 flex flex-col justify-evenly" +
					(isDark ? " dark" : " light")
				}
			>
				<h2 className="text-white">Technologies I've Worked With</h2>
				<div className="tech-stack h-[40%]">
					<img
						src="./src/assets/tech-stack.png"
						className="object-fill h-full"
					></img>
				</div>
				<h2 className="text-white">Northcoders</h2>
				<div className="northcoder h-[40%] bg-[url('./src/assets/August-cohort.jpg')] bg-cover bg-center"></div>
			</section>
		</>
	);
}

export default Skills;
