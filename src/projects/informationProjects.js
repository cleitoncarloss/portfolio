import autenticator from "./autenticator.png";
import ecommerce from "./ecommerce.png";
import tecboard from "./tecboard.png";

const informationProject = [
  {
    id: 1,
    image: ecommerce,
    title: "Product View",
    description: "Projeto de listagem de produtos de uma api",
    stacks: ["HTML"],
    url: "https://productview.pages.dev/",
    details: "Projeto feito usando a biblioteca de WebComponents chamado @nodusjs focado em dataflow, nele eu faço requisição de uma api de produtos e exibo na tela algumas informações como nome e preço usando apenas HTML."
  },
  {
    id: 2,
    image: autenticator,
    title: "Auth Flow",
    description: "Projeto de fluxo de autenticação",
    stacks: ["REACT", "TAILWIND", "SUPABASE"],
    url: "https://autenticator.netlify.app/auth/sign-in",
    details: "Projeto de fluxo de autenticação desenvolvido em React, utilizando Supabase como backend-as-a-service para autenticação e Tailwind CSS para estilização. A aplicação implementa telas de login, criação de conta, recuperação de senha e verificação de código, com foco em componentização e gerenciamento de estado"
  },
  {
    id: 3,
    image: tecboard,
    title: "Tecboard",
    description: "Cadastro de enventos de tech",
    stacks: ["REACT"],
    url: "https://tecboardd.netlify.app/",
    details: "Projeto desenvolvido em React utilizando JSX, componentização e useState para gerenciamento de estado. A aplicação consiste em um formulário de cadastro de eventos de tecnologia, permitindo ao usuário informar nome do evento, imagem, data e categoria onde os dados são capturados via form action com FormData."
  }
] 

export default informationProject;
