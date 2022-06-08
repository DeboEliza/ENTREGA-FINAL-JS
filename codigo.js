

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
  {   id:"001",
      tipo:"Pantalones",
      marca:"Gap",
      genero:"masculino",
      precio:3850
  },
  { id:"002",
    tipo:"Pantalones",
    marca:"Gap",
    genero:"femenino",
    precio:4850
},
  { id:"003",
    tipo:"vestidos",
    marca:"Gap",
    genero:"femenino",
    precio:2800
  },
  { id:"004",
    tipo:"CamperasHombres",
    marca:"Flor",
    genero:"maculino",
    precio:7750
  },
  { id:"005",
    tipo:"CamperasMujer",
    marca:"Flor",
    genero:"femenino",
    precio:6750
  },
  { id:"006",
    tipo:"PijamasMujer",
    marca:"Piesitos",
    genero:"femenino",
    precio:3750
  },
  { id:"007",
    tipo:"PijamasHombre",
    marca:"Piesitos",
    genero:"masculino",
    precio:3750
  },
  { id:"008",
    tipo:"Pijamas",
    marca:"Piesitos",
    genero:"niñas",
    precio:2500
  },
  { id:"009",
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
titulo.innerText="FLOR INDUMENTARIA";
titulo.style.color="red";



let galleryTitulo = document.getElementsByClassName("galleryTitulo");
galleryTitulo [0].innerText= "Con Rebaja $ 3500";
galleryTitulo [0].style.color= "red";
galleryTitulo [2].innerText= "Con Rebaja $ 4250";
galleryTitulo [2].style.color= "red";
galleryTitulo [4].innerText= "Con Rebaja $ 1500";
galleryTitulo [4].style.color= "red";



let parrafo = document.createElement ("div");
parrafo.innerHTML="<h4> Puedes Encontrarnos en 8405 Pines Boulevard Pomerone Florida </h4>";
document.body.appendChild(parrafo);




let boton=document.getElementById("miBoton");
boton.addEventListener("mouseover", interactuar);

function interactuar(){
   alert ("Aprovecha estos Descuentos!!!");
}

localStorage.setItem('indumentaria', "Pantalones,vestidos,Pijamas,Camperas,sueters");
localStorage.setItem('precios', [3850,5800,4850,1800,7350,2500,2750,6750,2800]);
localStorage.setItem('esValido', true);

//para recibir y ver los datos que guarde

let indu =  localStorage.getItem('indumentaria');
let preci =  localStorage.getItem('precios');
let valida  =  localStorage.getItem('esValido');

//lo veo lo que puse y debo cambiar algunas cosas

//alert(indu);
//console.log (valida=="true");


let precios=localStorage.getItem("precios");
console.log("precios");
let listaDePrecios= precios.split(",");
console.log(listaDePrecios);

let listaDePreciosParceados=listaDePrecios.map((precios) => parseInt(precios));
console.log(listaDePreciosParceados);


//Ciclo para recorrer las claves almacenadas en el objeto localStorage
for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i);
  console.log("Clave: "+ clave);
  console.log("Valor: "+ localStorage.getItem(clave));
}

//formato JSON
const producto1 = { tipo: 'pantalones', marca: "Gap" };
const conJSON    = JSON.stringify(producto1);

console.log(conJSON); // {"tipo":pantalones,"marca":"Gap"}
console.log(typeof producto1); // object
console.log(typeof conJSON);    // string

localStorage.setItem("producto1", conJSON);
// Se guarda {"tipo":pantalones,"marca":"Gap"}

///////////////////////
const producto2 = { tipo: 'vestodos', marca: "Gap" };
const enJSON    = JSON.stringify(producto1);

console.log(enJSON); // {"tipo":vestidos,"marca":"Gap"}
console.log(typeof producto2); // object
console.log(typeof enJSON);    // string

localStorage.setItem("producto2", enJSON);
// Se guarda {"tipo":falda,"marca":"Gap"}

//////////////////////////////

const producto3 = { tipo: 'pijamas', marca: "Piesitos" };
const onJSON    = JSON.stringify(producto1);

console.log(onJSON); // {"tipo":pijamas,"marca":"Gap"}
console.log(typeof producto3); // object
console.log(typeof onJSON);    // string

localStorage.setItem("producto3", onJSON);
// Se guarda {"tipo":pijamas,"marca":"Gap"}

//guardo el array de objetos

const productos = [{ id: 1,  producto: "Pantalones", precio: 3850 },
                  {  id: 2,  producto: "Pantalones", precio: 4850 },
                  {  id: 3,  producto: "vestidos"  , precio: 2800},
                  {  id: 4,  producto: "CamperasHombre" , precio: 7750},
                  {  id: 5,  producto: "CamperasMujer"  , precio: 6750},
                  {  id: 6,  producto: "PijamaMujer" , precio: 3750},
                  {  id: 7,  producto: "PijamaHombre"  , precio: 3750},
                  {  id: 8,  producto: "Pijamas" , precio: 2500},
                  {  id: 9,  producto: "Pijamas"  , precio: 2750}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// Almaceno todo el Array de los productos
guardarLocal("listaProductos", JSON.stringify(productos));

let miformulario=document.getElementById("forlmulario");
miformulario.addEventListener ("submint", validarFormulario);

function validarFormulario(e){
  e.preventDefault();
  alert ("Formulario Enviado")
   
}


//operador ternario
Edad > 17 ? alert("Puedes Continuar Comprando!") : alert("Necesitas Ayuda de un Mayor")

//cuando le ponga carrito al trabajo 
// con operador AND
carrito.length === 0 && console.log("El carrito está vacío!")

//si el usuario tiene edad mayor o igual que 17 se almacena una nueva fecha en la variable.
const usuario = {
  nombre: {},
  edad: {}
}

const registroIngreso = usuario.edad >= 17 && new Date()

console.log(registroIngreso)

//🛒 para recuperar el último estado de un carrito de compras del usuario

const carrito = JSON.parse(localStorage.getItem('carrito')) || []








