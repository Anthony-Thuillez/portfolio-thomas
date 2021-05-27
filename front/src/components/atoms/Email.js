import React, { useState } from 'react'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const EmailStyled = styled.span`
  position: relative;
  cursor: pointer;

  &:before {
    position: absolute;
    padding: 4px;
    top: ${ ({ tooltip }) => tooltip ? '-150%' : '-50%' };
    left: 50%;
    content: 'Copied.';
    font-size: 14px;
    transform: translateX(-50%);
    opacity: ${ ({ tooltip }) => tooltip ? '1' : '0' };
    pointer-events: ${ ({ tooltip }) => tooltip ? 'auto' : 'none' };
    transition: top 0.25s ease-in,
    opacity 0.2s ease-in;
  }
`

export default function Email({ email }) {

  const [copied, setCopied] = useState(false)

  function handleCopy() {
    if ( !copied ) {
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 1000);
    }
  }

  return (
    <CopyToClipboard
      text={ email }
      onCopy={ () => handleCopy() }
    >
      <EmailStyled className="email" tooltip={ copied }>
        { email }
      </EmailStyled>
    </CopyToClipboard>
  )
}
