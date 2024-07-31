import axios, {AxiosInstance} from 'axios';

const baseURL = process.env.POKEMON_URL

export class Pokemon {

  private readonly http: AxiosInstance | undefined

  constructor() {
    this.http = axios.create({
      baseURL,
      timeout: 25000,
      headers: {
        accept: 'application/json'
      }
    })
  }

  async getPokemons() {
    try {
      return await this.http?.get('/pokemon')
    } catch (error) {
      console.error('Error get pokemons', error)
    }
  }

  async getAbilites(pokemon: string) {
    try {
      return await this.http?.get(`/pokemon/${pokemon}`)
    } catch (error) {
      console.error('Error get abilities', error)
    }
  }
}
