function calcular() {
    let suma = 0;
    let contadorPares = 0;
    let paresArray = [];

    for (let i = 1; i <= 100; i++) {
        suma += i;
        if (i % 2 === 0) {
            contadorPares++;
            paresArray.push(i);
        }
    }

    document.getElementById("suma").textContent = suma;
    document.getElementById("pares").textContent = contadorPares;
    document.getElementById("lista-pares").textContent = paresArray.join(", ");
}
