

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
//let nombreProducto = prompt ("Ingresa Nombre Producto")
//alert ("Igresaste=" + nombreProducto);
//console.log ("Tu producto - " + nombreProducto);

//let colorDelProducto = prompt ("Ingresa color del Producto")
//alert ("Ingresaste=" + colorDelProducto);
//console.log ("tu color - " + colorDelProducto);

//let TallaProducto = prompt ("Ingresa Talla del Producto")
//alert ("Ingresaste=" + TallaProducto);
//console.log ("tu talla - "  + TallaProducto);

//function calcularPrecioConDescuento (){
  //  let precioProducto = (parseFloat ( prompt ("Ingrese el precio del producto")));
  //  let precioFinal = precioProducto * 0.5 ;
  //  console.log ( "En efectivo con Descuento $" + precioFinal);
//}

//calcularPrecioConDescuento ();

function Pollera (tela,largo,estilo){
     this.tela = tela;
     this.largo = largo;
     this.estilo = estilo;

  this.mostrarTela = function() {console.log ("Tela: " + this.tela)};
  this.mostrarLargo = function() {console.log ("Largo: " + this.largo)};
  this.mostrarEstilo = function() {console.log ("Estilo: " + this.estilo)};
}

const Pollera1= new Pollera ("Lanilla","Larga", "Acampanada");
const Pollera2= new Pollera ("Seda","Corta", "Recta");

console.log("FALDA 1")
Pollera1.mostrarTela();
Pollera1.mostrarLargo();
Pollera1.mostrarEstilo();

console.log("FALDA 2")
Pollera2.mostrarTela();
Pollera2.mostrarLargo();
Pollera2.mostrarEstilo();

console.log ("Hola Cual es tu Falda Favorita?")
let marca = prompt ("Ingresa la marca que te gusta");
let tela = prompt ("Ingresa tipo de tela que te gusta");
let estilo = prompt("Ingresa el estilo que te gusta");

console.log ("te gusta - "  + marca);
console.log ("te gusta - "  + tela);
console.log ("te gusta - "  + estilo);

console.log( "GENIAL!! GRACIAS POR TU OPINION!")

const listaProductos=["vestidos","pantalones","remeras","faldas","camperas","pijamas"];
listaProductos.push("shorts");
console.log(listaProductos);

const listaDeudores=["Gutierres","Farias","Carriso","Gonzales"];
const pagosAtrasados=["2","1","3","4"];

let apellido= prompt("Ingresa Tu apellido para saber si tienes deuda");
let indice= listaDeudores.indexOf(apellido);

if (indice!= -1){
  console.log("Te informamos "+apellido+" en mora cuotas " + pagosAtrasados[indice]);

}  else{
  console.log("Te informamos "+apellido+" Estás al día con tus pagos");
}
