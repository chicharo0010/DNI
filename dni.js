function dni2(form) {
    let numdni = form.numero.value;
    let letra = form.letra.value;

    if (numdni.trim() === "" || letra.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    let residuo;
    const div = 23;
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    numdni = Number(numdni);

    if (numdni < 0 || numdni > 99999999 || numdni.toString().length === 0 || numdni.toString().length > 8) {
        alert("El número del DNI no es válido");
        return false;
    } else if (letra.length !== 1) {
        alert("Por favor ingresa solo una letra");
        return false;
    } else if (!/^[A-Za-z]+$/.test(letra)) {
        alert("Por favor ingresa solo caracteres alfabéticos en la letra");
        return false;
    } else {
        residuo = numdni % div;
        let letra2 = letras[residuo];
        if (letra2 !== letra.toUpperCase()) {
            alert("La letra no es correcta");
        } else {
            alert("La letra es correcta");
        }
    }

    return false;
}
