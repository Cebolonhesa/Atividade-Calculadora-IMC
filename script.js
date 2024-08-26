function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    if (peso > 0 && altura > 0) {
        let imc = peso / (altura * altura);

        document.getElementById("resultado").textContent = imc.toFixed(2);

        let mensagem = "";
        if (imc < 18.5) {
            mensagem = "Você está abaixo do peso.";
        } else if (imc >= 18.5 && imc <= 24.9) {
            mensagem = "Seu peso está normal.";
        } else if (imc >= 25 && imc <= 29.9) {
            mensagem = "Você está acima do peso.";
        } else {
            mensagem = "Você está com obesidade.";
        }

        document.getElementById("mensagem").textContent = mensagem;
    } else {
        document.getElementById("mensagem").textContent = "Por favor, insira valores válidos.";
    }
}
