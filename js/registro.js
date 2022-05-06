$(document).ready(()=> {
    $('.error').hide();

    $('#formRegistro').submit(function(evento){
        evento.preventDefault();
        $('.error').hide();
        
        

        let contrasena =$('#contrasena').val();
        let contrasenaConfirmar = $('#contrasenaConfirmar').val();
    
        if (contrasena !== contrasenaConfirmar||(contrasena).length<=3){
            $('#contrasenaIncorrecta').show();
            return;
    
        }
      
       
        alert("El registro se realizo correctamente");
        $('input[type="text"]').val('');
        $('input[type="email"]').val('');
        $('input[type="password"]').val('');
        
    })

});


const filtrar = ()=>{ 
    let contrasena =$('#contrasena').val();
    let contrasenaConfirmar = $('#contrasenaConfirmar').val();
    if (contrasena == contrasenaConfirmar&&(contrasena).length>3){
        $('#contrasenaCorrecta').show()&&$('#contrasenaIncorrecta').hide()&&$('#detalle').hide();
        return;  
    }
    else
        $('#contrasenaCorrecta').hide();
        return;


}






contrasenaConfirmar.addEventListener('keyup',filtrar)
contrasena.addEventListener('keyup',filtrar)

$(function(){
    var esOculto = false;
    $('#contrasenaIncorrecta').click(function(){
        if (esOculto){
            $('#detalle').show();
            esOculto=false;

        }else{
            $('#detalle').hide();
            esOculto=true;
        }

    })


})




