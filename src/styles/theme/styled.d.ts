import "styled-components";
import { tCustomTheme } from ".";

declare module "styled-components" {
  export interface DefaultTheme extends tCustomTheme {}
}
