import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box  component="header" className={classes.mainContainer} >
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Present
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Web Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Freelance
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Working as new freelance web developer, Hands-on experience on new
            java script libraries such as React, Redux, Next.js.
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            UI/UX Designer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Freelance
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Recent experience in graphic designing helps me choose better user
            experience for a product.
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Internship
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            <Link
              href="https://www.makergram.com/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              {"MakerGram"}
            </Link>
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Worked as a intern in social media team, my contributions was in
            terms of designing social media posters, managing team mates,
            gathering knowledge from mentors to learn Front-end web-development.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Graphic Designer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Freelance
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Designed Poster, Business Cards, Letter Head, Logo for advertising
            purpose of stores, restuarant and online business, still design
            posters as a partime - "Buy me a coffee"
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Computer Technician
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Freelance
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Fixed software issues of computers - Installing/Repairing OS, fixed
            hadware mulfunctionings.
          </Typography>
        </Box>
      </Box>
      {/* Technologies portion */}
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Technologies Familiar / Skills
        </Typography>
        <Box component="div">
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            React JS &emsp; React Native <br></br>
            Node.js &emsp; Next.js <br></br>
            Redux &emsp; Android Native<br></br>
            Git &emsp; Javascript <br></br>C & C++ &emsp; Python <br></br>
            Java<br></br>
            <br></br>
            Figma <br></br>
            Adobe Photoshop<br></br>
            Adobe Illustrator <br></br>
            Adobe Lightroom <br></br>
            Microsoft Office <br></br>
          </Typography>
        </Box>
      </Box>

      {/* Certifications */}
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Certfications & Education
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              JavaScript: Understanding The Weird Parts
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.body1}
            >
              Udemy
            </Typography>
          </Box>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Fundamentals Of UI/UX Desiging
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.body1}
            >
              Google
            </Typography>
          </Box>
        </Box>

        <Box component="div" className={classes.timeLine}>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              C for Everyone: Programming Fundamentals
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.body1}
            >
              University of California, Santa Cruz
            </Typography>
          </Box>

          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              HTML
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.body1}
            >
              Codecademy
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Education */}

      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Educational Qualifications
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2022
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Bachelor Of Computer Applications
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.body1}
            >
              University Of Calicut
            </Typography>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Computer Science - Intermediate
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.body1}
            >
              DHSE - Kerala
            </Typography>
          </Box>
          <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2015
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Xth Grade
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.body1}
            >
              CBSE - Delhi
            </Typography>
          </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
