

//let nombre = prompt ("nombre");
//let apellido = prompt ( "apellido" );
//let nombreCompleto= prompt( "nombre + apellido");

//Repetimos con While hasta que el usuario ingresa "ESC"
//while(nombreCompleto != "ESC" ){
   // alert("Has ingresado "+ nombreCompleto);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
  //  entrada= prompt("ingresar otro dato - ESC para finalizar")
//}


// calcuraremos un precio de la indumentaria
let nombreProducto = prompt ("Ingresa Nombre Producto")
alert ("Igresaste=" + nombreProducto);
console.log ("Tu producto - " + nombreProducto);

let colorDelProducto = prompt ("Ingresa color del Producto")
alert ("Ingresaste=" + colorDelProducto);
console.log ("tu color - " + colorDelProducto);

let TallaProducto = prompt ("Ingresa Talla del Producto")
alert ("Ingresaste=" + TallaProducto);
console.log ("tu talla - "  + TallaProducto);

function calcularPrecioConDescuento (){
    let precioProducto = (parseFloat ( prompt ("Ingrese el precio del producto")));
    let precioFinal = precioProducto * 0.5 ;
    console.log ( "En efectivo con Descuento $" + precioFinal);
}

calcularPrecioConDescuento ();

function pollera (tela,largo,estilo){
     this.tela = tela;
     this.largo = largo;
     this.estilo = estilo;

  this.mostrarTela = function(){connsole.log ("Tela: " + this.tela)};
  this.mostrarLargo = function(){connsole.log ("Largo: " + this.largo)};
  this.mostrarEstilo = function(){connsole.log ("Estilo: " + this.Estilo)};
}

const pollera1= new pollera ("Lanilla","Larga","acampanada");
const pollera2= new pollera ("Seda","Corta","Recta");

pollera1.mostrarTela();
pollera1.mostrarLargo();
pollera1.mostrarEstilo();

pollera2.mostrarTela();
pollera2.mostrarTela();
pollera2.mostrarTela();

