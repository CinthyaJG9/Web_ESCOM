function mostrarTabla() {
    const numero = parseInt(document.getElementById("numero").value);
    const tablaResultado = document.getElementById("tablaResultado");
  
    tablaResultado.innerHTML = "";
  
    if (isNaN(numero)) {
      tablaResultado.innerHTML = "<li>Por favor, ingresa un número válido.</li>";
      return;
    }
  
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      const li = document.createElement("li");
      li.textContent = `${numero} × ${i} = ${resultado}`;
      tablaResultado.appendChild(li);
    }
  }
  