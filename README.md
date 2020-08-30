# Frontend Pokedex

Aplicação Front-end usando React. As principais libs e tecnologias do projeto são:

  - [React](https://reactjs.org/)

  - [TypeScript](https://www.typescriptlang.org/)
  
  - [Redux](https://redux.js.org/)

  - [Redux-Saga](https://redux-saga.js.org/)
  
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

  - [Styled Components](https://www.styled-components.com/)

  - [Next.js](https://nextjs.org/)
  
  - [ESLint](https://eslint.org/)

  - [Axios](https://github.com/axios/axios)

## Estrutura de pastas

```bash
src 
  Components/
    GoBack.tsx
  Pages/
    _app.tsx
    _document.tsx
    index.tsx
    routes.tsx
    Pokedex/
      ListPokemon/
        ListPokemon.tsx
        ListPokemon.test.tsx
        styles.ts
      ShowPokemon/
        ShowPokemon.tsx
        ShowPokemon.test.tsx
        styles.ts
  Helpers/
    index.ts
  Repositories/
    index.ts
    rootReducer.ts
    rootSaga.ts
    Pokedex/
      actions.ts
      index.ts
      sagas.ts
      types.ts
  Utils/
    tests.tsx
  Services/
    api.ts
  styles/
    color.ts
    size.ts
    
```

## Requisitos

- [NodeJS v10 LTS](https://nodejs.org)
- [Yarn v1.17+](https://yarnpkg.com)

### Instalação para Desenvolvimento

- Instalar dependências do `package.json` usando Yarn:

    `yarn install`

- Executar servidor na url: http://localhost:3000

    `yarn dev`

- Executar testes do projeto:

    `yarn test`

## Layout

- Obs: O layout foi adaptado para atender o retorno da API

Listagem dos pokemons: 

![Lista de pokemons](https://cdn-images-1.medium.com/max/1200/1*_JK-IZaQqRRp6WGc3Y_nUA.png)

Visualização do pokemon: 

![Charmander](https://cdn-images-1.medium.com/max/800/1*JEV-C7ON6sZCcsiDZ1sE1A.png)
  
## Informações gerais

- O projeto foi iniciado com `create-react-app`.
- Usar algum editor que tenha suporte ao `editorConfig`.
- Utilizado a API [PokéAPI](https://pokeapi.co/)
