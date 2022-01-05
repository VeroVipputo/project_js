$(document).ready(function(){
    
    $.get("https://reqres.in/api/users"),{page: 3}, function(response){
        response.data.array.forEach(element => {
            $("#datos").append("<p>"+ element.first_name+""+element.last_name + ""+"</p>");
        });
    };

    let usuario = {
        name: "Veronica Vipputo",
        mail: "veronicavipputo@gmail.com"
    }

    $.post("https://reqres.in/api/users", nombreUsuario, function(response){
        console.log(response);
    });
$("#formulario").submit(function(e){
    e.preventDefault();

    let usuario = {
        usuario: $('input[name="usuario"]').val(),
        dni: $('input[name="id"]').val(),
     };
     console.log(usuario);
     $.post($(this).attr("action"), usuario, function(response){
         console.log(response);
        });
        return false;
    });
});