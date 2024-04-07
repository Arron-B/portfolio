import { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";
import Form from "./components/Form";
import Background from "./components/Background";
import Footer from "./components/Footer";

import "@theme-toggles/react/css/Classic.css";
import "./App.css";

function App() {
	const [isDark, setIsDark] = useState(true);
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<Background isDark={isDark}></Background>

			<Nav
				isDark={isDark}
				setIsDark={setIsDark}
				isNavOpen={isNavOpen}
				setIsNavOpen={setIsNavOpen}
			/>

			<Welcome isDark={isDark}></Welcome>

			<About isDark={isDark}></About>

			<Projects isDark={isDark} />

			<Form isDark={isDark} />
			<Footer isDark={isDark}></Footer>
		</>
	);
}

export default App;
