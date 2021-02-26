import React from "react";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import axios from "axios";
import Modal from "./Modal";
import "../css/App.css";

class App extends React.Component {
	state = {
		listOfEmployees: [],
		filteredListOfEmployees: [],
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
		const filtered = this.state.listOfEmployees.filter((employee) => {
			const fullName = `${employee.name.first} ${employee.name.last}`.toLocaleLowerCase();
			return fullName.includes(input);
		});

		this.setState({ filteredListOfEmployees: filtered });
	};

	// Function to handle logic of which list of employees to show via passing array down as props
	renderList() {
		return this.state.filteredListOfEmployees.length === 0
			? this.state.listOfEmployees
			: this.state.filteredListOfEmployees;
	}

	renderModal() {
		return this.state.modalOpen ? <Modal selectedEmployee={this.state.selectedEmployee}/> : null;
	}

	render() {
		return (
			<div className="app">
				<header>
					<h1>Employee Directory</h1>
					<SearchBar filterEmployees={this.filterEmployees} />
				</header>
				<main>
					<EmployeeList
						listOfEmployees={this.renderList()}
						handleClick={this.handleClick}
					/>
				</main>
				{this.renderModal()}
			</div>
		);
	}
}

export default App;
