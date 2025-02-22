import { BiLogoJava, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { SiDotnet, SiMysql, SiSpring } from "react-icons/si";
import { motion } from "framer-motion"

const techs = [
  { icon: BiLogoJava, color: "text-orange-500" },
  { icon: BiLogoJavascript, color: "text-yellow-400" },
  { icon: BiLogoTailwindCss, color: "text-sky-400" },
  { icon: BiLogoReact, color: "text-blue-500" },
  { icon: SiMysql, color: "text-blue-500" },
  { icon: SiSpring, color: "text-green-500" },
  { icon: SiDotnet, color: "text-blue-700" }
];

const Tech = () => {

  const variaveis = {
    hidden: {opacity:0, y:50},
    visible: {opacity:1, y:50}
  }

  return (
    <div id="tech" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 md:gap-32">

      <motion.h1 
      variants={variaveis}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.8}}
      
      className="text-4xl font-light text-white md:text-6xl">
        Tecnologias
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        {techs.map(({ icon: Icon, color }, index) => (
          <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.8}}
          
          key={index}>
            <Icon className={`cursor-pointer text-[80px] ${color} transition-all duration-300
            hover:-translate-y-5 sm:text-[100px] md:text-[120px]`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
