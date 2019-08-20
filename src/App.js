/* eslint-disable no-undef */
import React,  {Component}  from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
  state={
    monsters: [],
    searchField: '' 
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(monsters=> this.setState({monsters: monsters}))
  }
  handleChange=(e)=>{
    this.setState({
      searchField: e.target.value
    })
  } 


  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className='App'>
        <h1>Monsters by Ridbay</h1>
        <SearchBox placeholder='Search Monsters' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
