var server = {
    path: null;
    regsend: function(nom,tel,mail,foto){
        server.path = foto;
    //  alert(1);
        $.ajax({
            method: "POST",
            url: "http://carlos.igitsoft.com/apps/test.php",
            data: { nom: nom, mail: mail, tel: tel }
        }).done(server.regDone);
        
    },
    
    regDone: function(msg){
        //alert(msg + ":data sent");
        alert(server.path);
        if (msg == "1")
            fileTransfer.sendPhoto(server.path);
        else
            navigator.notification.alert("Hubo un error al enviar los datos",null,"Error el enviar datos","Aceptar");
    }
    
    
};
