const inputCep = document.getElementById('js-input-cep');
const btnBuscarCep = document.getElementById('js-btn-buscar-cep');

const inputBairro = document.getElementById('js-input-bairro');
const inputCepDado = document.getElementById('js-input-cep-dados');
const inputLogradouro = document.getElementById('js-input-logradouro');
const inputEstado = document.getElementById('js-input-estado');

// Mapeamento de area dados e mensagem de erro 
const areaDados = document.getElementById('js-dados');
const msgErro = document.getElementById('js-error');
console.log(msgErro);

//Evento de clique
btnBuscarCep.addEventListener('click', () => {
    if(inputCep.value != "") {
        //Chamando a api
        fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`)
        .then(response => response.json())
        .then(json => {
           inputBairro.value = json.bairro;
           inputCepDado.value = json.cep;
           inputLogradouro.value = json.logradouro;
           inputEstado.value = json.localidade;

           areaDados.style.display = 'block';
           msgErro.style.display = 'none';
        });
    } else {
        inputBairro.value = "";
        inputCepDado.value = "";
        inputLogradouro.value = "";
        inputEstado.value = "";
        
        areaDados.style.display = 'none';
       msgErro.style.display = 'block';
    }
})
