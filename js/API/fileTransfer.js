var fileTransfer = {

    var win: function (r) {
        if (r.response == "1"){
            navigator.notification.alert("Los datos se han enviado satisfactoriamente",null,"Registro correcto","Aceptar");
        }else{
            Alert("Error");
        }
    },

    var fail: function (error) {
        alert("An error has occurred: Code = " + error.code);
    },
            
    sendPhoto: function(path) {
        var options = new FileUploadOptions();
        options.fileKey = "foto";
        options.fileName = "Edgar";
        options.mimeType = "image/jpeg";

        var ft = new FileTransfer();
        ft.upload(path, "http://carlos.igitsoft.com/apps/test.php", fileTransfer.win, fileTransfer.fail, options);
    },        
};







