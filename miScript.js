

const ciudades = ["Buenos Aires", "Nueva York", "Londres", "Paris"];
const coordX = [215,150,320, 330];
const coordY = [400,180,132,147];


/**
* Funcion que llama a las dos funciones principales del programa
* @method comprar
* @return nada
*/
function comprar(){
    drawMap();
    precio();
}
/**
* Funcion que dibuja una mapa el trayecto entre dos ciudades
* @method drawMap
* @return
*/
function drawMap() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "imagenes/continentes-de-la-tierra.png";
    ctx.drawImage(img, 0, 100, 512, 300, 0, 0, 768, 540);
    ctx.beginPath();
    let origen = document.getElementById("origen").value;
    for (let i = 0; i < ciudades.length; i++) {
        if (origen === ciudades[i]) {
            ctx.fillStyle = "#35b70a"
            ctx.fillRect(coordX[i], coordY[i], 10, 10)
            ctx.moveTo(coordX[i], coordY[i]);
        }
    }
    let destino = document.getElementById("destino").value;
    for (let i = 0; i < ciudades.length; i++) {
        if (destino === ciudades[i]) {
            ctx.fillStyle = "#ce0505"
            ctx.fillRect(coordX[i], coordY[i], 10, 10)
            ctx.lineTo(coordX[i], coordY[i]);
            ctx.strokeStyle = "#1f3cad";
            ctx.lineWidth = 3;
            ctx.closePath();
            ctx.stroke();
        }
    }
}
/**
* Funcion que calcule el precio de los billetes
* @method precio
* @return nada (visualizar)
*/
function precio(){
    let personas = document.getElementById("nb_personas").value;
    let equipaje = document.getElementById("nb_equipaje").value;

    if(equipaje==="" || personas===""){
        alert("Completa todos los campos");
        document.getElementById("nb_personas").value='';
        document.getElementById("nb_equipaje").value='';
    }
    else if (personas <0 || equipaje <0){
        alert("Ingresa valores positivas");
        document.getElementById("nb_personas").value='';
        document.getElementById("nb_equipaje").value='';
    }
    else{
        let precio_billete = 1000;
        let precio_equipaje = equipaje * 100;
        document.getElementById('precio_billete').innerText = (precio_billete * personas + precio_equipaje).toString();
    }
}

/**
 * Funcion que verifica si loscampos del formulario son completos
 * @method toReservas
 * @return nada
 */
function toReservas() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email==="" || password===""){
        alert("Completa todos los campos");
        document.getElementById("email").value='';
        document.getElementById("password").value='';
    }

    else{
        window.location = "misReservas.html";
    }
}
/**
 * Funcion que dibuja el avion en movimiento
 * @method animarAvion
 * @return nada
 */
let x=0;
let dx=2;
function animarAvion(){
   let canvas = document.getElementById("myCanvas");
   let ctx = canvas.getContext("2d");


   let img= new Image;
   img.src="imagenes/avion_mapa.png";
   img.onload=function (){
       ctx.drawImage(img,x,10)   }
        if (x > canvas.width) {
        x = 0;
    }
   x+=dx
}
