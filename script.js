function advice(){
    alert("Remember to let the light in the room turned on when watching movies or series , to avoid eye pain. And also , don't forget the popcorn!")
}

//WIP
var quote=["Nunca renunciaré a este sentimiento de odio que ha estado en mí desde ese día, el día en que lo perdí todo, mi familia, mis amigos, hasta mi propia dignidad.","Por ello es mi deber iluminar su camino mientras viaje a través de la oscuridad, deberé servir como el guardián de su llama, para que nunca se extinga. Después de todo, soy simplemente... Un demonio de mayordomo.","Yo soy la hija del líder de los caballeros Británicos, Marqués Alexis Leon Midford: ¡Elizabeth, la esposa del perro guardián de la Reina!","La telaraña de la araña ya ha sido tejida. Cuanto más luchas, más difícil se vuelve escapar de esos lazos. Cualquiera que sea la presa, una vez que se involucren conmigo, atraparlos es sólo cuestión de tiempo.","Yo odiaba el cabello rojo de mi padre, pero cuando te conocí empecé a amar el rojo, empezaste a gustarme.	","Eliminar lo que no tiene virtud, eliminar lo inútil, eliminar lo impuro." 

function quotes(){
    var rand = quote[Math.floor(Math.random() * quote.length)];      document.getElementById("random").innerText=rand
}

var countDownDate = new Date("April 22, 2019 15:30:00").getTime();

function slow() {
  var now = new Date().getTime();
  var time = countDownDate - now;
  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);

var text =document.getElementById("date");
var text1=document.getElementById("clock");
text.innerHTML = "Season 8 Episode 1: Released! <br><br>Next Episode: "+days + " Days " + hours + " Hour "+ minutes + " Min "+ seconds + " Sec ";
clock.innerHTML="Next Episode: "+ days + " Days " + hours + " Hour "+ minutes + " Min "+ seconds + " Sec ";

}

setInterval(slow,1000)


function loader(){
    document.getElementById("bring").style.transform="scale(0)";
}
setTimeout(loader,1000)
