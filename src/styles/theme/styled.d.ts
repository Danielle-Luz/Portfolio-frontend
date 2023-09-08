import "styled-components";
import { tCustomTheme } from "./../../interfaces";

declare module "styled-components" {
  export interface DefaultTheme extends tCustomTheme {}
}
