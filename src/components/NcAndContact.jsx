import { useState, useEffect } from "react";
import NorthcodersModal from "./NorthcodersModal";
import Form from "./Form";

function NcAndContact({ isDark, isNavOpen }) {
	const [isHovered, setIsHovered] = useState(false);
	const [isNorthcodersModalOpen, setIsNorthcodersModalOpen] = useState(false);

	useEffect(() => {
		if (isNorthcodersModalOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [isNorthcodersModalOpen]);

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
					"h-[92dvh] w-vw flex flex-col justify-evenly gap-1" +
					(isNavOpen ? " hidden" : "") +
					(isDark ? " text-white" : " text-black")
				}
			>
				<div
					className="northcoders relative h-[50%] mt-12 mx-2 bg-[url('./src/assets/August-cohort.jpg')] bg-cover bg-center"
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
					<div className="absolute left-[50%] top-10">
						<h2 className="text-2xl z-10 w-32 relative -left-[50%] -top-[6rem]">
							Northcoders
						</h2>
						<div className="red-line z-0 bg-my-red relative w-[8rem] h-2.5 -left-[34%] -top-[6.7rem]"></div>
					</div>
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
					<div className="absolute left-[50%]">
						<h2 className="text-[1.2rem] relative z-10 -left-[50%]">
							Contact Me
						</h2>
						<div className="z-0 bg-my-red relative w-[6.2rem] h-[0.5rem] -left-[35%] -translate-y-2.5"></div>
					</div>
					<Form isDark={isDark}></Form>
				</div>
			</section>
		</>
	);
}

export default NcAndContact;
