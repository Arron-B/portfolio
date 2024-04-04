function Welcome({ isDark }) {
	const welcomeLine1 = ["Hello,", "I'm", "Arron", ","];

	return (
		<div
			id="welcome"
			className={
				"welcome h-[100dvh] px-4 pb-[8dvh] flex flex-col justify-center items-center" +
				(isDark ? " text-white" : " text-black")
			}
		>
			<div className="flex">
				{welcomeLine1.map((word, i) => {
					if (i === 2) {
						return (
							<p
								key={`${word}${i}`}
								className="text-my-red text-2xl"
							>
								{word}
							</p>
						);
					} else {
						return (
							<p
								key={`${word}${i}`}
								className="mr-1 text-2xl"
							>
								{word}
							</p>
						);
					}
				})}
			</div>
			<p className="text-2xl">a full-stack developer.</p>
		</div>
	);
}

export default Welcome;
