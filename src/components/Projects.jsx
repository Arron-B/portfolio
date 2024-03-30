import { useState } from "react";
import NcnewsModal from "./NcnewsModal";
import TravelModal from "./TravelModal";

function Projects({ isNavOpen }) {
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
					"full-stack-projects h-[50%] px-4 flex flex-col justify-between" +
					(isNavOpen ? " hidden" : "")
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
							"bg-black w-32 h-8 mx-auto" + (showNcNewsTitle ? "" : " hidden")
						}
					>
						<h3 className="text-white">NC News</h3>
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
							"bg-black w-32 h-8 mx-auto" + (showTravelTitle ? "" : " hidden")
						}
					>
						<h3 className="text-white">Travel Buddy</h3>
					</div>
				</section>
			</div>
		</>
	);
}

export default Projects;
