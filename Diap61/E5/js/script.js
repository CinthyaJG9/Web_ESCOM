function crearVectores() {
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const contA = document.getElementById("vectorA");
    const contB = document.getElementById("vectorB");
    const form = document.getElementById("vectoresForm");
  
    contA.innerHTML = "";
    contB.innerHTML = "";
  
    if (isNaN(cantidad) || cantidad < 1) return;
  
    for (let i = 0; i < cantidad; i++) {
      const inputA = document.createElement("input");
      inputA.type = "number";
      inputA.placeholder = `A[${i}]`;
      inputA.classList.add("input");
  
      const inputB = document.createElement("input");
      inputB.type = "number";
      inputB.placeholder = `B[${i}]`;
      inputB.classList.add("input");
  
      contA.appendChild(inputA);
      contB.appendChild(inputB);
    }
  
    form.classList.remove("oculto");
  }
  
  function sumarVectores() {
    const inputsA = document.querySelectorAll("#vectorA .input");
    const inputsB = document.querySelectorAll("#vectorB .input");
    const resultado = document.getElementById("resultado");
  
    const A = Array.from(inputsA).map(i => parseFloat(i.value));
    const B = Array.from(inputsB).map(i => parseFloat(i.value));
  
    if (A.some(isNaN) || B.some(isNaN)) {
      resultado.textContent = "Todos los campos deben estar llenos con números válidos.";
      return;
    }
  
    const C = A.map((val, i) => val + B[i]);
    resultado.innerHTML = `<h2>Vector C (Resultado)</h2><p>[ ${C.join(", ")} ]</p>`;
  }
  