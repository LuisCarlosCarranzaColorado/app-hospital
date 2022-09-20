
//const nombre = document.getElementById("nombre");

var especialidad = document.getElementById("especialidad");
var no_cedula = document.getElementById("no_cedula");
var enviar = document.getElementById("enviar");

//var data = "hola"
   //"nombre": especialidad.value,
   //"cedula": no_cedula.value
   
//const data = new FormData();

function prueba(){
 console.log(especialidad.value)
}
/*
function hizoclick(){
    
    data.append("especialidad", "cardiologia");
    data.append("no_cedula", 12);
    fetch('http://127.0.0.1:8000/newMedico', {
       method: 'POST',
       body: data
    })
    .then(function(response) {
       if(response.ok) {
           return response.text()
       } else {
           throw "Error en la llamada Ajax";
       }
    
    })
    .then(function(texto) {
       console.log(texto);
    })
    .catch(function(err) {
       console.log(err);
    });
}*/


enviar.addEventListener('click', prueba);



