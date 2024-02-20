import { Link, useLocation } from "react-router-dom";
import { User } from "../../types";
import { useFetch } from "../../utils/useFetch";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const User = () => {
  const globalContext = useContext(GlobalContext);
  const location = useLocation();
  const { data } = useFetch<User>(
    `https://jsonplaceholder.typicode.com/users/${location?.state?.id}`,
    !!globalContext.user
  );

console.log(globalContext)

  useEffect(() => {
    if (data && globalContext.setUser) {
      globalContext.setUser(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      Bem-vindx {globalContext.user?.name}
      <br />
      <Link to="/config">Configurações</Link>
    </>
  );
};

export { User };
