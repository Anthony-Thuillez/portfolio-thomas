import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { AnimateContext } from '../../contexts/animate.context'
import { Wrapper } from '../../styles/global'
import { Breakpoint, Color, FontFamily } from '../../styles/variables'
import BoratGif from '../../img/borat.gif'
import ArrowSvg from '../../img/icons/arrow.svg'
import ExperienceCard from '../molecules/ExperienceCard'

const IndicatorMenu = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${ ({ menuBtnIsFocus, sideMenuIsOpen }) => menuBtnIsFocus && !sideMenuIsOpen ? '0' : '-30px' };
  height: 100%;
  width: 30px;
  background: ${Color.yellow};
  content: '';
  transition: right 0.3s ease-in-out;
`

const SideMenuStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50%;
  background: ${Color.yellow};
  overflow-y: auto;

  @media screen and (max-width: ${Breakpoint.m}) {
    width: 100%;
  }
`

const SideMenuContent = styled(Wrapper)`
  padding-top: 38px;
  padding-bottom: 100px;
`

const BtnStyled = styled.div`
  margin-left: auto;
  margin-bottom: 43px;
  user-select: none;
  cursor: pointer;
`

const TextStyled = styled.div`
  margin-bottom: 100px;
  font-family: ${FontFamily.mainBold};
  font-size: 3.5vw;

  @media screen and (max-width: ${Breakpoint.m}) {
    margin-bottom: 60px;
    font-size: 32px;
  }

  a {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;

    &:after {
      margin-left: 1px;
      display: block;
      width: 13px;
      height: 13px;
      background-image: url(${ArrowSvg});
      content: '';
    }
  }

  svg {
    margin-left: 1px;
  }
`

const TextTitle = styled.div`
  margin-bottom: 15px;
  font-family: ${FontFamily.mainBold};
  font-size: 2.1vw;

  @media screen and (max-width: ${Breakpoint.m}) {
    font-size: 24px;
  }
`

const EasterEgg = styled.span`
  position: relative;
  font-family: ${FontFamily.secondary};
  white-space: nowrap;

  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-image: url(${BoratGif});
    background-size: 150%;
    background-position: top;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    content: '';
    cursor: none;
    transition: width 0.1s ease-in,
    height 0.1s ease-in;
  }

  &:hover {
    &:before {
      width: 120px;
      height: 120px;

      @media screen and (max-width: ${Breakpoint.m}) {
        width: 100px;
        height: 100px;
      }
    }
  }
`

const Contact = styled.div`
  margin-bottom: 100px;

  @media screen and (max-width: ${Breakpoint.m}) {
    margin-bottom: 60px;
  }

  a {
    &:not(:last-child) {
      &:after {
        content: ' · ';
      }
    }
  }
`

const Services = styled.div`
  margin-bottom: 90px;

  @media screen and (max-width: ${Breakpoint.m}) {
    margin-bottom: 50px;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;

    li {
      margin-bottom: 12px;
      padding-right: 10px;
      width: calc(100% / 3);

      @media screen and (max-width: ${Breakpoint.xs}) {
        width: calc(100% / 2);
      }
    }
  }
`

const Experiences = styled.div`
  border-top: 1px solid ${Color.border2};
`

export default function SideMenu({ intro, services, email, instagram, behance, experiences }) {

  const { state, dispatch } = useContext(AnimateContext)

  return (
    <>
      <IndicatorMenu
        menuBtnIsFocus={ state.menuBtnIsFocus }
        sideMenuIsOpen={ state.sideMenuIsOpen }  
      />
      <SideMenuStyled>
        <SideMenuContent>
          <BtnStyled onClick={ () => dispatch({ type: 'SET_SIDE_MENU_IS_OPEN', value: false }) }>
            Close
          </BtnStyled>
          <TextStyled>
              <ReactMarkdown>{ intro }</ReactMarkdown>
          </TextStyled>
          <TextTitle>
            You need a designer for your project ?
            <br/>
            Let’s collaborate and make <EasterEgg>great success</EasterEgg>.
          </TextTitle>
          <Contact>
            <a href={ email } target="_blank" rel="noreferrer">email</a>
            <a href={ instagram } target="_blank" rel="noreferrer">instagram</a>
            <a href={ behance } target="_blank" rel="noreferrer">behance</a>
          </Contact>
          <TextTitle>Services</TextTitle>
          <Services>
            <ReactMarkdown>{ services }</ReactMarkdown>
          </Services>
          <TextTitle>Experiences</TextTitle>
          <Experiences>
            {
              experiences.map((experience) => (
                <ExperienceCard
                  key={ experience.id }
                  name={ experience.client }
                  location={ experience.location }
                  date={ experience.date }
                  actualJob={ experience.actual_job }
                  website={ experience.website }
                />
              ))
            }
          </Experiences>
        </SideMenuContent>
      </SideMenuStyled>
    </>
  )
}
