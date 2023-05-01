import { Container, Typography, Box, Grid } from "@mui/material";
import DeveloperMeditation from "../assets/lotties/DeveloperMeditation.json";
import { useLottie } from "lottie-react";

const About = () => {
  const { View } = useLottie({
    animationData: DeveloperMeditation,
    loop: true,
  });
  return (
    <Box sx={{ backgroundColor: "#ffffff" }} mt={5}>
      <Container sx={{ height: "55vh" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item>
            <Typography
              variant="h2"
              component="h2"
              fontSize={50}
              fontWeight="bold"
            >
              About Me
            </Typography>
          </Grid>
          <Grid item container direction="row" columnSpacing={5}>
            <Grid item xs={12} md={5} xl={5}>
              {View}
            </Grid>
            <Grid item xs={12} md={7} xl={7}>
              <Box mt={10}>
                <Typography variant="h6" component="div" sx={{ mb: 4 }}>
                  I am a Software Engineer having 2+ years of full-stack
                  development experience and am skilled in web technologies such
                  as HTML, CSS, JavaScript, TypeScript, React, and Node.js. I
                  had designed and developed responsive web applications, and
                  collaborated well with teams, Seeking to leverage my technical
                  expertise and problem-solving skills in a challenging and
                  dynamic role.
                </Typography>
                <Typography variant="body1" component="div">
                  Feel free to contact me for any collaboration or project
                  inquiries.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
