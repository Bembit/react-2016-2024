import React, {Component} from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';


class Pokedex extends Component {

    static defaultProps = {
        pokemon : [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
      ]};

    render() {

        // const test = {
        //     minDmg: 123,
        //     maxDmg: 199,
        //     Stamina: 15,
        //     ChanceToCrit: 1
        // };

        // console.log(Object.keys(test));
        // Object.getOwnPropertyNames(test).forEach(
        //     function (val, idx, array) {
        //         console.log(val + ': ' +test[val]);
        //     }
        // )

        return(
            <div className="Pokedex">
                <div>
                    <p>{this.props.name}</p>
                    <p>{this.props.exp}</p>
                    <p>{this.props.isWinner ? 'Winner' : 'Looser'}</p>
                </div>
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
            </div>
        )
    }
}

export default Pokedex;