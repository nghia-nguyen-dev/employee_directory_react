import React from "react";
import SearchBar from "./SearchBar";
import EmployeeList from './EmployeeList';
import axios from "axios";

class App extends React.Component {
    state = {
        listOfEmployees: [],
        selectedEmployee: null,
        modalOpen: false,
    }

    componentDidMount() {
        axios.get(`https://randomuser.me/api`, {
            params: {
                results: 25
            }
        })
        .then((res) => this.setState({listOfEmployees: res.data.results}))
    }

    handleClick = (employee) => {
        this.setState({
            selectedEmployee: employee,
            modalOpen: true,
        })
    }

	render() {
		return (
			<div className="app">
				<header>
					<h1>Employee Directory</h1>
					<SearchBar />
				</header>
				<main>
                    <EmployeeList listOfEmployees={this.state.listOfEmployees} handleClick={this.handleClick}/>
                </main>
			</div>
		);
	}

}

export default App;
