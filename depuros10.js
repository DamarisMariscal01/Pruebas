let calificacionM = 0;
let calificacionS = 0;
let calificacionR = 0;

function comprobarMulti() {
  let numero1 = document.getElementById('numero1M').innerHTML;
  let numero2 = document.getElementById('numero2M').innerHTML;
  let numUsuario = document.getElementById('numUsuarioM').value;

  let resultado = numero1*numero2;

  if (resultado == numUsuario) {
    alert ("CORRECTO :D")
    document.getElementById('numUsuarioM').value = "";
    actualizarMulti();
  }
  else {
    alert ("SIGUE INTENTANDO")
  }
}

function actualizarMulti() {
  let numRandom1 = Math.floor(Math.random()*10)+1;
  let numRandom2 = Math.floor(Math.random()*10)+1;

  document.getElementById("numero1M").innerHTML = numRandom1
  document.getElementById("numero2M").innerHTML = numRandom2
}

function comprobarSuma(){
  let numero1 = document.getElementById('numero1S').innerHTML;
  let numero2 = document.getElementById('numero2S').innerHTML;
  let numUsuario = document.getElementById('numUsuarioS').value;

  let resultado = parseInt(numero1)+ parseInt(numero2);
  if (resultado == numUsuario) {
    alert ("CORRECTO :D")
    document.getElementById('numUsuarioS').value = "";
    actualizarSuma();
  }
  else {
    alert ("SIGUE INTENTANDO")
  }
}

function actualizarSuma() {
  let numRandom1 = Math.floor(Math.random()*10)+1;
  console.log(numRandom1);
  let numRandom2 = Math.floor(Math.random()*10)+1;
  console.log(numRandom2);

  document.getElementById("numero1S").innerHTML = numRandom1
  document.getElementById("numero2S").innerHTML = numRandom2
}

function comprobarResta(){
  let numero1 = document.getElementById('numero1R').innerHTML;
  let numero2 = document.getElementById('numero2R').innerHTML;
  let numUsuario = document.getElementById('numUsuarioR').value;

  let resultado = parseInt(numero1) - parseInt(numero2);
  console.log(resultado);
  if (resultado == numUsuario) {
    alert ("CORRECTO :D")
    document.getElementById('numUsuarioR').value = "";
    actualizarResta();
  }
  else {
    alert ("SIGUE INTENTANDO")
  }
}

function actualizarResta() {
  let numRandom1 = Math.floor(Math.random()*10)+1;
  console.log(numRandom1);
  let numRandom2 = Math.floor(Math.random()*10)+1;
  console.log(numRandom2);

  document.getElementById("numero1R").innerHTML = numRandom1
  document.getElementById("numero2R").innerHTML = numRandom2
}

function mostrarM(){
  document.getElementById("multiplicaciones").style.display="flex";
  document.getElementById("sumas").style.display="none";
  document.getElementById("restas").style.display="none";
  document.getElementById("testM").style.display="none";
  document.getElementById("testS").style.display="none";
  document.getElementById("testR").style.display="none";
  calificacionM = 0;
  calificacionS = 0;
  calificacionR = 0;
}

function mostrarS(){
  document.getElementById("sumas").style.display="flex";
  document.getElementById("multiplicaciones").style.display="none";
  document.getElementById("restas").style.display="none";
  document.getElementById("testM").style.display="none";
  document.getElementById("testS").style.display="none";
  document.getElementById("testR").style.display="none";
  calificacionM = 0;
  calificacionS = 0;
  calificacionR = 0;
}

function mostrarR(){
  document.getElementById("restas").style.display="flex";
  document.getElementById("multiplicaciones").style.display="none";
  document.getElementById("sumas").style.display="none";
  document.getElementById("testM").style.display="none";
  document.getElementById("testS").style.display="none";
  document.getElementById("testR").style.display="none";
  calificacionM = 0;
  calificacionS = 0;
  calificacionR = 0;
}


function calificarM(){
  let test1m = document.getElementById('test1m').innerHTML;
  let test2m = document.getElementById('test2m').innerHTML;
  let nPreguntaM = document.getElementById('numPreguntaM').innerHTML;
  let usuarioTestM = document.getElementById('usuarioTestM').value;


  if (nPreguntaM == 5) {
    document.getElementById("siguienteM").style.display="none";
    document.getElementById("mostrarCM").style.display="block";
    document.getElementById("espacioM").style.display="none";

  }
  if (nPreguntaM < 5) {
    document.getElementById('numPreguntaM').innerHTML = parseInt(nPreguntaM) + 1;
  }


  let resultado = parseInt(test1m) * parseInt(test2m);
  if (resultado == usuarioTestM) {
    calificacionM += 1
    document.getElementById('usuarioTestM').value = "";
    actualizarTestM();
  }
  else {
    document.getElementById('usuarioTestM').value = "";
    actualizarTestM();
  }
  console.log(calificacionM);
}

function actualizarTestM(){
  let numRandom1 = Math.floor(Math.random()*10)+1;
  let numRandom2 = Math.floor(Math.random()*10)+1;

  document.getElementById("test1m").innerHTML = numRandom1
  document.getElementById("test2m").innerHTML = numRandom2
}

function mostrarCaliM(){
  document.getElementById("contenedorCM").style.display="block";
  document.getElementById("caliM").innerHTML = calificacionM
  document.getElementById("mostrarCM").style.display="none";
}

function examenM(){
  document.getElementById("multiplicaciones").style.display="none";
  document.getElementById("testM").style.display="block";
  document.getElementById("espacioM").style.display="flex";
  calificacionM = 0;
  actualizarTestM();
  document.getElementById('numPreguntaM').innerHTML = 1;
}


function calificarS(){
  let test1s = document.getElementById('test1s').innerHTML;
  let test2s = document.getElementById('test2s').innerHTML;
  let nPreguntaS = document.getElementById('numPreguntaS').innerHTML;
  let usuarioTestS = document.getElementById('usuarioTestS').value;

  if (nPreguntaS == 5) {
    document.getElementById("siguienteS").style.display="none";
    document.getElementById("mostrarCS").style.display="block";
    document.getElementById("espacioS").style.display="none";

  }
  if (nPreguntaS < 5) {
    document.getElementById('numPreguntaS').innerHTML = parseInt(nPreguntaS) + 1;
  }


  let resultado = parseInt(test1s) + parseInt(test2s);
  if (resultado == usuarioTestS) {
    calificacionS += 1
    document.getElementById('usuarioTestS').value = "";
    actualizarTestS();
  }
  else {
    document.getElementById('usuarioTestS').value = "";
    actualizarTestS();
  }
  console.log(calificacionS);
}

function actualizarTestS(){
  let numRandom1 = Math.floor(Math.random()*10)+1;
  let numRandom2 = Math.floor(Math.random()*10)+1;

  document.getElementById("test1s").innerHTML = numRandom1
  document.getElementById("test2s").innerHTML = numRandom2
}

function mostrarCaliS(){
  document.getElementById("contenedorCS").style.display="block";
  document.getElementById("calS").innerHTML = calificacionS
  document.getElementById("mostrarCS").style.display="none";
}

function examenS(){
  document.getElementById("sumas").style.display="none";
  document.getElementById("testS").style.display="block";
  document.getElementById("espacioS").style.display="flex";
  calificacionS = 0;
  actualizarTestS();
  document.getElementById('numPreguntaS').innerHTML = 1;
}

function calificarR(){
  let test1r = document.getElementById('test1r').innerHTML;
  let test2r = document.getElementById('test2r').innerHTML;
  let nPreguntaR = document.getElementById('numPreguntaR').innerHTML;
  let usuarioTestR = document.getElementById('usuarioTestR').value;

  if (nPreguntaR == 5) {
    document.getElementById("siguienteR").style.display="none";
    document.getElementById("mostrarCR").style.display="block";
    document.getElementById("espacioR").style.display="none";

  }
  if (nPreguntaR < 5) {
    document.getElementById('numPreguntaR').innerHTML = parseInt(nPreguntaR) + 1;
  }


  let resultado = parseInt(test1r) - parseInt(test2r);
  if (resultado == usuarioTestR) {
    calificacionR += 1
    document.getElementById('usuarioTestR').value = "";
    actualizarTestR();
  }
  else {
    document.getElementById('usuarioTestR').value = "";
    actualizarTestR();
  }
  console.log(calificacionR);
}

function actualizarTestR(){
  let numRandom1 = Math.floor(Math.random()*10)+1;
  let numRandom2 = Math.floor(Math.random()*10)+1;

  document.getElementById("test1r").innerHTML = numRandom1
  document.getElementById("test2r").innerHTML = numRandom2
}

function mostrarCaliR(){
  document.getElementById("contenedorCR").style.display="block";
  document.getElementById("calR").innerHTML = calificacionR
  document.getElementById("mostrarCR").style.display="none";
}

function examenR(){
  document.getElementById("restas").style.display="none";
  document.getElementById("testR").style.display="block";
  document.getElementById("espacioR").style.display="flex";
  calificacionR = 0;
  actualizarTestR();
  document.getElementById('numPreguntaR').innerHTML = 1;
}