import { Container, Grid, Typography, Box, Divider } from "@mui/material";
import { useLottie } from "lottie-react";
import EducationLottie from "../assets/lotties/Education2.json";

const Education = () => {
  const { View } = useLottie({
    animationData: EducationLottie,
    loop: true,
  });
  return (
    <Box sx={{ backgroundColor: "#FFFFFF", py: 8 }}>
      <Container>
        <Grid
          container
          spacing={4}
          direction="column"
          justifyContent="center"
          alignContent="center"
        >
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h2"
              component="h2"
              fontSize="3em"
              fontWeight="bold"
            >
              Education
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            xl={12}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={6} xl={6}>
              {View}
            </Grid>
            <Grid container item direction="column" sm={12} md={6} xl={6}>
              <Grid item xs={12} md={4} pt={5}>
                <Typography variant="h6" component="h3" gutterBottom>
                  B.Tech | CSE
                </Typography>
                <Typography variant="body1" component="div">
                  KIET GROUP OF INSTITUTION , GHAZIABAD
                </Typography>

                <Typography variant="body1" component="div">
                  Education Duration: 2017 - 2021
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={12} md={4} pt={5}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Intermediate | PCM,C++
                </Typography>
                <Typography variant="body1" component="div">
                  GLENHILL SCHOOL, Varanasi
                </Typography>

                <Typography variant="body1" component="div">
                  Education Duration: 2015 - 2016
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={12} md={4} pt={5}>
                <Typography variant="h6" component="h3" gutterBottom>
                  High School
                </Typography>
                <Typography variant="body1" component="div">
                  GLENHILL SCHOOL, Varanasi
                </Typography>
                <Typography variant="body1" component="div">
                  Education Duration: 2013 - 2014
                </Typography>
                <Divider />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
