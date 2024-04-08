import { useState, useRef } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";
import Form from "./components/Form";
import Background from "./components/Background";
import Footer from "./components/Footer";
import { Scrollspy } from "@makotot/ghostui";

import "@theme-toggles/react/css/Classic.css";
import "./App.css";

function App() {
	const [isDark, setIsDark] = useState(true);
	const [isNavOpen, setIsNavOpen] = useState(false);
	const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

	return (
		<>
			<Scrollspy sectionRefs={sectionRefs}>
				{({ currentElementIndexInViewport }) => (
					<div>
						<Background isDark={isDark}></Background>
						<Nav
							isDark={isDark}
							setIsDark={setIsDark}
							isNavOpen={isNavOpen}
							setIsNavOpen={setIsNavOpen}
							currEl={currentElementIndexInViewport}
						/>
						<Welcome
							isDark={isDark}
							sectionRef={sectionRefs[0]}
						></Welcome>
						<About
							isDark={isDark}
							sectionRef={sectionRefs[1]}
						></About>
						<Projects
							isDark={isDark}
							sectionRef={sectionRefs[2]}
						/>
						<Form
							isDark={isDark}
							sectionRef={sectionRefs[3]}
						/>
						<Footer isDark={isDark}></Footer>
					</div>
				)}
			</Scrollspy>
		</>
	);
}

export default App;
