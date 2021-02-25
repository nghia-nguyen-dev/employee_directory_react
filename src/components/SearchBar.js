import React from "react";

class SearchBar extends React.Component {
	state = {
		input: "",
	};

	handleInput = (e) => {
		this.setState({
			input: e.target.value,
		}, () => this.props.filterEmployees(this.state.input));
	};

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
