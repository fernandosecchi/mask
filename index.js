
var idioma = 'es';

if (idioma == 'es') {

    var radix_l = ',';  // delimitador fraccional
    var mapToRadix_l = '.'  // simbolo a procesar como fraccional

} else {

    var radix_l = '.';  // delimitador fraccional
    var mapToRadix_l = ','  // simbolo a procesar como fraccional

}


var element = document.getElementById('selector');
var maskOptions = {
    mask: Number,  // máscara de número
    scale: 2,  // dígitos luego de la coma o punto
    signed: false,  // habilitar o no números negativos
    thousandsSeparator: '',  // separador de miles -- no tocar --
    padFractionalZeros: false,  // -- no tocar --
    normalizeZeros: true,  // -- no tocar --
    radix: radix_l,  // delimitador fraccional
    mapToRadix: [mapToRadix_l],  // simbolo a procesar como fraccional
  
    // Intervalo de máximo o mínimo
    min: -1000000,
    max: 1000000
};
var mask = IMask(element, maskOptions);

var boton = document.getElementById('accion');
boton.addEventListener('click', ()=> {

    let origen = document.getElementById('selector').value;
    let resultado = document.getElementById('resultado');
    valor = origen.replace(/,/g, '.');
    valor = parseFloat(valor, 10).toFixed(2);
    resultado.value = valor;

});

