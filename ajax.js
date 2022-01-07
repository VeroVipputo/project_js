$(document).ready(function(){
    
    $.get("https://reqres.in/api/users"),{page: 2}, function(response){
        response.data.array.forEach(element => {
            $("#datos").append("<p>"+ element.first_name+""+element.last_name + ""+"</p>");
        });
    };

    

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
     $.get($(this).attr("action"), usuario, function(response){
         response.data.forEach((element, index) => {
         console.log(response);
         $("#datos").append("<div>"+element.first_name+" "+element.last_name+ "</div>");
         
        });
    });
       
    });
});