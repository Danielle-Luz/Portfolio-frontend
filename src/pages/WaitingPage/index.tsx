import { tWaitingPageProps } from "../../interfaces";
import { StyledLoadingIcon } from "../../styles";
import { Loader } from "@mantine/core";

export const WaitingPage = ({ hasError, isLoading }: tWaitingPageProps) => {
  return (
    <StyledLoadingIcon>
      {isLoading && <Loader color="gray" size="xl" />}
      {hasError && (
        <article>
          <img
            src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/500/external-astronaut-space-vitaliy-gorbachev-flat-vitaly-gorbachev-4.png"
            alt="error icon"
          />
          <h2>Não foi possível carregar a página</h2>
          <p>
            Desculpe, estamos enfrentando problemas técnicos e não conseguimos
            carregar a página no momento. Por favor, recarregue a página ou
            tente novamente mais tarde.
          </p>
        </article>
      )}
    </StyledLoadingIcon>
  );
};
