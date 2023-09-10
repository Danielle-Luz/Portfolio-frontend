import { StyledLoadingIcon } from "../../styles";
import loading from "../../assets/imgs/loading-icon.gif";

export const LoadingIcon = () => {
  return (
    <StyledLoadingIcon>
      <img src={loading} alt="loading icon" />
    </StyledLoadingIcon>
  );
}