import React from "react";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import axios from "axios";
import Modal from "./Modal";

class App extends React.Component {
	state = {
		listOfEmployees: [],
        filteredListOfEmployees:[],
		selectedEmployee: null,
		modalOpen: false,
	};

	componentDidMount() {
		axios
			.get(`https://randomuser.me/api`, {
				params: {
					results: 25,
				},
			})
			.then((res) =>
				this.setState({ listOfEmployees: res.data.results })
			);
	}

	handleClick = (employee) => {
		this.setState({
			selectedEmployee: employee,
			modalOpen: true,
		});
	};

    filterEmployees = (input) => {
        const filtered = this.state.listOfEmployees.filter(employee => {
            return `${employee.name.first} ${employee.name.last}`.includes(input)
        })

        this.setState({filteredListOfEmployees: filtered})
    }

    // Function to handle logic of which list of employees to show?
    
    // If filteredListOfEmployees is not empty
        // display that
        // else display default


	render() {
		return (
			<div className="app">
				<header>
					<h1>Employee Directory</h1>
					<SearchBar />
				</header>
				<main>
					<EmployeeList
						listOfEmployees={this.state.listOfEmployees}
						handleClick={this.handleClick}
					/>
				</main>
				<Modal />
			</div>
		);
	}
}

export default App;
