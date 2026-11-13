function calcularTotal(precio, descuento) {
  if (precio < 0) {
    throw new Error("El precio no puede ser negativo");
  }
  return precio - descuento;
}

function calcularPrecioFinal(precio,tipoCliente){
  let descuento;
  if (tipoCliente == "estudiante"){
    descuento = 0.15 * precio;

  }
  return calcularTotal(precio,descuento);
  
}

module.exports = { calcularTotal , calcularPrecioFinal};
