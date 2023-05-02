import {
  Typography,
  Grid,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@mui/material";

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
      "Worked on the development of a robust web-based game having high scalability. Implementation of REST APIs. Participated in architecture, design, and implementation of game features using Typescript, PixiJS, and PhasorJs.",
  },
];

const Experience = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{
        backgroundImage: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
      }}
      pb={5}
    >
      <Grid item pt={{ xs: 2, md: 5, xl: 5 }}>
        <Typography variant="h2" component="h2" fontSize={50} fontWeight="bold">
          My Experiences
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center" }}
        pt={5}
        pl={{ xs: 2, sm: 5, md: 30, xl: 50 }}
        pr={{ xs: 2, sm: 5, md: 30, xl: 50 }}
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
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {step.companyName}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {step.workDuration}
                </Typography>
                <Typography>{step.description}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Grid>
    </Grid>
  );
};

export default Experience;
