let numero;


while (true) {
    let input = prompt("Ingresa un número: ");

    numero = Number(input);

    if (!isNaN(numero) && input !== "" && input !== null) {
        break;
    } else {
        alert("Debes ingresar un número válido.");
    }
}


let factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial *= i;
}//for


console.log("El numero factorial de " + numero + " es: " + factorial);

document.getElementById("resultado").textContent = 
    "El factorial de " + numero + " es: " + factorial;