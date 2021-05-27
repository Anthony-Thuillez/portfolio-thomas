import React from 'react'
import styled from 'styled-components'
import { Color, FontFamily } from '../../styles/variables'

const TagStyled = styled.div`
  padding: 4px 8px 0;
  display: inline-block;
  font-family: ${FontFamily.secondary};
  font-size: 14px;
  line-height: normal;
  border: solid 1px ${Color.textcolor};
  border-radius: 15px;
  transform: ${ ({ position }) => position ? position : 'translate(0, 0)' };
`

export default function Tag({ className, position, text }) {
  return (
    <TagStyled className={className} position={position}>
      {text}
    </TagStyled>
  )
}
