import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import logo from '../assets/logo.svg';
import { fazerLogin } from '../services/api';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {

    e.preventDefault();
    setErro('');

    if (!email || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }

    setCarregando(true);

    try {
      const usuario = await fazerLogin(email, senha);
      onLogin(usuario);
      navigate('/home');
    } catch (err) {
      setErro(err.message);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <img src={logo} alt="Finance" className="auth-logo" />
        <h1 className="auth-title">Finance</h1>
        <p className="auth-subtitle">Gerenciador de finanças pessoais</p>
        <p className="auth-description">
          Faça login para começar a gerenciar as suas finanças pessoais!
        </p>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="user@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              placeholder="**********"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          {erro && <p className="erro">{erro}</p>}

          <button type="submit" className="btn-primary" disabled={carregando}>
            {carregando ? <span className="spinner" /> : 'CONFIRMAR'}
          </button>
        </form>

        <hr className="divider" />

        <p className="auth-footer">
          Não tem uma conta?{' '}
          <Link to="/cadastro">Clique aqui para criar uma</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;