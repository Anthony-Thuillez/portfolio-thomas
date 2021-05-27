import React, { useContext } from 'react'
import styled from 'styled-components'
import { AnimateContext } from '../../contexts/animate.context'

const BtnStyled = styled.div`
  user-select: none;
  cursor: pointer;
`

export default function MenuBtn() {

  const { dispatch } = useContext(AnimateContext)
  
  return (
    <BtnStyled
      onMouseEnter={ () => dispatch({ type: 'SET_MENU_BTN_IS_FOCUS', value: true }) }
      onMouseLeave={ () => dispatch({ type: 'SET_MENU_BTN_IS_FOCUS', value: false }) }
      onClick={ () => dispatch({ type: 'SET_SIDE_MENU_IS_OPEN', value: true }) }
    >
      Info
    </BtnStyled>
  )
}
