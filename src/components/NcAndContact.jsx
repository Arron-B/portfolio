import { useState } from "react";
import NorthcodersModal from "./NorthcodersModal";

function NcAndContact({ isDark, isNavOpen }) {
	const [isNorthcodersModalOpen, setIsNorthcodersModalOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	return (
		<>
			{isNorthcodersModalOpen ? (
				<NorthcodersModal
					isNorthcodersModalOpen={isNorthcodersModalOpen}
					setIsNorthcodersModalOpen={setIsNorthcodersModalOpen}
					isDark={isDark}
				/>
			) : null}
			<section
				className={
					"h-[92dvh] w-vw px-4 pb-6 flex flex-col justify-evenly" +
					(isNavOpen ? " hidden" : "") +
					(isDark ? " text-white" : " text-black")
				}
			>
				<h2 className="text-lg">Northcoders</h2>
				<div
					className="northcoders relative h-[50%] mt-1 bg-[url('./src/assets/August-cohort.jpg')] bg-cover bg-center"
					onClick={() => {
						setIsNorthcodersModalOpen(true);
					}}
					onMouseEnter={() => {
						setIsHovered(true);
					}}
					onMouseLeave={() => {
						setIsHovered(false);
					}}
				>
					<div
						className={
							"bg-[rgba(0,0,0,0.5)] h-full w-full flex justify-center items-center" +
							(isHovered ? "" : " hidden")
						}
					>
						<p className="text-white">Find Out More</p>
					</div>
				</div>
				<div
					className={
						"h-[92dvh] w-full p-4" +
						(isDark
							? " bg-[url('./src/assets/dark-background.jpg')] bg-cover bg-center"
							: " bg-[url('./src/assets/light-background.jpg')] bg-cover bg-center")
					}
				>
					Contact Me
				</div>
			</section>
		</>
	);
}

export default NcAndContact;
