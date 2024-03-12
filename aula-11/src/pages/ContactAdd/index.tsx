import { FC } from "react";
import { Button, Input } from "../../components";
import { Title } from "../../components/Title";
import { useContactAdd } from "./useContactAdd";

const ContactAdd: FC = () => {
  const { handleOnSubmit } = useContactAdd();

  return (
    <div>
      <Title>Novo contato</Title>
      <form onSubmit={handleOnSubmit}>
        <Input
          type="text"
          name="nome"
          placeholder="Nome"
          required
          data-required
        />
        <Input
          type="text"
          name="email"
          placeholder="E-mail"
          required
          data-required
        />

        <Button>Cadastrar</Button>
      </form>
    </div>
  );
};

export { ContactAdd };

