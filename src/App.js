import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './card_list/CardList.component';
import SearchBar from './searcbar/searchbar.component';

class App extends Component{
   constructor(){
      super()
      this.state = {
        monsters : [],
        searchField: '',
      }
   }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
      this.setState(() => {
        return{monsters: users}
      },
      ()=> console.log(this.state
        ))
    })
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
  this.setState(()=> {
    return{
      searchField
    }
  })
    };

  render(){
    const filteredMonster = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(this.state.searchField)
        })

    return (
    <div className="App">
      <h1 className='app-title'> monsters Club</h1>
      <SearchBar onChangeHandler={this.onSearchChange}/>
     <CardList monsters={filteredMonster}/>
    </div>
  );}
}

export default App;
