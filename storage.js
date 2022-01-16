/*
let usuario = localStorage.getItem('nombre');
if (usuario == null) {
    localStorage.setItem('nombre', prompt('INGRESAR NOMBRE'));
} else {
    alert('EL NOMBRE ES ' + usuario);
}

let nombre = localStorage.getItem('nombre');
if (nombre == null) {
    const listaUsuarios = [];
    for (let index = 0; index < 5; index++) {
        listaUsuarios.push(prompt('INGRESAR USUARIO'))
    }
    localStorage.setItem('usuario', listaUsuarios);
} else {
    let listaUsuarios = '';
    const agregarUsuario = usuario.split(',');
    for (const agregarUsuario of listaUsuarios) {
        listaUsuarios += agregarUsuario + '\n';
    }
    alert(listaUsuarios);*/