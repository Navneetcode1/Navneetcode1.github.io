import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import HelperProject from "../Helper/HelperProject";
import Fade from "react-reveal/Fade";
import StyleVibe from "../Images/StyleVibe.png"
import Myntra from "../Images/Myntra.png"
import SurveyMonkey from "../Images/SurveyMonkey.png"



const Projects = () => {
  return (
   
    <Box id="projects" textAlign={"center"} pt="130px" mt={"10"}>
      <Heading>
        {" "}
        <Fade bottom> Projects </Fade>
      </Heading>
      <SimpleGrid
        justifyContent="center"
        textAlign={"center"}
        m={"auto"}
        columns={{ base: "1", md: "2", xl: "3" }}
        spacing={{ base: "10px", md: "40px" }}
        w={{ base: "95%", md: "81%" }}
        marginTop="70px"
        marginBottom={"50px"}
      >
        {data.map((el, ind) => {
          return <HelperProject key={Date.now() + ind} {...el} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

let data = [
  {
    image: StyleVibe,
    desc: "Style Fashion is an full stack e-commerce platform to buy mens and womens clothing products.",
    title: "Style Vibe",
    techStack: ["React", "Chakra UI", "RazorPay", "Express", "MongoDB"],
    github: "https://github.com/ParbhatKataria1/Style-Fashion",
    deploy: "https://ephemeral-platypus-7df5f7.netlify.app/",
  },
  {
    image:
  Myntra,
    title: "Myntra Clone",
    desc: "It is a clothing product-based website which is used to order clothing stuff for men, women and kids",
    techStack: ["React", "Chakra Ui", "JavaScript", "NodeJs"],
    github: "https://github.com/Navneetcode1/animated-plants-4461",
    deploy: "https://fashionmantra.vercel.app/",
  },
  {
    image:
      SurveyMonkey,
    desc: "A website used for conducting and creating surveys in any topic",
    title: "Survey Monkey Clone",
    techStack: [ "React","Redux","Chakra Ui", "ES6" ],
    github: "https://github.com/Vishaltandale987/woozy-north-6172",
    deploy: "https://roaring-bublanina-916643.netlify.app/",
  },
  {
    image: "https://github.com/thedpmane/clone-lifestylestore.com/blob/main/images/readmeImages/1.png?raw=true",
    desc: "LifeStyle is an e-commerce platform to buy clothes and fashion products.",
    title: "LifeStyle.com",
    techStack: [
      "HTML",
      "CSS",
      "Google Authentication",
      
      "JSON - Server",
    ],
    github: "https://github.com/thedpmane/clone-lifestylestore.com",
    deploy: "https://clone-lifestylestore-com.vercel.app/index.html",
  },
];

export default Projects;