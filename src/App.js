import React, { Component } from 'react';
import CardList from './cardlist';
import SearchBox from './searchbox';

class App extends Component {
	constructor() {
		super()
		this.state = {
			chars: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://harry-potter-api-english-production.up.railway.app/characters').then(response => {
			return response.json();
		}).then(users => {
			this.setState({chars: users});
		})
	}

	onSearchBox = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render() {
		const filtredchars = this.state.chars.filter(user => {
			return (user.character.toLowerCase().includes(this.state.searchfield.toLowerCase()));
		})
		return (
			<div className="tc">
				<h1 className="f2">Harry Potter Index</h1>
				<SearchBox searchbox={this.onSearchBox}/>
				<CardList chars={filtredchars}/>
			</div>
		);
	}
}

export default App;