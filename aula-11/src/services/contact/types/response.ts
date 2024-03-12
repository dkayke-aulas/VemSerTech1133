import { Contact } from "../../../typing";

export type ErrorResponse = {
  mensagem: string;
  status: number;
};

export type GetContactSuccess = {
  data: Contact[];
  status: number;
};
