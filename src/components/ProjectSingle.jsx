import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router';
import { ProjectContext } from '../hooks/ProjectsContext';



export const ProjectSingle = () => {
    
    
      const [imageIndexes, setImageIndexes] = useState({});
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      
      const handlePrevImage = () => {

    if (!totalImages) return;

    setCurrentImageIndex((prev) =>
        prev === 0
            ? totalImages - 1
            : prev - 1
    );

};

const handleNextImage = () => {

    if (!totalImages) return;

    setCurrentImageIndex((prev) =>
        prev === totalImages - 1
            ? 0
            : prev + 1
    );

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

    const {projects} = useContext(ProjectContext);

     const {
        id
     } = useParams();

    const projectSingle = projects.find((project) => project.id === Number(id));
    const totalImages = projectSingle?.images?.length || 0;
      const description = projectSingle?.fullDescription[0]?.description.trim();
       const functionalidades = projectSingle?.fullDescription[0]?.funcionalidades?.trim().split("\n");
         const tecnologias = projectSingle?.fullDescription[0]?.tecnologias?.trim().split("\n");
       
    
  return (
    <div className='w-full min-h-screen text-gray-400 bg-black/95 backdrop-blur-md border-b border-purple-500/30 shadow-lg shadow-purple-500/10
    p-7
    '>
       
       {/* menu Top */}
       <Link to={'/'} className='w-[40px] h-[40px] rounded-xl bg-[#ccc]
        flex items-center justify-center cursor-pointer
        transition-all duration-300 hover:bg-[#fafafa] relative z-10
       '>
        <ArrowLeft className='text-black' size={20}/>
       </Link>

       <div className='mt-7 flex flex-col-reverse  md:flex-row gap-2'>

        {/* project Images */}
         <div className='md:w-[70%]'>

            {/* overlay */}
            <div className='absolute top-0 left-0 w-full h-full rounded-2xl bg-black/20'> 
            </div>
            {/* image */}
            <div className='w-full h-[450px] bg-[#ccc] border-[#ccc] rounded-2xl'>
                <img src={projectSingle?.images[currentImageIndex]}
                 className='w-full h-full bg-cover bg-center rounded-2xl'
                />
            </div>

            {/* Description */}
            <div className='mt-4 flex flex-col gap-3'>

                <div className='flex flex-col gap-3'>
                    <h3 className='text-3xl font-bold text-white'>Descrição</h3>
                    <p className='text-xs md:text-sm text-justify leading-normal md:leading-[22px]'>{description}</p>
                </div>

                <div className='flex flex-col gap-3'>
                    <h3 className='text-3xl font-bold text-white'>Funcionalidades</h3>
                    <ul className='flex flex-col gap-2 list-disc list-inside'>
                    {Array.isArray(functionalidades) && functionalidades.map((item,index) => (
                        <li className='text-xs md:text-sm font-semibold'>{item}</li>
                    ))}
                    </ul>
                </div>

                <div className='flex flex-col gap-3'>
                    <h3 className='text-3xl font-bold text-white'>Tecnologias</h3>
                     <ul className='flex flex-col gap-2 list-disc list-inside'>
                    {Array.isArray(tecnologias) && tecnologias?.map((item,index) => (
                        <li className='text-xs md:text-sm font-semibold'>{item}</li>
                    ))}
                    </ul>
                </div>
                
            </div>
         </div>

         {/* right side */}
          <div className='md:w-[30%] rounded-2xl p-2'>
            
            <div className='w-full min-h-[200px] flex items-center justify-center
            flex-col relative
            '>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h2 className='text-3xl  font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent'>{projectSingle?.name}</h2>
                    <p className='text-sm font-normal leading-normal text-center'>{projectSingle?.description}</p>
                </div>

                {/* Butttons */}
                <div className='w-[200px] h-[50px]
                flex items-center justify-center px-3 gap-2 mt-2
                '>
                    <button
                    onClick={handlePrevImage}
                    className="w-[40px] h-[40px] hover:bg-primary-purple bg-secundary-purple rounded-full text-white flex items-center justify-center"
                >
                    <ArrowLeft size={19}/>
                </button>

                <button
                    onClick={handleNextImage}
                    className="w-[40px] h-[40px] hover:bg-primary-purple bg-secundary-purple rounded-full text-white flex items-center justify-center"
                >
                    <ArrowRight size={19}/>
                </button>
                </div>
                
            </div>
            
          </div>
       </div>
    </div>
  )
}
