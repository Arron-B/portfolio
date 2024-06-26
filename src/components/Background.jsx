function Background({ isDark }) {
	return (
		<>
			<div
				className={
					"background fixed -z-20 h-[100vh] w-[100vw]" +
					(isDark ? " bg-slate-950" : " bg-gray-100")
				}
			>
				{" "}
			</div>
		</>
	);
}

export default Background;
