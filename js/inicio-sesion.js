const botonInicioSesion=document.getElementById('btn-login');

botonInicioSesion.addEventListener('click',function(){

    const inputEmail=document.getElementById('input-email');

    const email=inputEmail.value;

    if(email === ''){
        alert('Debe ingresar su correo electrónico.');
    }else if(email === 'admin@example.cl'){
        window.location='admin/indexAdmin.html';
        localStorage.setItem('rol_usuario','admin');
    }else if(email === 'empleado@tienda.cl'){
        window.location='empleado/indexEmpleado.html';
        localStorage.setItem('rol_usuario','empleado');
    }else{
        alert('Correo incorrecto. Por favor, inténtelo de nuevo.');
    }

})