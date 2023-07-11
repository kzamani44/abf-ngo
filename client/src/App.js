import React from "react";
import { Header, AboutUs, Features, Events } from "./components";

const App = () => (
	<div className="w-screen h-screen flex flex-col overflow-x-hidden">
		<div>
			<Header/>
		</div>

		<div>
			<AboutUs/>
			<Features/>
			<Events/>
		</div>


	</div>
	);

export default App;
