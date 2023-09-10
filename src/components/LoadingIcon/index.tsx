import { StyledLoadingIcon } from "../../styles";
import { Loader } from "@mantine/core";

export const LoadingIcon = () => {
  return (
    <StyledLoadingIcon>
      <Loader color="gray" size="xl" />
    </StyledLoadingIcon>
  );
}