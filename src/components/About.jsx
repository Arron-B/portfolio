function About({ isNavOpen, isDark }) {
	return (
		<>
			<div
				className={
					"h-[92dvh]" +
					(isNavOpen ? " hidden" : "") +
					(isDark ? " bg-dark-bg text-white" : " bg-light-bg text-black")
				}
			>
				<div className="flex flex-col p-4 h-[60%] justify-center gap-4 items-center">
					<div className="relative">
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
					<p className="text-md">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut non
						adipisci id asperiores dignissimos nulla officia ipsum magnam
						dolores quasi?
					</p>
				</div>
				<img
					src="./src/assets/tech-stack.png"
					className="object-fill"
				></img>
			</div>
		</>
	);
}

export default About;
