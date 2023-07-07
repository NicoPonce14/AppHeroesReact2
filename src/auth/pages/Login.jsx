import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";


export const Login = () => {
  const{login}=useContext(AuthContext);
  
  const navigate = useNavigate();

  function Loguear() {
    login('Nico Ponce');
    navigate('/',{
      replace:true
    })
  }
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={Loguear}
      >
        Login
      </button>

    </div>
  )
}
