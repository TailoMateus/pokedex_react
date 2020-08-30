import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemon, receivedPokemon } from '../../../Repositories/Pokedex/actions'
import { capitalizeFirstLetter } from '../../../Helpers'
import GoBack from '../../../Components/GoBack'
import {
  Container,
  FlexContainer,
  NamePokemon,
  ImagePokemon,
  StatsContainer,
  StatsSubTitle
} from './styles'

const ShowPokemon = () => {
  const dispatch = useDispatch()
  const params = window.location.pathname.replace('/show/', '')
  const pokemon = useSelector<TPokedexState, TAboutPokemon>(
    state => state.pokedex.pokemon
  )
  const { stats, abilities, sprites, name } = pokemon

  useEffect(() => {
    dispatch(getPokemon(params))
  }, [getPokemon, params])

  useEffect(() => {
    return () => {
      if (pokemon.name) {
        dispatch(receivedPokemon([]))
      }
    }
  })

  const showAbilities = (abilities: TAbilities[]) => {
    const ability = abilities?.map(({ ability, is_hidden }) => {
      const name = capitalizeFirstLetter(ability.name)
      const hiddenAbility = is_hidden
        ? `${name} (hidden ability)`
        : name

      return hiddenAbility
    })
    return String(ability)
  }

  return (
    <Container>
      <GoBack />
      <FlexContainer>
        {sprites && (
          <ImagePokemon src={sprites} alt="Imagem" />
        )}
        <NamePokemon>{name}</NamePokemon>
      </FlexContainer>

      <StatsInfo stats={stats} />

      <StatsContainer>
        <StatsSubTitle>Abilities</StatsSubTitle>
        <span>{showAbilities(abilities)}</span>
      </StatsContainer>
    </Container>
  )
}

type TStatsProps = {
  stats: TStats[]
}

const StatsInfo = ({ stats }: TStatsProps) => (
  <>
    {stats?.map(stat => (
      <StatsContainer key={stat.name}>
        <StatsSubTitle>{stat.name}</StatsSubTitle>
        <span>{stat.value}</span>
      </StatsContainer>
    ))}
  </>
)

export default ShowPokemon