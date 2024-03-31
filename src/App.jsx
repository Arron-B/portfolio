import { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import "@theme-toggles/react/css/Classic.css";
import "./App.css";

function App() {
	const [isDark, setIsDark] = useState(true);
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<Nav
				isNavOpen={isNavOpen}
				setIsNavOpen={setIsNavOpen}
				isDark={isDark}
				setIsDark={setIsDark}
			/>

			<Welcome
				isNavOpen={isNavOpen}
				isDark={isDark}
			></Welcome>

			<About
				isNavOpen={isNavOpen}
				isDark={isDark}
			></About>

			<Projects
				isNavOpen={isNavOpen}
				isDark={isDark}
			/>

			<Skills
				isNavOpen={isNavOpen}
				isDark={isDark}
			/>
			<Contact
				isNavOpen={isNavOpen}
				isDark={isDark}
			></Contact>
		</>
	);
}

export default App;
