import React from "react";
import SearchBar from "./SearchBar";
import EmployeeList from './EmployeeList';
import axios from "axios";

class App extends React.Component {
    state = {
        listOfEmployees: [],
        selectedEmployee: null,
    }

    componentDidMount() {
        axios.get(`https://randomuser.me/api`, {
            params: {
                results: 5
            }
        })
        .then((res) => this.setState({listOfEmployees: res.data.results}))
    }

	render() {
		return (
			<div>
				<header>
					<h1>Employee Directory</h1>
					<SearchBar />
				</header>
				<main>
                    <EmployeeList listOfEmployees={this.state.listOfEmployees}/>
                </main>
			</div>
		);
	}

}

export default App;
