export function formatePrice(price){
    return price.toString().indexOf('.') > 0 ? price : price + '.00'
}