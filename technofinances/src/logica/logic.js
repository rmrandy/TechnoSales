import data from "../DATA/estadoResultadosData.json";

export function ingresosTotales(ventas) {
    data.ingresos.ventas.value=ventas;
    data.ingresos.value=data.ingresos.ventas.value;
    return data.ingresos.value;
}
export function costosTotales(inventario_inicial, compras_mercaderia, inventario_final) {
    data.costoVentas.inventarioInicial=inventario_inicial;
    data.costoVentas.comprasMercaderia=compras_mercaderia;
    data.costoVentas.inventarioFinal=inventario_final;
    data.costoVentas.value=data.costoVentas.inventarioInicial.value-data.costoVentas.inventarioFinal;
    return data.costoVentas.value;
}


