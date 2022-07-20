export interface GuestUser {
  type: "guest";
  name: string;
}

export interface AuthenticatedUser {
  type: "user";
  id: string;
  name: string;
}

export type User = GuestUser | AuthenticatedUser;

// Crie uma função de type-guard que sirva para afunilar o tipo específico de User

const typeGuard = (x: any): x is GuestUser => x.type === "guest";

const narrowing = (user: User) => {
  if (typeGuard(user)) console.log(user);
  else console.log(user);
};
