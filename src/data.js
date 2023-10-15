export const language = "javaScript" ;

const themes = [
    {name:"Variáveis"},
    {name:"Tipos de Dados"},
    {name:"Operadores"},
    {name:"Estruturas condicionais"},
    {name:"Arrays"},
    {name:"Objetos"},
    {name:"Estrutura de repetição"},
    {name:"high order functions"},
    {name:"functions"},
    {name:"Escopo de variávies"},
    {name:"Assincronismos"},
    {name:"Then/Try e Catch"},
];

themes.forEach((theme) => {
    theme.message = `Escreva uma documentação com exemplos de como funcionam ${theme.name} em ${language} , seja o mais detalhado possivel, separe os exemplos por tópicis e não esqueça de explicar o que cada linha faz. Retorne a resposta em uma estrutura HTML para ser mostrado na tela, adicione classes do talwind css pára estilizar o contéudo.
     Crie um texto longo e completo.`
})


export default themes ;