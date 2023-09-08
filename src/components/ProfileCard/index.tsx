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
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
      </article>
      <article className="buttons-section">
        <StyledButton variant="faint">Artigos</StyledButton>
        <StyledButton variant="faint">Currículo</StyledButton>
        <div>
          <a href="https://github.com/Danielle-Luz">
            <img
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/github.png"
              alt="github"
            />
          </a>
          <a href="https://www.linkedin.com/in/danielle-da-luz-nascimento/">
            <img
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a href="mailto:daniln2209@gmail.com">
            <img
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/new-post.png"
              alt="email"
            />
          </a>
        </div>
      </article>
    </StyledProfileCard>
  );
};
