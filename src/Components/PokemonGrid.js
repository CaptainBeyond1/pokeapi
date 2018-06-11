import React, {Component} from 'react';
import axios from 'axios';
import {getPokemonList} from '../Actions/PokemonActions';

class PokemonGrid extends Component {
  constructor(props) {
    super(props)
    props.dispatch(getPokemonList());
  }
  renderPokemon() {
    console.log(this.props.PokemonReducer);
    var pokemonList = this.props.PokemonReducer.pokemonList;
    return pokemonList.map((pokemon) => {
      console.log(pokemon);
      const value = pokemon.url;
      const parts = value.split('/');
      const picId = parts[6];
      const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${picId}.png`
        return (
          <div key={picId} className="poke-card">
            <p>{pokemon.name}</p>
            <img className="pokemon-pic" alt="" src={url}/>
          </div>
        )
      }
    );
  }

  render() {
    console.log(this.props);
    return (
      <div className="pokemon-grid">
        { this.renderPokemon() }
      </div>
    )
  }
}

export default PokemonGrid;