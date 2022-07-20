// refatore esses tipos utilizando um tipo genérico

export type ItemTexto = {
  valor: string;
};

export type ItemNumerico = {
  valor: number;
};

//resposta

type Item<T> = { valor: T };

export type ItemTextoGeneric = Item<string>;
export type ItemNumericoGeneric = Item<number>;
