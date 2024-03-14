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
  id?: string;
  idUsuario?: string;
  nome: string;
  apelido: string;
  email: string;
  notas: string;
  foto: string;
  telefones: Phone[];
  endereco: Address;
};

export type Login = {
  email: string;
  senha: string;
};
