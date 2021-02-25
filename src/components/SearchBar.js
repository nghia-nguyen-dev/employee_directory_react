import React from "react";

class SearchBar extends React.Component {
	state = {
		input: "",
	};

	handleInput = (event) => {
		this.setState({
			input: event.target.value,
		});
	};

    componentDidUpdate = () => {
        // Invoke cb from App and pass in input
    }

	render() {
		return (
			<form>
				<input
					value={this.state.input}
					type="text"
					onChange={this.handleInput}
				/>
			</form>
		);
	}
}

export default SearchBar;
