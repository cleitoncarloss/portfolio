import autenticator from "./autenticator.png";
import ecommerce from "./ecommerce.png";
import tecboard from "./tecboard.png";
import morph from "./morph.jpeg";

const informationProject = [
  {
    id: 1,
    alt: "Imagem de um projeto de e-commerce",
    image: morph,
    title: "Morph",
    description: "Morph, a internet que conversa com você",
    stacks: ["IA", "HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "WEBCOMPONENTS"],
    url: "#",
    text: "Projeto em desenvolvimento",
    redirect: "",
    details: "O MORPH é um projeto que propõe uma nova forma de interação com a internet, A proposta do projeto é permitir que o usuário expresse sua intenção diretamente, por meio de texto ou voz, e que o sistema interprete essa intenção para gerar dinamicamente a interface e a experiência necessária naquele contexto. Ou seja, a interação deixa de ser baseada em cliques e passa a ser baseada em conversação."
  },
  {
    id: 2,
    alt: "Imagem de um projeto de e-commerce",
    image: ecommerce,
    title: "Product View",
    description: "Projeto de listagem de produtos de uma api",
    stacks: ["HTML"],
    text: "Ir para Product View",
    url: "https://productview.pages.dev/",
    redirect: "_blank",
    details: "Projeto feito usando a biblioteca de WebComponents chamado @nodusjs focado em dataflow, nele eu faço requisição de uma api de produtos e exibo na tela algumas informações como nome e preço usando apenas HTML."
  },
  {
    id: 3,
    alt: "Imagem de uma tela de login",
    image: autenticator,
    title: "Auth Flow",
    description: "Projeto de fluxo de autenticação",
    stacks: ["REACT", "TAILWIND", "SUPABASE"],
    text: "Ir para Auth Flow",
    url: "https://autenticator.netlify.app/auth/sign-in",
    redirect: "_blank",
    details: "Projeto de fluxo de autenticação desenvolvido em React, utilizando Supabase como backend-as-a-service para autenticação e Tailwind CSS para estilização. A aplicação implementa telas de login, criação de conta, recuperação de senha e verificação de código, com foco em componentização e gerenciamento de estado"
  },
  {
    id: 4,
    alt: "Imagem do projeto tecboard",
    image: tecboard,
    title: "Tecboard",
    description: "Cadastro de enventos de tech",
    stacks: ["REACT"],
    text: "Ir para Tecboard",
    url: "https://tecboardd.netlify.app/",
    redirect: "_blank",
    details: "Projeto desenvolvido em React utilizando JSX, componentização e useState para gerenciamento de estado. A aplicação consiste em um formulário de cadastro de eventos de tecnologia, permitindo ao usuário informar nome do evento, imagem, data e categoria onde os dados são capturados via form action com FormData."
  }
] 

export default informationProject;
