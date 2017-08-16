var galeria= document.getElementById("pictures");
var origen = document.getElementById("btnOrigen");
var extincion= document.getElementById("btnExtincion");
var restaurar= document.getElementById("btnRestaurar");
/*var resTexto= document.getElementById("btnResTexto");*/
var izquierda= document.getElementById("caja_izq");
var derecha= document.getElementById("caja_der");



var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
var section = document.getElementById('pictures');

 for (var i = 0; i < pictures.length; i++) {
  var divPhoto = document.createElement("div");
  var photo = document.createElement('img');
  photo.setAttribute('src', pictures[i]);
  photo.setAttribute('class', 'foto');
  divPhoto.appendChild(photo);
  section.appendChild(divPhoto);

  var xbutton = document.createElement('button');
  divPhoto.appendChild(xbutton);
  xbutton.textContent= "X";
  xbutton.setAttribute('class', 'xBtn');

  xbutton.addEventListener("onclick", "borrar(this)");
}

function borrar(){
    galeria.removeChild(galeria.childNodes[0]);  
}

    
origen.addEventListener("click", function(){

caja_izq.classList.toggle("show");

});


extincion.addEventListener("click", function(){
caja_der.classList.toggle("show2");
});

/*resTexto.addEventListener("click", function(){
caja_der.classList.toggle("show2");
});*/

//position absolute
//z-index
//margin

 
