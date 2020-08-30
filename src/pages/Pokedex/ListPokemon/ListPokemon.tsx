import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPokemons } from '../../../Repositories/Pokedex/actions'
import { Container, ListContainer, ListItems } from './styles'
import Router from '../../routes'

const ListaPokemon = () => {
  const pokemons = useSelector<TPokedexState, TPokemon[]>(
    state => state.pokedex?.pokemons
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPokemons())
  }, [getAllPokemons])

  const onClickPokemon = (name: string) => {
    Router.pushRoute('ShowPokemon', { name })
  }

  return (
    <Container>
      <h1>Pokedéx</h1>
      <ListContainer>
        {pokemons.map(item => (
          <ListItems
            role="li"
            key={item.name}
            onClick={() => onClickPokemon(item.name)}
          >
            {item.name}
          </ListItems>
        ))}
        {pokemons.length === 0 && (
          <NotFoundPokemons />
        )}
      </ListContainer>
    </Container>
  )
}

const NotFoundPokemons = () => (
  <p>Nenhum pokemon encontrado!</p>
)

export default ListaPokemon