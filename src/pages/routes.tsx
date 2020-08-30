import Router from 'nextjs-dynamic-routes'

const router = new Router()

router.add({
  name: 'ShowPokemon',
  pattern: '/show/:name',
  page: '/Pokedex/ShowPokemon/ShowPokemon'
})

export default router