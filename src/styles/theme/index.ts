type tCustomTheme = typeof customTheme;
const customTheme = {
  fontFamily: "Nunito, sans-serif",
  fontSizes: {
    small: "16px",
    medium: "18px",
    large: "35px",
  },
  colors: {
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
