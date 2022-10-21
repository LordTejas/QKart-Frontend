import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { Box, Container } from "@mui/system";
import Typography from '@mui/material/Typography';
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./About.css";

const About = () => {
  const history = useHistory();

  const routeToProducts = () => {
    history.push("/");
  };

  const ProfileSection = () => (
    <Box className="profile-section">
      <Typography variant="h5" component="h5" align="left" style={{color: "teal"}}>
        Developed By,
      </Typography>

      <Typography variant="h2" component="h2" align="center" style={{color: "green"}}>
        TEJAS KANJI
      </Typography>

    </Box>
  );

  const SkillAvatar = ({skill}) => (
    <Avatar 
    alt={skill.skill} 
    src={skill.url} 
    variant="square"
    style={{height: "8rem", width: "8rem"}}/>
  )

  const skills = [
    {
      skill: "HTML5",
      url: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
    },

    {
      skill: "CSS3",
      url: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
    },

    {
      skill: "Javascript",
      url: "https://cdn-icons-png.flaticon.com/512/7531/7531782.png"
    },

    {
      skill: "React",
      url: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
    },

    {
      skill: "Web",
      url: "https://cdn-icons-png.flaticon.com/512/841/841364.png"
    },

    {
      skill: "REST API",
      url: "https://cdn-icons-png.flaticon.com/512/7069/7069751.png"
    },

    {
      skill: "Chrome Dev Tools",
      url: "https://cdn-icons-png.flaticon.com/512/6125/6125000.png"
      
    },

    {
      skill: "Git",
      url: "https://cdn-icons-png.flaticon.com/512/1680/1680899.png"
    },

    {
      skill: "Linux",
      url: "https://cdn-icons-png.flaticon.com/512/5969/5969282.png"
    },

    {
      skill: "AWS",
      url: "https://cdn.iconscout.com/icon/free/png-256/aws-1869025-1583149.png"
    },

    {
      skill: "Heroku",
      url: "https://cdn.iconscout.com/icon/free/png-256/heroku-3521485-2944929.png"
    },

    {
      skill: "Netlify",
      url: "https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png"
    },

  ]

  const TechStackSection = () => (
    <Box className="tech-stack-section red-yellow-border">
      
      <Box align="left" m={2} className="tech-stack-heading">
        TECH STACK
      </Box>

      <Grid container spacing={4} align="center" my={2}>

      {
        skills.length && skills.map((skill) => (
        <Grid item xs={6} md={4} lg={3} align="center" key={skill.skill}>
          <SkillAvatar skill={skill} />
        </Grid>
        ))
      }
      </Grid>
    </Box>
  );

  const AboutFooter = () => (
    <Box className="about-footer">
      
    </Box>
  );

  return (
    <>
      <Header />
      <Box className="">

        <ProfileSection />

        <TechStackSection />

        <AboutFooter />

      </Box>
      <Footer />
    </>
  );
};

export default About;