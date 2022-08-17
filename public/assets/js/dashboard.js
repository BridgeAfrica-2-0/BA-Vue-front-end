setTimeout(function () {
    window.onscroll = function () {
        scrollFunction();

    };

    var lastScrollTop = 70;
    
    function scrollFunction() {
        if (document.documentElement.scrollTop > 60) {
            if (lastScrollTop > document.documentElement.scrollTop) {
               
                  
                
                 document.getElementById("dashsidebar").classList.add("dash-fixed-top");


            }
          } else if (document.documentElement.scrollTop < 60) {
             
            document.getElementById("dashsidebar").classList.remove("dash-fixed-top");
          }
          }

}, 500);