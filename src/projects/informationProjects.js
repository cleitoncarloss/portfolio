import autenticator from "./autenticator.png";
import ecommerce from "./ecommerce.png";

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
  }
] 

export default informationProject;
