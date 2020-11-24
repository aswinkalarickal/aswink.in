import React from 'react'

import Layout from '../components/Layout'
import Projects from '../components/Projects'
import About from '../components/About'
import LatestPosts from '../components/LatestPosts'

const Index = () => {
  return (
    <Layout>
      <About />
      <Projects />
      <LatestPosts />
    </Layout>
  )
}

export default Index
