function multiplicarPorSuma() {
    const num1 = parseInt(document.getElementById("numero1").value);
    const num2 = parseInt(document.getElementById("numero2").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(num1) || isNaN(num2)) {
      resultado.textContent = "Por favor, ingresa números válidos.";
      return;
    }
  
    let producto = 0;
    const positivo = Math.abs(num2);
    for (let i = 0; i < positivo; i++) {
      producto += num1;
    }
  
    // Si alguno era negativo, ajustamos signo
    if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
      producto = -producto;
    }
  
    resultado.textContent = `${num1} x ${num2} = ${producto}`;
  }
  