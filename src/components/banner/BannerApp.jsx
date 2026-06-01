import React from 'react'
import { motion } from 'framer-motion'

// Variantes de animação
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

const floatAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  }
}

const pulseAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 0.3, 
    scale: 1,
    transition: {
      scale: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  }
}

export const Banner = () => {
  return (
    <div className="relative  min-h-[550px] md:h-[650px] w-full overflow-hidden bg-gradient-to-tr from-[#0D0D11] via-[#15171D] to-[#6366F1]">
      {/* Glow sutil */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div 
          className="absolute w-[200px] h-[600px] bg-purple-600/20 blur-[140px] rounded-full top-[-200px] left-[-200px]"
          variants={pulseAnimation}
          initial="hidden"
          animate="visible"
        />
        <motion.div 
          className="absolute w-[100px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full bottom-[-200px] right-[-200px]"
          variants={pulseAnimation}
          initial="hidden"
          animate="visible"
        />
      </div>

      <div className='grid md:grid-cols-2 px-[5%] md:px-[7%] h-full'>
        
        {/* LADO ESQUERDO - CONTEÚDO */}
        <motion.div 
          className='col-span-1 relative md:top-20 top-10 p-4 md:p-8'
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <motion.span 
            className="text-xs text-purple-400 uppercase border p-2 md:p-4 rounded-lg tracking-widest inline-block mb-4 md:mb-5"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Desenvolvedor Full Stack
          </motion.span>

          <motion.h1 
            className="text-2xl md:text-4xl font-bold md:leading-[50px] text-white mb-4 md:mb-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Transformo ideias em <br />
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              soluções digitais
            </span><br />
            escaláveis
          </motion.h1>

          <motion.div 
            className='mb-4 md:mb-2 md:mb-8'
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="text-gray-400 max-w-md text-sm  leading-relaxed md:leading-[30px] mb-4 md:mb-8">
              Crio aplicações modernas, rápidas e escaláveis com foco em experiência do usuário e performance.
            </p>

            {/* Botões */}
            <div className="flex flex-wrap flex-col md:flex-row md:flex-no-wrap gap-3 md:gap-4">
              <motion.button 
                className="md:w-[150px] h-[45px] bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white font-medium shadow-lg shadow-purple-600/30 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                Ver projetos
              </motion.button>

              <motion.button 
                className="md:w-[150px] h-[45px] border border-gray-600 hover:border-purple-500 transition rounded-lg text-gray-300 hover:text-white text-sm "
                whileHover={{ scale: 1.05, borderColor: "#a855f7" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                Baixar CV
              </motion.button>
            </div>
          </motion.div>  
        </motion.div>

        {/* LADO DIREITO - IMAGEM E ELEMENTOS DECORATIVOS */}
        <div className='col-span-1 min-h-[450px] md:min-h-[600px] relative mt-4 md:mt-8'>
          
          {/* Símbolos de programação flutuantes - APENAS DESKTOP */}
          <motion.div 
            className="absolute font-mono text-white/10 text-2xl top-20 left-10 hidden md:block"
            variants={floatAnimation}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {'</>'}
          </motion.div>
          
          <motion.div 
            className="absolute font-mono text-white/8 text-xl top-40 right-20 hidden md:block"
            variants={floatAnimation}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {'{}'}
          </motion.div>
          
          <motion.div 
            className="absolute font-mono text-white/10 text-lg bottom-48 left-20 hidden md:block"
            variants={floatAnimation}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {'() =>'}
          </motion.div>
          
          <motion.div 
            className="absolute font-mono text-white/8 text-xl bottom-32 right-16 hidden md:block"
            variants={floatAnimation}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {'[]'}
          </motion.div>
          
          {/* Partículas de código - APENAS DESKTOP */}
          <motion.div 
            className="absolute font-mono text-white/6 text-xs top-32 left-32 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            import
          </motion.div>
          
          <motion.div 
            className="absolute font-mono text-white/6 text-xs bottom-56 right-32 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            export
          </motion.div>
          
          <motion.div 
            className="absolute font-mono text-white/6 text-xs top-60 right-40 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            return
          </motion.div>
          
          <motion.div 
            className="absolute font-mono text-white/6 text-xs bottom-40 left-40 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            function
          </motion.div>
          
          {/* Gráfico de performance - APENAS DESKTOP */}
          <motion.div 
            className="absolute bottom-20 right-10 w-32 h-24 hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <svg width="100%" height="100%" viewBox="0 0 100 60" className="opacity-30">
              <motion.polyline
                points="0,50 15,40 30,45 45,25 60,30 75,10 90,15 100,5"
                fill="none"
                stroke="#a855f7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.7, duration: 1.5, ease: "easeInOut" }}
              />
              <polygon
                points="0,50 15,40 30,45 45,25 60,30 75,10 90,15 100,5 100,60 0,60"
                fill="url(#gradientPerformance)"
                opacity="0.3"
              />
              <defs>
                <linearGradient id="gradientPerformance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <motion.div 
              className="text-white/40 text-[10px] font-mono text-center mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              +124%
            </motion.div>
          </motion.div>
          
          {/* Barras de performance - APENAS DESKTOP */}
          <motion.div className="absolute bottom-32 left-8 flex items-end gap-1 h-16 opacity-40 hidden md:flex">
            {[30, 45, 25, 55, 40, 60].map((height, index) => (
              <motion.div 
                key={index}
                className="w-2 bg-gradient-to-t from-purple-500 to-indigo-500 rounded-t"
                initial={{ height: 0 }}
                animate={{ height: `${height}px` }}
                transition={{ delay: 1.8 + (index * 0.1), duration: 0.6 }}
              />
            ))}
          </motion.div>
          
          {/* CAIXA DE CÓDIGO "const developer" - RESPONSIVA */}
          <motion.div 
            className="absolute md:top-32 top-20 left-0 md:-left-24 bg-[#1E1E2E]/90 backdrop-blur-sm rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 p-2 md:p-4 w-52 md:w-72"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02, borderColor: "#a855f7" }}
          >
            {/* Linha do editor */}
            <div className="flex gap-1.5 md:gap-2 mb-2 md:mb-3">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
              <span className="text-white/30 text-[8px] md:text-xs ml-1 md:ml-2 font-mono">developer.ts</span>
            </div>
            
            {/* Código */}
            <div className="font-mono text-[9px] md:text-sm space-y-1 md:space-y-2">
              <div>
                <span className="text-purple-400">const</span>
                <span className="text-blue-400"> developer</span>
                <span className="text-white"> = {'{'}</span>
              </div>
              <motion.div 
                className="ml-2 md:ml-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-yellow-400">name</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"Alphonse M Lukombo"</span>
                <span className="text-white">,</span>
              </motion.div>
              <motion.div 
                className="ml-2 md:ml-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <span className="text-yellow-400">role</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"Full Stack Developer"</span>
                <span className="text-white">,</span>
              </motion.div>
              <motion.div 
                className="ml-2 md:ml-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-yellow-400">experience</span>
                <span className="text-white">: </span>
                <span className="text-orange-400">2</span>
                <span className="text-green-400"> years</span>
                <span className="text-white">,</span>
              </motion.div>
              <motion.div 
                className="ml-2 md:ml-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <span className="text-yellow-400">skills</span>
                <span className="text-white">: [</span>
                <span className="text-cyan-400">"PHP"</span><span className="text-white">, </span>
                <span className="text-cyan-400">"MERN"</span><span className="text-white">, </span>
                <span className="text-cyan-400">"Python"</span>
                <span className="text-white">]</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
              >
                <span className="text-white">{'}'}</span>
                <span className="text-purple-400">;</span>
              </motion.div>
            </div>
            
            {/* Linha de comando */}
            <motion.div 
              className="flex items-center gap-1.5 md:gap-2 mt-2 md:mt-3 pt-1.5 md:pt-2 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <span className="text-green-400 text-[8px] md:text-xs">$</span>
              <span className="text-white/60 text-[8px] md:text-xs">npm run dev</span>
              <motion.div 
                className="w-1 h-1.5 md:w-2 md:h-3 bg-white/40"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
          
          {/* CAIXA DE COMMITS - RESPONSIVA */}
          <motion.div 
            className="absolute md:top-48 top-28 right-0 md:-right-12 bg-[#1E1E2E]/90 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-1.5 md:p-3 w-28 md:w-48"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, borderColor: "#6366f1" }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white/50 text-[7px] md:text-xs font-mono">Commits</div>
                <motion.div 
                  className="text-sm md:text-2xl font-bold text-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                >
                  130
                </motion.div>
              </div>
              <motion.div 
                className="text-green-400 text-[8px] md:text-xs"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                ↑ 23%
              </motion.div>
            </div>
            <div className="flex items-center justify-between mt-1 md:mt-2">
              <div>
                <div className="text-white/50 text-[7px] md:text-xs font-mono">Projects</div>
                <div className="text-sm md:text-2xl font-bold text-white">6</div>
              </div>
              <div className="text-green-400 text-[8px] md:text-xs">+12</div>
            </div>
            <div className="w-full bg-white/10 rounded-full h-0.5 md:h-1 mt-1 md:mt-2">
              <motion.div 
                className="bg-gradient-to-r from-purple-500 to-indigo-500 h-0.5 md:h-1 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ delay: 0.9, duration: 1 }}
              />
            </div>
          </motion.div>
          
          {/* GRÁFICO CIRCULAR - RESPONSIVO */}
          <motion.div 
            className="absolute md:top-[340px] top-[240px] right-0 md:-right-12"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <svg width="35" height="35" viewBox="0 0 100 100" className="md:w-20 md:h-20">
              <circle cx="50" cy="50" r="42" fill="none" stroke="white/10" strokeWidth="4"/>
              <motion.circle 
                cx="50" cy="50" r="42" 
                fill="none" 
                stroke="url(#gradCircle)" 
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 0.75 }}
                transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
                transform="rotate(-90 50 50)"
              />
              <defs>
                <linearGradient id="gradCircle" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
            </svg>
            <motion.div 
              className="text-white/60 text-[6px] md:text-[10px] font-mono text-center mt-0.5 md:mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              75% perf.
            </motion.div>
          </motion.div>
          
          {/* SUA IMAGEM - VISÍVEL EM TODOS OS DISPOSITIVOS */}
          {/* SUA IMAGEM COM EFEITOS ESPECIAIS */}
<motion.img 
  src="/images/banner.webp"  
  className='w-full h-full object-contain absolute top-[-30px] md:top-[-100px] left-0 right-0 mx-auto z-20'
  initial={{ opacity: 0, scale: 0.9, y: 50 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
  style={{
    filter: 'drop-shadow(0 0 40px rgba(168,85,247,0.3))',
    // Efeito de brilho nas bordas
    WebkitFilter: 'drop-shadow(0 0 30px rgba(99,102,241,0.4))',
    // Transformação sutil
    transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
  }}
  whileHover={{
    scale: 1.02,
    filter: 'drop-shadow(0 0 60px rgba(168,85,247,0.5))',
    transition: { duration: 0.3 }
  }}
/>

{/* Efeito de brilho atrás da imagem */}
<motion.div 
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-gradient-to-r from-purple-600/40 via-indigo-500/40 to-purple-600/40 rounded-full blur-3xl -z-10"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.4 }}
/>

{/* Moldura decorativa ao redor da imagem */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full border border-purple-500/20 -z-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full border border-indigo-500/10 -z-10 animate-spin-slow"></div>

{/* Partículas de código orbitando */}
<motion.div 
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[480px] md:h-[480px] -z-5"
  animate={{ rotate: 360 }}
  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
>
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
</motion.div>
          
          {/* Glow atrás da imagem */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-purple-600/30 rounded-full blur-3xl -z-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
          
        </div>
      </div>
    </div>
  )
}