import React, { useState } from 'react'
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



export const App = () => {

  const nexusImages = ['/cards/nexus/screencapture-localhost-3000-2026-06-01-19_32_45.png'
    ,
    '/cards/nexus/screencapture-localhost-3000-alumin-2026-06-01-19_40_56.png',
    '/cards/nexus/screencapture-localhost-3000-alumin-profile-69c4f697176ef0bc6f32179b-2026-06-01-19_41_21.png'
  ]

  const otherProjectImages = [
    '/cards/Mobile/screencapture-localhost-3000-forgetPassword-2026-06-01-19_49_32.png',
    '/cards/Mobile/screencapture-localhost-3000-login-2026-06-01-19_49_08.png',
    '/cards/Mobile/screencapture-localhost-3000-signup-2026-06-01-19_49_20.png',
    '/cards/Mobile/screencapture-mobile-sale-onrender-2026-06-01-19_54_28.png',
    '/cards/Mobile/screencapture-mobile-sale-onrender-acessorios-6a0edc380c4ad9bc04ef7165-category-Capas-de-celular-2026-06-01-19_58_04.png',
    '/cards/Mobile/screencapture-mobile-sale-onrender-acessorios-2026-06-01-19_57_54.png',
    '/cards/Mobile/screencapture-mobile-sale-onrender-profile-2026-06-01-19_59_32.png',
    '/cards/Mobile/screencapture-mobile-sale-onrender-smartphones-69fddffea54e23c177201a8e-category-Iphone-2026-06-01-19_57_38.png',
    '/cards/Mobile/screencapture-mobile-sale-onrender-smartphones-2026-06-01-19_54_51.png',
    '/cards/Mobile/screencapture-mobile-sale-onrender-smartphones-2026-06-01-19_57_19.png',
    '/cards/Mobile/screencapture-mobile-sale-onrender-tablets-2026-06-01-19_58_14.png',
    '/cards/Mobile/Screenshot 2026-06-01 195901.png'
  ]

  const thirdProjectImages = [
    '/cards/Pizzaria/screencapture-pizzaria-realtime-02-onrender-2026-06-01-20_14_13.png',
    '/cards/Pizzaria/screencapture-pizzaria-realtime-02-onrender-kitchen-2026-06-01-20_17_16.png',
    '/cards/Pizzaria/screencapture-pizzaria-realtime-02-onrender-orders-2026-06-01-20_15_16.png',
    '/cards/Pizzaria/screencapture-pizzaria-realtime-02-onrender-orders-2026-06-01-20_15_48.png',
    '/cards/Pizzaria/screencapture-pizzaria-realtime-02-onrender-orders-2026-06-01-20_15_57.png',
    '/cards/Pizzaria/screencapture-pizzaria-realtime-02-onrender-orders-2026-06-01-20_16_39.png',
    '/cards/Pizzaria/screencapture-pizzaria-realtime-02-onrender-product-69aaafb658c1a56369be85fa-2026-06-01-20_14_42.png',
    '/cards/Pizzaria/screencapture-pizzaria-realtime-02-onrender-product-69aaafb658c1a56369be85fa-2026-06-01-20_15_07.png'

  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentOtherImageIndex, setCurrentOtherImageIndex] = useState(0)
  const [currentThirdImageIndex, setCurrentThirdImageIndex] = useState(0)

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? nexusImages.length - 1 : prevIndex - 1
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === nexusImages.length - 1 ? 0 : prevIndex + 1
    )
  }

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
      <div className='w-full h-full border border-[#ccc]'>

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
     <div className='grid md:grid-cols-6 gap-3'>
      <div className='md:col-span-4 min-h-[500px] border border-[#ccc] rounded-xl relative'>
        {/* overlay */}
        <div className='w-full h-full absolute top-0 left-0 bg-black/20'></div>
        <div className='w-full h-[70%] rounded-tl-xl rounded-tr-xl relative cursor-pointer'>
          <img src={nexusImages[currentImageIndex]} 
          className='w-full h-full bg-no-repeat bg-center bg-cover rounded-tl-xl rounded-tr-xl
          '
          />
          {/* Butttons */}
          <div className='w-[200px] h-[50px] absolute bottom-0 right-0
          flex items-center justify-end px-3 gap-1
          '>
            <button onClick={handlePrevImage} className='w-[30px] h-[30px] hover:bg-primary-purple bg-secundary-purple rounded-full text-white flex items-center justify-center'>
              <ArrowLeft size={19} />
            </button>
            <button onClick={handleNextImage} className='w-[30px] h-[30px] hover:bg-primary-purple bg-secundary-purple rounded-full text-white flex items-center justify-center'>
              <ArrowRight size={19} />
            </button>
          </div>
        </div>

        <div className='w-full h-[30%] p-3'>
         <h2 className='mb-2'>Nexus Piaget</h2>
         <p className='text-xs leading-normal'>Uma solução para estudantes, ex-estudantes da universidade Jean Piaget de Moçambique. A universidade Jean Piaget de Moçambique </p>

          {/* Tecnologias */}
         <div className='flex items-center gap-2'>
           <div className='p-2 flex items-center justify-center gap-2'>
            <img src="/images/react.png" className='w-[15px] h-[15px] bg-contain bg-center'/>
            <p className='text-xs'>React</p>
           </div>

           <div className='p-2 flex items-center justify-center gap-2'>
            <img src="/images/node.png" className='w-[15px] h-[15px] bg-contain bg-center'/>
            <p className='text-xs'>Node</p>
           </div>

           <div className='p-2 flex items-center justify-center gap-2'>
            <img src="/images/tailwindcss.svg" className='w-[15px] h-[15px] bg-contain bg-center'/>
            <p className='text-xs'>Tailwindcss</p>
           </div>
         </div>

         <div className='my-2 relative z-10 hover:text-secundary-purple'>
          <Link className='text-xs flex items-center gap-2'>
            <Eye size={19}/>
            <span>Demo</span>
          </Link>
         </div>

         
        </div>

      </div>

      <div className='md:col-span-2 min-h-[500px] border rounded-xl relative'>
        {/* overlay */}
        <div className='w-full h-full absolute top-0 left-0 bg-black/20 rounded-xl'></div>
        <div className='w-full h-[70%] rounded-tl-xl rounded-tr-xl relative cursor-pointer'>
          <img src={otherProjectImages[currentOtherImageIndex]} 
          className='w-full h-full bg-no-repeat bg-center bg-cover rounded-tl-xl rounded-tr-xl'
          />
          {/* Butttons */}
          <div className='w-[200px] h-[50px] absolute bottom-0 right-0
          flex items-center justify-end px-3 gap-1
          '>
            <button onClick={handlePrevOtherImage} className='w-[30px] h-[30px] hover:bg-primary-purple bg-secundary-purple rounded-full text-white flex items-center justify-center'>
              <ArrowLeft size={19} />
            </button>
            <button onClick={handleNextOtherImage} className='w-[30px] h-[30px] hover:bg-primary-purple bg-secundary-purple rounded-full text-white flex items-center justify-center'>
              <ArrowRight size={19} />
            </button>
          </div>
        </div>

        <div className='w-full h-[30%] p-3'>
         <h2 className='mb-2'>Mobile Sale</h2>
         <p className='text-xs leading-normal'>E-commerce para venda de celulares</p>

          {/* Tecnologias */}
         <div className='flex items-center gap-2'>
           <div className='p-2 flex items-center justify-center gap-2'>
            <img src="/images/react.png" className='w-[15px] h-[15px] bg-contain bg-center'/>
            <p className='text-xs'>React</p>
           </div>

           <div className='p-2 flex items-center justify-center gap-2'>
            <img src="/images/node.png" className='w-[15px] h-[15px] bg-contain bg-center'/>
            <p className='text-xs'>Node</p>
           </div>

           <div className='p-2 flex items-center justify-center gap-2'>
            <img src="/images/tailwindcss.svg" className='w-[15px] h-[15px] bg-contain bg-center'/>
            <p className='text-xs'>Tailwindcss</p>
           </div>
         </div>

         <div className='my-2 relative z-10 hover:text-secundary-purple'>
          <Link to={'https://mobile-sale.onrender.com/'} target='_blank' className='text-xs flex items-center gap-2'>
            <Eye size={19}/>
            <span>Demo</span>
          </Link>
         </div>
        </div>
      </div>
     </div>

     {/* Terceiro card - col-span-6 */}
     <div className='grid md:grid-cols-6 gap-3 mt-3'>
      <div className='md:col-span-6 h-[500px] border border-[#ccc] rounded-xl relative'>
       
        <div className='w-full h-[70%] rounded-tl-xl rounded-tr-xl relative cursor-pointer'>
           {/* overlay */}
        <div className='w-full h-full absolute top-0 left-0 bg-black/20 rounded-xl'></div>
          <img src={thirdProjectImages[currentThirdImageIndex]} 
          className='w-full h-full bg-no-repeat bg-center bg-cover rounded-tl-xl rounded-tr-xl'
          />
          {/* Butttons */}
          <div className='w-[200px] h-[50px] absolute bottom-0 right-0
          flex items-center justify-end px-3 gap-1
          '>
            <button onClick={handlePrevThirdImage} className='w-[30px] h-[30px] hover:bg-primary-purple bg-secundary-purple rounded-full text-white flex items-center justify-center'>
              <ArrowLeft size={19} />
            </button>
            <button onClick={handleNextThirdImage} className='w-[30px] h-[30px] hover:bg-primary-purple bg-secundary-purple rounded-full text-white flex items-center justify-center'>
              <ArrowRight size={19} />
            </button>
          </div>
        </div>

        <div className='w-full h-[30%] p-3'>
         <h2 className='mb-2'>Pizzaria</h2>
         <p className='text-xs leading-normal'>Pizzaria Realtime, uma aplicação que te permite gerenciar uma pizzaria, pedidos entre outros em tempo real.</p>

          {/* Tecnologias */}
         <div className='flex items-center gap-2'>
           <div className='p-2 flex items-center justify-center gap-2'>
            <img src="/images/react.png" className='w-[15px] h-[15px] bg-contain bg-center'/>
            <p className='text-xs'>React</p>
           </div>

           <div className='p-2 flex items-center justify-center gap-2'>
            <img src="/images/node.png" className='w-[15px] h-[15px] bg-contain bg-center'/>
            <p className='text-xs'>Node</p>
           </div>

           <div className='p-2 flex items-center justify-center gap-2'>
            <img src="/images/tailwindcss.svg" className='w-[15px] h-[15px] bg-contain bg-center'/>
            <p className='text-xs'>Tailwindcss</p>
           </div>

           <div className='p-2 flex items-center justify-center gap-2'>
            <img src="/images/mongo.png" className='w-[15px] h-[15px] bg-contain bg-center'/>
            <p className='text-xs'>MongoDB</p>
           </div>

           <div className='p-2 flex items-center justify-center gap-2'>
            <img src="/images/socket-io-svgrepo-com.svg" className='w-[15px] h-[15px] bg-contain bg-center'/>
            <p className='text-xs'>Socket.io</p>
           </div>
         </div>

         <div className='my-2 relative z-10 hover:text-secundary-purple'>
          <Link to={'https://pizzaria-realtime-02.onrender.com/'} target='_blank' className='text-xs flex items-center gap-2'>
            <Eye size={19}/>
            <span>Demo</span>
          </Link>
         </div>
        </div>
      </div>
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
  )
}