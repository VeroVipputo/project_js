$(document).ready(function(){
    
    $.post("https://reqres.in/api/users", nombreUsuario, function(response){
        console.log(response);
    });
$("#formulario").submit(function(e){
    e.preventDefault();

    let nombreUsuario = {
        nombreUsuario: $('input[name="usuario"]').val(),
        dni: $('input[name="id"]').val(),
     };
     console.log(usuario);
     $.post($(this).attr("action"), usuario, function(response){
         console.log(response);
        });
        return false;
    });
});