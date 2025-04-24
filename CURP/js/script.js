document.getElementById('curpForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim().toUpperCase();
    const apellidoP = document.getElementById('apellidoP').value.trim().toUpperCase();
    const apellidoM = document.getElementById('apellidoM').value.trim().toUpperCase();
    const fecha = document.getElementById('fechaNac').value;
    const sexo = document.getElementById('sexo').value;
    const estado = document.getElementById('estado').value;
  
    const [anio, mes, dia] = fecha.split('-');
    const año = anio.slice(-2); // Últimos dos dígitos del año
  
    const curp =
      apellidoP.charAt(0) +
      (apellidoP.match(/[AEIOU]/)?.[0] || 'X') +
      apellidoM.charAt(0) +
      nombre.charAt(0) +
      año +
      mes +
      dia +
      sexo +
      estado;
  
    document.getElementById('resultado').innerText = `CURP simulada: ${curp}`;
  });
  