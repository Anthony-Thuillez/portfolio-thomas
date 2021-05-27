import React from 'react'
import styled from 'styled-components'
import Tag from '../atoms/Tag'
import ArrowIcon from '../atoms/ArrowIcon'
import { Breakpoint, Color } from '../../styles/variables'

const ExperienceCardStyled = styled.a`
  padding: 18px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: solid 1px ${Color.border2};

  @media screen and (max-width: ${Breakpoint.xs}) {
    align-items: flex-start;
  }

  &:hover {
    svg {
      transform: rotate(45deg);
    }
  }

  svg {
    transition: transform 0.4s ease-in-out;
  }

  .info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 55%;

    @media screen and (max-width: ${Breakpoint.xs}) {
      flex-direction: column;
      width: 45%;
    }

    div {
      padding-right: 10px;
      width: 50%;

      @media screen and (max-width: ${Breakpoint.xs}) {
        width: 100%;
      }

      &:first-child {
        @media screen and (max-width: ${Breakpoint.xs}) {
          margin-bottom: 1px;
        }
      }
    }
  }

  .date {
    width: calc(45% - 13px);

    @media screen and (max-width: ${Breakpoint.xs}) {
      width: 100%;
      width: calc(55% - 13px);
    }
  }
`

export default function ExperienceCard({ name, location, date, actualJob, website }) {

  return (
    <ExperienceCardStyled href={ website }>
      <div className="info">
        <div>{ name }</div>
        <div>{ location }</div>
      </div>
      <div className="date">
        <Tag text={date + (actualJob ? ' - TODAY' : '' )} />
      </div>
      <ArrowIcon />
    </ExperienceCardStyled>
  )
}
