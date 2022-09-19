setTimeout(function () {
    window.onscroll = function () {
        scrollFunction();

    };

    var lastScrollTop = 100;
    
    function scrollFunction() {
        if (document.documentElement.scrollTop > 90) {
            if (lastScrollTop > document.documentElement.scrollTop) {
               
                  
                if(document.getElementById("dashsidebar")){  
                 document.getElementById("dashsidebar").classList.add("dash-fixed-top");
                }

            }
          } else if (document.documentElement.scrollTop < 90) {
            if(document.getElementById("dashsidebar")){ 
            document.getElementById("dashsidebar").classList.remove("dash-fixed-top");
            }
          }
          }

}, 500);