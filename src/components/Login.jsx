import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import logo from '../assets/logo.svg';

function Login({ usuarios, onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErro('');

    const usuario = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    if (!usuario) {
      setErro('E-mail ou senha inválidos.');
      return;
    }

    onLogin(usuario);
    navigate('/home');
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

          <button type="submit" className="btn-primary">
            CONFIRMAR
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
