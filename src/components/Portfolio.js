import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/uber.png";
// import project5 from "../images/react-redux.jpg";
// import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Netflix Clone",
    description: `Responsive netflix clone created with react with the 
    help of tmdb api and axios, checked api working with postman, used custom fonts, 
    designed layout using css `,
    image: project1,
    link: `https://netflix-clone-bz.netlify.app/`,
  },
  {
    name: "Uber CLone Clone",
    description: `Uber clone done in Next.js which works very well mobile screen size, with firebase authentication for signing in 
                   with google account, designed and animated app with tailwind css`,
    image: project5,
    link: `https://github.com/BazilNizam/Uber-clone`,
  },
  {
    name: "Todo App",
    description: `Todo App using react.js and added animations with the help of css, fully function ui,
    designed with help of font awsome icons and fonts, created todos will be saved locally.`,
    image: project2,
    link: `https://todobazilnizam.netlify.app/`,
  },
  {
    name: "Task App",
    description: `Task App using react.js and added animations with the help of css, fully function ui,
    designed with update options, created todos will be saved, used react hooks`,
    image: project3,
    link: `https://github.com/BazilNizam/Task-App`,
  },
  {
    name: "Amazon Clone",
    description: `Amazon clone build with react.js, redux and integrated with stripe and firebase,Designed all elements with raw css`,
    image: project4,
    link: `https://github.com/BazilNizam/Amazon-Clone`,
  },
  // {
  //   name: "Project 5",
  //   description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
  //   consequatur magni quod nesciunt necessitatibus molestiae non\
  //   eligendi, magnam est aliquam recusandae? Magnam soluta minus\
  //   iste alias sunt veritatis nisi dolores!`,
  //   image: project5,
  // },
  // {
  //   name: "Project 6",
  //   description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
  //   consequatur magni quod nesciunt necessitatibus molestiae non\
  //   eligendi, magnam est aliquam recusandae? Magnam soluta minus\
  //   iste alias sunt veritatis nisi dolores!`,
  //   image: project6,
  // },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Button size="small" color="primary">
                  Share
                </Button> */}
                <Button href={project.link} onsize="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
