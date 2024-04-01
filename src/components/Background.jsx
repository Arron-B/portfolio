function Background({ isNavOpen, isDark }) {
	return (
		<>
			<div
				className={
					"background fixed -z-20 h-[100dvh] w-[100vw]" +
					(isDark ? " bg-dark-bg" : " bg-light-bg")
				}
			>
				<div className="relative w-full h-full overflow-hidden mt-16 z-40">
					<div className="bubbles relative flex w-full mx-auto">
						{[...Array(20)].map((bubble, i) => (
							<span
								className={isDark ? "bubble-dark" : "bubble-light"}
								key={i}
								style={{ "--i": Math.random() * (30 - 10) + 10 }}
							></span>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Background;
