import React, { useContext } from 'react'
import styled from 'styled-components'
import { AnimateContext } from '../../contexts/animate.context'
import { Breakpoint, Color, FontFamily } from '../../styles/variables'
import Tag from '../atoms/Tag'
import ArrowIcon from '../atoms/ArrowIcon'

const Card = styled.div`
  overflow: hidden;
  padding: 20px 0 26px;
  height: ${ ({ isOpen }) => isOpen ? '407px' : '106px' };
  border-bottom: solid 1px ${Color.border};
  cursor: pointer;
  transition: height 0.4s ease-in-out 0s;
  // background: ${ ({ projectIsOpen }) => projectIsOpen ? 'red' : 'none' };

  @media screen and (max-width: ${Breakpoint.m}) {
    height: ${ ({ isOpen }) => isOpen ? '384px' : '84px' };
  }

  &:hover {
    height: ${ ({ isOpen }) => isOpen ? '407px' : '206px' };
    transition: height 0.4s ease-in-out 0.5s;

    @media screen and (max-width: ${Breakpoint.m}) {
      height: ${ ({ isOpen }) => isOpen ? '384px' : '188px' };
    }

    .icon {
      svg {
        transform: rotate(45deg);
      }
    }
  }

  .icon {
    margin: auto 0;

    svg {
      transition: transform 0.4s ease-in-out;
    }
  }
`

const CardHeader = styled.div`
  padding-right: 3px;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  flex-wrap: wrap;
  overflow: hidden;
`

const CardTitle = styled.div`
  margin-right: 12px;
  font-family: ${FontFamily.mainBold};
  font-size: 50px;

  @media screen and (max-width: ${Breakpoint.m}) {
    font-size: 32px;
  }

  & + div {
    margin-right: 12px;
  }
`

const CardText = styled.div`
  margin-right: auto;

  @media screen and (max-width: ${Breakpoint.xs}) {
    width: calc(100% - 13px);
  }
`

const SliderImages = styled.div`
  position: relative;
  margin-top: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`

const Slide = styled.div`
  width: calc((100% - ( 3 * 13px )) / 4);

  &:not(:last-child) {
    margin-right: 13px;
  }
`

const ImgContainer = styled.div`
  height: 235px;

  &:hover {
    img {
      filter: grayscale(0);
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.2s ease-in-out;
  }
`

const ImgName = styled.div`
  padding: 15px 0 8px;
  font-size: 14px;
`

export default function Project({ isOpen, id, title, date, client, images }) {
  const {state, dispatch} = useContext(AnimateContext)


  function handleClick(e) {
    const target = e.target.offsetParent.offsetParent
    let pageY

    if ( id < 3 ) {
      pageY = 479 + id * 407
    } else {
      pageY = 479 + 3 * 407 + ( id - 3 ) * 106
    }

    target.scrollTo({
      left: 0,
      top: pageY,
      behavior: 'smooth'
    })

    dispatch({ type: 'SET_PROJECT_IS_OPEN', value: true })
  }
  
  return (
    <Card projectIsOpen={ state.projectIsOpen } isOpen={isOpen} onClick={(e) => handleClick(e)}>
      <CardHeader>
        <CardTitle>{ title }</CardTitle>
        <Tag position="translate(0, -6px)" text={ date } />
        <CardText>{ client }</CardText>
        <div className="icon">
          <ArrowIcon />
        </div>
      </CardHeader>
      <SliderImages>
      {
        images.map((image) => (
          <Slide key={ image.id }>
            <ImgContainer>
              <img src="https://i.skyrock.net/6372/90456372/pics/3211569297_1_4_3SYW6bhI.jpg" alt={ image.name } />
            </ImgContainer>
            <ImgName>{ image.name }</ImgName>
          </Slide>
        ))
      }
      </SliderImages>
    </Card>
  )
}
