import { Box, Heading, List } from '@chakra-ui/core'
import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" size="xl">
        Projects
      </Heading>

      <List>
        <ProjectItem
          title="COVID-19 Tracker"
          summary="🦠 React app for tracking COVID-19 in India"
          url="https://track-covid19.aswink.in"
        />
      </List>
    </Box>
  )
}

export default Projects
