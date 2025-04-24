function verificarPar() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(numero)) {
      resultado.textContent = "Por favor, ingresa un número válido.";
    } else if (numero % 2 === 0) {
      resultado.textContent = `El número ${numero} es par.`;
    } else {
      resultado.textContent = `El número ${numero} no es par.`;
    }
  }
  