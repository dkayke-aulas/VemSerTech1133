import { Button, Title } from "../../components";
import { CardContact } from "../../components/CardContact";
import { PATHS } from "../../routes/paths";
import { useContact } from "./useContact";

const Contact = () => {
  const { contacts } = useContact();

  return (
    <>
      <Title>
        Contatos <Button type="link" path={PATHS.contactsAdd}>Add +</Button>
      </Title>

      {contacts.map((contact, index) => {
        return (
          <CardContact
            key={index}
            photo={contact.foto}
            name={contact.nome}
            tel={contact.telefones[0]?.numero || contact.email}
          />
        );
      })}
    </>
  );
};

export { Contact };
