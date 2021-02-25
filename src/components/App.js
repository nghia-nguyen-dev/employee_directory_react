import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
	render() {
		return (
			<div>
				<header>
					<h1>Employee Directory</h1>
					<SearchBar />
				</header>
				<main></main>
			</div>
		);
	}
}

export default App;
