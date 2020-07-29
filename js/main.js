function CriarUsuario() { // função responsável por gerar um objeto e armazená-lo em um arquivo JSON

  let nome = document.getElementById('txtNome').value;
  let idade = document.getElementById('txtIdade').value;
  let telefone = document.getElementById('txtTelefone').value;
  let cpf = document.getElementById('txtCpf').value;
  let email = document.getElementById('txtEmail').value;
  let cep = document.getElementById('txtCep').value;
  let rua = document.getElementById('txtRua').value;
  let bairro = document.getElementById('txtBairro').value;
  let cidade = document.getElementById('txtCidade').value;
  let uf = document.getElementById('txtUf').value;


  let usuario = { nome: nome, idade: idade, telefone: telefone, cpf: cpf, email: email, cep: cep, rua: rua, bairro: bairro, cidade: cidade, uf: uf }; // criando o objeto com as propriedades    
  let cliente = localStorage.getItem("cliente"); // LocalStorage - mecanismo para armazenar informações no browser
  // LocalStorage.getItem - recuperar um valor armazenado a partir da sua chave identificadora.
  if (cliente == null) cliente = []; // Se nada tiver sido incluido no JSON, então um estrutura do tipo objeto é incluida

  else cliente = JSON.parse(cliente); // JSON.parse() - transforma um item no formato JSON no seu formato original.
  cliente.push(usuario); // Adiciona um novo cliente
  localStorage.setItem("cliente", JSON.stringify(cliente)); //JSON.stringify - converte um objeto string para uma notação JSON | localStorage.setItem - insere o objetivo no JSON
  location.reload();
}

function Listar() {
  let cliente = JSON.parse(localStorage.getItem("cliente"));
  let resultado = document.getElementById('resultado');

  resultado.innerHTML = '';

  for (let i = 0; i < cliente.length; i++) {
    let nome = cliente[i].nome;
    let nasc = cliente[i].idade;
    let telefone = cliente[i].telefone;
    let cpf = cliente[i].cpf;
    let email = cliente[i].email;
    let cep = cliente[i].cep;
    let rua = cliente[i].rua;
    let bairro = cliente[i].bairro;
    let cidade = cliente[i].cidade;
    let uf = cliente[i].uf;

    resultado.innerHTML += '<tr><td>' + nome +
      '</td><td>' + cpf +
      '</td><td>' + nasc +
      '</td><td>' + telefone +
      '</td><td>' + email +
      '</td><td>' + cep +
      '</td><td>' + rua +
      '</td><td>' + bairro +
      '</td><td>' + cidade +
      '</td><td>' + uf +
      '</td><td><button class="btn btn-danger" onclick="Excluir(\'' + cpf + '\')"> Excluir</button></td>' +
      '</tr>';
  }
}

function Excluir(cpf) {

  let id = JSON.parse(localStorage.getItem("cliente"));

  for (let i = 0; i < id.length; i++) {
    if (id[i].cpf == cpf) {
      id.splice(i, 1);
    }

    localStorage.setItem("cliente", JSON.stringify(id));

  }

  location.reload();

}

