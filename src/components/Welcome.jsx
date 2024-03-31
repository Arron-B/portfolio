function Welcome({ isNavOpen, isDark }) {
	const welcomeLine1 = ["Hello,", "I'm", "Arron", ","];

	return (
		<div
			className={
				"welcome h-[100dvh] px-4 flex flex-col justify-center items-center" +
				(isNavOpen ? " hidden" : "") +
				(isDark ? " text-white" : " text-black")
			}
		>
			<div className="flex">
				{welcomeLine1.map((word, i) => {
					if (i === 2) {
						return <p className="text-my-red text-2xl">{word}</p>;
					} else {
						return <p className="mr-1 text-2xl">{word}</p>;
					}
				})}
			</div>
			<p className="text-2xl">a full-stack developer.</p>
		</div>
	);
}

export default Welcome;
