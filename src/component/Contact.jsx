import { Typography, Grid, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  const email = "rishavsingh107@gmail.com";
  const twitter = "https://twitter.com/RishavS107";

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
            fontSize="3em"
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
                fontSize={{ xs: "1.8em", sm: "2em", md: "2.5em", xl: "2.5em" }}
              >
                Dont be shy! Hit me up! 👇🏻
              </Typography>
            </Grid>

            <Grid container item pl={{ xs: 2, sm: 5, xl: 19 }}>
              <Grid container item pt={2}>
                <Grid item>
                  <Typography variant="h5">
                    <Link
                      href={`mailto:${email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="#000000"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                      }}
                    >
                      <EmailIcon
                        fontSize="large"
                        style={{ marginRight: "5px" }}
                      />
                      {email}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item pt={2}>
                <Grid item>
                  <Typography variant="h5">
                    <Link
                      href={twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="#000000"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                      }}
                    >
                      <TwitterIcon
                        fontSize="large"
                        style={{ marginRight: "5px" }}
                      />
                      {"RishavS107"}
                    </Link>
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
