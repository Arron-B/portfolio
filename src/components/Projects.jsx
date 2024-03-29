import { useState } from "react";

function Projects({ isNavOpen }) {
	const [showNcNewsTitle, setShowNcNewsTitle] = useState(false);
	const [showTravelTitle, setShowTravelTitle] = useState(false);
	return (
		<div
			className={
				"full-stack-projects h-[46%] flex flex-col justify-between" +
				(isNavOpen ? " hidden" : "")
			}
		>
			<h2 className="mt-2 text-white">Full-stack Projects</h2>
			<section className="relative h-[40%] bg-[url('./src/assets/ncnews.png')] bg-cover flex">
				<div
					className={
						"bg-black w-32 h-8 mx-auto" + (showNcNewsTitle ? "" : " hidden")
					}
				>
					<h3 className="text-white">NC News</h3>
				</div>
				<button
					type="button"
					onMouseEnter={() => {
						setShowNcNewsTitle(true);
					}}
					onMouseLeave={() => {
						setShowNcNewsTitle(false);
					}}
					class="absolute mx-auto mb-1 left-0 right-0 bottom-0 text-white h-10 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-2xl aspect-square text-center flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 pb-1.5"
				>
					<span>+</span>
				</button>
			</section>

			<section className="h-[40%] flex justify-between bg-[url('./src/assets/travel-buddy-screens.png')] bg-cover">
				<div
					className={
						"bg-black w-32 h-8 mx-auto" + (showTravelTitle ? "" : " hidden")
					}
				>
					<h3 className="text-white">Travel Buddy</h3>
				</div>
				<button
					type="button"
					onMouseEnter={() => {
						setShowTravelTitle(true);
					}}
					onMouseLeave={() => {
						setShowTravelTitle(false);
					}}
					class="absolute mx-auto mb-7 left-0 right-0 bottom-0 text-white h-10 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-2xl aspect-square text-center flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 pb-1.5"
				>
					<span>+</span>
				</button>
			</section>
		</div>
	);
}

export default Projects;
