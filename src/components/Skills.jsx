function Skills({ isNavOpen, isDark }) {
	return (
		<>
			<section
				className={
					"h-dvh w-vw px-4 py-6 flex flex-col justify-evenly" +
					(isDark ? " dark" : " light")
				}
			>
				<h2>Tech Stack</h2>
				<div className="tech-stack h-[40%]"></div>
				<h2>Northcoders</h2>
				<div className="northcoder h-[40%] bg-[url('./src/assets/August-cohort.jpg')] bg-cover"></div>
			</section>
		</>
	);
}

export default Skills;
