import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Color } from '../../styles/variables'

const AnimateHr = keyframes`
  0% { top: 50px; }
  100% { top: 0; }
`

const AfterAnimateHr = keyframes`
  0% { background: ${Color.lightgrey}; }
  100% { background: none; }
`

const StyledSeparator = styled.span`
  z-index: 1;
  position: relative;
  display: block;
  top: 50px;
  height: 1px;
  background: ${Color.border};

  &:before,
  &:after {
    position: absolute;
    content: '';
    height: 20px;
    width: 100%;
    background: ${Color.lightgrey};
  }

  &:before {
    top: -20px;
  }

  &:after {
    bottom: -20px;
  }

  &.animate {
    animation: ${AnimateHr} 0.5s ease-out forwards;

    &:before,
    &:after {
      animation: ${AfterAnimateHr} 0s 0.5s forwards;
    }
  }
`

export default function Separator() {
  return (
    <StyledSeparator className="js-separator-animate" />
  )
}
