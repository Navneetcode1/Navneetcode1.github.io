import { Box,Heading,Text } from '@chakra-ui/react'
import React from 'react'
import "../Utils/Projects.css"
import ProjectBox from '../Components/ProjectBox'
import Project1 from "../Images/Project1.png"
import Project2 from "../Images/Project2.png"
import Project3 from "../Images/Project3.png"
// import Project2 from "../Images/Project2.png"
// import Project3 from "../Images/Project3.png"
// import Project4 from "../Images/Project4.png"


const Projects = () => {

  return (
    <Box id="projects" className="projects"  class="project-card" >
      <Box paddingBottom="10px" class="nav-link projects">
      <Heading ml={{base:"5%",md:"10%",lg:"50%"}} as='h1' width="12%" marginLeft='10%' borderBottom='4px solid #a1a1a1'>Portfolio</Heading>
      <Text style={{fontWeight:"bold",marginLeft:'10%'}}>Check out some of my work right here</Text>
      </Box>
      <Box className="Project_box_grid-dark">
       <ProjectBox 
      Images={Project1}
      Name={"LifeStyle(clone)"}
      TechStack={'tech stack here'}
      liveUrl={"https://unique-pony-67ece1.netlify.app"}
      descLine={"Cloned Lifestyle.com into a full dynamic layout and functional "}
      techstacks={"HTML,CSS,JavaScript(Github)"}
      codeUrl={'https://github.com/thedpmane/clone-lifestore.com'}
      />

      <ProjectBox
      Name={"FarFetch(clone)"}
      TechStack={''}
      Images={Project2}
      liveUrl={"https://moonlit-florentine-131caf.netlify.app/"}
      techstacks={"JavaScript ,HTML, CSS and dynamic features(Github)"}
      descLine={"An individual project of cloning far fetch.com"}
      
      codeUrl={'https://github.com/Navneetcode1/brawny-jam-9247'}
      />

      <ProjectBox 
      Name={"SurveyMonkey(clone)"}
      TechStack={'------------'}
      Images={Project3}
      liveUrl={"https://roaring-bublanina-916643.netlify.app/"}
      techstacks={"React,Redux,Es6 functionality and JavaScript"}
      descLine={"This was a collaborative project of cloning surveymonkey.com with maximum functionality"}
      codeUrl={'https://github.com/Vishaltandale987/woozy-north-6172/tree/fw20_1349-day-4'}
      />

      {/* <ProjectBox 
      Name={"---------"}
      TechStack={'----------'}
      Images={Project1}
      liveUrl={"------------------"}
      techstacks={"----------------------"}
      descLine={"----------------------------------------------------------------------"}
      codeUrl={'-----------------'}
      />  */}
      </Box>
    </Box>
  )
}

export default Projects
