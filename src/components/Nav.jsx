import { Classic } from "@theme-toggles/react";
import { useEffect } from "react";

function Nav({ isNavOpen, setIsNavOpen, isDark, setIsDark, currEl }) {
	useEffect(() => {
		if (isNavOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [isNavOpen]);

	return (
		<div
			className={
				"fixed z-[99] h-nav w-full" +
				(isDark ? " ls:bg-dark-bg" : " ls:bg-light-bg")
			}
		>
			<nav
				className={
					"items-center h-full w-full" +
					(isDark
						? " ls:bg-dark-bg text-dark-text"
						: " ls:bg-light-bg text-black")
				}
			>
				<section className="MOBILE-MENU flex ls:hidden w-full">
					<div
						className="HAMBURGER-ICON space-y-2 fixed top-4 left-4 z-50"
						onClick={() => {
							setIsNavOpen(!isNavOpen);
						}} // toggle isNavOpen state on click
					>
						<span
							className={
								"block h-0.5 w-8 animate-pulse" +
								(isDark ? " bg-white" : " bg-black")
							}
						></span>
						<span
							className={
								"block h-0.5 w-8 animate-pulse" +
								(isDark ? " bg-white" : " bg-black")
							}
						></span>
						<span
							className={
								"block h-0.5 w-8 animate-pulse" +
								(isDark ? " bg-white" : " bg-black")
							}
						></span>
					</div>

					<div
						className={
							"backdrop fixed z-[98] flex flex-col justify-center w-full h-screen ease-in-out duration-300 delay-200 bg-[rgba(0,0,0,0.9)]" +
							(isNavOpen ? " -translate-x-0" : " -translate-x-full")
						}
						onClick={() => setIsNavOpen(false)}
					></div>
					<div
						className={
							"menu fixed z-[99] flex flex-col justify-center w-1/2 h-screen ease-in-out duration-300" +
							(isNavOpen ? " -translate-x-0" : " -translate-x-full") +
							(isDark ? " bg-dark-bg" : " bg-light-bg")
						}
					>
						<div
							className="CROSS-ICON absolute top-3 right-3 z-[100]"
							onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
						>
							<svg
								className="h-8 w-8 text-gray-600"
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
						<ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
							<li className="my-8 uppercase hover:scale-110">
								<a
									href="
								#welcome"
									onClick={() => setIsNavOpen(false)}
								>
									Home
								</a>
							</li>
							<li className="my-8 uppercase hover:scale-110">
								<a
									href="#about"
									onClick={() => setIsNavOpen(false)}
								>
									About Me
								</a>
							</li>
							<li className="my-8 uppercase hover:scale-110">
								<a
									href="#projects"
									onClick={() => setIsNavOpen(false)}
								>
									My Projects
								</a>
							</li>

							<li className="my-8 uppercase hover:scale-110">
								<a
									href="#contact"
									onClick={() => setIsNavOpen(false)}
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</section>

				<Classic
					className="top-3 right-4 fixed text-4xl animate-pulse z-40"
					toggled={isDark}
					toggle={setIsDark}
				/>

				<ul className="DESKTOP-MENU hidden space-x-8 ls:flex ls:h-nav ls:items-center ls:pl-3">
					<li
						className={
							"my-8 uppercase hover:scale-110" + (currEl === 0 ? " active" : "")
						}
					>
						<a
							href="
								#welcome"
						>
							Home
						</a>
					</li>
					<li
						className={
							"my-8 uppercase hover:scale-110" + (currEl === 1 ? " active" : "")
						}
					>
						<a href="#about">About Me</a>
					</li>
					<li
						className={
							"my-8 uppercase hover:scale-110" + (currEl === 2 ? " active" : "")
						}
					>
						<a href="#projects">My Projects</a>
					</li>

					<li
						className={
							"my-8 uppercase hover:scale-110" + (currEl === 3 ? " active" : "")
						}
					>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Nav;
