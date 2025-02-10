import bikepng from "../assets/CyclingConnect.jpg"
import corAlgodao from "../assets/coracaoDeAlgodao.jpg"
import gamerSync from "../assets/gamerSync.png"
import pucMinas from "../assets/PucMinas4.jpg"
import { motion } from "framer-motion"

const projectsData = [
  {
    image: bikepng,
    title: "Cycling Connect",
    description: "Projeto voltado para otimizar o treinamento de ciclistas, melhorando a comunicação e o acompanhamento entre treinadores e atletas. Desenvolvemos um aplicativo móvel para os atletas, permitindo o registro e monitoramento dos treinos, e um dashboard web para os treinadores, facilitando a análise de desempenho e o planejamento das atividades. A solução promove uma experiência integrada, proporcionando mais eficiência no treinamento e uma interação mais dinâmica entre as partes.",
    tecnologias: ["React Native", "React", "Java", "Spring", "MySQL"]
  },

  {
    image: corAlgodao,
    title: "Coração de Algodão",
    description: "Com a missão de facilitar a doação de roupas para ONGs e empresas comprometidas com o impacto social, criamos o Coração de Algodão durante o Hackathon Desafio ODS da PUC Minas. A plataforma web permite que pessoas cadastrem suas doações de roupas, que são posteriormente coletadas por empresas parceiras e destinadas a quem mais precisa. A iniciativa busca conectar doadores e organizações de forma eficiente, promovendo a solidariedade e a sustentabilidade.",
    tecnologias: ["React", "TailwindCSS", "Java", "Spring", "MySQL"]
  },

  {
    image: gamerSync,
    title: "Gamer Sync",
    description: "Com o objetivo de fortalecer a comunidade gamer criamos a GamerSync, uma plataforma que oferece recursos como estatísticas detalhadas de desempenho, interação social e a possibilidade de encontrar novos parceiros para jogar. Além de centralizar as atividades dos jogadores, a GamerSync facilita a conexão entre os usuários, tornando a experiência nos games ainda mais dinâmica e divertida.",
    tecnologias: ["HTML", "CSS", "Java", "Spring", "MySQL", "JavaScript"]
  },

  {
    image: pucMinas,
    title: "Produtividade de Equipes em Desenvolvimentos de Software",
    description: "Este projeto de pesquisa visa analisar e compreender os fatores que impactam a produtividade das equipes de desenvolvimento de software.",
    tecnologias: ["Pesquisa", "Artigo", "Trabalho em equipe"]
  },
]

const ScrollReveal = ({children}) => {
  return (
    <motion.div
    initial={{opacity: 0, y:100}}
    whileInView={{opacity: 1, y:0}}
    viewport={{once:true}}
    transition={{duration: 0.8}}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({project}) => {
  return(
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all
      duration-300 hover:scale-105 md:w-[300px]"/>

      <div className="flex flex-col gap-5">

        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">
            {project.title}
          </div>

          <p className="text-gray-400">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {
            project.tecnologias.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))
          }
        </div>

      </div>
    </div>
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center
    gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
      <h1 className="text-4xl font-light text-white md:text-6xl">
        Projetos
      </h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects