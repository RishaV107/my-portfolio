import { Typography, Grid, Icon } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  const email = "rishavsingh107@gmail.com";

  // const { View } = useLottie({
  //   animationData: EmailMe,
  //   loop: true,
  //   style: { height: "30vh" },
  // });

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        pb={10}
      >
        <Grid item xs={12} sm={12} md={12} xl={12} p={2}>
          <Typography
            variant="h2"
            component="h2"
            fontSize={40}
            fontWeight="bold"
          >
            Contact
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={12} md={12} xl={12}>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <Grid item pl={{ xs: 3, sm: 5, md: 6, xl: 20 }}>
              <Typography
                variant="h4"
                component="h4"
                fontSize={{ xs: 30, sm: 30, md: 40, xl: 40 }}
              >
                Dont be shy! Hit me up! 👇🏻
              </Typography>
            </Grid>

            <Grid container item pl={{ xs: 2, sm: 5, xl: 19 }}>
              <Grid container item pt={2} xs={12}>
                <Grid item>
                  <Icon fontSize="large">
                    <EmailIcon />
                  </Icon>
                </Grid>
                <Grid item>
                  <Typography pt={1.2} variant="h5">
                    {email}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item pt={2} xs={12}>
                <Grid item>
                  <Icon fontSize="large">
                    <TwitterIcon />
                  </Icon>
                </Grid>
                <Grid>
                  <Typography pt={1.2} variant="h5">
                    {"RishaV107"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
