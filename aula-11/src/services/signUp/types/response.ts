type Base64 = string;

export type ErrorResponse = {
  mensagem: string;
  status: number;
};

export type UserResponseSuccess = {
  data: {
    id: string;
    email: string;
    nome: string;
    foto: Base64;
  };
  status: number;
};
