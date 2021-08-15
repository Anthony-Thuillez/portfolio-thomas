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

  @media screen and (min-width: 481px) and (max-width: ${Breakpoint.m}) {
    margin-top: -58px;
  }

  & > hr:first-child {
    position: relative;
    top: -1px;
  }

  .projectCard:nth-of-type(n+4) {
    max-height: 105px;
    transition: max-height 0.4s ease-in-out 0s;

    @media screen and (max-width: ${Breakpoint.m}) {
      max-height: 83px;
    }

    &:hover {
      max-height: 224px;
      transition: max-height 0.4s ease-in-out 0.5s;
    }
  }
`

export default function Page() {
  const {state, dispatch} = useContext(AnimateContext)
  const [about, setAbout] = useState(null)
  const [experiences, setExperiences] = useState(null)
  const [projects, setProjects] = useState(null)
  const [currentProject, setCurrentProject] = useState(null)
  const pageRef = useRef(null)
  const separator = document.querySelectorAll('.js-separator-animate')

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

    const {scrollTop, clientHeight} = document.documentElement

    for (let i = 0; i < separator.length; i++) {
      const element = separator[i];
      const topElementToTopViewport = element.getBoundingClientRect().top
      
      if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.99 ) {
        element.classList.add('animate')
      }
    }
    
  }

  const handleClick = (e, projectId) => {
    const target = e.target
    const projectCard = target.closest('.js-projectCard')
    let y = projectCard.getBoundingClientRect().top + pageRef.current.scrollTop - 80
    pageRef.current.scrollTo({top: y, left: 0, behavior: 'smooth'})
    setCurrentProject(projectId)
  }

  return (
    <>
      { ( about && experiences && projects ) ? (
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
                  <hr/>
                  {
                    projects.map((project) => (
                      <Project
                        key={project.id}
                        title={project.title}
                        date={project.date}
                        client={project.client}
                        images={project.images}
                        handleClick={(e) => handleClick(e, project.id)}
                        isActive={project.id === currentProject}
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
