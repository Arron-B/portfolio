import { useState } from "react";

function NorthcodersModal({ isDark, setIsNorthcodersModalOpen }) {
	const [isMatchHovered, setIsMatchHovered] = useState(false);
	const [isEvoHovered, setIsEvoHovered] = useState(false);
	const [isFlashcardsHovered, setIsFlashcardsHovered] = useState(false);

	return (
		<>
			<div
				className="backdrop h-screen w-[100vw] fixed z-[99] bg-[rgba(0,0,0,0.9)] top-0"
				onClick={() => {
					setIsNorthcodersModalOpen(false);
				}}
			></div>
			<div
				className={
					"h-modal w-[90vw] fixed z-[100] top-[5%] left-[5%] flex flex-col gap-1 justify-around text-white ls:grid ls:grid-cols-2 ls:grid-rows-[20%_40%_40%] pt-12"
				}
			>
				<div
					className="CROSS-ICON fixed top-1 right-2"
					onClick={(e) => {
						e.preventDefault();
						setIsNorthcodersModalOpen(false);
					}}
				>
					<svg
						className="h-8 w-8 text-white"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<line
							x1="18"
							y1="6"
							x2="6"
							y2="18"
						/>
						<line
							x1="6"
							y1="6"
							x2="18"
							y2="18"
						/>
					</svg>
				</div>
				<img
					className="w-[50%] mx-auto pt:max-ls:mb-3 ls:w-[25%] ls:col-start-1 ls:row-start-1"
					src="./src/assets/northcoders-title.png"
				></img>

				<img
					className="w-full max-h-[30%] object-scale-down ls:col-start-1 ls:row-start-2 ls:max-h-full"
					src="./src/assets/August-cohort.jpg"
					alt=""
				/>
				<p className="text-xs ls:col-start-1 ls:row-start-3 ls: my-auto ls:w-1/2 ls:mx-auto">
					During my 3 months on the Northcoders software development bootcamp I
					gained extensive problem solving experience with Javascript. We
					utilised paired programming with Git/Github and test-driven
					development with Jest.js to create many learning projects you can find
					on my github. We also regularly had solo kata afternoons to test our
					learning and problem solving skills.
				</p>

				<div className="grid gap-2 w-full h-[30%] grid-rows-[10%_45%_45%] grid-cols-2 justify-center items-center ls:col-start-2 ls:row-start-1 ls:row-span-3 ls:h-3/4 ls:gap-10">
					<img
						className="w-[50%] col-span-2 mx-auto ls:w-[30%]"
						src="./src/assets/small-proj-title.png"
					></img>

					<a
						className="row-start-3 col-1 h-full w-full"
						href="https://pokevolutions.netlify.app/"
						target="_blank"
					>
						<div
							className="h-full w-full mx-auto hover:scale-95 bg-[url('./src/assets/pokevolutions.png')] bg-cover bg-center"
							alt=""
							onMouseEnter={() => {
								setIsEvoHovered(true);
							}}
							onMouseLeave={() => {
								setIsEvoHovered(false);
							}}
						>
							<div
								className={
									"bg-[rgba(0,0,0,0.5)] h-full w-full flex justify-center items-center" +
									(isEvoHovered ? "" : " hidden")
								}
							>
								<p className="text-white">View Project</p>
							</div>
						</div>
					</a>
					<a
						className="row-start-2 col-span-2 h-full aspect-square mx-auto"
						href="https://arron-b.github.io/pokemon-memory-game/"
						target="_blank"
					>
						<div
							className="h-full mx-auto hover:scale-95 bg-[url('./src/assets/poke-match.png')] bg-cover bg-center"
							alt=""
							onMouseEnter={() => {
								setIsMatchHovered(true);
							}}
							onMouseLeave={() => {
								setIsMatchHovered(false);
							}}
						>
							<div
								className={
									"bg-[rgba(0,0,0,0.5)] h-full flex justify-center items-center" +
									(isMatchHovered ? "" : " hidden")
								}
							>
								<p className="text-white">View Project</p>
							</div>
						</div>
					</a>

					<a
						className="row-start-3 col-2 h-full w-full"
						href="https://arron-b.github.io/flashcards-arron/"
						target="_blank"
					>
						<div
							className="h-full w-full mx-auto hover:scale-95 bg-[url('./src/assets/flashcards.png')] bg-cover bg-no-repeat"
							alt=""
							onMouseEnter={() => {
								setIsFlashcardsHovered(true);
							}}
							onMouseLeave={() => {
								setIsFlashcardsHovered(false);
							}}
						>
							<div
								className={
									"bg-[rgba(0,0,0,0.5)] h-full w-full flex justify-center items-center" +
									(isFlashcardsHovered ? "" : " hidden")
								}
							>
								<p className="text-white">View Project</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</>
	);
}

export default NorthcodersModal;
