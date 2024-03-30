import { useState } from "react";
import NorthcodersModal from "./NorthcodersModal";

function Skills({ isDark }) {
	const [isNorthcodersModalOpen, setIsNorthcodersModalOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	return (
		<>
			{isNorthcodersModalOpen ? (
				<NorthcodersModal
					isNorthcodersModalOpen={isNorthcodersModalOpen}
					setIsNorthcodersModalOpen={setIsNorthcodersModalOpen}
				/>
			) : null}
			<section
				className={
					"h-[92dvh] w-vw px-4 pb-6 flex flex-col justify-evenly" +
					(isDark ? " dark" : " light")
				}
			>
				<h2 className="text-white text-lg">Technologies I've Worked With</h2>
				<div className="tech-stack h-[50%] mt-1">
					<img
						src="./src/assets/tech-stack.png"
						className="object-fill h-full"
					></img>
				</div>
				<h2 className="text-white text-lg">Northcoders</h2>
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
			</section>
		</>
	);
}

export default Skills;
