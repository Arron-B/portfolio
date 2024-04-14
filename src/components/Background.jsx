function Background({ isDark }) {
	return (
		<>
			<div
				className={
					"background fixed -z-20 h-[100vh] w-[100vw]" +
					(isDark ? " bg-dark-bg" : " bg-light-bg")
				}
			>
				<div className="relative w-full h-full overflow-hidden z-40">
					<div className="bubbles relative flex w-full mx-auto">
						{[...Array(20)].map((bubble, i) => (
							<span
								className={
									"w-[1vw] h-[1vw] ls:w-[0.4vw] ls:h-[0.4vw]" +
									(isDark ? " bubble-dark" : " bubble-light")
								}
								key={i}
								style={{ "--i": Math.random() * (30 - 10) + 20 }}
							></span>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Background;
