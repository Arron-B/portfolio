import { useState } from "react";
import NcnewsModal from "./NcnewsModal";
import TravelModal from "./TravelModal";

function Projects({ isNavOpen, isDark }) {
	const [showNcNewsTitle, setShowNcNewsTitle] = useState(false);
	const [showTravelTitle, setShowTravelTitle] = useState(false);
	const [isNcModalOpen, setIsNcModalOpen] = useState(false);
	const [isTravelModalOpen, setIsTravelModalOpen] = useState(false);

	return (
		<>
			{isNcModalOpen ? (
				<NcnewsModal
					isNcModalOpen={isNcModalOpen}
					setIsNcModalOpen={setIsNcModalOpen}
				/>
			) : null}
			{isTravelModalOpen ? (
				<TravelModal
					isTravelModalOpen={isTravelModalOpen}
					setIsTravelModalOpen={setIsTravelModalOpen}
				/>
			) : null}
			<div
				className={
					"full-stack-projects h-[46dvh] px-4 flex flex-col justify-between" +
					(isNavOpen ? " hidden" : "") +
					(isDark ? " bg-dark-bg text-white" : " bg-light-bg text-black")
				}
			>
				<h2 className="mt-2 text-white">Full-stack Projects</h2>
				<section
					className="relative h-[40%] bg-[url('./src/assets/ncnews.png')] bg-cover flex"
					onClick={() => {
						setIsNcModalOpen(true);
					}}
					onMouseEnter={() => {
						setShowNcNewsTitle(true);
					}}
					onMouseLeave={() => {
						setShowNcNewsTitle(false);
					}}
				>
					<div
						className={
							"bg-[rgba(0,0,0,0.5)] h-full w-full flex flex-col justify-center items-center" +
							(showNcNewsTitle ? "" : " hidden")
						}
					>
						<h3 className="text-white">Nc News</h3>
						<p className="text-white">Click To View</p>
					</div>
				</section>

				<section
					className="h-[40%] flex justify-between bg-[url('./src/assets/travel-buddy-screens.png')] bg-cover"
					onClick={() => {
						setIsTravelModalOpen(true);
					}}
					onMouseEnter={() => {
						setShowTravelTitle(true);
					}}
					onMouseLeave={() => {
						setShowTravelTitle(false);
					}}
				>
					<div
						className={
							"bg-[rgba(0,0,0,0.5)] h-full w-full flex flex-col justify-center items-center" +
							(showTravelTitle ? "" : " hidden")
						}
					>
						<h3 className="text-white">Travel Buddy</h3>
						<p className="text-white">Click To View</p>
					</div>
				</section>
			</div>
		</>
	);
}

export default Projects;
