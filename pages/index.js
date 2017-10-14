// @flow

import * as React from "react";
import { hydrate, injectGlobal, fontFace } from "emotion";
import styled from "react-emotion";
import withData from "../lib/with-data";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home";
import { raleway, ralewayBold, typography } from "../config/constants";

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof global.window !== "undefined") {
  hydrate(global.window.__NEXT_DATA__.ids);
}

injectGlobal(typography.toString());
fontFace(raleway);
fontFace(ralewayBold);

const Footer = styled.footer`padding: 2rem 1.5rem;`;

export default withData(() => (
  <div>
    <NavBar />
    <Home slug="home" />
    <Footer>
      <hr />
      <p>© Vision 100 2017</p>
    </Footer>
  </div>
));
