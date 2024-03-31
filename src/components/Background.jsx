function Background({ isNavOpen, isDark }) {
	return (
		<>
			<div
				className={
					"fixed -z-20 h-[100dvh] w-[100vw]" +
					(isDark ? " bg-dark-bg" : " bg-light-bg")
				}
			>
				<div className="relative w-full h-full overflow-hidden mt-16 z-40">
					<div className="bubbles relative flex">
						<span style={{ "--i": Math.random() * (30 - 10) + 10 }}></span>
						<span style={{ "--i": Math.random() * (30 - 10) + 10 }}></span>
						<span style={{ "--i": Math.random() * (30 - 10) + 10 }}></span>
						<span style={{ "--i": Math.random() * (30 - 10) + 10 }}></span>
						<span style={{ "--i": Math.random() * (30 - 10) + 10 }}></span>
						<span style={{ "--i": Math.random() * (30 - 10) + 10 }}></span>
						<span style={{ "--i": Math.random() * (30 - 10) + 10 }}></span>
						<span style={{ "--i": Math.random() * (30 - 10) + 10 }}></span>
						<span style={{ "--i": Math.random() * (30 - 10) + 10 }}></span>
						<span style={{ "--i": Math.random() * (30 - 10) + 10 }}></span>
						<span style={{ "--i": Math.random() * (30 - 10) + 10 }}></span>
						<span style={{ "--i": Math.random() * (30 - 10) + 10 }}></span>
						<span style={{ "--i": Math.random() * (30 - 10) + 10 }}></span>
						<span style={{ "--i": Math.random() * (30 - 10) + 10 }}></span>
						<span style={{ "--i": Math.random() * (30 - 10) + 10 }}></span>
						<span style={{ "--i": Math.random() * (30 - 10) + 10 }}></span>
						<span style={{ "--i": Math.random() * (30 - 10) + 10 }}></span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Background;
