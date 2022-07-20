// Melhore esse tipo utilizando uma união discriminada de tipos mais específicos

//RESPOSTA
type Normal = {
  level: number;
  role: "normal";
};

type Admin = {
  level: number;
  role: "admin";
};

type User = Normal | Admin;

const narrowing = (user: User) => {
  if (user.role === "normal") {
    console.log("USUARIO É DO NIVEL NORMAL:", user); // Normal
  } else if (user.role === "admin") {
    console.log("USUARIO É DO NIVEL ADMIN:", user); // Admin
  }
};

console.log(narrowing({ level: 2, role: "admin" }));
