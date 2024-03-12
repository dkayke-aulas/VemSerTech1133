import { Contact } from "../../typing";
import { useService } from "../../utils/useService";
import { ErrorResponse, GetContactSuccess } from "./types/response";

export const useContactService = () => {
  const { get, post } = useService();

  const getContactService = async (): Promise<
    GetContactSuccess & ErrorResponse
  > => {
    const response = await get<GetContactSuccess & ErrorResponse>(
      "http://localhost:5000/v1/contact"
    );
    return response.data;
  };
  
  const postContactService = async (contact: Contact) => {
    const response = await post<Contact>(
      "http://localhost:5000/v1/contact",
      contact
    );
    return response.data;
  };

  return {
    getContactService,
    postContactService
  };
};
