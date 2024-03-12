export type User = {
  name: string;
  email: string;
  password?: string;
  photo?: string;
  token?: string;
};

export type Address = {
  logradouro: string;
  cidade: string;
  estado: string;
  cep: string;
  pais: string;
};

export type PhoneType = 'casa'

export type Phone = {
    tipo: PhoneType;
    numero: string;
  }

export type Contact = {
  id: "9892b7b3-45d0-4dfa-a8d3-d32e54392b2f";
  nome: "Amanda";
  idUsuario: "d5b07480-02dc-423a-a598-4c5564e1b9b7";
  apelido: "";
  email: "";
  notas: "";
  foto: "data:image/png;base64,abcdefghijklmnopqrstuvwxyz";
  telefones: Phone[];
  endereco: Address;
};

export type Login = {
  email: string;
  senha: string;
};
