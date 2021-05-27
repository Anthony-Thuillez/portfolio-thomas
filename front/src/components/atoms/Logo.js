import React, { useContext } from 'react'
import styled from 'styled-components'
import { AnimateContext } from '../../contexts/animate.context'
import { Color, FontFamily } from '../../styles/variables'

const LogoStyled = styled.a`
  position: relative;
  margin: 0 -20px;
  padding: ${ ({ menuBtnIsFocus, sideMenuIsOpen }) => menuBtnIsFocus && !sideMenuIsOpen ? 0 : '0 20px' };
  background: ${ ({ background }) => background };
  font-family: ${FontFamily.mainBold};
  user-select: none;
  transition: padding 0.3s ease-in-out;

  &:before {
    z-index: -1;
    position: absolute;
    left: 27px;
    color: ${Color.yellow};
    white-space: nowrap;
    content: 'thomas boyer-gibaud';
  }
`

export default function Logo({ background }) {

  const { state } = useContext(AnimateContext)

  return (
    <LogoStyled
      href="#"
      menuBtnIsFocus={ state.menuBtnIsFocus }
      sideMenuIsOpen={ state.sideMenuIsOpen }
      background={ background }
    >
      thomas boyer-gibaud
    </LogoStyled>
  )
}
