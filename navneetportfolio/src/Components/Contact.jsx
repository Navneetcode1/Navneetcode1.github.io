import React from 'react'
import {Box,Heading,Text,Input,Textarea,Button, Flex} from '@chakra-ui/react'
import "../App.css"
import "../Utils/Help.css"
import {AiOutlineCopyright} from 'react-icons/ai'

const Contact = () => {

  return (
    <Box className='contact' >
        <Box className='box2a' class="nav-link contact">
        <Input className='box2aInput' placeholder='Enter Name'></Input>
        <Input className='box2aInput' placeholder='Enter Email Address'></Input>
        <Textarea className='box2aInput' placeholder='Enter Your Message' type="textarea"></Textarea>
        <Button className='Resume_btn' margin="auto">Let's talk</Button>
        </Box>
      <Text textAlign="center" color='white' m='0px' pb='5px'> Contact :- +91 8617555571</Text>
      <Text textAlign="center" color='white' m='0px' pb='5px'> Email :navneetburman900@gmail.com</Text>
      <Text textAlign="center" color='white' m='0px' pb='5px'>Designed and build by Navneet Burman,<AiOutlineCopyright/> 2022 All rights reserved </Text>
    </Box>
  )
}

export default Contact
