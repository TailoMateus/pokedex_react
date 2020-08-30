import { call, put } from 'redux-saga/effects'
import api from '../../Services/api'
import { capitalizeFirstLetter } from '../../Helpers'

import { receivedPokemon, receivedAllPokemons } from './actions'

export function* loadAllPokemons() {
  const fixedPagination = '?offset=0&limit=20'
  const response = yield call(api.get, fixedPagination)

  yield put(receivedAllPokemons(response.data.results))
}

export function* loadPokemon({ payload }: TPayloadParams) {
  const response: TResponsePokemon = yield call(api.get, `/${payload}`)

  const { data } = response
  const { name } = response.data

  const stats = data.stats.map(stats => {
    const { name } = stats.stat
    return {
      name: capitalizeFirstLetter(name),
      value: stats.base_stat
    }
  })

  const abilities = data.abilities.map(ability => {
    return { ability: ability.ability, is_hidden: ability.is_hidden }
  })

  const sprites = data.sprites.other.dream_world.front_default

  const pokemon: TAboutPokemon = {
    stats,
    abilities,
    sprites,
    name
  }

  yield put(receivedPokemon(pokemon))
}