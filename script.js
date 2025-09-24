// Aguarda o carregamento completo do HTML antes de executar o script
document.addEventListener('DOMContentLoaded', function () {

    // Seleciona o visor e todos os botões
    const display = document.getElementById('result');
    const buttons = document.querySelectorAll('.button');

    // Adiciona um "ouvinte" de clique para cada botão
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value; // Pega o valor do botão clicado

            // Usa uma estrutura 'switch' para lidar com cada tipo de botão
            switch (value) {
                case 'C':
                    // Limpa completamente o visor
                    display.value = '';
                    break;
                
                case 'Backspace':
                    // Apaga o último caractere do visor
                    display.value = display.value.slice(0, -1);
                    break;

                case '=':
                    // Tenta calcular a expressão no visor
                    try {
                        // A função eval() calcula uma string como se fosse código JS.
                        // É simples, mas deve ser usada com cuidado em projetos reais.
                        // Para nossa calculadora, é seguro.
                        let result = eval(display.value.replace('×', '*').replace('÷', '/'));
                        display.value = result;
                    } catch (error) {
                        // Se houver um erro no cálculo (ex: 2++2), exibe "Erro"
                        display.value = 'Erro';
                    }
                    break;

                default:
                    // Para todos os outros botões (números e operadores),
                    // apenas adiciona o valor deles ao final do visor.
                    display.value += value;
                    break;
            }
        });
    });
});