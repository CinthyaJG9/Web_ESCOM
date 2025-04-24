function procesarTextos() {
    const input = document.getElementById("textos").value;
    const resultado = document.getElementById("resultado");
  
    const textos = input.split(",").map(t => t.trim()).filter(t => t.length > 0);
  
    if (textos.length === 0) {
      resultado.innerHTML = "<p>Por favor, ingresa al menos un texto válido.</p>";
      return;
    }
  
    let html = '<h2>Resultados:</h2><ul>';
  
    textos.forEach((texto, index) => {
      html += `
        <li>
          <strong>Texto ${index + 1}:</strong><br>
          Original: "${texto}"<br>
          Longitud: ${texto.length}<br>
          Mayúsculas: ${texto.toUpperCase()}<br>
          Minúsculas: ${texto.toLowerCase()}
        </li><br>
      `;
    });
  
    html += '</ul>';
    resultado.innerHTML = html;
  }
  