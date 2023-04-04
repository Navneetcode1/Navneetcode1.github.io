// import "../App.css"
import "../Utils/Skills.css"
import htmllogo from "../Images/htmllogo.png"
import javascriptlogo from "../Images/javascriptlogo.png"
import csslogo from "../Images/csslogo.png"
import githublogo from "../Images/githublogo.png"
import mongodblogo from "../Images/mongodblogo.png"
import nodelogo from "../Images/nodelogo.png"
import reactlogo from "../Images/reactlogo.png"
import reduxlogo from "../Images/reduxlogo.png"
import npmlogo from "../Images/npmlogo.png"
import { Box,Heading,Text } from '@chakra-ui/react'
import chakralogo from "../Images/chakralogo.png"
// import AOS from "aos"
// import 'aos/dist/aos.css';
// AOS.init();

const Skills = () => {



  return (
    <div className='skillBox-dark' id="skills"  class="skills-card-img">
    <Box className="skillBoxName-dark" class="nav-link skills" id="github-top-langs">
      <Heading ml={{base:"5%",md:"10%",lg:"50%"}} as='h1' width="7%" marginLeft='10%' borderBottom='4px solid #a1a1a1' id="github-top-langs">Skills</Heading>
      <Text id="github-top-langs" style={{fontWeight:"bold",marginLeft:'10%'}}>These are the technologies I've worked with</Text>
      </Box>
        <div className="skills_box-dark"  class="skills-card-img">
        <div className='npmhover'  class="skills-card-img"> 
            <img  class="skills-card-img" src={htmllogo} alt="HTML" height='50%'/>
            <Heading marginTop="10px">HTML</Heading>
        </div>
        <div className='npmhover'  class="skills-card-img"> 
            <img  class="skills-card-img"src={csslogo} alt="HTML" height='50%'/>
            <Heading mt='10px'>CSS</Heading>
        </div>
        <div className='npmhover' id="github-top-langs"> 
            <img src={javascriptlogo} alt="HTML" height='50%'/>
            <Heading mt='10px'>JavaScript</Heading>
        </div>
        <div className='npmhover' id="github-top-langs"> 
            <img src={reactlogo} alt="HTML" height='50%'/>
            <Heading mt='10px'v>React</Heading>
        </div>
        <div className='npmhover'> 
            <img src={nodelogo} alt="HTML" height='50%'/>
            <Heading mt='10px'>NodeJS</Heading>
        </div>
        <div className='npmhover'> 
            <img src={githublogo} alt="HTML" height='50%'/>
            <Heading mt='10px'>GitHub</Heading>
        </div>
        <div className='npmhover'> 
            <img src={chakralogo} alt="HTML" height='50%'/>
            <Heading mt='10px'>ChakraUI</Heading>
        </div>
        <div className='npmhover'> 
            <img src={mongodblogo} alt="HTML" height='50%'/>
            <Heading mt='10px'>MongoDB</Heading>
        </div>
        <div className='npmhover'> 
            <img src={reduxlogo} alt="HTML" height='60%'/>
            <Heading mt='10px'>Redux</Heading>
        </div>
        <div className='npmhover'> 
            <img src={npmlogo} alt="HTML" height='60%' />
            <Heading mt='10px'>NPM</Heading>
        </div>
     
    </div>
    </div>
  )
}

export default Skills
