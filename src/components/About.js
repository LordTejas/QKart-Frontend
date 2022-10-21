import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Box from "@mui/system/Box";
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
import FooterImage from '../assets/carbon_black_background.jpg';

const About = () => {
  const history = useHistory();

  const ProfileSection = () => (
    <Box className="profile-section">

      <Card>
        <CardActionArea>
          <Grid container m={2} alignItems="center">
            <Grid item xs={12} md={4} align="center">
              <Box className="profile-image"/>
            </Grid>

            <Grid item xs={12} md={8} align="center">
              <CardContent>
                <Typography
                variant="h3"
                >
                  Tejas Kanji
                </Typography>

                <Typography
                variant="h6"
                >
                  Software Development Engineer
                </Typography>

                <Typography
                variant="h5"
                >
                  Mumbai, India
                </Typography>
            </CardContent>
          </Grid>
        </Grid>

        </CardActionArea>
        <CardActions>
          <Grid container spacing={2} align="center">
            <Grid item xs={12} md={4}>
              <Button
              startIcon={<GitHubIcon style={{fontSize: '2rem'}} />}
              style={{color: "black", fontSize: "1rem"}}
              href="https://github.com/LordTejas"
              target="_blank"
              // onClick={() => history.push("https://github.com/LordTejas")}
              >
                GitHub
              </Button>
            </Grid>

            <Grid item xs={12} md={4}>
              <Button
              startIcon={<LinkedInIcon style={{fontSize: '2rem'}} />}
              style={{color: "black", fontSize: "1rem"}}
              href="https://www.linkedin.com/in/tejas-kanji"
              target="_blank"
              // onClick={() => history.push("https://www.linkedin.com/in/tejas-kanji")}
              >
                LinkedIn
              </Button>
            </Grid>

            <Grid item xs={12} md={4}>
              <Button
              startIcon={<EmailIcon style={{fontSize: '2rem'}} />}
              style={{color: "black", fontSize: "1rem"}}
              href="mailto:tejas5225@gmail.com"
              // onClick={() => history.push("https://mailto:tejas5225@gmail.com")}
              >
                Email
              </Button>
            </Grid>
          </Grid>

        </CardActions>
      </Card>

    </Box>
  );

  const SkillAvatar = ({skill}) => (
    <Box>
      <Avatar 
      alt={skill.skill} 
      src={skill.url} 
      variant="square"
      style={{height: "8rem", width: "8rem"}}
      />
      <Typography variant="h4" component="div">{skill.skill}</Typography>

    </Box>
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
      url: "https://cdn-icons-png.flaticon.com/512/718/718064.png"
    },

    {
      skill: "Developer Tools",
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
    <Box className="about-footer" align="center">

        <img src={FooterImage} alt="" className="footer-image" />

        <Button
        variant="contained"
        size="large"
        align="center"
        onClick={() => history.push("/")}
        >
          Continue Exploring
        </Button>
    </Box>
  );

  return (
    <>
      <Header />
      <Box>

        <ProfileSection />

        <TechStackSection />

        <AboutFooter />

      </Box>
      <Footer />
    </>
  );
};

export default About;