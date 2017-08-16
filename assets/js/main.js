//Enlazo los Ids de mi html con las neuvas vaariables que le asignaré con mi js
    var origen = document.getElementById("btnOrigen");
    var extincion= document.getElementById("btnExtincion");
    var restaurar= document.getElementById("btnRestaurar");
    var izquierda= document.getElementById("caja_izq");
    var derecha= document.getElementById("caja_der");

    var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
    var section = document.getElementById('pictures');
//Función para que aparezcan mis imagenes pandas en mi pagina
    function imagen(){
        for (var i = 0; i <pictures.length; i++) {
            var imagen="img"+i;
        var divPhoto = document.createElement("div");
            divPhoto.setAttribute("id", imagen);
        var photo = document.createElement('img');
            photo.setAttribute('src', pictures[i]);
            photo.setAttribute('class', 'foto');
            divPhoto.appendChild(photo);
            section.appendChild(divPhoto);

        var xbutton = document.createElement('button');
            xbutton.setAttribute('class', 'xBtn');
            xbutton.setAttribute('onclick', 'borrar(this)');
        var x = document.createTextNode("X");//es lo que me aparecera en el buton X
            xbutton.appendChild(x);
            divPhoto.appendChild(xbutton);
        }
    }
    imagen();

    //Función para restaurar mis fotos pandas
    restaurar.addEventListener("click", restaurarFoto);
    function restaurarFoto(){
        var divImagenes= document.getElementById("img0");
        var divImagenes1= document.getElementById("img1");
        var divImagenes2= document.getElementById("img2");
        var divImagenes3= document.getElementById("img3");
       if(divImagenes.style.display === "none"||divImagenes1.style.display === "none"||divImagenes2.style.display === "none" ||divImagenes3.style.display === "none"){
           divImagenes.style.display = "inline-block";
           divImagenes1.style.display = "inline-block";
           divImagenes2.style.display = "inline-block";
           divImagenes3.style.display = "inline-block";
       }
        
        /*imagen();*/
    }
  
    //Función para borrar o desaparecer las fotos de panda
    function borrar(d){
        d.parentNode.style.display = "none";
    }

    //Funcion para que me desaparezca y aparezca el texto de la izquierda
    origen.addEventListener("click", function(){
    caja_izq.classList.toggle("show");
    });

    //Funcion para que me desaparezca y aparezca el texto de la derecha
    extincion.addEventListener("click", function(){
    caja_der.classList.toggle("show2");
    });


  /*
    $(document).ready(function(){
        $(".xBtn").click(function(){
            $(".foto").toggle();
        });
    });
    */
