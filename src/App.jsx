import { useState } from "react";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";
import Skills from "./components/Skills";

import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import "./App.css";

function App() {
	const [isDark, setIsDark] = useState(true);
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<div className={"h-dvh w-vw pb-6 pt-12" + (isDark ? " dark" : " light")}>
				<header className="h-[8%] w-full py-3 px-4 z-10 bg-[#242424] fixed top-0">
					<Nav
						isNavOpen={isNavOpen}
						setIsNavOpen={setIsNavOpen}
					/>
					<h1 className="text-2xl text-center">Arron Bent</h1>
					<Classic
						className={
							"top-3 right-4 fixed text-4xl animate-pulse" +
							(isNavOpen ? " hidden" : "")
						}
						toggled={isDark}
						toggle={setIsDark}
					/>
				</header>
				<Welcome isNavOpen={isNavOpen}></Welcome>
				<Projects isNavOpen={isNavOpen} />
			</div>
			<Skills
				isNavOpen={isNavOpen}
				isDark={isDark}
			/>
		</>
	);
}

export default App;
