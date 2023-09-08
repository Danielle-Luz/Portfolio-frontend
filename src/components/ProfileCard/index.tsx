import { StyledButton, StyledProfileCard } from "../../styles";
import photo from "../../assets/imgs/danielle-photo.jpg";

export const ProfileCard = () => {
  return (
    <StyledProfileCard>
      <article className="personal-info">
        <img
          src={photo}
          alt="Jovem parda sorrindo, com cabelo ondulado e castanho escuro, usando uma blusa vermelha"
        />
        <section>
          <h2>Danielle Luz</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
      </article>
      <article className="buttons-section">
        <StyledButton variant="faint">Projects</StyledButton>
        <StyledButton variant="faint">Currículo</StyledButton>
      </article>
    </StyledProfileCard>
  );
};
