import React from 'react'
import '../App.css' 
import {Box,Heading,Text} from '@chakra-ui/react'


const About = () => {

  return (
    <Box className="about section" id="about"  class="nav-link about"  > 
    
        <Heading ml={{base:"5%",md:"10%",lg:"50%"}} as='h1' width="13%" marginLeft='10%' borderBottom='4px solid #a1a1a1' mt='0px'  class="nav-link home" id="user-detail-intro">About Me</Heading>
        <Box className='About_box' data-aos="fade-up" class="nav-link about">
        <Box id="user-detail-intro">
        <Text>
        Hello! My name is Navneet Burman & I enjoy creating things that live on the internet. I'm a passionate Developer, with strong administrative & communication skills, good attention to details & the ability to write efficient code.
        </Text>
        <Text>
        My field of interest are building new Web Technologies and Products and also in areas related to Deep Learning and Natural Launguage Processing.
        </Text>
        <Text>
        I have clear, logical mind with a practical approach to problem-solving and a drive to see things through to completion. I have work experience in multiple project and clone project with team collaboration.
        </Text>
        <a id="resume-link-2"  href="https://drive.google.com/file/d/1itS6azP58xHqeWGK68fR6s32DrJm352F/view?usp=sharing">
          <Text id="resume-button-2">Resume</Text>
        </a>
       
       
        </Box>
        </Box>
      
    </Box>
  )
}

export default About
