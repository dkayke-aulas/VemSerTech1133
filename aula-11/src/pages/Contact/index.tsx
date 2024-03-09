import { Title } from "../../components";
import { CardContact } from "../../components/CardContact";

const Contact = () => {
  return (
    <>
      <Title>Contatos</Title>
      <CardContact name="Dannyel Kayke" tel="(13) 99169-6912" />
      <CardContact name="Abilio Alves" tel="(11) 98789-0001" />
      <CardContact name="Juliana Mesquita" tel="(21) 87999-0192" />
      <CardContact name="Patrick Diniz" tel="(14) 99780-1898" />
    </>
  );
};

export { Contact };
