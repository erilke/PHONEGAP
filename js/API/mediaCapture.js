var mediaCapture = {
    takePhoto: function(){
        //alert();
        navigator.device.capture.captureImage(mediaCapture.captureSuccess, mediaCapture.captureError, {limit:1});
     },

    // capture callback
    captureSuccess: function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i++) {
            path = mediaFiles[i].fullPath;
        }
        $('#regphoto').attr('rel',path).html('<img src="' + path +'" style="width:100%;">');
    },
    // capture error callback
    captureError: function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error','Aceptar');
    },
    
};

