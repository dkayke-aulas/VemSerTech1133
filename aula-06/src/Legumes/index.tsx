import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Legumes() {
  const params = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)


  const login = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 6000)
    })
  }

  const handleNavigateToHome = () => {
    setLoading(true)
    login().then(() => {
      navigate('/frutas')
    })
  }
  
  return (
    <>
      <h3>Legumes de primeira!</h3>
      <p>{params.nome}</p>
      <button onClick={handleNavigateToHome} disabled={loading}>Login</button>
      <Link to="/frutas/banana">Banana</Link>
    </>
  );
}

export { Legumes };
