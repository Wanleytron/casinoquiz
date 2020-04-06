import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Starships from './compnents/Starships';


class App extends Component {
  state={
    starships:[] ,
    filmsCount:null
    

  }

  getStarships =() => {
    axios.get('https://swapi.co/api/starships').then(response => {
     const data = response.data.results
      this.setState({
        starships:data.sort( (a, b) => {
          return parseFloat(b['crew']) - parseFloat(a['crew'])
        }),
        
        
      })
      
     
      
    })
  }

  componentDidMount(){
      this.getStarships();
  }

  // sortBy =(key) =>{
  //   const sortedShips = this.state.starships.sort( (a, b) => {
  //     return parseFloat(b[key]) - parseFloat(a[key])
      

  //   })

    
  //   this.setState({
  //     starships: sortedShips
  //   })

  // }
  render() {
    return (
      <div className='app'>
        <h1>Starships</h1>
        <Starships starships={this.state.starships} filmsCount={this.state.filmsCount}/>
      </div>
    );
  }
}

export default App;