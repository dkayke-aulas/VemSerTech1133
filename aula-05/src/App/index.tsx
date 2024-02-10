// import { useState } from "react";
// import { CicloDeVida } from "./../CicloDeVida";
// import { Referencia } from "./../Referencia";

import { Vitrine } from "../Vitrine";

const App = () => {
  // const [alterna, setAlterna] = useState(2);

  return (
    <Vitrine />
  )

  // // Primeira parte da aula
  // return (
  //   <>
  //     <div>
  //       <button onClick={() => setAlterna(1)}>Mostra</button>
  //       <button onClick={() => setAlterna(2)}>Não Mostra</button>
  //     </div>
  //     {alterna === 1 && <CicloDeVida />}
  //     {alterna === 2 && <Referencia />}
  //   </>
  // );
};

export { App };
