import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";
import Lottie from "react-lottie";
import Link from "../src/Link";
import animationData from "../src/animations/landinganimation/data";

import ButtonArrow from "../src/ui/ButtonArrow";
import CallToAction from "../src/ui/CallToAction";
import { useStyles } from "../src/styles/LandinPageStyle";
import Head from "next/head";

function LandinPage({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Custom Software, Mobile Apps, and Websites | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Pristine software custom-designed from the ground up with cutting-edge optimizations. Use our free estimate calculator to check your project cost!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Arc Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arc.com" />
        <link rel="canonical" key="canonical" href="arc.com" />
      </Head>
      <Grid item>
        {" "}
        {/*-------------- hero -------------------*/}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTxtCntnr}>
            <Typography variant="h2" align="center">
              Bringing New york tech <br /> to morroco
            </Typography>
            <Grid container justify="center" className={classes.btnContainer}>
              <Grid item>
                <Button
                  component={Link}
                  href="/estimate"
                  onClick={() => setValue(5)}
                  variant="contained"
                  className={classes.subButton}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  href="/revolution"
                  variant="outlined"
                  onClick={() => setValue(2)}
                  className={classes.lrnBtnHero}
                >
                  <span style={{ marginRight: 10 }}> Learn More </span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.primary.main}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/*-------------- services -------------------*/}

        <Grid
          container
          justify={matchesSm ? "center" : undefined}
          direction="row"
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSm ? 0 : "5em",
              textAlign: matchesSm ? "center" : undefined,
            }}
          >
            <Typography variant="h4" style={{ marginBottom: "0.5em" }}>
              Custom Made Products
            </Typography>

            <Typography variant="subtitle1" style={{ marginBottom: "0.8em" }}>
              Complete digital Solution, from investigation to{" "}
              <span>celebration</span>
            </Typography>
            <Button
              component={Link}
              href="/customsoftware"
              variant="outlined"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
              className={classes.lrnBtnServ}
            >
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
          <Grid item className={classes.icon}>
            <img alt="software icon" src="/assets/customSoftwareIcon.svg" />
          </Grid>
        </Grid>
        {/*-------------- mobile services -------------------*/}
        <Grid
          container
          justify={matchesSm ? "center" : "flex-end"}
          direction="row"
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSm ? "center" : undefined,
            }}
          >
            <Typography variant="h4" style={{ marginBottom: "0.5em" }}>
              ios/Android App Developement
            </Typography>

            <Typography variant="subtitle1" style={{ marginBottom: "0.8em" }}>
              Ectended Functionality. extend Access.Increase Engagement
            </Typography>
            <Button
              component={Link}
              href="/mobileapps"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              variant="outlined"
              className={classes.lrnBtnServ}
            >
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
          <Grid
            item
            className={classes.icon}
            style={{ marginRight: matchesSm ? 0 : "5em" }}
          >
            <img alt="software icon" src="/assets/mobileIcon.svg" />
          </Grid>
        </Grid>
        {/*-------------- website services -------------------*/}
        <Grid
          container
          justify={matchesSm ? "center" : undefined}
          direction="row"
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSm ? 0 : "5em",
              textAlign: matchesSm ? "center" : undefined,
            }}
          >
            <Typography variant="h4" style={{ marginBottom: "0.5em" }}>
              Website Developement
            </Typography>

            <Typography variant="subtitle1" style={{ marginBottom: "0.8em" }}>
              Complete digital Solution, from investigation to{" "}
              <span>celebration</span>
            </Typography>
            <Button
              component={Link}
              href="/websites"
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
              variant="outlined"
              className={classes.lrnBtnServ}
            >
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
          <Grid item className={classes.icon}>
            <img alt="software icon" src="/assets/websiteIcon.svg" />
          </Grid>
        </Grid>
      </Grid>
      {/*---------------------- card section---------------------- */}
      <Grid item>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: "100em", marginTop: "12em" }}
        >
          <Card elevation={3} className={classes.RevCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                  <Grid />
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      style={{ marginBottom: "0.8em" }}
                    >
                      Complete digital Solution, from investigation to{" "}
                      <span>celebration</span>
                    </Typography>
                    <Button
                      component={Link}
                      href="/revolution"
                      variant="outlined"
                      onClick={() => setValue(2)}
                      className={classes.lrnBtnServ}
                    >
                      <span style={{ marginRight: 10 }}> Learn More</span>
                      <ButtonArrow
                        width={15}
                        height={15}
                        fill={theme.palette.primary.main}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.backgroundImage} />
        </Grid>
      </Grid>
      {/* -----------------------info section-----------------------  */}
      <Grid item>
        <Grid container alignItems="center" style={{ height: "80em" }}>
          <Grid
            container
            style={{ position: "absolute" }}
            direction={matchesXs ? "column" : "row"}
          >
            <Grid
              sm
              item
              style={{
                marginLeft: matchesXs ? 0 : "5em",
                textAlign: matchesXs ? "center" : undefined,
                marginBottom: matchesXs ? "10em" : 0,
              }}
            >
              <Typography variant="h2" style={{ color: "white" }}>
                About Us
              </Typography>
              <Grid />
              <Grid item>
                <Typography
                  variant="subtitle2"
                  style={{ marginBottom: "0.8em" }}
                >
                  Let's get personal.
                </Typography>
                <Button
                  component={Link}
                  href="/about"
                  variant="outlined"
                  onClick={() => setValue(3)}
                  className={classes.lrnBtnServ}
                  style={{
                    borderColor: "white",
                    color: "white",
                  }}
                >
                  <span style={{ marginRight: 10 }}> Learn More</span>
                  <ButtonArrow width={15} height={15} fill="white" />
                </Button>
              </Grid>
            </Grid>
            <Grid
              sm
              item
              style={{
                marginRight: matchesXs ? 0 : "5em",
                textAlign: matchesXs ? "center" : "right",
              }}
            >
              <Typography variant="h2" style={{ color: "white" }}>
                Contact Us
              </Typography>
              <Grid />
              <Grid item>
                <Typography
                  variant="subtitle2"
                  style={{ marginBottom: "0.8em" }}
                >
                  Say hello!{" "}
                  <span role="img" aria-label="waving hand">
                    👋🏻
                  </span>
                </Typography>
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  onClick={() => setValue(4)}
                  className={classes.lrnBtnServ}
                  style={{
                    borderColor: "white",
                    color: "white",
                  }}
                >
                  <span style={{ marginRight: 10 }}> Learn More</span>
                  <ButtonArrow width={15} height={15} fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.infoBgImage} />
        </Grid>
      </Grid>
      {/* ------------------call to action------------------  */}
      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}

export default LandinPage;
