// Crie uma função que aceita um argumento e retorna true se o argumento for um array, ou false caso não seja.
// Coloque a tipagem para que o Typescript consiga automaticamente entender esse retorno
// Dica: utilize um parâmetro de tipo para receber o tipo do argumento

const validarArray = <T>(arg: T): T extends Array<any> ? true : false => {
  return (arg instanceof Array) as any;
};

console.log(validarArray([27, "Athos", "Web Dev", true])); //deve retornar TRUE

console.log(validarArray("Athos Web Dev")); //deve retornar FALSE
