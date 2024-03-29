function Welcome({ isNavOpen }) {
	return (
		<div
			className={
				"welcome h-[46%] grid grid-cols-2 grid-rows-[20%, 80%] justify-center items-center" +
				(isNavOpen ? " hidden" : "")
			}
		>
			<h1 className="col-span-2 text-2xl text-white">Welcome To My Website!</h1>
			<img
				className="rounded-full w-40"
				src="./src/assets/default-profile.jpg"
				alt=""
			/>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
				sequi facere blanditiis, maxime placeat voluptatum ducimus? Accusantium
				inventore consequuntur itaque!
			</p>
		</div>
	);
}

export default Welcome;
