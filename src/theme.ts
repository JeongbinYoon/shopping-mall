import { DefaultTheme } from "styled-components";

const size = {
  mobile: "770px",
  tabletS: "1023px",
  tabletM: "1220px",
  tabletL: "1280px",
  labtop: "1460px",
  dekstop: "1700px",
};

export const lightTheme: DefaultTheme = {
  backgroundColor: "#FFFFFF",
  textColor: "#333333",
  textColor2: "#868686",
  textColorWhite: "#FFFFFF",
  headerHoverColor: "#FFFFFF",
  buttonColor: "#777777",
  borderColor: "#CCCCCC",
  mobile: `(max-width:${size.mobile})`,
  tabletS: `(max-width:${size.tabletS})`,
  tabletM: `(max-width:${size.tabletM})`,
  tabletL: `(max-width:${size.tabletL})`,
  labtop: `(max-width:${size.labtop})`,
  dekstop: `(max-width:${size.dekstop})`,
};

export const darkTheme: DefaultTheme = {
  backgroundColor: "#1C1D22",
  textColor: "#000000",
  headerHoverColor: "#333333",
};
