import { FC } from "react";
import { Button, Input, InputTel } from "../../components";
import { Title } from "../../components/Title";
import { useContactAdd } from "./useContactAdd";

interface ContactAddProps {
  isEdit?: boolean;
}

const ContactAdd: FC<ContactAddProps> = ({ isEdit = false }) => {
  const { handleOnSubmit } = useContactAdd(isEdit);

  return (
    <div>
      <Title>Novo contato</Title>
      <form
        onSubmit={handleOnSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
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

        <select name="telefone1-tipo">
          <option value="casa">Casa</option>
          <option value="trabalho">Trabalho</option>
          <option value="celular">Celular</option>
        </select>

        <InputTel
          name="telefone1-numero"
          placeholder="Número do telefone"
          required
          data-required
        />

        <select name="telefone2-tipo">
          <option value="casa">Casa</option>
          <option value="trabalho">Trabalho</option>
          <option value="celular">Celular</option>
        </select>

        <InputTel
          name="telefone2-numero"
          placeholder="Número do telefone"
          required
          data-required
        />

        <select name="telefone3-tipo">
          <option value="casa">Casa</option>
          <option value="trabalho">Trabalho</option>
          <option value="celular">Celular</option>
        </select>

        <InputTel
          name="telefone3-numero"
          placeholder="Número do telefone"
          required
          data-required
        />

        <Button>Cadastrar</Button>
      </form>
    </div>
  );
};

export { ContactAdd };
