(function($) {

    //disable pagination last or first element
    if($(".pagination").length===1){
        if($("ul.pagination li:nth-child(2)").hasClass("disabled")){
            $("ul.pagination li:first-child").addClass("disabled");
        }else if($("ul.pagination li:nth-last-child(2)").hasClass("disabled")){
            $("ul.pagination li:last-child").addClass("disabled");
        }
    }

    if(window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
          if(netlifyIdentity.currentUser()){
              $("#footer .cms").css("display","block");
          }
        });
    }  

})(jQuery);