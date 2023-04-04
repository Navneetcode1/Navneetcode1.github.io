import { Box,Flex,Heading,Button,Text } from '@chakra-ui/react'
// import '../App.css'
import "../Utils/Projects.css"
import {BsGithub} from 'react-icons/bs'
import {VscLinkExternal} from 'react-icons/vsc'


const Projects = ({Name,codeUrl,Images,liveUrl,descLine,techstacks}) => {


  return (
    <Box className="Project_Box3-dark"  class="project-card">
          <Box className='project_image-dark'>
            <img src={Images} alt="s" width="100%" height="150px" className="Project_image-dark" />
          </Box>
      <Box gap='auto' textAlign='center' className="Flex_box-dark">
        <Box className="project_desc_box-dark">
        <Box >
          <Heading marginBottom='0px' as='h2'  class="project-title">{Name}</Heading>
          <Box textAlign='left' className="descBox2-dark" class="project-description" >
            <p  class="project-description">{descLine}</p>
          </Box>
          <Box className="Techstack2-dark"  class="project-tech-stack">
            <Text> <span color='blue'  class="project-tech-stack">Tech Stack: </span> {techstacks}</Text>
          </Box>
          <Flex justifyContent='space-evenly' textDecoration='none' class="project-deployed-link">
            <a href={liveUrl} target='blank' class="project-deployed-link">
            <Button className="liveButton-dark" class="project-deployed-link"><VscLinkExternal/> Live</Button>
            </a>
            <a href={codeUrl} target='blank' class="project-github-link"> 
            <Button className="liveButton-dark" class="project-github-link"><BsGithub/> View Code</Button></a>
          </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}


export default Projects
