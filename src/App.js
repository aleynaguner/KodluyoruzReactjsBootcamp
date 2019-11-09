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
    }

    onPokemonClick(id){
        console.log(id);
    }

    render(){
        return (
            <div className="App">
                <Summary />
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
