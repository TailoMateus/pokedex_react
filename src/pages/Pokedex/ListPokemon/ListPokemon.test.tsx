import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitForElement, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ListPokemon from './ListPokemon'
import { renderWrapper } from '../../../Utils/tests'
import { baseURL } from '../../../Services/api'

const mockPokemons = [
  { 'name': 'charmeleon', 'url': 'https://pokeapi.co/api/v2/pokemon/5/' },
  { 'name': 'charizard', 'url': 'https://pokeapi.co/api/v2/pokemon/6/' },
  { 'name': 'squirtle', 'url': 'https://pokeapi.co/api/v2/pokemon/7/' },
  { 'name': 'wartortle', 'url': 'https://pokeapi.co/api/v2/pokemon/8/' },
  { 'name': 'blastoise', 'url': 'https://pokeapi.co/api/v2/pokemon/9/' },
]

const server = setupServer(
  rest.get(`${baseURL}?offset=0&limit=20`, (_, response, data) => {
    return response(data.json({ results: mockPokemons }))
  })
)

describe('ListPokemon', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should show the message "Nenhum pokemon encontrado!"', async () => {
    server.use(
      rest.get(`${baseURL}?offset=0&limit=20`, (_, response, data) => {
        return response(data.json({ results: [] }))
      })
    )

    render(renderWrapper(ListPokemon))

    expect(
      await screen.findByText('Nenhum pokemon encontrado!')
    ).toBeInTheDocument()
  })


  it('should load pokemons when request API', async () => {
    render(renderWrapper(ListPokemon))

    await waitForElement(async () => {
      const i = await screen.findAllByRole('li')
      expect(i).toHaveLength(mockPokemons.length)
    })
  })
})