import { customTheme } from "../styles/theme";

type tCustomTheme = typeof customTheme;

type tStyledHeaderLinkProps = {
  isAccessedRoute: boolean;
};

type tStyledButtonProps = {
  variant: "outline" | "faint";
};

export { tCustomTheme, tStyledHeaderLinkProps, tStyledButtonProps };
