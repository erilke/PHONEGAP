var server = {
    regsend: function(nom,tel,mail,foto){
      alert(1);
        $.ajax({
            method: "POST",
            url: "http://carlos.igitsoft.com/apps/test.php",
            data: { nom: nom, mail: mail, tel: tel }
        }).done(server.regDone);
        
    },
    
    regDone: function(msg){
        alert(msg+ ":data sent");
        if (msg == "1")
            fileTransfer.sendPhoto(foto);
        else
            navigator.notification.alert("Hubo un error al enviar los datos",null,"Error el enviar datos","Aceptar");
    }
    
    
};
