
let form = document.getElementById("formulario");

let rut:any = document.getElementById("rut");

let msj:any = document.getElementById("mensaje");

let verificador:any = document.getElementById("digitoverificador");


let checkB:any = document.querySelectorAll("input[checkbox]")



let radial:any = document.querySelectorAll("input[radio]")


form.addEventListener("submit", function(evento){
    evento.preventDefault();
    if(validar(rut.value) && validardigito(verificador.value) ){
        
        console.log(rut.value);
        form.style.display="none";
        msj.style.display = "block";
        msj.innerHTML="hemos recibido sus datos, pronto se comunicaran con usted";
        msj.style.color="red";
    }else{
        alert("Debe haber cometido un error en uno o mas campos: \n-rut invalido \n-digito verificador invalido\n-lenguaje de programacion sin seleccionar\n-años de experiencia sin seleccionar ");
        console.log("rut invalido");
    }
    
});

function check(checkB:any):boolean{
    let count = 0;

    for(let i = 0; i < checkB.length; i++){
        checkB[i].addEventListener('checked', function(){
             if(checkB[i].checked)
                  count++;
    });
    if(count == 0){
        return false;
    }
    return true;
}
    
}

function radios(radial:any): boolean{
    let flag = 0;

    for(let i = 0; i < radial.length; i++){
        radial[i].addEventListener('checked', function(){
             if(radial[i].checked)
                  flag++;
    });
    if(flag == 0){
        return false;
    }
    return true;
}

}

function validar(linea:any): boolean {
    if(isNaN(linea)){
        return false;
    }
        return true;
    
}
function validardigito(caracter:any): boolean {
    if(isNaN(caracter) && caracter==="k"){
        return true;
    }else if(isNaN(caracter)){
        return false;
    }else{
        return true;
    }

}

