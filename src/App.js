import './App.css';
import React from 'react' ; 
import {CartList} from './component/cart-list/cart-list.component' ;
import {SearchBox} from './component/search-box/search-box.component' ;

class App extends React.Component {
  constructor(){
    super();
  this.state = {
    monster : [], 
    searchFelid : ''
  }
  
}
  handel=(e)=> {
    this.setState({searchFelid:e.target.value})
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({monster:users})
  })
  }
  render() {
    const {monster , searchFelid} = this.state ;
    const filterMonster = monster.filter(monster =>{
      return monster.name.toLowerCase().includes(searchFelid.toLowerCase())
    })
    return (
      <div className="App">
          <SearchBox 
          placeholder="Search Cat" 
          handleChange={this.handel}/>
          <CartList monster={filterMonster}/>
          
      </div>
    );
  }
}

export default App;
