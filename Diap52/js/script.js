function calcular() {
    let suma = 0;
    let contadorPares = 0;
    let paresArray = [];
    let i = 1;

    while (i <= 100) {
        suma += i;
        if (i % 2 === 0) {
            contadorPares++;
            paresArray.push(i);
        }
        i++;
    }

    document.getElementById("suma").textContent = suma;
    document.getElementById("pares").textContent = contadorPares;
    document.getElementById("lista-pares").textContent = paresArray.join(", ");
}
