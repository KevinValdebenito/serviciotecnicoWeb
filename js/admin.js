
const rolUsuario = localStorage.getItem('rol_usuario');

if (rolUsuario != 'admin') {
    window.location = '../admin/indexAdmin.html';
}