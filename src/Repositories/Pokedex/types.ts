export enum PokedexTypes {
  RECEIVED_ALL_POKEMONS = 'RECEIVED_ALL_POKEMONS',
  RECEIVED_POKEMON = 'RECEIVED_POKEMON',
  GET_ALL_POKEMONS = 'GET_ALL_POKEMONS',
  GET_POKEMON = 'GET_POKEMON'
}

declare global {
  type TPokemon = {
    name: string,
    url: string
  }

  type TPokemonInitialState = {
    pokemons: TPokemon[],
    pokemon: TAboutPokemon,
  }

  type TPokedexState = {
    pokedex: TPokemonInitialState
  }

  type TResponsePokemon = {
    data: TResponsePokemonData
  }

  type TResponsePokemonData = {
    abilities: TAbilities[],
    sprites: {
      other: {
        dream_world: {
          front_default: string
        }
      }
    },
    stats: TResponseStats[],
    name: string
  }

  type TAboutPokemon = {
    stats: TStats[],
    abilities: TAbilities[],
    sprites: string,
    name: string
  }

  type TResponseStats = {
    stat: TStats,
    base_stat: number
  }

  type TStats = {
    name: string,
    value: number
  }

  type TAbilities = {
    ability: {
      name: string
    },
    is_hidden: boolean
  }

  type TPayloadParams = {
    error: string,
    meta: string,
    payload: string,
    type: string
  }
}