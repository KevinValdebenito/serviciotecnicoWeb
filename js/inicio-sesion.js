
const botonInicioSesion=document.getElementById('btn-login');

botonInicioSesion.addEventListener('click',function(){
    const inputEmail=document.getElementById('input-email');
    const inputPassword=document.getElementById('input-password');

    //aqui va una validacion de email y contraseña, si es correcta se redirige a la pagina de inicio, si no es correcta se muestra un mensaje de error

    const email=inputEmail.value;
    
    if(email === 'admin@example.cl'){
        window.location='admin/indexAdmin.html';
        localStorage.setItem('rol_usuario','admin');
    }else if (email === 'empleado@tienda.cl'){
        window.location='empleado/indexEmpleado.html';
        localStorage.setItem('rol_usuario','empleado');
    } else {
        alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
    }
})