function crearCampos() {
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const container = document.getElementById("inputsContainer");
    const form = document.getElementById("numerosForm");
  
    container.innerHTML = ""; // Limpiar campos anteriores
    if (isNaN(cantidad) || cantidad < 1) return;
  
    for (let i = 0; i < cantidad; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.placeholder = `Número ${i + 1}`;
      input.classList.add("numero");
      container.appendChild(input);
    }
  
    form.classList.remove("oculto");
  }
  
  function encontrarMayor() {
    const inputs = document.querySelectorAll(".numero");
    const numeros = Array.from(inputs).map(input => parseFloat(input.value));
    const resultado = document.getElementById("resultado");
  
    if (numeros.some(isNaN)) {
      resultado.textContent = "Por favor, llena todos los campos correctamente.";
      return;
    }
  
    let mayor = numeros[0];
    let posicion = 0;
  
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > mayor) {
        mayor = numeros[i];
        posicion = i;
      }
    }
  
    resultado.textContent = `El mayor valor es ${mayor} y está en la posición ${posicion + 1}.`;
  }
  