import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';
import PokemonGrid from './Components/PokemonGrid';
import PokemonPage from './Components/PokemonPage';
import FavoritesPage from './Components/FavoritesPage';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={PokemonPage}/>
        <Route exact path="/favorites" component={FavoritesPage}/>
      </div>
    );
  }
}

export default App;
