function obtenerDivisoresSuma(numero) {
    let suma = 0;
    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            suma += i;
        }
    }
    return suma;
}

function encontrarParesAmigables(rangoInicio, rangoFin) {
for (let m = rangoInicio; m <= rangoFin; m++) {
    const n = obtenerDivisoresSuma(m);
    if (n > m && obtenerDivisoresSuma(n) === m) {
    console.log(`(${m}, ${n}) son números amigables.`);
    return [m, n];
    }
}
console.log(`No se encontraron pares amigables en el rango.`);
return null;
}

const resultado = encontrarParesAmigables(1000, 1500);