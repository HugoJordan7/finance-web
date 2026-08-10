# Protótipo — Projeto 2

Autor: Hugo Jordan Cirilo Teotonio

Tema: Finance — Gerenciador de finanças pessoais

Descrição: Um site para controle de finanças pessoais, capaz de registrar investimentos, despesas mensais e metas financeiras informadas pelo usuário.

Público-alvo: Pessoas de qualquer idade, geralmente entre 16-70 anos, que desejam organizar melhor a sua vida financeira.

## Link do Figma
https://www.figma.com/design/ZNqDFjrhwxNgejs53lHyl1/Finance-Web?node-id=1-294&t=FjTkpgdcLWo9LUkE-1

## Fluxo principal prototipado

### 1. Login
Pela tela de login é possível navegar para a tela de registro, ao clicar no texto de registro, ou para a tela home, ao clicar no botão confirmar
<img width="1143" height="714" alt="WhatsApp Image 2026-08-09 at 22 48 39" src="https://github.com/user-attachments/assets/6659347f-ce1b-490f-be87-c34e57119308" />

### 2. Registro
Pela tela de registro é possível navegar para a tela de login, ao clicar no texto de login, ou para a tela home, ao clicar no botão confirmar
<img width="1150" height="718" alt="image" src="https://github.com/user-attachments/assets/1ee86670-e878-494b-b445-75d2586580e7" />

### 3. Home
Pela tela home é possível navegar para qualquer uma das demais 4 tela da sidebar (Investimentos, Metas, Despesas ou Premium) ou sair da conta e voltar pra tela de login
<img width="1150" height="722" alt="image" src="https://github.com/user-attachments/assets/a6529820-d43c-4523-8960-9e9b88c6eba5" />

### 4. Investimentos
Pela tela Investimentos é possível navegar para qualquer uma das demais 4 tela da sidebar (Home, Metas, Despesas ou Premium) ou sair da conta e voltar pra tela de login. Nela ainda é possível alternar entre Ativos / Registrar / Histórico
<img width="1147" height="718" alt="image" src="https://github.com/user-attachments/assets/190d4888-7360-4e8f-a5f9-e982b7bb1e8e" />
<img width="1154" height="711" alt="image" src="https://github.com/user-attachments/assets/b988362f-8a23-405c-aec4-1ba8fee3eb13" />
<img width="1149" height="719" alt="image" src="https://github.com/user-attachments/assets/d78f6890-54bd-4ef6-bad1-938d9fe2a31e" />

### 5. Metas

Pela tela Metas é possível navegar para qualquer uma das demais 4 tela da sidebar (Home, Investimentos, Despesas ou Premium) ou sair da conta e voltar pra tela de login. Nela ainda é possível alternar entre o estado default de visualização das metas e o estado de adição de uma nova meta.
<img width="1149" height="720" alt="image" src="https://github.com/user-attachments/assets/5fa3d0d3-6179-4616-9ca7-60f9a573a0df" />
<img width="1148" height="720" alt="image" src="https://github.com/user-attachments/assets/35adf2f5-8a77-43fc-b897-cc8b75260f39" />


### 6. Despesas

Pela tela Despesas é possível navegar para qualquer uma das demais 4 tela da sidebar (Home, Investimentos, Metas ou Premium) ou sair da conta e voltar pra tela de login. Nela ainda é possível alternar entre o estado default de visualização das despesas e o estado de adição de uma nova despesa.
<img width="1144" height="720" alt="image" src="https://github.com/user-attachments/assets/0dd298f5-44e7-441e-a3d1-743a840d0d65" />
<img width="1148" height="717" alt="image" src="https://github.com/user-attachments/assets/94c80bf2-69b5-4984-8d8c-3f89bf19cc57" />


### 7. Plano Premium
Pela tela Premium é possível navegar para qualquer uma das demais 4 tela da sidebar (Home, Investimentos, Metas ou Despesas) ou sair da conta e voltar pra tela de login.
<img width="1147" height="722" alt="image" src="https://github.com/user-attachments/assets/73361a1d-15b0-4dda-acd3-bead751a7555" />


## Melhorias aplicadas (do relatório heurístico do E6)
1. No projeto do E6 não havia nenhum feedback de loading (Heurística violada: #1 Visibilidade do status do sistema), no projeto atual o estado de loading foi aplicado em algumas telas/botões;
2. No projeto do E6 as caixas de input do usuários e outros componentes não tinham um tema em comum (Heurística violada:#4 Consistência e padrões), no projeto atual todos os componentes/telas seguem um mesmo tema;
3. No projeto do E6 não havia a possibilidade de desfazer uma mudança crítica como a remoção de um item (Heurística violada:#3 Controle e liberdade do usuário), no projeto atual existe um componente específico (UndoBox na Page Assets) que pode ser exibido para desfazer uma ação sempre que uma ação importante ocorra.
