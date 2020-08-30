import { action } from 'typesafe-actions'
import { PokedexTypes } from './types'

export const getAllPokemons = () => action(PokedexTypes.GET_ALL_POKEMONS)

export const receivedAllPokemons = (pokemons: TPokemon[]) => {
  return action(PokedexTypes.RECEIVED_ALL_POKEMONS, { pokemons })
}

export const getPokemon = (name: string) =>
  action(PokedexTypes.GET_POKEMON, name)

export const receivedPokemon = (pokemon?: TAboutPokemon | any) =>
  action(PokedexTypes.RECEIVED_POKEMON, { pokemon })