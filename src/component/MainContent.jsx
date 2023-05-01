/* eslint-disable react/no-unescaped-entities */
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardMedia,
} from "@mui/material";
import HTML_LOGO from "../assets/html-5.svg";
import CSS_LOGO from "../assets/css-3.svg";
import JAVASCRIPT_LOGO from "../assets/javascript.svg";
import TYPESCRIPT_LOGO from "../assets/typescript-icon.svg";
import REACT_LOGO from "../assets/react.svg";
import EXPRESS_LOGO from "../assets/express.svg";
import NODEJS_LOGO from "../assets/nodejs.svg";
import NESTJS_LOGO from "../assets/nestjs.svg";

const MainContent = () => {
  return (
    <Box sx={{ backgroundColor: "#F9F9F9", py: 8 }}>
      <Container sx={{ height: "75vh" }}>
        <Grid container alignItems="center" mt={5} columnSpacing={2}>
          <Grid item xs={12} md={7} xl={7} p={15}>
            <Box>
              <Typography variant="h4" component="h2">
                Hello, I'm
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                fontSize={65}
                fontWeight="bold"
              >
                Rishav Singh
              </Typography>
              {/* <Typography variant="body1" component="div" sx={{ mb: 4 }}>
                I'm a front-end developer with expertise in building
                user-friendly and responsive web applications.
              </Typography> */}
              <Typography variant="body1" component="div" sx={{ mb: 4 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                fermentum, felis a aliquam fringilla, nunc orci tincidunt quam,
                eu aliquet sem turpis vitae leo. Ut vitae ullamcorper turpis,
                sed auctor arcu.
              </Typography>
              <Typography variant="body1" component="div">
                Feel free to contact me for any collaboration or project
                inquiries.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} xl={5}>
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
              justifyContent: "center",
              alignItems: "center",
            }}
            mt={7}
          >
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4">Tech Stack </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              xl={6}
              sx={{
                display: "flex",
                justifyContent: "center",
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
                justifyContent: "center",
              }}
            >
              <img
                src={TYPESCRIPT_LOGO}
                className="logo java-script"
                alt="html logo"
              />
              <img src={NODEJS_LOGO} className="logo nestjs" alt="html logo" />
              <img src={NESTJS_LOGO} className="logo nestjs" alt="html logo" />
              <img src={EXPRESS_LOGO} className="logo nodejs" alt="html logo" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainContent;
