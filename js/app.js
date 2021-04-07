var form = document.getElementById("formulario");
var rut = document.getElementById("rut");
var msj = document.getElementById("mensaje");
var verificador = document.getElementById("digitoverificador");
var checkB = document.querySelectorAll("input[checkbox]");
var rad = document.querySelectorAll("input[radio]");

form.addEventListener("submit", function(evento) {
    evento.preventDefault();
    if (validar(rut.value) && validardigito(verificador.value)) {
        console.log(rut.value);
        form.style.display = "none";
        msj.style.display = "block";
        msj.innerHTML = "hemos recibido sus datos, pronto se comunicaran con usted";
        msj.style.color = "red";
    } else {
        alert("Debe haber cometido un error en uno o mas campos: \n-rut invalido \n-digito verificador invalido\n-lenguaje de programacion sin seleccionar\n-años de experiencia sin seleccionar ");
        console.log("rut invalido");
    }
});

function check(checkB) {
    var count = 0;
    var _loop_2 = function(i) {
        checkB[i].addEventListener('checked', function() {
            if (checkB[i].checked)
                count++;
        });
        if (count == 0) {
            return { value: false };
        }
        return { value: true };
    };
    for (var i = 0; i < checkB.length; i++) {
        var state_2 = _loop_2(i);
        if (typeof state_2 === "object")
            return state_2.value;
    }
}

function radios(radial) {
    var flag = 0;
    var _loop_1 = function(i) {
        radial[i].addEventListener('checked', function() {
            if (radial[i].checked)
                flag++;
        });
        if (flag == 0) {
            return { value: false };
        }
        return { value: true };
    };
    for (var i = 0; i < radial.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
}

function validar(linea) {
    if (isNaN(linea)) {
        return false;
    }
    return true;
}

function validardigito(caracter) {
    if (isNaN(caracter) && caracter === "k") {
        return true;
    } else if (isNaN(caracter)) {
        return false;
    } else {
        return true;
    }
}