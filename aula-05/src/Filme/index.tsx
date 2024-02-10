import { FC } from "react";
import { FilmeType } from "../types";
import "./style.css";

interface FilmeProps {
  filme: FilmeType;
  onAdd: (filme: FilmeType) => void
}

const Filme: FC<FilmeProps> = ({ filme, onAdd }) => {
  const handleAdd = () => {
    onAdd(filme)
  };

  return (
    <div className="container-filme">
      <h1>{filme.title}</h1>
      <img src={filme.image} alt={`capa do filme ${filme.title}`} />
      <p>{filme.description}</p>
      <p>{filme.release_date}</p>
      <button onClick={handleAdd}>Adicionar ao carrinho +</button>
    </div>
  );
};

export { Filme };
