import React from 'react'
import '../App.css'
import "../Utils/Navbar.css"
import {Box,Flex,Heading,Button,Text} from '@chakra-ui/react'


const Navbar = () => {

const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
}
  const scrollToAbout = () => {
    window.scrollTo({
      top: 450,
      behavior: 'smooth',
    });
  };

  const scrollToProjects = () => {
    window.scrollTo({
      top: 980,
      behavior: 'smooth',
    });
  };

  const scrollToSkills = () => {
    window.scrollTo({
      top: 2050,
      behavior: 'smooth',
    });
  };


  const scrollToContact = () => {
    window.scrollTo({
      top: 200000,
      behavior: 'smooth',
    });
    
    }

  return (
   
    <div className='Laptop-view' id="nav-menu">
      <Box display='flex' >
        <p style={{fontSize:'40px',margin: '0px',marginLeft: '20px',fontFamily: 'cursive'}}>Navneet</p>
         <Flex gap={60}  margin='auto auto auto auto' >
          <Heading as='h3' className='Link_btns-dark' id="nav-link home" onClick={scrollToHome}>Home</Heading>
          <Heading as='h3' className='Link_btns-dark' id="about" class="about-section" onClick={scrollToAbout}>AboutMe</Heading>
          <Heading as='h3' className='Link_btns-dark' id="projects" onClick={scrollToProjects}>Projects</Heading>
          <Heading as='h3' className='Link_btns-dark' id="skills" onClick={scrollToSkills}>Skills</Heading>
          <Heading as='h3' className='Link_btns-dark' id="contact" onClick={scrollToContact}>Contact</Heading>
          <a href="https://drive.google.com/file/d/1itS6azP58xHqeWGK68fR6s32DrJm352F/view?usp=sharing">
          <Heading textDecoration="none" color="white" as="h4" className='Link_btns-dark'  class="nav-link resume">Resume</Heading></a>
          </Flex>
        </Box> 
      </div>
   
  )
}

export default Navbar
