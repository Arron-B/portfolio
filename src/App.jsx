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
			<div className={"h-dvh w-vw px-4 py-6" + (isDark ? " dark" : " light")}>
				<header className="h-[8%] z-10">
					<Nav
						isNavOpen={isNavOpen}
						setIsNavOpen={setIsNavOpen}
					/>

					<Classic
						className={
							"top-4 right-4 absolute text-4xl animate-pulse" +
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
