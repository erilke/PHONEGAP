var fn = {
  init: function(){
      if (!fn.islogged())
          window.location.href="#reg";

  },
    islogged: function(){
        return false;
    }
};


window.addEventListener("load",fn.init, false);