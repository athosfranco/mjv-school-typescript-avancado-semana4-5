// Faça uma função que mergeie dois objetos, retornando um tipo que é a interssecção dos dois tipos dos objetos.
// Dica - utilize type-parameters para receber os tipos dos objetos dinâmicamente e spread ou Object.assign para a fazer o merge
// na implementação da função.

interface Filme {
  nome: string;
}

interface Detalhe {
  duracaoEmMin: number;
  sinopse: string;
  disponivelCinema: boolean;
  disponivelStreaming: boolean;
}

const filme: Filme = { nome: "Clockwork Orange" };
const detalhes: Detalhe = {
  duracaoEmMin: 160,
  sinopse:
    "O jovem Alex passa as noites com uma gangue de amigos briguentos. Depois que é preso, se submete a uma técnica de modificação de comportamento para poder ganhar sua liberdade.",
  disponivelCinema: false,
  disponivelStreaming: true,
};

const objectTypeMerger = <U, D extends Object>(firstObj: U, secondObj: D): U & D => {
  return Object.assign(firstObj, secondObj);
};

const mergedObject = objectTypeMerger(filme, detalhes);
