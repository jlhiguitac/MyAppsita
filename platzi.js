document.addEventListener("keydown", movimientoTeclado);
var vp = document.getElementById('villaplatzi');
var papel = vp.getContext("2d");
var x, y, cantidad;
var teclas = { //JASON Javascript Object Notation
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
var xcerdo = 420;
var ycerdo = 420;

var fondo = {//objeto literal
  url: "tile.png",
  cargaOK: false
};
var vaca = {//objeto literal
  url: "vaca.png",
  cargaOK: false,
  sobreEscribir: false,
  xVacas: [],
  yVacas:[]
};
var pollo = {//objeto literal
  url: "pollo.png",
  cargaOK: false,
  sobreEscribir:false,
  xPollos:[],
  yPollos:[]
};
var cerdo = {//objeto literal
  url: "cerdo.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}
function cargarVaca()
{
    vaca.cargaOK = true;
    dibujar();
}
function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar();
}
function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar();
}
function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);

  }
  if(vaca.cargaOK)
  {
    if(vaca.sobreEscribir)
    {
      for (var i = 0; i < vaca.xVacas.length; i++) {
        papel.drawImage(vaca.imagen, vaca.xVacas[i], vaca.yVacas[i]);
      }
    }
    else{
      cantidad = aleatorio (5, 10);
      for (var i = 0; i < cantidad; i++)
      {
        vaca.xVacas[i] = (aleatorio(0, 6))*70;
        vaca.yVacas[i] = (aleatorio(0, 6))*70;
        papel.drawImage(vaca.imagen, vaca.xVacas[i], vaca.yVacas[i]);
      }
      vaca.sobreEscribir = true;
    }
  }
  if(pollo.cargaOK)
  {
    if (pollo.sobreEscribir) {
      for (var i = 0; i < pollo.xPollos.length; i++)
      {
        papel.drawImage(pollo.imagen, pollo.xPollos[i], pollo.yPollos[i]);
      }
    }else
    {
      cantidad = aleatorio (3, 15);
      for (var i=0; i<cantidad; i++)
      {
        pollo.xPollos[i] = (aleatorio(0, 6))*70;
        pollo.yPollos[i] = (aleatorio(0, 6))*70;
        papel.drawImage(pollo.imagen, pollo.xPollos[i], pollo.yPollos[i]);
      }
      pollo.sobreEscribir = true;
    }
  }
  if(cerdo.cargaOK)
  {
    papel.drawImage(cerdo.imagen, xcerdo, ycerdo);
  }
}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
function movimientoTeclado(evento)
{
  var movimiento = 2;
  switch (evento.keyCode) {
    case teclas.UP:
      ycerdo = ycerdo - movimiento;
      break;
    case teclas.DOWN:
    ycerdo = ycerdo + movimiento;
      break;
    case teclas.LEFT:
    xcerdo = xcerdo - movimiento;
      break;
    case teclas.RIGHT:
    xcerdo = xcerdo + movimiento;
      break;
  }
  dibujar();
}
