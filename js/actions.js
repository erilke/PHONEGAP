var fn = {
  init: function(){
      if (!fn.islogged())
          window.location.href="#reg";
    // funcionalidades de registro
      
      $('#regsend').click(fn.getRegister);
    $('#takephoto').click(mediaCapture.takePhoto);
      
  },
    ready: function(){
        document.addEventListener("deviceready", fn.init, false);
    },
    
    islogged: function(){
        return false;
    },
    
    getRegister: function(){
        var nom = $('#regname').val();
        var mail = $('#regmail').val();
        var tel = $('#regtel').val();
        var foto = $('#regPhoto').attr('rel');
        
        //alert(nom + ' ' + mail + ' ' + tel);
        if(nom != '' && tel != '' && mail != '' && foto != undefined && foto != ''){
            alert();
            // enviar datos al servidor
            server.regsend(nom,tel,mail,foto);
            
            
        }else{
          // alert('Todos los campos son requeridos'); 
            navigator.notification.alert('Todos los campos son requeirido',null, "Error de registro", "Aceptar");
        }
    
    }
    
};


//window.addEventListener("load",fn.ready, false);
//jQuery(document).ready(fn.ready);
//$(document).ready(fn.ready);
$(fn.ready);
//$(fn.init);