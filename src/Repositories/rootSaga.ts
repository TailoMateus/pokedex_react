import { all, takeLatest } from 'redux-saga/effects'
import { PokedexTypes } from './Pokedex/types'
import { loadAllPokemons, loadPokemon } from './Pokedex/sagas'

export default function* rootSaga() {
  return yield all([
    takeLatest(PokedexTypes.GET_ALL_POKEMONS, loadAllPokemons),
    takeLatest(PokedexTypes.GET_POKEMON, loadPokemon)
  ])
}