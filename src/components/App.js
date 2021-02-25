import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = {
        userInput: ''
    }

    handleInputChange = (e) => {

    }

	render() {
		return (
			<div>
				<header>
					<h1>Employee Directory</h1>
					<SearchBar handleInputChange={this.handleInputChange}/>
				</header>
				<main></main>
			</div>
		);
	}
}

export default App;
