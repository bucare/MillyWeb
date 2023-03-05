document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){
    nav.style.right = "0px";
    background_menu.style.display = "block";
    }

    function ocultar_menu(){
        nav.style.right = "-250px";
        background_menu.style.display = "none";
        }
      

 /* ------------------contacto maps----------------------- */

        function iniciarMap(){
            var coord = {lat:9.3652397,lng:-70.4376429};
            var map = new google.maps.Map(document.getElementById('map'),{
              zoom: 18,
              center: coord
            });
            var marker = new google.maps.Marker({
              position: coord,
              map: map
            });
        }

      
        