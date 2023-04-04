import React from 'react'
import '../App.css';
import {Box,Heading,Image,Flex,Text,HStack} from "@chakra-ui/react"
import {FaNodeJs,FaReact} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import {AiFillHtml5} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"


const ProfileContainer = () => {

  return (
    <Box className='HeaderArea-dark' >
      
        <Flex flexDirection='column' align='center' padding={20} className='profileBx1'>
        <Box> 
         <Text>Hello I'm</Text> 
        <Heading margin={-5} className="mainHeading">Navneet Burman</Heading>
        <Heading as='h3' size={['sm', 'md', 'lg', 'xl']} >Full Stack Web Developer</Heading>
        </Box>
        <HStack fontSize='60px' className='icons' data-aos="fade-right">
          <Text> <TbBrandJavascript/></Text>
          <Text> <FaReact/></Text>
          <Text> <BsGithub/></Text>
          <Text> <AiFillHtml5/></Text>
          <Text> <FaNodeJs/></Text>
        </HStack>
        </Flex>
      
        <Box marginLeft='-8%'>
          <Image  src='https://avatars.githubusercontent.com/u/110229662?v=4' zIndex="100%" blur="3xl" alt='Navneet Burman' className='photo_image' size={['sm', 'md', 'lg', '4xl']}/>
        </Box>
        
      </Box>
      
  )
}

export default ProfileContainer
