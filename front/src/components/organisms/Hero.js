import React, { useState, useEffect, useContext, useRef } from 'react'
import { TimelineMax, Expo } from 'gsap'
import styled from 'styled-components'
import parse from 'html-react-parser'
import { AnimateContext } from '../../contexts/animate.context'
import { Breakpoint, Color, FontFamily } from '../../styles/variables'
import { Navigation } from '../../styles/global'

import Logo from '../atoms/Logo'
import MenuBtn from '../atoms/MenuBtn'
import Tag from '../atoms/Tag'
import Email from '../atoms/Email'

const HeroStyled = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 38px - 150px);
  background: ${Color.lightgrey};
  transform: ${ ({ firstScroll }) => firstScroll ? 'translateY(-80px)' : 'translateY(0)' };
  transition: transform 0.6s ease-in-out;

  @media screen and (max-width: ${Breakpoint.m}) {
    transform: ${ ({ firstScroll }) => firstScroll ? 'translateY(-58px)' : 'translateY(0)' };
  }

  @media screen and (max-width: ${Breakpoint.xs}) {
    transform: ${ ({ firstScroll }) => firstScroll ? 'translateY(-80px)' : 'translateY(0)' };
  }
`

const Title = styled.div`
  font-family: ${FontFamily.mainBold};
  font-size: 5.6vw;
  line-height: 7.6vw;
  overflow: hidden;

  @media screen and (max-width: ${Breakpoint.s}) {
    font-size: 42px;
    line-height: 50px;
  }

  span:not(.tag) {
    display: inline-block;
    position: relative;
  }

  .font-secondary {
    line-height: 5.5vw;
  }

  .tag {
    margin-left: 5px;
  }
`

const HeroBottom = styled.div`
  margin-top: auto;
  padding: 27px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px ${Color.border};

  .email {
    @media screen and (max-width: ${Breakpoint.xs}) {
      display: none;
    }
  }
`

export default function Hero({ pageRef, who, what, where, email }) {
  const { state } = useContext(AnimateContext)
  const [whoModified, setWhoModified] = useState('')
  const navRef = useRef(null)
  const whoRef = useRef(null)
  const whatRef = useRef(null)
  const whereRef = useRef(null)
  const heroBottomRef = useRef(null)
  const tl = new TimelineMax()

  useEffect(() => {
    setWhoModified(getLastWord(who))
    letsAnimate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [who, what, where])

  function getLastWord(words) {
    const text = words.split(' ')
    const last = text.pop()
    return text.join(' ') + (text.length > 0 ? ' <span class="font-secondary">' + last + '</span>' : last)
  }

  function letsAnimate() {
    tl
    .set(pageRef.current, {
      overflowY: "hidden"
    })
    .staggerFrom([whoRef.current, whatRef.current, whereRef.current], 2.4, {
      y: '100%',
      ease: Expo.easeOut
    }, 0.1)
    .from(navRef.current, 1, {
      opacity: 0,
      y: '20px',
      ease: Expo.easeOut
    }, '-=1.2')
    .from(heroBottomRef.current, 1, {
      opacity: 0,
      y: '20px',
      ease: Expo.easeOut
    }, '-=0.8')
    .set(pageRef.current, {
      overflowY: "auto"
    }, '-=0.8')
  }

  return (
    <HeroStyled firstScroll={ state.firstScroll }>
      <Navigation ref={navRef}>
        <Logo background={ Color.lightgrey } />
        <MenuBtn />
      </Navigation>
      <Title>
        <span ref={whoRef}>{ parse(whoModified) }</span>
        <Tag className="tag" position="translate(0, -6px)" text="who" />
      </Title>
      <Title>
        <span ref={whatRef}>{ what }</span>
        <Tag className="tag" position="translate(0, -6px)" text="what" />
      </Title>
      <Title>
        <span ref={whereRef}>{ where }</span>
        <Tag className="tag" position="translate(0, -6px)" text="where" />
      </Title>
      <HeroBottom ref={heroBottomRef}>
        <span>A collection of recent work ↓</span>
        <Email email={email} />
      </HeroBottom>
    </HeroStyled>
  )
}
