import { Container, Typography, Box } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ backgroundColor: "#FFFFFF", py: 8 }}>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="h2" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" component="div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            fermentum, felis a aliquam fringilla, nunc orci tincidunt quam, eu
            aliquet sem turpis vitae leo. Ut vitae ullamcorper turpis, sed
            auctor arcu.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
