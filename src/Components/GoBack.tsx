import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Icon = styled(FontAwesomeIcon)`
  font-size: 32px;
  margin-bottom: 20px;
  cursor: pointer;
`

const GoBack = () => {
  const router = useRouter()

  const onClickBack = () => {
    router.push('/')
  }

  return (
    <Icon
      onClick={() => onClickBack()}
      icon={faAngleLeft}
    />
  )
}

export default GoBack