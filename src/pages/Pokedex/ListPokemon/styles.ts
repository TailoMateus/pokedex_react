import styled from 'styled-components'
import { Size } from '../../../styles/size'
import { Color } from '../../../styles/color'

export const Container = styled.div`
  max-width: ${Size.maxScreen};
  margin: 60px auto;
`

export const ListContainer = styled.ul`
  margin-top: 60px;
  padding: 0;
`

export const ListItems = styled.li`
  font-size: ${Size.text};
  list-style: none;
  margin: 18px 0;
  border: 1px solid ${Color.borders};
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`