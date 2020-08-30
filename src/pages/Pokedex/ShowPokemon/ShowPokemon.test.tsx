import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitForElement, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ShowPokemon from './ShowPokemon'
import { renderWrapper } from '../../../Utils/tests'
import { baseURL } from '../../../Services/api'
import { capitalizeFirstLetter } from '../../../Helpers'

const imagePokemonMock = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg'

const mockPokemons = {
  stats: [
    { base_stat: 39, stat: { name: 'hp' } },
    { base_stat: 52, stat: { name: 'attack' } },
    { base_stat: 43, stat: { name: 'defense' } },
    { base_stat: 60, stat: { name: 'special-attack' } },
    { base_stat: 50, stat: { name: 'special-defense' } },
    { base_stat: 65, stat: { name: 'speed' } }
  ],
  abilities: [
    { ability: { name: 'blaze' }, is_hidden: false },
    { ability: { name: 'solar-power' }, is_hidden: true }
  ],
  sprites: {
    other: {
      dream_world: {
        front_default: imagePokemonMock
      },
    }
  },
  name: 'charmander'
}

const server = setupServer(
  rest.get(`${baseURL}/charmander`, (_, response, data) => {
    return response(data.json(mockPokemons))
  })
)

describe('ShowPokemon', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should load image from pokemon', async () => {
    window.history.pushState({}, '', '/show/charmander')
    render(renderWrapper(ShowPokemon))

    await waitForElement(async () => {
      expect(await screen.findByAltText('Imagem')).toBeInTheDocument()
    })
  })

  it('should load name from pokemon', async () => {
    window.history.pushState({}, '', '/show/charmander')
    render(renderWrapper(ShowPokemon))

    await waitForElement(async () => {
      expect(await screen.findByText(mockPokemons.name)).toBeInTheDocument()
    })
  })

  it('should stats from pokemon', async () => {
    window.history.pushState({}, '', '/show/charmander')
    render(renderWrapper(ShowPokemon))

    await waitForElement(async () => {
      for (const stat of mockPokemons.stats) {
        expect(await screen.findByText(
          capitalizeFirstLetter(stat.stat.name)
        )).toBeInTheDocument()
      }
    })
  })
})