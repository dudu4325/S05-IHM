// objeto do usuário
const usuario = { nome: "Raphael", matricula: "123456", pendencia: false, acessibilidade: true };

// lista objetos de armários
const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false },
  { id: 2, formato: "padrao", status: true, acessivel: false },
  { id: 3, formato: "padrao", status: true, acessivel: false },
  { id: 4, formato: "padrao", status: true, acessivel: false },
  { id: 5, formato: "padrao", status: false, acessivel: false },
  { id: 6, formato: "duplo", status: true, acessivel: true },
  { id: 7, formato: "duplo", status: true, acessivel: true },
  { id: 8, formato: "duplo", status: false, acessivel: true },
];

// função para reserva do armário, incluindo as regras.
function reservarArmario() {

  // obter tipo de armário selecionado pelo usuário no html.
  let tipoSelecionado = document.getElementById("tipoArmario").value;

  // na lista, filtrar apenas os armários que estão disponíveis e que são acessíveis ao usuário
  let armariosDisponiveis = armarios.filter(a => a.formato === tipoSelecionado && a.status === true && (!usuario.acessibilidade || a.acessivel === true));

  // caso não exista armário disponível, retorna para o usuário mensagem.
  if (armariosDisponiveis.length === 0) {
    document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }

  // Caso exista armário(s) disponível, seguimos sorteando uma opção.
  let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];

  // Depois localizamos o armário emprestado na lista de armários e mudamos o status do mesmo.
  let armarioEmprestado = armarios.find(armario => armario.id === armarioSorteado.id);
  armarioEmprestado.status = false;

  // Finalmente, mudamos a pendencia do usuário para verdadeira.
  usuario.pendencia = true;

  // Imprimimos uma mensagem de reserva para o usuário.
  document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! O armário ${armarioEmprestado.id} foi reservado com sucesso.`;

  console.log(usuario);
  console.log(armarios);
}