type Base64 = string;
type TokenJWT = string;

export type ErrorResponse = {
  mensagem: string;
  status: number;
};

export type LoginResponseSuccess = {
  data: {
    id: string;
    email: string;
    nome: string;
    foto: Base64;
    token: TokenJWT;
  };
  status: number;
};
