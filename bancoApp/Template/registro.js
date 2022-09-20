const data = {
    "no_cedula":10,
    "primer_nombre": "acompañante",
    "segundo_nombre": "",
    "primer_apellido": "apellido",
    "segundo_apellido": "",
    "email": "secre2@hotmail.com",
    "no_celular": "1321",
    "rol": "acompanante",
    "contrasena": "123",
    "fecha_nacimiento":"2021-12-31",
    "ubicacion_gps_latitud":5.5,
    "ubicacion_gps_longitud":7.2
}
const  boton= document.getElementById("boton")
const url = "http://127.0.0.1:8000/newUsuario"; // URL a la cual enviar los datos

$('.boton').click(function() {
    $.post(url,data,function(data,status)  {
    console.log(data,status)
    });
})


/*



var no_cedula = document.getElementsByName("no_cedula").values
var primer_nombre = document.getElementsByName("primer_nombre").values
var segundo_nombre = document.getElementsByName("segundo_nombre").values
var primer_apellido = document.getElementsByName("primer_apellido").values
var segundo_apellido = document.getElementsByName("segundo_apellido").values
var email = document.getElementsByName("email").values
var no_celular=document.getElementsByName("no_celular").values
var rol=document.getElementsByName("rol").values
var contrasena = document.getElementsByName("contrasena").values
var fecha_nacimiento = document.getElementsByName("fecha_nacimiento").values
var ubicacion_gps_latitud = document.getElementsByName("ubicacion_gps_latitud").values
var ubicacion_gps_longitud = document.getElementsByName("ubicacion_gps_latitud").values

$(function() {

     // $('#boton').on('click', function() {

          $.post('http://127.0.0.1:8000/newUsuario', {
            "no_cedula": no_cedula,
            "primer_nombre":primer_nombre,
            "segundo_nombre": segundo_nombre,
            "primer_apellido": primer_apellido,
            "segundo_apellido": segundo_apellido,
            "email": email,
            "no_celular": no_celular,
            "rol": rol,
            "contrasena": contrasena,
            "fecha_nacimiento":fecha_nacimiento,
            "ubicacion_gps_latitud":ubicacion_gps_latitud,
            "ubicacion_gps_longitud":ubicacion_gps_longitud
            },function(data) {
              console.log('procesamiento finalizado', data);
          });
      })
*/