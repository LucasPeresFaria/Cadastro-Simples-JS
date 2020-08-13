
function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById('txtRua').value = ("");
  document.getElementById('txtBairro').value = ("");
  document.getElementById('txtCidade').value = ("");
  document.getElementById('txtUf').value = ("");
}


function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('txtRua').value = (conteudo.logradouro);
    document.getElementById('txtBairro').value = (conteudo.bairro);
    document.getElementById('txtCidade').value = (conteudo.localidade);
    document.getElementById('txtUf').value = (conteudo.uf);
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {

  var cep = valor.replace(/\D/g, ''); // 18060 005(tratado por este comando replace) = 18060005

  if (cep != "") {

    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
        if (validacep.test(cep)) { // verifica se é uma expressao regular

          document.getElementById('txtRua').value = ("...");
          document.getElementById('txtBairro').value = ("...");
          document.getElementById('txtCidade').value = ("...");
          document.getElementById('txtUf').value = ("...");

        var script = document.createElement('script');
        script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
        document.body.appendChild(script);

      } else {
          //cep é inválido.
          limpa_formulário_cep();
          alert("Formato de CEP inválido.");
        }

  } else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
};