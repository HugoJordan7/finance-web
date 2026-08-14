import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Home from './components/Home';
import { mockUsers } from './data/usuarios';

function App() {
  const [usuarios, setUsuarios] = useState(mockUsers);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  function cadastrar(novo) {
    const proximoId = Math.max(0, ...usuarios.map((u) => u.id)) + 1;
    setUsuarios([...usuarios, { id: proximoId, ...novo }]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/cadastro"
          element={<Cadastro usuarios={usuarios} onCadastrar={cadastrar} />}
        />
        <Route
          path="/login"
          element={<Login usuarios={usuarios} onLogin={setUsuarioLogado} />}
        />
        <Route
          path="/home"
          element={
            <Home
              usuarioLogado={usuarioLogado}
              usuarios={usuarios}
              onSair={() => setUsuarioLogado(null)}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;