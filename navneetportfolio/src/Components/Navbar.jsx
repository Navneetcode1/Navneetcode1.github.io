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
   
    <div id="nav-menu" className='Laptop-view'>
      <Box display='flex' id="nav-menu" >
        <p style={{fontSize:'40px',margin: '0px',marginLeft: '20px',fontFamily: 'cursive'}}>Navneet</p>
         <Flex gap={60}  margin='auto auto auto auto' >
          <Heading as='h3'  className='nav-link home'  onClick={scrollToHome}>Home</Heading>
          <Heading as='h3' className='nav-link about' onClick={scrollToAbout}>AboutMe</Heading>
          <Heading as='h3' className='nav-link projects' onClick={scrollToProjects}>Projects</Heading>
          <Heading as='h3' className="nav-link skills" onClick={scrollToSkills}>Skills</Heading>
          <Heading as='h3' className='nav-link contact'  onClick={scrollToContact}>Contact</Heading>
          <a id="resume-link-1" href="https://drive.google.com/file/d/1itS6azP58xHqeWGK68fR6s32DrJm352F/view?usp=sharing">
          <Heading textDecoration="none"  color="white" as="h4"  className="nav-link resume"  id="resume-button-1">Resume</Heading><BiDownload /></a>
          </Flex>
        </Box> 
      </div>
   
  )
}

export default Navbar

// import { React, ReactNode, useEffect, useRef } from "react";
// import {
//   Box,
//   Flex,
//   Avatar,
//   Link,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   Input,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
//   useColorMode,
//   Center,
//   Text,
// } from "@chakra-ui/react";

// import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
// import { BiDownload } from "react-icons/bi";
// import DrawerExample from "./SideBar";
// // import { handleResume } from "./Home";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import Zoom from "react-reveal/Zoom";

// function handleResume() {
//   window.location.href = `https://drive.google.com/uc?export=download&id=1h1lan92QxkqGlsHdt9_KQ5UWXqLiyaer`;
// }

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

// export default function Navbar() {
//   useEffect(() => {
//     Aos.init({ duration: 2000, once: false, mirror: true, offset: 90 });
//   }, []);

//   const { colorMode, toggleColorMode } = useColorMode();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   useEffect(() => {
//     toggleColorMode("dark");
//   }, []);

//   const handleClickScroll = (value) => {
//     const element = document.getElementById(value);
//     if (element) {
//       // 👇 Will scroll smoothly to the top of the next section
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   console.log(colorMode);

//   return (
//     <>
//       <Box
//         id="nav-menu"
//         as="header"
//         bg={useColorModeValue("gray.100", "gray.900")}
//         px={4}
//         position="fixed"
//         w="100%"
//         zIndex={"1000"}
//         top={"0px"}
//       >
//         <Flex
//           h={16}
//           alignItems={"center"}
//           justifyContent={"space-between"}
//           m="auto"
//           width={"94%"}
//         >
//           <Box
//             className="fontClass"
//             w={{ base: "50%", sm: "20%" }}
//             fontSize={"32px"}
//           >
//             Parbhat
//           </Box>

//           <Flex
//             w="70%"
//             display={{ base: "none", lg: "block" }}
//             alignItems={"center"}
//             justifyContent="end"
//           >
//             <Flex
//               w="100%"
//               justifyContent={"space-between"}
//               direction={"row"}
//               fontSize="18px"
//               alignItems={"center"}
//             >
//               <Button
//                 onClick={() => {
//                   handleClickScroll("home");
//                 }}
//                 colorScheme="gray"
//                 variant="ghost"
//               >
//                 <Link className="nav-link home">
//                   <Flex alignItems={"center"}>
//                     <svg
//                       fill={colorMode === "light" ? "black" : "white"}
//                       width="19"
//                       height="19"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill-rule="evenodd"
//                       clip-rule="evenodd"
//                     >
//                       <path d="M6 23h-3v-10l8.991-8.005 9.009 8.005v10h-3v-9h-12v9zm1-2h10v2h-10v-2zm0-3h10v2h-10v-2zm10-3v2h-10v-2h10zm-5-14.029l12 10.661-1.328 1.493-10.672-9.481-10.672 9.481-1.328-1.493 12-10.661z" />
//                     </svg>
//                     <Text ml="10px">Home</Text>
//                   </Flex>
//                 </Link>
//               </Button>

//               <Button
//                 colorScheme="gray"
//                 onClick={() => {
//                   handleClickScroll("about");
//                 }}
//                 variant="ghost"
//               >
//                 <Link className="nav-link about">About</Link>
//               </Button>

//               <Button
//                 onClick={() => {
//                   handleClickScroll("skills");
//                 }}
//                 colorScheme="gray"
//                 variant="ghost"
//               >
//                 <Link className="nav-link skills">Skills</Link>
//               </Button>

//               <Button
//                 onClick={() => {
//                   handleClickScroll("projects");
//                 }}
//                 colorScheme="gray"
//                 variant="ghost"
//               >
//                 <Link className="nav-link projects">Projects</Link>
//               </Button>

//               <Button
//                 onClick={() => {
//                   handleClickScroll("contact");
//                 }}
//                 colorScheme="gray"
//                 variant="ghost"
//               >
//                 <Link className="nav-link contact">Contact</Link>
//               </Button>

//               <Button
//                 className="nav-link resume"
//                 onClick={handleResume}
//                 id="resume-button-1"
//                 colorScheme="teal"
//                 size="md"
//               >
//                 <a
//                   id="resume-link-1"
//                   href="https://drive.google.com/file/d/1h1lan92QxkqGlsHdt9_KQ5UWXqLiyaer/view"
//                   target="_blank"
//                 >
//                   <Flex alignItems={"center"} mr={"4px"} ml="10px">
//                     <Text mr="8px">Resume</Text> <BiDownload />
//                   </Flex>
//                 </a>
//               </Button>

//               <Button onClick={toggleColorMode}>
//                 {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
//               </Button>
//             </Flex>
//           </Flex>

//           <Box display={{ base: "block", lg: "none" }}>
//             <Flex
//               w="100%"
//               justifyContent={"space-between"}
//               direction={"column"}
//               fontSize="18px"
//               alignItems={"center"}
//             >
//               <DrawerExample
//                 handleClickScroll={handleClickScroll}
//                 handleResume={handleResume}
//               />
//             </Flex>
//           </Box>
//         </Flex>
//       </Box>
//     </>
//   );
// }