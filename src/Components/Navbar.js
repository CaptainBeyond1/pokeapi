import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar"> 
        <ul className="navlist">
          <Link className="pokemon-tab" to="/">Pokémon</Link>
          <Link className="favorites-tab" to="/favorites">Favorites</Link>
        </ul>
      <div> 
        <ul className="navlist">
          <Link className="login" to="/login">Login</Link>
        </ul>
      </div>
      </div>
    )
  }
}

export default Navbar;