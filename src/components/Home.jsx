import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import logo from '../assets/logo.svg';
import { listarUsuarios } from '../services/api';

function Home({ usuarioLogado, onSair }) {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuarioLogado) {
      navigate('/login');
    }
  }, [usuarioLogado, navigate]);

  useEffect(() => {
    if (!usuarioLogado) return;

    listarUsuarios()
      .then(setUsuarios)
      .catch((err) => setErro(err.message))
      .finally(() => setCarregando(false));
  }, [usuarioLogado]);

  if (!usuarioLogado) {
    return null;
  }

  return (
    <div className="home-page">
      <header className="home-header">
        <div className="home-brand">
          <img src={logo} alt="Finance" className="home-logo" />
          <div>
            <div className="home-brand-name">Finance</div>
            <div className="home-brand-sub">Gerenciador de finanças</div>
          </div>
        </div>

        <div className="home-user">
          <div>
            <div className="home-user-email">{usuarioLogado.email}</div>
            <div className="home-user-plan">Free</div>
          </div>
          <div className="home-avatar">👤</div>
        </div>
      </header>

      <div className="home-body">
        <div className="home-welcome">
          <h2>Olá, {usuarioLogado.name}! 👋</h2>
          <p>
            Você está logado como <strong>{usuarioLogado.email}</strong>.
          </p>
        </div>

        <div className="users-card">
          <h3>Usuários cadastrados {!carregando && !erro && `(${usuarios.length})`}</h3>
          {carregando && <p>Carregando...</p>}
          {erro && <p className="erro">{erro}</p>}
          {!carregando && !erro && (
            <ul>
              {usuarios.map((u) => (
                <li key={u.email}>
                  {u.name} <span>{u.email}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          className="btn-sair"
          onClick={() => {
            onSair();
            navigate('/login');
          }}
        >
          Sair da conta
        </button>
      </div>
    </div>
  );
}

export default Home;