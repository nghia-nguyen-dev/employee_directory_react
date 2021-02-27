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
		selectedEmployee: {
			employee: null,
			index: null,
		},
		activeList: null,
		modalOpen: false,
	};

	// Initial data fetching
	componentDidMount() {
		axios
			.get(`https://randomuser.me/api`, {
				params: {
					results: 25,
				},
			})
			.then(({ data: { results: employees } }) =>
				this.setState({
					listOfEmployees: employees,
					activeList: employees,
				})
			);
	}

	handleModalClick = (className) => {
		if (className.includes("arrows")) {
			this.changeCard(className.includes("left") ? "left" : "right");
		} else {
			// close modal
			this.setState({ modalOpen: false });
		}
	};

	changeCard(direction) {
		direction === "right"
			? this.updateSelectedEmployee(this.state.selectedEmployee.index + 1)
			: this.updateSelectedEmployee(
					this.state.selectedEmployee.index - 1
			  );
	}

	updateSelectedEmployee(index) {
		if (index < 0 || index > this.state.activeList.length - 1) {
			return;
		}
		this.setState({
			selectedEmployee: {
				employee: this.state.activeList[index],
				index: index,
			},
		});
	}

	handleCardClick = (employee, index) => {
		this.setState({
			selectedEmployee: {
				employee,
				index,
			},
			modalOpen: true,
		});
	};

	filterEmployees = (input) => {
		const filtered = this.state.listOfEmployees.filter((employee) => {
			const fullName = `${employee.name.first} ${employee.name.last}`.toLocaleLowerCase();
			return fullName.includes(input);
		});

		this.setState({
			filteredListOfEmployees: filtered,
			activeList: filtered,
		});
	};

	renderList() {
		return this.state.filteredListOfEmployees.length === 0
			? this.state.listOfEmployees
			: this.state.filteredListOfEmployees;
	}

	renderModal() {
		return this.state.modalOpen ? (
			<Modal
				selectedEmployee={this.state.selectedEmployee}
				handleModalClick={this.handleModalClick}
			/>
		) : null;
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
						handleCardClick={this.handleCardClick}
					/>
				</main>
				{this.renderModal()}
			</div>
		);
	}
}

export default App;
