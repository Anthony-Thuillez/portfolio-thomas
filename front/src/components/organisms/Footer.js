import React from 'react'
import styled from 'styled-components'
import { Breakpoint, Color, FontFamily } from '../../styles/variables'
import { Wrapper, Navigation } from '../../styles/global'

import Logo from '../atoms/Logo'
import MenuBtn from '../atoms/MenuBtn'
import Email from '../atoms/Email'

const FooterStyled = styled.footer`
  z-index: 1;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 38px 0 150px;
  height: 100vh;
  background: ${Color.red};
`

const FooterText = styled.p`
  max-width: 65%;
  font-family: ${FontFamily.mainBold};
  font-size: 5.6vw;

  @media screen and (max-width: ${Breakpoint.s}) {
    font-size: 42px;
  }

  @media screen and (max-width: ${Breakpoint.xs}) {
    max-width: 90%;   
  }

  span {
    font-family: ${FontFamily.secondary};
  }
`

const FooterBottom = styled.div`
  margin-top: auto;
  padding-bottom: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px ${Color.border2};

  @media screen and (max-width: ${Breakpoint.m}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Copyright = styled.div`
  @media screen and (max-width: ${Breakpoint.m}) {
    margin-bottom: 10px;
  }

  @media screen and (max-width: ${Breakpoint.xs}) {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  span:first-child {
    margin-right: 30px;

    @media screen and (max-width: ${Breakpoint.xs}) {
      margin-right: 0;
      margin-bottom: 5px;
    }
  }
`

const Contact = styled.div`
  @media screen and (max-width: ${Breakpoint.xs}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  a {
    @media screen and (max-width: ${Breakpoint.xs}) {
      margin-bottom: 5px;
    }

    &:after {
      content: ' · ';

      @media screen and (max-width: ${Breakpoint.xs}) {
        content: none;
      }
    }
  }
`

export default function Footer({ email, instagram, behance }) {

  return (
    <FooterStyled>
      <Wrapper>
        <Navigation>
          <Logo background={ Color.red } />
          <MenuBtn />
        </Navigation>
        <FooterText>
          Let’s make <span>something</span> together.
        </FooterText>
        <FooterBottom>
          <Copyright>
            <span>©thomasboyergibaud 2021</span>
            <span>Many thanks</span>
          </Copyright>
          <Contact>
            <a href={ instagram } target="_blank" rel="noreferrer">instagram</a>
            <a href={ behance } target="_blank" rel="noreferrer">behance</a>
            <Email email={ email } />
          </Contact>
        </FooterBottom>
      </Wrapper>
    </FooterStyled>
  )
}
