import { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";
import NcAndContact from "./components/NcAndContact";
import Background from "./components/Background";
import Footer from "./components/Footer";

import "@theme-toggles/react/css/Classic.css";
import "./App.css";

function App() {
	const [isDark, setIsDark] = useState(true);
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<Background
				isNavOpen={isNavOpen}
				isDark={isDark}
			></Background>

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

			<NcAndContact
				isNavOpen={isNavOpen}
				isDark={isDark}
			/>
			<Footer
				isDark={isDark}
				isNavOpen={isNavOpen}
			></Footer>
		</>
	);
}

export default App;
