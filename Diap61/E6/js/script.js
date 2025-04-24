function calcularMedia() {
    const input = document.getElementById("numeros").value;
    const resultado = document.getElementById("resultado");
  
    const numeros = input.split(",").map(n => parseFloat(n.trim()));
    const numerosValidos = numeros.filter(n => !isNaN(n));
  
    if (numerosValidos.length === 0) {
      resultado.textContent = "Por favor ingresa números válidos separados por comas.";
      return;
    }
  
    const suma = numerosValidos.reduce((acc, val) => acc + val, 0);
    const media = suma / numerosValidos.length;
  
    resultado.innerHTML = `<strong>Media:</strong> ${media.toFixed(2)}`;
  }
  