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

	handleModalClick = (className) => {
		if (className === "modal__icons__arrows") {
			console.log(`arrow clicked`);
            const direction = className.includes('left') ? 'left' : 'right'
            this.changeCard(direction)
		} else {
			this.setState({ modalOpen: false });
		}
	};

    changeCard(direction) {

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

		this.setState({ filteredListOfEmployees: filtered });
	};

	renderList() {
        // If there are items in filteredList, then show it else show default
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
