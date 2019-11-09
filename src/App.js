import React from 'react';
import Pokemon from './Pokemon';
import pokemons from "./data";
import Summary from "./Summary";


class App extends  React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedPokemon: {}
        }

        this.onPokemonClick = this.onPokemonClick.bind(this);
    }

    onPokemonClick(id){
        const selectedPokemon = pokemons.find((pokemon) => {
            return pokemon.id === id;
        });
        this.setState({
            selectedPokemon
        });
    }

    render(){
        return (
            <div className="App">
                <Summary pokemon={this.state.selectedPokemon}/>
                {
                    pokemons.map((item) => {
                        return <Pokemon {...item} onPokemonClick={this.onPokemonClick} key={item.id}/>
                    })
                }
            </div>
        );
    }
}

export default App;
