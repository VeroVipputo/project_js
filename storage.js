

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

function guardarUsuario(){

    localStorage.setItem("1", nuevoUsuario);

}

function agregarUsuario(){

    let usuario = document.getElementById("usuario");
    let dni     = document.getElementById("id");

    nuevoUsuario.push(new usuario(usuario.value , dni.value));
    console.log(nuevoUsuario);
};





