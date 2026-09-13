const rolUsuario = localStorage.getItem('rol_usuario');

if (rolUsuario != 'admin') {
    window.location = '../inicio-sesion.html';
}