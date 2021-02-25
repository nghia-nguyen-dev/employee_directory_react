import React from "react";
import SearchBar from "./SearchBar";
import EmployeeList from './EmployeeList';

class App extends React.Component {

	render() {
		console.log("rendered");
		return (
			<div>
				<header>
					<h1>Employee Directory</h1>
					<SearchBar />
				</header>
				<main>
                    <EmployeeList />
                </main>
			</div>
		);
	}

}

export default App;
