
import styled from 'styled-components'
import { Color } from '../../../styles/color'
import { Size } from '../../../styles/size'

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${Color.borders};
  padding-bottom: 20px;
  margin-bottom: 30px;
`

export const Container = styled.div`
  background: ${Color.main};
  border-radius: 5px;
  padding: 25px;
  max-width: ${Size.maxScreen};
  margin: 60px auto;
`

export const ImagePokemon = styled.img`
  flex-grow: 1;
  justify-content: right;
  max-width: 340px;
  margin-right: 10px;
`

export const NamePokemon = styled.h2`
  flex-grow: 1;
  text-align: left;
`

export const StatsContainer = styled.div`
  margin: 10px;
`

export const StatsSubTitle = styled.strong`
  min-width: 150px;
  display: inline-block;
`