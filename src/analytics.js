import ReactGA from "react-ga4";

export const initGA = () => {
  try {
    ReactGA.initialize("G-79X58YCSY7"); // your GA4 ID
  } catch (e) {
    console.error("GA initialization error:", e);
  }
};

export const trackPage = (page) => {
  try {
    ReactGA.send({ hitType: "pageview", page });
  } catch (e) {
    console.error("GA tracking error:", e);
  }
};