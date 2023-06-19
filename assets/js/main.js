const precio = 40
message = 'El precio es: ' + precio
document.querySelector('#precio').innerHTML = message
//
const onCompra = (frmCompra) => {
    let cantidad = frmCompra.cantidad.value
    let color = frmCompra.color.value
    let total = cantidad * precio
    console.log('cantidad', cantidad, 'color', color, 'total', total);
    if(cantidad=='' || color==''){
        alert('Debe ingresar una cantidad y un color')
        return false
    }
    if(color=='rojo'){
        message='rojo'
        document.querySelector('#coluor').innerHTML = message
        document.querySelector('#coluor').style.backgroundColor = 'red'
    }
    message=`El precio es: ${precio} la cantidad es: ${cantidad} total es: ${total}`
    document.querySelector('#res').innerHTML = message
    return false
}
