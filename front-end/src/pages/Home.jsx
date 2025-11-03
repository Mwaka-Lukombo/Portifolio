import { CodeIcon, Computer, Facebook, Github, Linkedin, Locate, Mail, Megaphone, PaintBucket, PaintRoller, Settings, User } from 'lucide-react';

//fontAwesome
import { ShieldCheck } from 'lucide-react';

import React from 'react'
import { ReactTyped } from 'react-typed';


export const Home = () => {
  return (
    <>
    <main className='bg-gradient-to-r from-[#1A0608] to-[#2A0C0E] py-[80px]'>
        <div className='container max-w-[1300px] w-full  mx-auto px-4 md:px-0'>
            <div className='grid grid-cols-1 relative ml-4 md:px-0 -top-[200px] md:-top-0 md:grid-cols-5 gap-2'>
              <div className='col-span-1 md:col-span-3 w-full md:py-[100px]   text-[#F5F5F5] order-2 md:order-1 text-center md:text-left'>
                
                <h1 className='text-2xl md:text-3xl font-bold leading-normal mb-4 text-white'>
  Olá, eu sou{' '}
  <ReactTyped
    strings={[
      'Alphonse Mwaka Lukombo',
      'Programador',
      'Gestor de Marketing',
      'Técnico de Redes'
    ]}
    typeSpeed={70}
    backSpeed={50}
    loop
    backDelay={1500}
    className='text-[#721011] font-bold text-5xl'
  />
</h1>

                <h2 className='text-lg  md:text-5xl leading-normal md:leading-[60px] md:mb-4 font-bold'>Tranformamos ideias em experiências digitais únicas</h2>
                <p className=' text-base md:text-lg leading-[50px] md:mb-4 font-mono'>A awTech desenvolve sites, sistemas e marcas que conectam tecnologia e proposito.</p>

                <div className='flex justify-center md:justify-start gap-1 '>
                    <button className='btn bg-gradient-to-r from-[#5A0D10] to-[#721011] text-[#F5F5F5] border-0'>Solicitar Orçamento</button>
                    <button className='btn bg-gradient-to-r from-[#5A0D10] to-[#721011] hover:bg-[#2A0C0E] text-[#F5F5F5]  border-0'>Ver Portifolio</button>
                </div>
              </div>

              <div className='md:py-0 col-span-1  md:col-span-2  order-1 md:order-2 relative'>
                <div className='relative -top-[100px] md:-top-7'>
                    <img src='/img/IMG_4345.PNG' alt='banner_perfil' className='bg-contain md:bg-center bg-no-repeat md:w-[250px] md:h-[250px]  rounded-full mx-auto  md:mx-0  md:border-0 md:w-auto md:h-auto md:absolute relative top-[120px] md:-top-[120px]' />
              </div>
              </div>

            </div>
            
            <div className='w-[95%] md:w-full mx-auto  bg-gradient-to-r from-[#0B0203] to-[#1A0608] text-[#F9F9F9] rounded-xl p-10'>
                <h2 className='text-3xl leading-normal mb-3 font-bold'>Serviços</h2>
                <p className='text-[#E6E6E6] mb-3 font-mono'>Oferecemos uma gama completa de seicos digitais.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 grid-flow-row grid-rows-2 gap-3'>
                   <div className='col-span-1 bg-gradient-to-b from-[#2A0C0E] to-[#140405] p-6 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer min-h-[150px] my-3'>
                     <div className='flex gap-2 items-center p-3'>
                        <div className='w-[20%] flex items-center justify-center'>
                            <Computer />
                        </div>

                        <div className='w-[80%]'>
                            <h3 className='text-2xl font-bold leading-normal'>Desenvolvimento Web</h3>
                            <p className='text-base text-[#E6E6E6]'>Chasso de sices sitemas e plataformas.</p>
                        </div>
                     </div>
                   </div> 

                   <div className='col-span-1 bg-gradient-to-b from-[#2A0C0E] to-[#140405] p-6 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer min-h-[150px] my-3'>
                     <div className='flex gap-2 items-center p-3'>
                        <div className='w-[20%] flex items-center justify-center'>
                            <PaintRoller />
                        </div>

                        <div className='w-[80%]'>
                            <h3 className='text-2xl font-bold leading-normal'>Design e Identidade Visual</h3>
                            <p className='text-base text-[#E6E6E6]'>Logotipos. UI/UX e breanding</p>
                        </div>
                     </div>
                   </div> 

                   <div className='col-span-1 bg-gradient-to-b from-[#2A0C0E] to-[#140405] p-6 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer min-h-[150px] my-3'>
                     <div className='flex gap-2 items-center p-3'>
                        <div className='w-[20%] flex items-center justify-center'>
                            <Megaphone />
                        </div>

                        <div className='w-[80%]'>
                            <h3 className='text-2xl font-bold leading-normal'>Marketing Digital</h3>
                            <p className='text-base text-[#E6E6E6]'>SEO, Ads e gerenciamento de mídia</p>
                        </div>
                     </div>
                   </div> 

                   <div className='col-span-1 bg-gradient-to-b from-[#2A0C0E] to-[#140405] p-6 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer min-h-[150px] my-3'>
                     <div className='flex gap-2 items-center p-3'>
                        <div className='w-[20%] flex items-center justify-center'>
                            <Settings className='' />
                        </div>

                        <div className='w-[80%]'>
                            <h3 className='text-2xl font-bold leading-normal'>Desenvolvimento Web</h3>
                            <p className='text-base text-[#E6E6E6]'>Suporte, atualizações e segurança</p>
                        </div>
                     </div>
                   </div> 
                </div>

                <div>
                    <h2 className='text-3xl leading-normal mb-3 font-bold'>Porquê escolher a awTech?</h2>
                    
                    <div className='grid md:grid-cols-3 gap-2'>
                        <div className='flex items-center justify-center col-span-1 bg-gradient-to-b from-[#2A0C0E] to-[#140405] p-6 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer min-h-[150px] my-3'>
                            <div className='flex items-center justify-center flex-col'>
                                <div className='flex items-center justify-center text-2xl mb-2 w-[100px] h-[60px] '>
                                    <User />
                                </div>
                                <h3 className='text-lg tracking-wide text-[#E6E6E6] w-[200px] text-center'>Atendimento personalizado</h3>
                            </div>
                        </div>

                         <div className='flex items-center justify-center col-span-1 bg-gradient-to-b from-[#2A0C0E] to-[#140405] p-6 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer min-h-[150px] my-3'>
                            <div className='flex items-center justify-center flex-col'>
                                <div className='flex items-center justify-center text-2xl mb-2 w-[100px] h-[60px] '>
                                    <ShieldCheck />
                                </div>
                                <h3 className='text-lg tracking-wide text-[#E6E6E6] w-[200px] text-center'>Projectos rápidos e seguros</h3>
                            </div>
                        </div>

                         <div className='flex items-center justify-center col-span-1 bg-gradient-to-b from-[#2A0C0E] to-[#140405] p-6 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer min-h-[150px] my-3'>
                            <div className='flex items-center justify-center flex-col'>
                                <div className='flex items-center justify-center text-2xl mb-2 w-[100px] h-[60px] '>
                                    <CodeIcon />
                                </div>
                                <h3 className='text-lg tracking-wide text-[#E6E6E6] w-[200px] text-center'>Código limpo e escalavél</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden md:block my-5 mb-[100px] text-[#F5F5F5] text-center md:text-left'>
                 <h2 className='text-3xl leading-normal mb-3 font-bold'>Sua presença digital começa aqui</h2>
                 <p className='font-mono'>Fale conosco e transforme a sua ideia em realidade.</p>
            </div> 

             <div className='my-12 text-[#F5F5F5] text-center md:text-left'>
                 <h2 className='text-2xl md:text-5xl leading-normal mb-3 font-bold mx-auto md:w-[700px] w-[400px] text-center tracking-tight'>Tecnologias que impulsionam nossos projectos</h2>
                 <p className='font-mono text-center'>Dominamos as principais linguagens e frameworks modernos do mercado.</p>

                 <div className='w-full grid grid-cols-2 md:grid-cols-4 my-7 gap-4 px-5 md:px-0'>
                    <div className='col-span-1 bg-gradient-to-r from-[#0B0203] to-[#1A0608] text-[#F9F9F9] min-h-[200px] rounded-xl'>
                        <div className='flex flex-col items-center justify-center p-[20px]'>
                            <div>
                                <img src='./icons/html-5.png' className='w-[50px]' />
                            </div>


                            <div className='flex items-center flex-col my-4'>
                                <h3 className='text-base font-mono mb-2'>HMTL</h3>
                                <progress className="progress progress-primary w-56 mb-3" value="90" max="100"></progress>
                                <h3 className='font-bold'>90%</h3>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-1 bg-gradient-to-r from-[#0B0203] to-[#1A0608] text-[#F9F9F9] min-h-[200px] rounded-xl'>
                        <div className='flex flex-col items-center justify-center p-[20px]'>
                            <div>
                                <img src='./icons/css.png' className='w-[50px]' />
                            </div>


                            <div className='flex items-center flex-col my-4'>
                                <h3 className='text-base font-mono mb-2'>CSS</h3>
                                <progress className="progress progress-primary w-56 mb-3" value="85" max="100"></progress>
                                <h3 className='font-bold'>85%</h3>
                            </div>
                        </div>
                    </div>

                     <div className='col-span-1 bg-gradient-to-r from-[#0B0203] to-[#1A0608] text-[#F9F9F9] min-h-[200px] rounded-xl'>
                        <div className='flex flex-col items-center justify-center p-[20px]'>
                            <div>
                                <img src='./icons/java-script.png' className='w-[50px]' />
                            </div>


                            <div className='flex items-center flex-col my-4'>
                                <h3 className='text-base font-mono mb-2'>JavaScript</h3>
                                <progress className="progress progress-primary w-56 mb-3" value="85" max="100"></progress>
                                <h3 className='font-bold'>80%</h3>
                            </div>
                        </div>
                    </div>

                     <div className='col-span-1 bg-gradient-to-r from-[#0B0203] to-[#1A0608] text-[#F9F9F9] min-h-[200px] rounded-xl'>
                        <div className='flex flex-col items-center justify-center p-[20px]'>
                            <div>
                                <img src='./icons/react.png' className='w-[50px]' />
                            </div>


                            <div className='flex items-center flex-col my-4'>
                                <h3 className='text-base font-mono mb-2'>REACT JS</h3>
                                <progress className="progress progress-primary w-56 mb-3" value="85" max="100"></progress>
                                <h3 className='font-bold'>92%</h3>
                            </div>
                        </div>
                    </div>

                     <div className='col-span-1 bg-gradient-to-r from-[#0B0203] to-[#1A0608] text-[#F9F9F9] min-h-[200px] rounded-xl'>
                        <div className='flex flex-col items-center justify-center p-[20px]'>
                            <div>
                                <img src='./icons/node.png' className='w-[50px]' />
                            </div>


                            <div className='flex items-center flex-col my-4'>
                                <h3 className='text-base font-mono mb-2'>NODE JS</h3>
                                <progress className="progress progress-primary w-56 mb-3" value="87" max="100"></progress>
                                <h3 className='font-bold'>87%</h3>
                            </div>
                        </div>
                    </div>

                     <div className='col-span-1 bg-gradient-to-r from-[#0B0203] to-[#1A0608] text-[#F9F9F9] min-h-[200px] rounded-xl'>
                        <div className='flex flex-col items-center justify-center p-[20px]'>
                            <div>
                                <img src='./icons/mysql.png' className='w-[50px]' />
                            </div>


                            <div className='flex items-center flex-col my-4'>
                                <h3 className='text-base font-mono mb-2'>MySql</h3>
                                <progress className="progress progress-primary w-56 mb-3" value="95" max="100"></progress>
                                <h3 className='font-bold'>95%</h3>
                            </div>
                        </div>
                    </div>

                     <div className='col-span-1 bg-gradient-to-r from-[#0B0203] to-[#1A0608] text-[#F9F9F9] min-h-[200px] rounded-xl'>
                        <div className='flex flex-col items-center justify-center p-[20px]'>
                            <div>
                                <img src='./icons/mongo.png' className='w-[50px]' />
                            </div>


                            <div className='flex items-center flex-col my-4'>
                                <h3 className='text-base font-mono mb-2'>MongoDB</h3>
                                <progress className="progress progress-primary w-56 mb-3" value="70" max="100"></progress>
                                <h3 className='font-bold'>70%</h3>
                            </div>
                        </div>
                    </div>

                     <div className='col-span-1 bg-gradient-to-r from-[#0B0203] to-[#1A0608] text-[#F9F9F9] min-h-[200px] rounded-xl'>
                        <div className='flex flex-col items-center justify-center p-[20px]'>
                            <div>
                                <img src='./icons/github.png' className='w-[50px]' />
                            </div>


                            <div className='flex items-center flex-col my-4'>
                                <h3 className='text-base font-mono mb-2'>GitHub</h3>
                                <progress className="progress progress-primary w-56 mb-3" value="79" max="100"></progress>
                                <h3 className='font-bold'>79%</h3>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>   
            
            <div className='pt-[50px]'>
                <h2 className='text-center md:text-left text-5xl font-bold text-[#F5F5F5]'>Portifólio</h2>

                <div className='w-full my-[50px]'>
                    <div className='grid px-4 md:px-0 grid-cols-1 md:grid-cols-3 grid-flow-row md:grid-rows-2 gap-2 rounded-xl'>
                        <div className='p-5 col-span-1 border-2 border-[#721011] min-h-[500px] rounded-xl bg-gradient-to-t from-[#0B0203] to-[#1A0608] text-[#F9F9F9]'>
                            <div className='flex flex-col gap-2'>
                                <div className='relative w-full h-[280px] rounded-xl overflow-hidden'>
                                <img 
                                    src='./img/mae.png' 
                                    alt='mae_protegida' 
                                    className='w-full h-[280px] object-cover rounded-xl' 
                                />

                                <div className='absolute inset-0 bg-gradient-to-t from-[#000001]/80 to-transparent opacity-90 rounded-xl'></div>                            
                                </div> 

                                <div>
                                <h3 className='text-3xl font-bold leading-normal'>Mãe Protegida</h3>
                                <h3 className='text-base font-mono my-4'>Sistema</h3>
                                </div>

                                <div>
                                <button className="btn bg-gradient-to-r from-[#1A0608] to-[#2A0C0E] border-0 text-[#F5F5F5] hover:from-[#721011] hover:to-[#721011] w-full transition-all">
                                    Ver detalhes
                                </button>
                                </div>

                            </div>
                            </div>

                            <div className='p-5 col-span-1 border-2 border-[#721011] min-h-[500px] rounded-xl bg-gradient-to-t from-[#0B0203] to-[#1A0608] text-[#F9F9F9]'>
                            <div className='flex flex-col gap-2'>
                                <div className='relative w-full h-[280px] rounded-xl overflow-hidden'>
                                <img 
                                    src='./img/nexus.png' 
                                    alt='nexus_piaget' 
                                    className='w-full h-[280px] object-cover rounded-xl' 
                                />

                                <div className='absolute inset-0 bg-gradient-to-t from-[#000001]/80 to-transparent opacity-90 rounded-xl'></div>                            
                                </div> 

                                <div>
                                <h3 className='text-3xl font-bold leading-normal'>Mexus Piegat</h3>
                                <h3 className='text-base font-mono my-4'>Sistema</h3>
                                </div>

                                <div>
                                <button className="btn bg-gradient-to-r from-[#1A0608] to-[#2A0C0E] border-0 text-[#F5F5F5] hover:from-[#721011] hover:to-[#721011] w-full transition-all">
                                    Ver detalhes
                                </button>
                                </div>

                            </div>
                            </div>

                            <div className='p-5 col-span-1 border-2 border-[#721011] min-h-[500px] rounded-xl bg-gradient-to-t from-[#0B0203] to-[#1A0608] text-[#F9F9F9]'>
                            <div className='flex flex-col gap-2'>
                                <div className='relative w-full h-[280px] rounded-xl overflow-hidden'>
                                <img 
                                    src='./img/emprego.png' 
                                    alt='nexus_piaget' 
                                    className='w-full h-[280px] object-cover rounded-xl' 
                                />

                                <div className='absolute inset-0 bg-gradient-to-t from-[#000001]/80 to-transparent opacity-90 rounded-xl'></div>                            
                                </div> 

                                <div>
                                <h3 className='text-3xl font-bold leading-normal'>Emprego MZN</h3>
                                <h3 className='text-base font-mono my-4'>Site</h3>
                                </div>

                                <div>
                                <button className="btn bg-gradient-to-r from-[#1A0608] to-[#2A0C0E] border-0 text-[#F5F5F5] hover:from-[#721011] hover:to-[#721011] w-full transition-all">
                                    Ver detalhes
                                </button>
                                </div>

                            </div>
                            </div>

                            <div className='p-5 col-span-1 border-2 border-[#721011] min-h-[500px] rounded-xl bg-gradient-to-t from-[#0B0203] to-[#1A0608] text-[#F9F9F9]'>
                            <div className='flex flex-col gap-2'>
                                <div className='relative w-full h-[280px] rounded-xl overflow-hidden'>
                                <img 
                                    src='./img/nexus.png' 
                                    alt='nexus_piaget' 
                                    className='w-full h-[280px] object-cover rounded-xl' 
                                />

                                <div className='absolute inset-0 bg-gradient-to-t from-[#000001]/80 to-transparent opacity-90 rounded-xl'></div>                            
                                </div> 

                                <div>
                                <h3 className='text-3xl font-bold leading-normal'>Mexus Piegat</h3>
                                <h3 className='text-base font-mono my-4'>Sistema</h3>
                                </div>

                                <div>
                                <button className="btn bg-gradient-to-r from-[#1A0608] to-[#2A0C0E] border-0 text-[#F5F5F5] hover:from-[#721011] hover:to-[#721011] w-full transition-all">
                                    Ver detalhes
                                </button>
                                </div>

                            </div>
                            </div>


                        
                    </div>
                </div>
            </div>
            
            <div className='pt-[50px]'>
                <h2 className='text-[#F5F5F5] text-4xl text-center md:text-left font-bold'>Sobre a awTech</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 border-b border-gray-400'>
                 <div className='col-span-1 mt-[20px] text-[#F5F5F5] text-center px-3 md:text-left md:px-0'>
                    <p className='text-base leading-[30px] mb-8'>A awTech nasceu com o propósito de transformar ideias em experiencias digitais unicas.
                        Nosso foco esta em conectar <b>tecnologia, design</b> e proposito para 
                        criar soluções que geram impacto real.
                    </p>

                    <p className='text-base leading-[30px] mb-8'>
                        Criada por <b>Alphonse Mwaka Lukombo,</b> a awTech atua no desenvolvimento de sistemas,
                        websites, e plataformas modernas, sempre com a atenção ao desempenho e a experiencia do usuário.
                    </p>

                    <p className='text-base leading-[30px] mb-8'>
                        Acreditamos que cada projecto é uma oportunidade de construir algo significativo - unindo
                        <b>criatividade, estratégia e inovação </b>
                    </p>
                 </div>

                 <div className='col-sapn-1 h-[240px]'>
                    <div className='w-[50%] h-full'>
                        <img src='./img/footer.png' alt='sobre imagem' className='w-full h-full bg-no-repeat bg-cover' />
                    </div>
                 </div>
                </div>

                <div className='flex flex-col md:flex-row px-[20px] md:px-0 text-[#F5F5F5] py-4'>
                    <div className='w-[40%]'>
                        <h2 className='text-3xl font-bold leading-normal mb-2'>awTech</h2>
                        <p className='w-[300px] leading-[30px]'>Transformamos ideias com soluções digitais de impacto
                            Desenvolvimento de sites, sites e identidade visual
                        </p>
                    </div>

                    <div className='w-[20%]'>
                        <h2 className='text-lg font-bold'>Links Rápidos</h2>
                        <ul className='flex flex-col gap-4'>
                            <li>
                                <a href='#' className='font-bold mt-5'>Services</a>
                            </li>

                            <li>
                                <a href='#' className='font-bold'>Portifolio</a>
                            </li>

                            <li>
                                <a href='#' className='font-bold'>Sobre</a>
                            </li>
                        </ul>
                    </div>

                    <div className='w-[20%] hidden md:block'>
                        <h2 className='text-lg font-bold'>Contacto</h2>

                        <ul className='flex flex-col gap-4 '>
                            <li className='flex gap-2'>
                                <Locate />
                                <a href=''>
                                 Inhambane, Moçambique
                                </a>
                            </li>

                            <li className='flex gap-2'>
                                <Mail />
                                <a href=''>
                                 awTech@gmail.com
                                </a>
                            </li>

                            <li className='flex gap-4'>
                             <a href=''><Github /></a>
                             <a href=''><Linkedin /></a>
                             <a href=''><Facebook /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            
         </div>
        <div>
        </div>
    
     
    </main>
    
    <footer className='flex items-center justify-center bg-gradient-to-r from-[#0B0203] to-[#1A0608] text-[#F9F9F9] p-3'>
        <p className='text-base tracking-tight'>&copy; 2025 awTech. Todos os direitos reservados</p>     
    </footer>
    </>
  )
}
