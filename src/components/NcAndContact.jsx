import { useState, useEffect } from "react";
import NorthcodersModal from "./NorthcodersModal";
import Form from "./Form";

function NcAndContact({ isDark }) {
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
				id="northcoders"
				className={
					"h-nc w-vw flex flex-col justify-evenly gap-1 ls:grid ls:grid-cols-2" +
					(isDark ? " text-white" : " text-black")
				}
			>
				<div
					className={
						"northcoders-section relative h-[40%] mt-12 mx-2 hover:scale-95 transition-all duration-300 pt:max-ls:bg-[url('./src/assets/August-cohort.jpg')] bg-cover bg-center ls:bg-bottom ls:bg-contain ls:bg-no-repeat ls:col-start-1 ls:w-[95%] ls:top-4 ls:h-[70%] ls:mx-0 ls:-z-0" +
						(isDark ? " ls:bg-dark-secondary" : " ls:bg-light-secondary")
					}
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
						<div className="red-line -z-20 bg-my-red relative w-[8rem] h-2.5 -left-[34%] -top-[6.7rem]"></div>
					</div>

					<div
						className={
							"bg-[rgba(0,0,0,0.5)] h-full w-full flex justify-center items-center" +
							(isHovered ? "" : " hidden")
						}
					>
						<p className="text-white">Find Out More</p>
					</div>

					<img
						className="pt:max-ls:hidden w-[80%] h-[80%] -z-10 absolute object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
						src="./src/assets/August-cohort.jpg"
					></img>
				</div>

				<div
					className={
						"contact-section h-[60%] w-full p-4 grid grid-rows-[20%_80%] ls:col-start-2 ls:h-[75%] ls:w-3/4 ls:mt-[20%]" +
						(isDark
							? " pt:max-ls:bg-[url('./src/assets/dark-background.jpg')] bg-cover bg-center"
							: " pt:max-ls:bg-[url('./src/assets/light-background.jpg')] bg-cover bg-center")
					}
				>
					{/* <div className="absolute left-[50%] mt-5 ls:translate-x-[250%] ls:mt-9">
						<h2 className="text-[1.2rem] relative z-10 -left-[50%]">
							Contact Me
						</h2>
						<div className="z-0 bg-my-red relative w-[6.2rem] h-[0.5rem] -left-[35%] -translate-y-2.5"></div>
					</div> */}
					<Form isDark={isDark}></Form>
				</div>
			</section>
		</>
	);
}

export default NcAndContact;
