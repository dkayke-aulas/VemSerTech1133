import { FC } from "react";
import S from "./style.module.css";
import { useContactService } from "../../services/contact";

type Base64 = string;
interface CardContactProp {
  id: string;
  name: string;
  tel: string;
  photo?: Base64;
  role?: string;
}

const CardContact: FC<CardContactProp> = (props) => {
  const PHOTO_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKnVPtfxhTa8kzheWyIFCpOcByzNcVp_dxw&usqp=CAU";
  const { id, name, photo = PHOTO_URL, tel, role = "N/A" } = props;

  const { deleteContactService } = useContactService();

  const handleDelete = async () => {
    deleteContactService({ idContato: id }).then(() => {
      location.reload()
    })
  };

  return (
    <button className={S.cardButton}>
      <div className={S.photoContainer}>
        <img src={`data:image/png;base64,${photo}`} />
      </div>
      <div className={S.dataContainer}>
        <h2>{name}</h2>
        <p>Tel: {tel}</p>
        <p>Profissão: {role}</p>
      </div>
      <button onClick={handleDelete}>Deletar</button>
    </button>
  );
};

export { CardContact };
