import React from "react";

class SearchBar extends React.Component {
	state = {
		input: "",
	};

    handleInput = (event) => {
        this.setState({
            input: event.target.value
        })
    }

	render() {
		return (
			<form>
				<input text="text" onChange={handleInput} />
			</form>
		);
	}
}

export default SearchBar;
