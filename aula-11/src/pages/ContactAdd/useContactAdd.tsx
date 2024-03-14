import { FormEvent } from "react";
import { useContactService } from "../../services/contact";
import { Contact } from "../../typing";
type ContactFD = {
  [x: string]: FormDataEntryValue;
};

const useContactAdd = (isEdit: boolean) => {
  const { postContactService } = useContactService();

  const deleteAttributes = (contact: ContactFD) => {
    const chaves = Object.keys(contact);

    chaves.forEach((chave) => {
      if (chave.startsWith("telefone")) {
        delete contact[chave];
      }
    });

    return contact;
  };

  const mountTelephones = (contato: ContactFD) => {
    const chaves = Object.keys(contato);
    const mappedChaves = chaves.map((chave) => {
      return chave.split("-")[0];
    });

    const novasChaves = [...new Set(mappedChaves)];
    const novosTelefones = novasChaves.map((chave) => {
      return {
        tipo: contato[`${chave}-tipo`],
        numero: contato[`${chave}-numero`],
      };
    });

    return novosTelefones.filter((tel) => tel.numero);
  };

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fd = new FormData(event.currentTarget);

    const contact: ContactFD = {};
    for (const [chave, valor] of fd) {
      contact[chave] = valor;
    }

    const telefones = mountTelephones(contact);
    deleteAttributes(contact);

    const request = { ...contact, telefones };

    try {
      if (isEdit) {
        // chama patch
      } else {
        const response = await postContactService(
          request as unknown as Contact
        );
        console.log(response);
      }
    } catch (erro) {
      console.log(erro);
    }
  };

  return {
    handleOnSubmit,
  };
};

export { useContactAdd };
