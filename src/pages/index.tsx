import React from 'react'

import Container from '../components/Container'
import Projects from '../components/Projects'
import About from '../components/About'
import LatestPosts from '../components/LatestPosts'

const Index = () => {
  return (
    <Container>
      <About />
      <Projects />
      <LatestPosts />
    </Container>
  )
}

export default Index
