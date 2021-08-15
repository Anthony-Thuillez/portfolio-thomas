import React from 'react'
import { API_ADDRESS } from '../../api/config'
import styled from 'styled-components'
import { Breakpoint, FontFamily } from '../../styles/variables'
import Separator from '../atoms/Separator'
import Tag from '../atoms/Tag'
import ArrowIcon from '../atoms/ArrowIcon'

const Card = styled.div`
  overflow: hidden;
  padding: 20px 0 26px;
  cursor: pointer;

  &:hover {
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
  transform: translateY(-4px);
`

const SliderImages = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
`

const Slide = styled.div`
  width: calc((100% - ( 3 * 13px )) / 4);

@media screen and (min-width: 1201px) {
    &:not(:nth-child(4n)) {
      margin-right: 13px;
    }

    &:nth-child(n+5) {
      margin-top: 17px;
    }
  }
  
  @media screen and (min-width: 751px) and (max-width: ${Breakpoint.l}) {
    width: calc((100% - ( 2 * 13px )) / 3);

    &:not(:nth-child(3n)) {
      margin-right: 13px;
    }

    &:nth-child(n+4) {
      margin-top: 17px;
    }
  }

  @media screen and (min-width: 421px) and (max-width: ${Breakpoint.s}) {
    width: calc((100% - 13px) / 2);

    &:not(:nth-child(2n)) {
      margin-right: 13px;
    }

    &:nth-child(n+3) {
      margin-top: 17px;
    }
  }

  @media screen and (max-width: 420px) {
    width: 100%;

    &:not(:first-child) {
      margin-top: 17px;
    }
  }  
`

const ImgContainer = styled.div`
  position: relative;
  padding: 73.43% 0 0 0; /* 73.43% = 100 / (w / h) = 100 / (320 / 235) */
  display: block;
  width: 100%;
  height: auto;
  overflow: hidden;

  &:hover {
    img {
      filter: grayscale(0);
    }
  }

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    filter: grayscale(100%);
    transition: filter 0.2s ease-in-out;
  }
`

const ImgName = styled.div`
  padding: 15px 0 8px;
  font-size: 14px;
`

export default function Project({ title, date, client, images, handleClick, isActive }) {
  
  return (
    <>
      <Card isActive={isActive} className="projectCard js-projectCard" onClick={handleClick}>
        <CardHeader>
          <CardTitle>{ title }</CardTitle>
          <Tag position="translate(0, -6px)" text={ date } />
          <CardText>{ client }</CardText>
          <div className="icon">
            <ArrowIcon />
          </div>
        </CardHeader>
        <SliderImages className="projectGallery">
        {
          images.map((image) => (
            <Slide key={ image.id }>
              <ImgContainer>
                <img src={API_ADDRESS + image.url} alt={ image.name } />
              </ImgContainer>
              <ImgName>{ image.name }</ImgName>
            </Slide>
          ))
        }
        </SliderImages>
      </Card>
      <Separator/>
    </>
  )
}
