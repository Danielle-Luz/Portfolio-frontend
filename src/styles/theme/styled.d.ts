import "styled-components";
import { tCustomTheme } from "./../../types";

declare module "styled-components" {
  export interface DefaultTheme extends tCustomTheme {}
}
