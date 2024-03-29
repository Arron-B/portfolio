import { useState } from "react";
import Nav from "./components/Nav";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import "./App.css";

function App() {
	const [isDark, setIsDark] = useState(true);
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<div className={"h-dvh w-vw px-4 py-6" + (isDark ? " dark" : "")}>
				<Nav
					isNavOpen={isNavOpen}
					setIsNavOpen={setIsNavOpen}
				/>

				<Classic
					className={
						"top-4 right-4 absolute text-4xl" + (isNavOpen ? " hidden" : "")
					}
					toggled={isDark}
					toggle={setIsDark}
				/>
				<h1 className={isNavOpen ? " hidden" : ""}>Arron Bent</h1>
			</div>
		</>
	);
}

export default App;
