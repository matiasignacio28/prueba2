$(document).ready(()=> {
    $('.error').hide();

    $('#formRegistro').submit(function(evento){
        evento.preventDefault();
        $('.error').hide();
        


        let contrasena =$('#contrasena').val();
        let contrasenaConfirmar = $('#contrasenaConfirmar').val();
    
        if (contrasena !== contrasenaConfirmar){
            $('#contrasenaNoIguales').show();
            return;
    
        }
       
        alert("El registro se realizo correctamente");
        $('input[type="text"]').val('');
        $('input[type="email"]').val('');
        $('input[type="password"]').val('');
        
    })

});

