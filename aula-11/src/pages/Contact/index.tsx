import { Button, Input, Title } from "../../components";
import { CardContact } from "../../components/CardContact";
import { PATHS } from "../../routes/paths";
import { useContact } from "./useContact";

const Contact = () => {
  const { contacts, filterContact } = useContact();

  return (
    <>
      <Title>
        Contatos
        <Button type="link" path={PATHS.contactsAdd}>
          Add +
        </Button>
      </Title>

      <Input type="text" onInput={filterContact} />

      {contacts.map((contact, index) => {
        return (
          <CardContact
            id={contact.id!}
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
