import './App.css';
import React ,{ Component} from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component

{

  constructor() {

   super();
   this.state = {

monsters:[],
searchField:''
   };


  }
  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users=> this.setState({ monsters:users}));
  }

 render(){
   const { monsters,searchField}=this.state;
   const filterdMosters= monsters.filter(
     monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

  return(
    <div className="App">

      <h1>  NFT MONSTERS </h1>
      
      <SearchBox 
       placeholder='search monster' 
      handleChange={e=>
      this.setState({ searchField:e.target.value})} />
       
      <CardList monsters={filterdMosters}> 
        
        
          </CardList>
    
    <div className="App">
     
    </div>
   
  </div>

  )
 }
}
export default App;
