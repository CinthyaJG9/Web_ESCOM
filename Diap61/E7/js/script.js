function mostrarOrdenados() {
    const input = document.getElementById("secuencia").value;
    const resultado = document.getElementById("resultado");
  
    const numeros = input.split(",").map(n => parseFloat(n.trim()));
    const numerosValidos = numeros.filter(n => !isNaN(n));
  
    if (numerosValidos.length === 0) {
      resultado.textContent = "Por favor, ingresa una secuencia válida.";
      return;
    }
  
    const ordenados = [...numerosValidos].sort((a, b) => a - b);
    resultado.innerHTML = `
      <p><strong>Secuencia original:</strong> ${numerosValidos.join(", ")}</p>
      <p><strong>Secuencia ordenada:</strong> ${ordenados.join(", ")}</p>
    `;
  }
  