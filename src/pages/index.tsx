import React from 'react'
import { END } from 'redux-saga'
import { PokedexTypes } from '../Repositories/Pokedex/types'
import { SagaStore, wrapper } from '../Repositories'
import ListPokemon from './Pokedex/ListPokemon/ListPokemon'

const Page = () => {
  return (
    <ListPokemon />
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  store.dispatch({ type: PokedexTypes.GET_ALL_POKEMONS })
  store.dispatch(END)

  await (store as SagaStore).sagaTask.toPromise()

  return {}
})

export default Page