import React, { useContext, useEffect, useState, useRef } from 'react'

import styled from 'styled-components'
import { AnimateContext } from '../../contexts/animate.context'
import { Wrapper } from '../../styles/global'
import { Breakpoint, Color } from '../../styles/variables'

import Hero from '../organisms/Hero'
import Project from '../organisms/Project'
import SideMenu from '../organisms/SideMenu'
import Footer from '../organisms/Footer'

import { getPersonalInformations } from '../../api/about'
import { getExperiences } from '../../api/experiences'
import { getProjects } from '../../api/projects'

const Loader = styled.div`
  height: 100vh;
  background: ${Color.lightgrey};
`

const PageStyled = styled.div`
  z-index: 1;
  position: relative;
  height: 100vh;
  overflow-y: ${ ({ sideMenuIsOpen }) => sideMenuIsOpen ? 'hidden !important' : 'auto' };
  transform: ${ ({ sideMenuIsOpen }) => sideMenuIsOpen ? 'translateX(-50%)' : 'translateX(0)' };
  transition: transform 0.6s ease-in-out;

  @media screen and (max-width: ${Breakpoint.m}) {
    transform: ${ ({ sideMenuIsOpen }) => sideMenuIsOpen ? 'translateX(-100%)' : 'translateX(0)' };
  }
`

const MainContent = styled.div`
  z-index: 2;
  position: relative;
  padding-top: 38px;
  padding-bottom: 100px;
  background: ${Color.lightgrey};
`

const ProjectList = styled.div`
  margin-top: -80px;

  @media screen and (max-width: ${Breakpoint.m}) {
    margin-top: -58px;
  }

  @media screen and (max-width: ${Breakpoint.xs}) {
    margin-top: -80px;
  }
`

export default function Page() {
  const {state, dispatch} = useContext(AnimateContext)
  const [about, setAbout] = useState(null)
  const [experiences, setExperiences] = useState(null)
  const [projects, setProjects] = useState(null)
  const pageRef = useRef(null)

  useEffect(() => {
    getPersonalInformations(setAbout)
    getExperiences(setExperiences)
    getProjects(setProjects)
  }, [])

  function handleScroll(e) {
    const pageY = e.target.scrollTop
    if ( pageY <= 0 ) {
      dispatch({ type: 'SET_ON_FIRST_SCROLL', value: false })
    } else {
      dispatch({ type: 'SET_ON_FIRST_SCROLL', value: true })
    }
  }

  return (
    <>
      { (about && experiences && projects ) ? (
        <>
          <PageStyled
            ref={pageRef}
            sideMenuIsOpen={ state.sideMenuIsOpen }
            onScroll={ (e) => handleScroll(e) }
          >
            <MainContent>
              <Wrapper>
                <Hero
                  pageRef={pageRef}
                  who={about.who}
                  what={about.what}
                  where={about.where}
                  email={about.email}
                />
                <ProjectList>
                {
                  projects.map((project, i) => (
                    <Project
                      key={ i }
                      id={ i }
                      isOpen={ project.id <= 3 ? true : false }
                      title={ project.title }
                      date={ project.date }
                      client={ project.client }
                      images={ project.images }
                    />
                  ))
                }
                </ProjectList>
              </Wrapper>
            </MainContent>
            <Footer 
              email={about.email}
              instagram={about.instagram}
              behance={about.behance}
            />
          </PageStyled>
          <SideMenu
            email={about.email}
            instagram={about.instagram}
            behance={about.behance}
            intro={about.intro}
            services={about.services}
            experiences={experiences}
          />
        </>
      ) : <Loader /> }
    </>
  )
}
