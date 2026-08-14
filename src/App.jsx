import React, { useContext, useState } from 'react'

import {
  Routes,
  Route
} from 'react-router';


import { NavBar } from './components/NavBar'
import { ArrowLeft, ArrowRight, CheckCircle2, Eye, GitCommit, LocateIcon, Mail, Phone, PhoneCall } from 'lucide-react'
import { Link } from 'react-router'
import { Title } from './components/Title'
import { TimelineAccordion } from './components/TimelineAccordion'
import {motion} from 'framer-motion'
import { Banner } from './components/banner/BannerApp'
import { TecnologiasSection } from './components/banner/TecnologiasSection'
import{
  
  FaFacebook,
  FaGithub,
  FaWhatsapp
} from 'react-icons/fa';
import { ProjectSingle } from './components/ProjectSingle'
import { ProjectContext } from './hooks/ProjectsContext';



export const App = () => {

  const {projects} = useContext(ProjectContext);

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentOtherImageIndex, setCurrentOtherImageIndex] = useState(0)
  const [currentThirdImageIndex, setCurrentThirdImageIndex] = useState(0);

  const [imageIndexes, setImageIndexes] = useState({});

  const handlePrevImage = (projectId, totalImages) => {

    setImageIndexes(prev => ({

        ...prev,

        [projectId]:
            prev[projectId] === undefined
                ? totalImages - 1
                : (prev[projectId] - 1 + totalImages) % totalImages

    }));

};

  const handleNextImage = (projectId, totalImages) => {

    setImageIndexes(prev => ({

        ...prev,

        [projectId]:
            prev[projectId] === undefined
                ? 1 % totalImages
                : (prev[projectId] + 1) % totalImages

    }));

};

  const handlePrevOtherImage = () => {
    setCurrentOtherImageIndex((prevIndex) => 
      prevIndex === 0 ? otherProjectImages.length - 1 : prevIndex - 1
    )
  }

  const handleNextOtherImage = () => {
    setCurrentOtherImageIndex((prevIndex) => 
      prevIndex === otherProjectImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handlePrevThirdImage = () => {
    setCurrentThirdImageIndex((prevIndex) => 
      prevIndex === 0 ? thirdProjectImages.length - 1 : prevIndex - 1
    )
  }

  const handleNextThirdImage = () => {
    setCurrentThirdImageIndex((prevIndex) => 
      prevIndex === thirdProjectImages.length - 1 ? 0 : prevIndex + 1
    )
  }


  

  return (
    <>
    
    <Routes>
      <Route path='/' element={
        <>
          <div id='home' className='min-h-screen'>
      <NavBar />
      <div className="relative h-auto w-full overflow-hidden bg-gradient-to-tr from-[#0D0D11] via-[#15171D] to-[#6366F1]">
      {/* Glow sutil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute w-[200px] h-[600px] bg-purple-600/20 blur-[140px] rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[100px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full bottom-[-200px] right-[-200px]" />
      </div>

      {/* Banner */}
      <Banner />

    </div>
    
    {/* Tecnologies */}
    <div id='skills'>
      <TecnologiasSection  />
    </div>

    <div id='sobre' className='grid md:grid-cols-2 gap-3 w-full min-h-[300px] bg-gray-black py-10 px-[7%]'>
      
      <div className='col-span-1'>
       <h2 className='text-secundary-purple text-base font-normal'>Sobre mim</h2>
       <h1 className='text-3xl font-semibold text-gray-400 my-7'>Mais Sobre mim</h1>
       <p className='text-gray-400 text-sm leading-[30px]'>Apaixonado por tecnologia e resolução de problemas. <br />
       Atuo no desenvolvimento de aplicações completas,<br /> 
       desde o planejamento até ao deploy.</p>

       <div className='w-full flex flex-col gap-7 text-gray-400  my-7'>
        <li className='list-none flex items-center gap-3 font-semibold'>
          <CheckCircle2 className='text-primary-purple' />
          <span className='text-sm'>Foco em código limpo e escalável</span>
        </li>

        <li className='list-none flex items-center gap-3 font-semibold'>
          <CheckCircle2 className='text-primary-purple' />
          <span className='text-sm'>Experiencia com tecnologias modernas</span>
        </li>

        <li className='list-none flex items-center gap-3 font-semibold'>
          <CheckCircle2 className='text-primary-purple' />
          <span className='text-sm'>Sempre aprendendo e evoluindo</span>
        </li>
       </div>

       

      </div>

      {/* right side */}
      <div className='w-full h-[500px] relative'>
        <img src = "/images/banner.webp" 
         className='w-[380px] mx-auto h-full bg-cover absolute top-[-100px] left-[50%]
         translate-x-[-50%]
         '
        />
      </div>
    </div>
    </div>

    <div className='w-full min-h-[400px] bg-background-black p-7 px-[7%] text-gray-400'>
     <Title text={"Projectos"} />
     <div className='flex items-center justify-between my-7'>
       <h1 className='text-2xl font-semibold text-gray-400'>Projectos em destaque</h1>
       <Link to={'/projects'} className='text-secundary-purple text-xs flex items-center gap-3 transition duration-300 '>
       <span>Ver todos os projectos</span>
       
       </Link>
     </div>

     {/* cards */}
     <div className='grid md:grid-cols-3 gap-4'>

      {Array.isArray(projects) && projects.map((item,index) => (
        <>
         <motion.div
         initial={{y:100,opacity:0}}
         whileInView={{y:0,opacity:1}}
         transition={{duration:1,delay:index * 0.3}}
         key={index} 
         to={`/projectSingle/${item?.id}`} 
         className='col-span-1 h-[350px] border border-[#ccc] rounded-xl relative'>
        {/* overlay */}
        <div className='w-full h-full absolute top-0 left-0 bg-black/20'></div>
        <div className='w-full h-[60%] rounded-tl-xl rounded-tr-xl relative cursor-pointer'>
          <img src={item?.images[currentImageIndex]} 
          className='w-full h-full bg-no-repeat bg-center bg-cover rounded-tl-xl rounded-tr-xl
           
          '
          />
          
        </div>

        {/* Projetos */}
        <div className='w-full h-[40%] p-3'>
         <h2 className='mb-2'>{item?.name}</h2>
         <p className='text-xs leading-normal'>{item?.description}</p>

          {/* Tecnologias */}
         <div className='flex items-center gap-1'>
           {item?.tecnologias?.map((tec,index) => (
            <div key={index} className='my-2 flex items-center justify-center gap-2'>
             <img src={tec?.image} className='w-[15px] h-[15px] bg-contain bg-center'/>
            <p className='text-xs'>{tec?.name}</p>
           </div>
           ))}

           
         </div>

         <div className='my-1 relative z-10 hover:text-secundary-purple'>
          <Link to={`/projectSingle/${item?.id}`} className='text-xs flex items-center gap-2'>
            <Eye size={19}/>
            <span className='font-semibold'>Ver mais</span>
          </Link>
         </div>

         
        </div>

         </motion.div>
        </>
      ))}


     </div>

     
    </div>

    <div className='w-full h-[850px] bg-gray-black py-7 px-[7%] text-gray-400'>
        <Title text={"Experiencia"} />
        <h1 className='text-3xl font-semibold text-gray-400 my-7 mb-4'>Minha Jornada</h1>

        <div className='grid md:grid-cols-8 pt-5'>
          <div className='hidden  col-span-2 my-14  md:flex flex-col items-center'>
            {Array.from({length:3}).map((_,index)=> (
              <>
                <div className='relative'>
                  <div className='w-[30px] h-[30px] bg-secundary-purple rounded-full'></div>
                  <div className='relative left-[50%] w-[1px] h-[184px] bg-secundary-purple'></div>
                </div>
              </>
            ))}
          </div>

          <div id='experiencia' className='col-span-6 flex flex-col pt-12'>
            <TimelineAccordion />
          </div>
        </div>
    </div>  

    <div className='w-full  min-h-[200px] bg-gradient-to-l from-gray-black via-secundary-purple to-primary-purple p-[7%]'>
      <Title text={"Vamos trabalhar juntos?"} color='gray-black' />
      <h1 className='my-4 text-xl leading-normal text-white text-center md:text-left'>Tem algo em mente?</h1>
      <button className=" w-[150px] h-[40px] text-xs border hover:bg-[#6464] tranasition duration-300 text-white rounded-xl border-[#ccc]">Entre em contacto</button>
    </div>

    <div className='w-full min-h-[350px] bg-gray-black p-5'>
       <div className='grid md:grid-cols-4'>

        <div className='md:col-span-2  flex flex-col items-start '>
          <div className='w-[150px] h-[50px]'>
            <img src='/images/logo_1.png' alt='Logo marca'
            className='w-full h-full bg-center bg-contain'
            />  
          </div>

          <div className='my-4 text-gray-400 text-xs mb-6'>
            <p>Desenvolvimento de soluções digitais  com qualidade e propósito</p>
          </div>

          <div className='flex items-center gap-3 justify-between text-white'>
            <Link to={'https://github.com/Mwaka-Lukombo'} target='_blank' className='w-[30px] h-[30px] border border-[#ccc] rounded-full flex items-center justify-center'>
             <FaGithub />
            </Link>

            <Link to={'https://web.facebook.com/profile.php?id=100008789257623'} target='_blank' className='w-[30px] h-[30px] border border-[#ccc] rounded-full flex items-center justify-center'>
              <FaFacebook />
            </Link>

            <Link to={'https://wa.me/+258878892051'} target='_blank' className='w-[30px] h-[30px] border border-[#ccc] rounded-full flex items-center justify-center'>
              <FaWhatsapp />
            </Link>
            
          </div>
          
        </div>

        <div id='contacto' className='col-span-1 '>
            <Title text={"Navegacao"} color='white' />
            <ul className='text-gray-400 flex flex-col gap-4 my-4 text-xs'>
              <li>
                <Link>Sobre</Link>
              </li>
              <li>
                <Link>Skills</Link>
              </li>
              <li>
                <Link>Projectos</Link>
              </li>
              <li>
                <Link>Experiencia</Link>
              </li>
              <li>
                <Link>Contacto</Link>
              </li>
            </ul>
        </div>

        <div className='col-span-1 '>
            <Title text={"Contacto"} color='white' />
            <ul className='text-gray-400 flex flex-col gap-4 my-4 text-xs'>
              <li>
                <Link className='flex items-center gap-3'>
                <Mail size={20}/>
                Alphonsejunior43@gmail.com
                </Link>
              </li>
              <li>
                <Link className='flex items-center gap-3'>
                <PhoneCall size={20}/>
                +258 878892051
                </Link>
              </li>
              <li>
                <Link className='flex items-center gap-3'>
                <LocateIcon size={20} />
                Beira, Mozambique
                </Link>
              </li>

            </ul>
        </div>
       </div>
    </div>
    <div className='w-full p-4 flex items-center justify-center bg-black'>
      <p className='text-secundary-purple text-xs'>&copy; Todos os direitos reservados - <b>awTech</b></p>
    </div>

        </>
      } />
      <Route path="/projectSingle/:id" element={
        <ProjectSingle />
      } />
    </Routes>
    </>
  )
}