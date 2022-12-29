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
  };
  return (
    <>
    <Box className='Laptop-view'>
      <Box display='flex' >
        <p style={{fontSize:'40px',margin: '0px',marginLeft: '20px',fontFamily: 'cursive'}}>Navneet</p>
         <Flex gap={60}  margin='auto auto auto auto' >
          <Heading as='h3' className='Link_btns-dark' onClick={scrollToHome}>Home</Heading>
          <Heading as='h3' className='Link_btns-dark' onClick={scrollToAbout}>AboutMe</Heading>
          <Heading as='h3' className='Link_btns-dark' onClick={scrollToProjects}>Projects</Heading>
          <Heading as='h3' className='Link_btns-dark' onClick={scrollToSkills}>Skills</Heading>
          <Heading as='h3' className='Link_btns-dark' onClick={scrollToContact}>Contact</Heading>
          </Flex>
        </Box> 
      </Box>
    </>
  )
}

export default Navbar
