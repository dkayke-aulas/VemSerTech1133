import { FormEvent } from "react";
import { useContactService } from "../../services/contact";
import { Contact } from "../../typing";
type ContactFD = {
  [x: string]: FormDataEntryValue;
};

const useContactAdd = () => {

  const { postContactService } = useContactService()

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fd = new FormData(event.currentTarget);

    const contact: ContactFD = {};
    for (const [chave, valor] of fd) {
      contact[chave] = valor;
    }

    try {
      const response = await postContactService(contact as unknown as Contact)
      console.log(response)
    } catch (erro) {
      console.log(erro)
    }
  };

  return {
    handleOnSubmit,
  };
};

export { useContactAdd };

