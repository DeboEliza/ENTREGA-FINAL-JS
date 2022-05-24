

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

//function Pollera (tela,largo,estilo){
    // this.tela = tela;
    // this.largo = largo;
    // this.estilo = estilo;

  //this.mostrarTela = function() {console.log ("Tela: " + this.tela)};
 // this.mostrarLargo = function() {console.log ("Largo: " + this.largo)};
 // this.mostrarEstilo = function() {console.log ("Estilo: " + this.estilo)};
//}

//const Pollera1= new Pollera ("Lanilla","Larga", "Acampanada");
//const Pollera2= new Pollera ("Seda","Corta", "Recta");

//console.log("FALDA 1")
//Pollera1.mostrarTela();
//Pollera1.mostrarLargo();
//Pollera1.mostrarEstilo();

//console.log("FALDA 2")
//Pollera2.mostrarTela();
//Pollera2.mostrarLargo();
//Pollera2.mostrarEstilo();

//console.log ("Hola Cual es tu Falda Favorita?")
//let marca = prompt ("Ingresa la marca que te gusta");
//let tela = prompt ("Ingresa tipo de tela que te gusta");
//let estilo = prompt("Ingresa el estilo que te gusta");

//console.log ("te gusta - "  + marca);
//console.log ("te gusta - "  + tela);
//console.log ("te gusta - "  + estilo);

//console.log( "GENIAL!! GRACIAS POR TU OPINION!")

//const listaProductos=["vestidos","pantalones","remeras","faldas","camperas","pijamas"];
//listaProductos.push("shorts");
//console.log(listaProductos);

//const listaDeudores=["Gutierres","Farias","Carriso","Gonzales"];
//const pagosAtrasados=["2","1","3","4"];

//let apellido= prompt("Ingresa Tu apellido para saber si tienes deuda");
//let indice= listaDeudores.indexOf(apellido);

//if (indice!= -1){
 // console.log("Te informamos "+apellido+" en mora cuotas " + pagosAtrasados[indice]);

//}  else{
//  console.log("Te informamos "+apellido+" Estás al día con tus pagos");
//}



const preciosProductos =[ 3500,5800,4850,1800,7350];

function realizar(operacion,lista){
  for (
    const elemento of lista){
      operacion (elemento);
    }
  
}

let total=0;
function sumarTotal (precio){
  total = total+ precio;
}

function calcularIva (precio){
  console.log ( "Precio $ "+ precio+" con iva: $  "+ precio * 1.21);
  
}

realizar(sumarTotal, preciosProductos);
 console.log ("Total de la compra $"  + total);

realizar ( calcularIva , preciosProductos);
console.log ("Total de la compra con iva  $"  + total);

const indumentaria=[
  {
      tipo:"Pantalones",
      marca:"Gap",
      genero:"masculino",
      precio:3850
  },
  {
    tipo:"Falda",
    marca:"Gap",
    genero:"femenino",
    precio:2800
  },
  {
    tipo:"Pijamas",
    marca:"Piesitos",
    genero:"niñas",
    precio:2500
  },
  {
    tipo:"Pijamas",
    marca:"Piesitos",
    genero:"niños",
    precio:2750
  },
];
               
indumentaria.forEach ( (indumentaria) => {
  console.log ("marca: " + indumentaria.marca)
});

const listaMasBarata = indumentaria.filter((indumentaria)=> indumentaria.precio < 3000);
console.log( listaMasBarata);

const encontrar = indumentaria.find ((indumentaria)=> indumentaria.genero == "niñas");
console.log (encontrar);

let titulo=document.getElementById("titulo");
titulo.innerText="FLOR INDUMENTARIA PARA TODA LA FAMILIA";
titulo.style.color="red"

let galleryTitulo = document.getElementsByClassName("galleryTitulo");
galleryTitulo [0].innerText= "Con Rebaja $ 3150";
galleryTitulo [0].style.color= "white";
galleryTitulo [2].innerText= "Con Rebaja $ 4250";
galleryTitulo [2].style.color= "white";
galleryTitulo [4].innerText= "Con Rebaja $ 1500";
galleryTitulo [4].style.color= "white";



let parrafo = document.createElement ("div");
parrafo.innerHTML="<h4> Puedes Encontrarnos en 8405 Pines Boulevard Pomerone Florida </h4>";
document.body.appendChild(parrafo);


let container = document.getElementById ("contenedorImagen");
container.innerHTML = "< img src=assets/img/flor.jfif alt=logo></img>";








