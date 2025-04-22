
import React, { useState } from "react";
import "./styles.css";

function App() {
  const [employeeKey, setEmployeeKey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [action, setAction] = useState("");

  const handleKeyChange = (e) => {
    setEmployeeKey(e.target.value);
  };

  const authenticateEmployee = async () => {
    const response = await fetch(`/api/authenticate?key=${employeeKey}`);
    const result = await response.json();
    if (result.success) {
      setIsAuthenticated(true);
    } else {
      alert("Clave incorrecta.");
    }
  };

  const registerTime = async (action) => {
    const response = await fetch(`/api/registerTime?key=${employeeKey}&action=${action}`);
    const result = await response.json();
    alert(result.message);
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div>
          <input
            type="text"
            placeholder="Introduce tu clave"
            value={employeeKey}
            onChange={handleKeyChange}
          />
          <button onClick={authenticateEmployee}>Autenticar</button>
        </div>
      ) : (
        <div>
          <h2>Bienvenido, ¿Qué deseas hacer?</h2>
          <button onClick={() => registerTime("llegada")}>Registrar Llegada</button>
          <button onClick={() => registerTime("salida")}>Registrar Salida</button>
        </div>
      )}
    </div>
  );
}

export default App;
