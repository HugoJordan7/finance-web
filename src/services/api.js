const API_URL = import.meta.env.VITE_API_URL;

export async function listarUsuarios() {
  const resp = await fetch(`${API_URL}/users`);
  if (!resp.ok) {
    throw new Error('Falha ao carregar usuários.');
  }
  return resp.json();
}

export async function cadastrarUsuario({ nome, email, senha }) {
  const resp = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: nome, email, password: senha }),
  });

  const corpo = await resp.json();
  if (!resp.ok) {
    throw new Error(corpo.error || corpo.message || 'Erro ao cadastrar.');
  }
  return corpo;
}

export async function fazerLogin(email, senha) {
  const resp = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password: senha }),
  });

  const corpo = await resp.json();
  if (!resp.ok) {
    throw new Error(corpo.error || corpo.message || 'E-mail ou senha inválidos.');
  }
  return corpo;
}