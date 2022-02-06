

let listaUsuario= [];

  class nuevoUsuario{
      user =  usuarios.value;
      dni     = id.value;
      paga= salarios.value;
      constructor(user, dni, paga){
          this.user = user;
          this.dni     = dni;
          this.paga = paga;
        }
        
    };
    
    
    
    function agregarUsuario(){
        
    let usuario = document.getElementById("usuario");
    let dni     = document.getElementById("id");
    let salarios = document.getElementById("salario");

    listaUsuario.push(new nuevoUsuario(usuario.value , dni.value, salarios.value));
    let usuarioJSON = JSON.stringify(listaUsuario);
    localStorage.setItem("usuario", usuarioJSON);
    console.log(listaUsuario);
};

function mostrarListado(){
    let infoUsuarios = JSON.parse(localStorage.getItem("usuario"));

    for(let usuario of infoUsuarios){
        console.log("El usuario es: "+ usuario.usuarios);
        console.log("Y el Dni es:" + usuario.dni);
        console.log("Salario mensual de:" + usuario.salario);

    }
    console.log(infoUsuarios);


};



