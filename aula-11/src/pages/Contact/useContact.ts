import { useMemo, useRef, useState } from "react";
import { Contact } from "../../typing";
import { useContactService } from "../../services/contact";

const useContact = () => {
  const { getContactService } = useContactService();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const refContacts = useRef(contacts)

  useMemo(async () => {
    const { data } = await getContactService();
    setContacts(data);
    refContacts.current = data
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  const filterContact = (filterData: string) => {
    setContacts(() => [...refContacts.current].filter((contact) => {
      return contact.nome.toUpperCase().includes(filterData.toUpperCase())
    }))
  }

  return {
    contacts,
    filterContact
  };
};

export { useContact };
