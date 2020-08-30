import { Reducer } from 'redux'
import { PokedexTypes } from './types'
import { HYDRATE } from 'next-redux-wrapper'

const INITIAL_STATE: TPokemonInitialState = {
  pokemons: [],
  pokemon: {
    stats: [],
    abilities: [],
    sprites: '',
    name: ''
  }
}

const reducer: Reducer<TPokemonInitialState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.pokedex }
    case PokedexTypes.RECEIVED_ALL_POKEMONS:
      return { ...state, pokemons: action.payload.pokemons }
    case PokedexTypes.RECEIVED_POKEMON:
      return { ...state, pokemon: action.payload.pokemon }
    case PokedexTypes.GET_POKEMON:
      return { ...state }
    default:
      return state
  }
}

export default reducer