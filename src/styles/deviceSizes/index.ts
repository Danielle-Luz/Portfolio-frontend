const sizes = {
  mobileSmall: "320px",
  mobileMedium: "375px",
  mobileLarge: "425px",
  tabletSmall: "530px",
  tablet: "768px",
  laptopSmall: "1024px",
  laptopMedium: "1160px",
  laptopLarge: "1440px",
  desktop: "2560px",
};

export const deviceSizes = {
  mobileSmall: `(min-width: ${sizes.mobileSmall})`,
  mobileMedium: `(min-width: ${sizes.mobileMedium})`,
  mobileLarge: `(min-width: ${sizes.mobileLarge})`,
  tabletSmall: `(min-width: ${sizes.tabletSmall})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptopSmall: `(min-width: ${sizes.laptopSmall})`,
  laptopMedium: `(min-width: ${sizes.laptopMedium})`,
  laptopLarge: `(min-width: ${sizes.laptopLarge})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
