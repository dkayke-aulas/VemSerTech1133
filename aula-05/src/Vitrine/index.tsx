import { useEffect, useRef, useState } from "react";
import { Filme } from "../Filme";
import { FilmeType } from "../types";
import "./style.css";

const Vitrine = () => {
  const [mensagem, setMensagem] = useState("" as string);
  const [filmes, setFilmes] = useState<FilmeType[]>([]);
  const timeoutId = useRef(0)
//   console.log(timeoutId.current)

  const handleOnAdd = (filme: FilmeType) => {
    // console.log(filme);
    setMensagem(`O filme ${filme.title} foi adicionado!`);

    console.log(timeoutId.current)
    clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      setMensagem("");
    }, 3000);
  };

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setFilmes(json);
      })
      .catch((error) => {
        setFilmes([]);
        console.error(error);
      });
  }, []);

  return (
    <>
      {mensagem && <p className="mensagem">{mensagem}</p>}
      <h1>Vitrine</h1>
      <div className="vitrine">
        {filmes.map((filme, index) => {
          return <Filme filme={filme} key={index} onAdd={handleOnAdd} />;
        })}
      </div>
    </>
  );
};

export { Vitrine };
