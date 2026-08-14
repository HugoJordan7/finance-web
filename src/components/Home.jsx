import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import logo from '../assets/logo.svg';

function Home({ usuarioLogado, usuarios, onSair }) {
  const navigate = useNavigate();

  // Rota protegida simples: sem login, volta para /login
  useEffect(() => {
    if (!usuarioLogado) {
      navigate('/login');
    }
  }, [usuarioLogado, navigate]);

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
          <h2>Olá, {usuarioLogado.nome}!</h2>
          <p>
            Você está logado como <strong>{usuarioLogado.email}</strong>. Em
            breve, aqui você vai poder acompanhar seus investimentos, metas e
            despesas.
          </p>
        </div>

        <div className="users-card">
          <h3>Usuários cadastrados ({usuarios.length})</h3>
          <ul>
            {usuarios.map((u) => (
              <li key={u.id}>
                {u.nome} <span>{u.email}</span>
              </li>
            ))}
          </ul>
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
