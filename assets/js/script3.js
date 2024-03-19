document.addEventListener('DOMContentLoaded', function() {
    const valor1Input = document.getElementById('valor1');
    const valor2Input = document.getElementById('valor2');
    const resultadoElement = document.querySelector('.resultado');
    const btnSumar = document.getElementById('btn-sumar');
    const btnRestar = document.getElementById('btn-restar');

    btnSumar.addEventListener('click', function() {
        const valor1 = parseFloat(valor1Input.value);
        const valor2 = parseFloat(valor2Input.value);
        const resultado = valor1 + valor2;
        mostrarResultado(resultado);
    });

    btnRestar.addEventListener('click', function() {
        const valor1 = parseFloat(valor1Input.value);
        const valor2 = parseFloat(valor2Input.value);
        const resultado = valor1 - valor2 >= 0 ? valor1 - valor2 : 0;
        mostrarResultado(resultado);
    });

    const mostrarResultado = function(resultado) {
        resultadoElement.textContent = resultado;
    };
});
