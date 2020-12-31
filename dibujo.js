var boton = document.getElementById("botoncito") ;
var texto = document.getElementById("caja_texto") ;
var pepe = document.getElementById("dibujito") ;
var lienzo = pepe.getContext("2d") ;
var lineas = 30
var ancho = pepe.width

boton.addEventListener("click", dibujoPruductoClick);

function linea(color, x_moveTo, y_moveTo, x_lineTo, y_lineTo)
 {
   lienzo.beginPath() ;
   lienzo.strokeStyle = color;
   lienzo.moveTo (x_moveTo, y_moveTo) ;
   lienzo.lineTo (x_lineTo, y_lineTo) ;
   lienzo.stroke() ;
   lienzo.closePath() ;
 }

function dibujoPruductoClick()
 {
   var x = parseInt(texto.value);
   var lineas = x
   linea("black", 10, 0, 10, 500);
   linea("black", 10, 500, 500, 500);

   for(l=0 ; l < lineas ; l++)
  {
    y_moveTo= ancho/lineas * l ;
    x_lineTo= ancho/lineas * (1 + l) ;
    linea("black", 10, y_moveTo, x_lineTo, 500)
  }
}
