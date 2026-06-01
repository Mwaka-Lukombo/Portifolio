import { useState } from "react";

export const TimelineAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Aprendizado Contínuo e Desenvolvimento de Projetos",
      year: "2026",
      content: `Foco no aprendizado contínuo e desenvolvimento de projetos pessoais. Criação de uma plataforma de pizzaria em tempo real, reformulação do Nexus Piaget utilizando a stack MERN (anteriormente em PHP) e desenvolvimento atual de uma plataforma de gestão de jogadores de videogame.`
    },
    {
      title: "Conclusão do curso",
      year: "2025",
      content: `Desenvolvimento da plataforma Nexus Piaget, voltada para a otimização da comunicação e integração acadêmica no campus de Inhamízua da Universidade Jean Piaget de Moçambique. O projeto destacou-se como a melhor avaliação do departamento, tendo sido posteriormente divulgado no site institucional.
      
      `
    },
    {
      title: "Aprimoramento Profissional e Desenvolvimento Web",
      year: "2025",
      content: `Foco contínuo no desenvolvimento de habilidades em programação e desenvolvimento web, com conclusão de diversos cursos técnicos na área. Formação complementar pelo CNA, reforçando competências de comunicação e aprendizado contínuo.`
    },
    {
      title: "INAGE Inhambane / Redes de Computadores",
      year: "2024 / 2025",
      content: `Atuação no suporte a redes (LAN), com foco em troubleshooting de conectividade e manutenção de sistemas. Experiência em diagnóstico de falhas, configuração básica de rede (TCP/IP) e suporte técnico a usuários em ambientes institucionais, incluindo o Tribunal da Cidade.`
    }
  ];

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className='w-full bg-gray-height rounded-xl mb-3 p-7 cursor-pointer'
          onClick={() => toggle(index)}
        >
          <div className='flex items-center justify-between'>
            <div>
              <h2 className="text-sm">{item.title}</h2>
            </div>

            <div className='flex items-center gap-4'>
              <h1 className='text-sm font-semibold'>{item.year}</h1>
              <span className={`transition-transform text-xs ${openIndex === index ? "rotate-180" : ""}`}>
                ▼
              </span>
            </div>
          </div>

          {/* Conteúdo */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[300px] mt-3" : "max-h-0"
            }`}
          >
            <p className='my-3 text-xs leading-[22px]'>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};