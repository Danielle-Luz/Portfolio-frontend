type tCustomTheme = typeof customTheme;
const customTheme = {
  font: "Nunito, sans-serif",
  palette: {
    grey: {
      gradient: ["#FFFFFF1A", "#FFFFFF00"],
      light: "#FFFFFF",
      lowOpacity: ["#FFFFFF99", "#FFFFFF4D", "#D9D9D933", "#60606066"],
    },
    main: {
      gradient: ["#391335", "#6A0E47", "#111827"],
      lowOpacity: "#B50D571A",
    },
  },
  radius: {
    small: "8px",
    round: "100%",
  },
};

export { customTheme, tCustomTheme };
