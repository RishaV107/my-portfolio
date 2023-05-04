/* eslint-disable react/no-unescaped-entities */
import {
  Typography,
  Grid,
  Box,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HTML_LOGO from "../assets/svg/html-5.svg";
import CSS_LOGO from "../assets/svg/css-3.svg";
import JAVASCRIPT_LOGO from "../assets/svg/javascript.svg";
import TYPESCRIPT_LOGO from "../assets/svg/typescript-icon.svg";
import REACT_LOGO from "../assets/svg/react.svg";
import NODEJS_LOGO from "../assets/svg/nodejs.svg";
import NESTJS_LOGO from "../assets/svg/nestjs.svg";
import MYSQL_LOGO from "../assets/svg/mysql.svg";

import { TypeAnimation } from "react-type-animation";

const MainContent = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      pt={5}
      sx={{
        backgroundImage: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
        // backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
        height: { xs: "110vh", md: "95vh" },
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        xl={6}
        pl={{ xs: 2, md: 12, xl: 45 }}
        pr={{ xs: 2, md: 8, xl: 8 }}
        pt={{ xs: 4 }}
        order={{ xs: 2, md: 1 }}
      >
        <Box>
          <Typography variant="h4" component="h2">
            Hello, I'm
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "45px", md: "65px", xl: "65px" },
              fontWeight: "bold",
            }}
          >
            Rishav Singh
          </Typography>

          <Typography
            variant="h4"
            component="div"
            sx={{
              fontSize: { xs: "14px", md: "20px", xl: "20px" },
              fontWeight: "bold",
            }}
          >
            <TypeAnimation
              sequence={[
                // Same String at the start will only be typed once, initially
                "I am a Software Engineer",
                1000,
                "I am a Full Stack Developer",
                1000,
                "I am a Coder",
                1000,
                "I am a Computer Engineer",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </Typography>
          <Typography variant="body1" component="div">
            Feel free to contact me for any collaboration or project inquiries.
          </Typography>
          <IconButton color="#000000" size="large">
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton color="#000000" size="large">
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        xl={6}
        order={{ xs: 1, md: 2, xl: 2 }}
        pl={{ xs: 2 }}
        pr={{ xs: 2 }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            display: "flex",
            maxWidth: 450,
            borderRadius: 5,
          }}
          elevation={24}
        >
          <CardMedia
            component="img"
            height="100%"
            alt="Profile Pic"
            image="https://avatars.githubusercontent.com/u/42450401?v=4"
            sx={{ objectFit: "cover" }}
          />
        </Card>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={12}
        xl={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        pt={{ xs: 2 }}
        pb={5}
        order={{ xs: 3, md: 3, xl: 3 }}
      >
        <Grid item xs={12} md={12} xl={12}>
          <Typography variant="h4">Tech Stack </Typography>
        </Grid>

        <Grid container item xs={12} md={12} xl={12}>
          <Grid
            item
            xs={12}
            md={6}
            xl={6}
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "flex-end",
                xl: "flex-end",
              },
            }}
          >
            <img src={HTML_LOGO} className="logo html" alt="html logo" />
            <img src={CSS_LOGO} className="logo css" alt="html logo" />
            <img
              src={JAVASCRIPT_LOGO}
              className="logo java-script"
              alt="html logo"
            />
            <img src={REACT_LOGO} className="logo react" alt="html logo" />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            xl={6}
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "flex-start",
                xl: "flex-start",
              },
            }}
          >
            <img
              src={TYPESCRIPT_LOGO}
              className="logo type-script"
              alt="html logo"
            />
            <img src={NODEJS_LOGO} className="logo nodejs" alt="html logo" />
            <img src={NESTJS_LOGO} className="logo nestjs" alt="html logo" />
            <img src={MYSQL_LOGO} className="logo expressjs" alt="html logo" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainContent;
