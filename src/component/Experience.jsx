import {
  Typography,
  Grid,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@mui/material";
import Working from "../assets/lotties/Working.json";
import { useLottie } from "lottie-react";

const steps = [
  {
    companyName: "Vorphy",
    position: "Software Engineer",
    workDuration: "April 2022 - Present",
    description:
      "Developed robust, scalable, modular, and API-centric infrastructures. Reduced API response time by 30%. Participated in architecture, design, and implementation of features using Typescript/Javascript, NodeJS, ReactJS, and Redis",
  },
  {
    companyName: "Ingenuity Gaming",
    position: "Associate Game Developer",
    workDuration: "January 2021 - March 2022",
    description:
      "Worked on the development of a robust web-based game having high scalability. Implementation of REST APIs. Participated in architecture, design, and implementation of game features using Typescript, PixiJS, and PhasorJs.",
  },
  {
    companyName: "DuniyaKaGyan.com",
    position: "Internship",
    workDuration: "August 2020 - December 2020",
    description:
      "Worked as a web developer and was responsible for creating new pages and updating it.",
  },
];

const Experience = () => {
  const { View } = useLottie({
    animationData: Working,
    loop: true,
  });
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{
        // backgroundImage: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
        backgroundImage: " linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
      }}
      pb={5}
    >
      <Grid item pt={{ xs: 2, md: 5, xl: 5 }}>
        <Typography
          variant="h2"
          component="h2"
          fontSize="3em"
          fontWeight="bold"
        >
          My Experiences
        </Typography>
      </Grid>

      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        xl={12}
        sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}
        pt={10}
        pl={{ xs: 2, sm: 5, md: 30, xl: 50 }}
        pr={{ xs: 2, sm: 5, md: 30, xl: 50 }}
      >
        <Grid
          item
          xs={12}
          sm={7}
          md={7}
          xl={7}
          pt={{ xs: 4, xm: 4 }}
          order={{ xs: 2, sm: 2 }}
        >
          <Stepper orientation="vertical">
            {steps.map((step, index) => (
              <Step key={index} active={true}>
                <StepLabel>
                  <Typography variant="caption" color="text.secondary">
                    {step.position}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {step.companyName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {step.workDuration}
                  </Typography>
                  <Typography>{step.description}</Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          xl={5}
          order={{ xs: 1, sm: 1, md: 2, xl: 2 }}
        >
          {View}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Experience;
