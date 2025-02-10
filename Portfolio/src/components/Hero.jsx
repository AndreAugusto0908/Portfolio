import imagem from "../assets/imagem.jpg"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
        <div className="flex flex-col items-center justify-center gap-10 text-white">
          
          <motion.div 
            initial={{y: -50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.9, delay: 0.2}}
          >
            <img src={imagem} alt="" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 
            hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]" />
          </motion.div>

          <motion.div 
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.9, delay: 0.2}}
          
            className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
            <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent 
            text-5xl font-light md:text-7x1">
              André Carvalho
            </h1>

            <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent 
            text-3xl font-light md:text-7x1">
              Developer
            </h3>

            <p className="md:text-base text-pretty text-sm text-gray-400">
              Sou um estudante de Engenharia de Software apaixonado por desenvolvimento de aplicações escaláveis e eficientes. Tenho experiência em React, Tailwind CSS, Java e C#, com foco na criação de soluções robustas e performáticas.

              Atualmente, realizo estágio como desenvolvedor full-stack, onde trabalho com React e ASP.NET, integrando aplicações ao Oracle Database. Além disso, possuo experiência acadêmica no desenvolvimento de aplicações utilizando o Spring Framework em Java.

              Estou sempre em busca de aprimorar minhas habilidades para criar soluções inovadoras e de alto impacto.
            </p>
          </motion.div>
        </div>
    </div>
  )
}

export default Hero