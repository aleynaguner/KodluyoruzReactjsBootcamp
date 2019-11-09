import React from 'react';

class Pokemon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: "gray"
        };
    }

    render(){
        return <ul
            onClick={() => {
                this.props.onPokemonClick(this.props.id);
            }}
            style={{background:this.state.color, padding:"15px", margin: "10px"}}>
            <li>{this.props.name}</li>
            <li>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`}
                />
            </li>
        </ul>
    }
}
export default Pokemon;
