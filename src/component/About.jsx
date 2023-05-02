import { Typography, Box, Grid } from "@mui/material";
import DeveloperMeditation from "../assets/lotties/DeveloperMeditation.json";
import { useLottie } from "lottie-react";

const About = () => {
  const { View } = useLottie({
    animationData: DeveloperMeditation,
    loop: true,
  });
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      sx={{ backgroundColor: "#ffffff" }}
    >
      <Grid item pt={{ xs: 2, md: 5, xl: 5 }}>
        <Typography variant="h2" component="h2" fontSize={50} fontWeight="bold">
          About Me
        </Typography>
      </Grid>
      <Grid item container>
        <Grid item xs={12} sm={5} md={5} xl={5}>
          {View}
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          xl={7}
          pt={{ xs: 1, sm: 1, md: 20, xl: 25 }}
          pl={{ xs: 2, sm: 2, md: 5, xl: 5 }}
          pr={{ xs: 2, sm: 2, md: 5, xl: 5 }}
        >
          <Box>
            <Typography variant="h6" component="div" sx={{ mb: 4 }}>
              I am a Software Engineer having 2+ years of full-stack development
              experience and am skilled in web technologies such as HTML, CSS,
              JavaScript, TypeScript, React, and Node.js. I had designed and
              developed responsive web applications, and collaborated well with
              teams, Seeking to leverage my technical expertise and
              problem-solving skills in a challenging and dynamic role.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
