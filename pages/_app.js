import { ThemeProvider } from "@material-ui/core/styles";
import Head from "next/head";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Footer from "../src/ui/Footer";
import NavBar from "../src/ui/NavBar";
import Theme from "../src/ui/Theme";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={Theme}>
        <NavBar
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Component {...pageProps} />
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
