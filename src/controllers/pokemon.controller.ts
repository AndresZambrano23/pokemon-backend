import {get, param} from '@loopback/rest';
import {Pokemon} from '../utils';

const pokemonData = new Pokemon()

// type Abilities = {
//   ability: Ability;
//   is_hidden: boolean;
//   slot: number;
// }

// type Ability {
//   name: string;
//   url: string;
// }

export class PokemonController {
  constructor() {}

  @get('/pokemons')
  // @response(200, RESPONSE)
  async pokemons() {
    try {
      const pokemonsData = await pokemonData.getPokemons()
      return {
        respose: true,
        data: pokemonsData?.data
      }
    } catch (error) {
      console.error('error in get pokemons', error)
    }
  }

  @get('/pokemons/habilidadesOcultas/{pokemon}')
  async hiddenAbilities(@param.path.string('pokemon') pokemon: string) {
    try {
      const detailsPokemon =  await pokemonData.getAbilites(pokemon)
      const data = detailsPokemon?.data;
      const { abilities } = data;
      const abilitesHiddend = abilities.filter((a: any) => a.is_hidden === true)
      return {
        respose: true,
        data: abilitesHiddend
      }
    } catch (error) {
      console.error('error in get hiddend abilites', error)
    }
  }
}
