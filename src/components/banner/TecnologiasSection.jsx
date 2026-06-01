import { motion } from 'framer-motion'
import { useState } from 'react'
import { Title } from '../Title'

const tecnologias = [
  { nome: "React", imagem: "/images/react.png", color: "#61DAFB" },
  { nome: "TypeScript", imagem: "/images/typescript.png", color: "#3178C6" },
  { nome: "JavaScript", imagem: "/images/java-script.png", color: "#F7DF1E" },
  { nome: "Node.js", imagem: "/images/node.png", color: "#339933" },
  { nome: "MongoDB", imagem: "/images/mongo.png", color: "#47A248" },
  { nome: "MySQL", imagem: "/images/mysql.png", color: "#4479A1" },
  { nome: "GitHub", imagem: "/images/github.png", color: "#181717" },
  { nome: "HTML5", imagem: "/images/html-5.png", color: "#E34F26" },
  { nome: "CSS3", imagem: "/images/css.png", color: "#1572B6" },
  { nome: "Express", imagem: "/images/express-icon.webp", color: "#000000" },
  { nome: "PHP", imagem: "/images/php-ico.svg", color: "#777BB4" }
]

export const TecnologiasSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  
  return (
    <div className='w-full min-h-[300px] bg-gradient-to-b from-background-black to-background-black/95 py-12 px-[7%] overflow-hidden'>
      <Title text={"Tecnologias"} />
      
      <motion.div 
        className='w-full flex flex-wrap justify-center items-center gap-8 md:gap-10 py-8'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {tecnologias.map((tech, index) => (
          <motion.div
            key={tech.nome}
            className='relative'
            initial={{ opacity: 0, y: 30, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: index * 0.05
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            {/* Partículas orbitando no hover */}
            {hoveredIndex === index && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{ background: tech.color }}
                    initial={{ scale: 0 }}
                    animate={{
                      x: [0, Math.cos((i * 60) * Math.PI / 180) * 40],
                      y: [0, Math.sin((i * 60) * Math.PI / 180) * 40],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  />
                ))}
              </>
            )}
            
            {/* Ícone com flutuação infinita */}
            <motion.div
              className='w-[60px] h-[60px]  cursor-pointer'
              animate={{
                y: [
                  0,
                  -8,
                  0,
                  8,
                  0
                ],
                rotateZ: [
                  0,
                  (index % 2 === 0 ? 2 : -2),
                  0,
                  (index % 2 === 0 ? -2 : 2),
                  0
                ]
              }}
              transition={{
                duration: 3 + (index * 0.15),
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 0.1
              }}
              whileHover={{
                scale: 1.15,
                y: -5,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <motion.div
                className='w-full h-full rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/0 p-3 flex items-center justify-center backdrop-blur-sm border border-white/10'
                animate={{
                  boxShadow: hoveredIndex === index 
                    ? [`0 0 0px ${tech.color}00`, `0 0 20px ${tech.color}80`, `0 0 0px ${tech.color}00`]
                    : "0 0 0px transparent"
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src={tech.imagem} 
                  alt={tech.nome}
                  className='w-full h-full object-contain transition-transform duration-300'
                  style={{
                    filter: hoveredIndex === index ? `drop-shadow(0 0 8px ${tech.color})` : "none"
                  }}
                />
              </motion.div>
            </motion.div>
            
            {/* Nome da tecnologia */}
            <motion.div 
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-mono text-gray-400 whitespace-nowrap opacity-0"
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
                y: hoveredIndex === index ? -5 : 0
              }}
            >
              {tech.nome}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Linha decorativa de fundo */}
      <motion.div 
        className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </div>
  )
}