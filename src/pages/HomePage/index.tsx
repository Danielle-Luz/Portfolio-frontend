import { ProfileCard, ProjectsSection } from "../../components";
import { tProject } from "../../interfaces";

export const HomePage = () => {
  const projects: tProject[] = [
    {
      id: 11,
      name: "Projeto Incrível",
      description: "Uma descrição detalhada do projeto incrível.",
      stack: "Front-end",
      coverImage: "caminho/para/imagem1.png",
      url: "https://www.projeto-incrivel.com",
      highlight: true,
      technologies: [
        {
          id: 21,
          name: "ReactJS",
          stack: "Front-end",
          knowledgeLevel: "Intermediário",
        },
      ],
    },
    {
      id: 12,
      name: "Aplicativo Fantástico",
      description:
        "Um aplicativo móvel fantástico que resolve todos os seus problemas.",
      stack: "Full-stack",
      coverImage: "caminho/para/imagem2.png",
      url: "https://www.aplicativo-fantastico.com",
      highlight: false,
      technologies: [
        {
          id: 22,
          name: "Node.js",
          stack: "Back-end",
          knowledgeLevel: "Avançado",
        },
        {
          id: 23,
          name: "React Native",
          stack: "Front-end",
          knowledgeLevel: "Avançado",
        },
      ],
    },
    {
      id: 13,
      name: "Website Moderno",
      description:
        "Um website moderno com design responsivo e tecnologias de ponta.",
      stack: "Front-end",
      coverImage: "caminho/para/imagem3.png",
      url: "https://www.website-moderno.com",
      highlight: true,
      technologies: [
        {
          id: 24,
          name: "HTML5",
          stack: "Front-end",
          knowledgeLevel: "Avançado",
        },
        {
          id: 25,
          name: "CSS3",
          stack: "Front-end",
          knowledgeLevel: "Avançado",
        },
        {
          id: 26,
          name: "JavaScript",
          stack: "Front-end",
          knowledgeLevel: "Avançado",
        },
      ],
    },
  ];

  return (
    <>
      <ProfileCard />
      <ProjectsSection
        projects={projects}
        projectStack="Back-end"
        sectionTitle="Highlight projects"
      />
    </>
  );
};
