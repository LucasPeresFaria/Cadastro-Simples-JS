
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
    var script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
    document.body.appendChild(script);
  } else {
    return 0;
  }
};