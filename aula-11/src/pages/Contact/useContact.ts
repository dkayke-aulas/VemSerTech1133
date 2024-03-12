import { useMemo, useState } from "react";
import { Contact } from "../../typing";
import { useContactService } from "../../services/contact";

const useContact = () => {
  const { getContactService } = useContactService();
  const [contacts, setContacts] = useState<Contact[]>([]);

  useMemo(async () => {
    const { data } = await getContactService();
    setContacts(data);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    contacts,
  };
};

export { useContact };
