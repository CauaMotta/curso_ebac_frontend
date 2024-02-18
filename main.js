$(document).ready(() => {
    $('#form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            phone: 'required',
            cpf: 'required',
            address: 'required',
            bairro: 'required',
            cidade: 'required',
            cep: 'required'
        },
        messages: {
            email: 'Digite um email válido.',
            phone: 'Digite um número de telefone válido.',
            cpf: 'Digite um CPF válido.',
            address: 'Digite um endereço válido',
            bairro: 'Digite um bairro válido',
            cidade: 'Digite uma cidade válida',
            cep: 'Digite um CEP válido'
        }
    })
    $("#name").rules("add", {
        required: true,
        minlength: 4,
        messages: {
            required: "Digite seu nome completo",
            minlength: jQuery.validator.format("Por favor, digite um nome com no minimo {0} caracteres.")
        }
    });
    $('#phone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#num').mask('Nº 0000')
    $('#cep').mask('00000-000');

})