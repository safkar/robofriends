import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Scroll from '../Components/Scroll';
import SearchBox from '../Components/SearchBox';
import './App.css';
import CardList from '../Components/CardList';

class App extends Component{
	constructor(){
		super()
	this.state = {
	Knicks: [],  
	searchfield : ''
		}
	
	}
	


	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=> this.setState({Knicks:users}));
}

	OnSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
		}

	render() {
		const {Knicks,searchfield} =this.state;
		const filteredRobots =Knicks.filter(knick=>{
			return knick.name.toLowerCase().includes(searchfield.toLowerCase());
		})
	if(!Knicks.length){
		return <h1> Loading the players </h1>

	} else{
	return (
	<div className ='tc'>
	<h1 className='f1'> New York Knicks Roster </h1>
	<SearchBox searchChange ={this.OnSearchChange}/>
	<Scroll>
	<CardList Knicks={filteredRobots}/>
	</Scroll>
	</div>

);
}
}
}




export default App;