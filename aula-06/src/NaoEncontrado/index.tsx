import style from "./style.module.css";

const NaoEncontrado = () => {
  return (
    <>
      <h1 className={style.titulo}>404 - página não encontrada</h1>
      <p className={`banana ${style.textoComum}`}>Tente retornar à home</p>
    </>
  );
};

export { NaoEncontrado };
