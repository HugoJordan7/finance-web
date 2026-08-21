import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login onLogin={setUsuarioLogado} />} />
        <Route
          path="/home"
          element={
            <Home
              usuarioLogado={usuarioLogado}
              onSair={() => setUsuarioLogado(null)}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;