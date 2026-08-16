import React, { createContext } from 'react';

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

  ];

  const maeImages = [
    '/cards/maeProtegida/banner.png',
    '/cards/maeProtegida/banner01.png',
    '/cards/maeProtegida/banner02.png',
    '/cards/maeProtegida/banner03.png',
    '/cards/maeProtegida/banner04.png',
    '/cards/maeProtegida/banner05.png',
    '/cards/maeProtegida/banner06.png',
    '/cards/maeProtegida/banner07.png',
    '/cards/maeProtegida/banner08.png',
    '/cards/maeProtegida/banner09.png',
    '/cards/maeProtegida/banner10.png',
    '/cards/maeProtegida/banner11.png',
    '/cards/maeProtegida/banner12.png',
    '/cards/maeProtegida/banner13.png',
  ]


export const ProjectContext = createContext();



export const ProjectProvider = (({children}) => {
    const projects = [
    {
     id:1,
     name:"Mãe Protegida",
     description:"Sistema completo para acompanhamento pré-natal",
     images:maeImages,
     link:"",
     tecnologias:[
      {
        name:"React",
        images:"/images/react.png"
      },
      {
        name:"Nodejs",
        image:"/images/node.png"
      },
      {
        name:"Tailwindcss",
        image:"/images/tailwindcss-icon.webp"
      },
      {
        name:"JavaScript",
        image:"/images/javascript.png"
      }
     ],
     fullDescription:[
        {
            description:`Mãe Protegida é uma plataforma digital desenvolvida para apoiar o acompanhamento integral da saúde materna durante toda a gestação. O sistema foi concebido para melhorar a comunicação entre gestantes e profissionais de saúde, centralizando informações clínicas, consultas, exames e histórico obstétrico numa única plataforma.
           A aplicação possui diferentes perfis de utilizadores (gestante, profissional de saúde e administrador), garantindo que cada utilizador tenha acesso apenas às funcionalidades necessárias. O sistema permite o agendamento de consultas, gestão do calendário pré-natal, registo do histórico obstétrico, acompanhamento da evolução da gravidez, notificações automáticas de consultas e exames, comunicação em tempo real entre pacientes e profissionais de saúde, além da disponibilização de conteúdos educativos sobre saúde materna.
           O painel administrativo oferece funcionalidades para gestão de utilizadores, profissionais, consultas, relatórios e indicadores estatísticos, permitindo uma visão global do funcionamento da plataforma.`,
           funcionalidades:`Autenticação segura com JWT Gestão de utilizadores
            Gestão de gestantes
            Gestão de profissionais de saúde
            Agenda médica
            Agendamento de consultas
            Histórico obstétrico
            Registo de exames
            Upload de documentos médicos
            Sistema de notificações
            Chat em tempo real
            Dashboard administrativo
            Estatísticas e relatórios
            Educação em saúde
            Gestão do perfil
                            `,
            tecnologias:`
                        React
                        Node.js
                        Express
                        MongoDB
                        Zustand
                        JWT
                        Cloudinary
                        Socket.io
                        Tailwind CSS
                        Render
                        Vercel`
        }
     ] 
        },
        {
        id:2,
        name:"Nexus Piaget",
        description:"Uma solução para estudantes, ex-estudantes da unversidade Jean Piaget de Moçambique",
        images:nexusImages,
        tecnologias:[
        {
            name:"React",
            image:"/images/react.png"
        },
        {
            name:"Nodejs",
            image:"/images/node.png"
        },
        {
            name:"Tailwindcss",
            image:"/images/tailwindcss-icon.webp"
        },
        
        ],
        fullDescription:[
            {
                description:`O Nexus Piaget é um sistema de gestão académica desenvolvido para automatizar processos administrativos e académicos da Universidade Jean Piaget de Moçambique. O objetivo principal foi substituir processos manuais por uma plataforma integrada, proporcionando maior eficiência, organização e segurança no tratamento das informações institucionais.
                            A plataforma permite a gestão de estudantes, docentes, cursos, departamentos, disciplinas e horários académicos. O sistema disponibiliza ainda dashboards administrativos, geração de relatórios e mecanismos de controlo de acessos baseados em perfis de utilizadores.
                            O projeto recebeu o reconhecimento de Melhor Projeto de Conclusão de Curso do Departamento de Ciência e Tecnologia.`,
                funcionalidades:`Gestão de estudantes
                                Gestão de docentes
                                Gestão de departamentos
                                Gestão de cursos
                                Gestão de disciplinas
                                Gestão de horários
                                Gestão de utilizadores
                                Sistema de permissões
                                Dashboard administrativo
                                Relatórios
                                Pesquisa avançada
                                Autenticação de utilizadores`,
                tecnologias:`React
                            Node.js
                            Express
                            MongoDB
                            JWT
                            Tailwind CSS`             
            }
        ] 
        },
        {
        id:3,
        name:"Mobile Sale",
        description:"E-commerce para venda de celulares",
        images:otherProjectImages,
        link:"https://mobile-sale.onrender.com",
        tecnologias:[
        {
            name:"React",
            image:"/images/react.png"
        },
        {
            name:"Nodejs",
            image:"/images/node.png"
        },
        {
            name:"Tailwindcss",
            image:"/images/tailwindcss-icon.webp"
        },
        ],
        fullDescription:[
            {
                description:`O Mobile Sale é uma aplicação web de comércio eletrónico destinada à venda de dispositivos móveis. A plataforma foi desenvolvida para proporcionar aos clientes uma experiência intuitiva na pesquisa, comparação e compra de smartphones através da Internet.
                O sistema permite aos administradores gerir produtos, categorias, preços e promoções, enquanto os clientes podem pesquisar produtos, visualizar detalhes, adicionar itens ao carrinho e acompanhar o estado das encomendas.`,
                funcionalidades:`Catálogo de produtos
                            Pesquisa inteligente
                            Filtros por categoria
                            Carrinho de compras
                            Gestão de utilizadores
                            Gestão de produtos
                            Gestão de categorias
                            Upload de imagens
                            Painel administrativo
                            Gestão de stock
                            Histórico de pedidos`,
                tecnologias:`React
                            Node.js
                            Express
                            MongoDB
                            Cloudinary
                            JWT`
            }
        ]
        },

        {
        id:4,
        name:"Pizzaria RealTime",
        description:"Pizzaria Realtime, um aplicativo que permite gerenciar uma pizzaria, pedidos entre outros em tempo real.",
        images:thirdProjectImages,
        link:"https://pizzaria-realtime-02.onrender.com",
        tecnologias:[
        {
            name:"React",
            image:"/images/react.png"
        },
        {
            name:"Nodejs",
            image:"/images/node.png"
        },
        {
            name:"Tailwindcss",
            image:"/images/tailwindcss-icon.webp"
        },
        ],
        fullDescription:[
            {
                description:`Pizzaria Real Time é uma plataforma desenvolvida para otimizar o fluxo operacional de uma pizzaria através da atualização instantânea do estado dos pedidos.
                            O sistema permite que os pedidos sejam acompanhados desde a criação até à entrega, garantindo comunicação em tempo real entre cozinha, caixa e entregadores. A utilização de WebSockets elimina a necessidade de atualização manual da página, tornando a operação mais eficiente e reduzindo atrasos.
                            Além disso, o sistema dispõe de diferentes níveis de acesso para administradores, funcionários e entregadores, permitindo uma gestão completa das operações.`,
                funcionalidades:`Gestão de pedidos
                                Atualização em tempo real
                                Comunicação entre setores
                                Gestão de utilizadores
                                Gestão de produtos
                                Dashboard administrativo
                                Controlo de estados do pedido
                                Histórico de pedidos
                                Gestão de entregadores
                                Autenticação`,
                tecnologias:`React
                            Node.js
                            Express
                            MongoDB
                            Socket.io
                            JWT`
            }
        ] 
        },

    
  ];


  return (
    <ProjectContext.Provider value={{
        projects
    }}>
        {children}
    </ProjectContext.Provider>
  )
})



