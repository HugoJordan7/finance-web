import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import logo from '../assets/logo.svg';

function Cadastro({ usuarios, onCadastrar }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErro('');

    if (!nome || !email || !senha || !confirmarSenha) {
      setErro('Preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    if (usuarios.some((u) => u.email === email)) {
      setErro('Este e-mail já está cadastrado.');
      return;
    }

    onCadastrar({ nome, email, senha });
    navigate('/login');
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <img src={logo} alt="Finance" className="auth-logo" />
        <h1 className="auth-title">Crie sua conta</h1>
        <p className="auth-description">
          Crie uma conta para começar a gerenciar as suas finanças pessoais!
        </p>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome Completo</label>
            <input
              id="nome"
              type="text"
              placeholder="Nome Completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

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

          <div>
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              id="confirmarSenha"
              type="password"
              placeholder="**********"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </div>

          {erro && <p className="erro">{erro}</p>}

          <button type="submit" className="btn-primary">
            CONFIRMAR
          </button>
        </form>

        <hr className="divider" />

        <p className="auth-footer">
          Já tem uma conta? <Link to="/login">Clique aqui para fazer login</Link>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;
