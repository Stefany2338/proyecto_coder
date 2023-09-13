/*----------------pre entrega #3*/

//llamando
let agg1=document.getElementById("btnAgg1")
let agg2=document.getElementById("btnAgg2")
let agg3=document.getElementById("btnAgg3")
let agg4=document.getElementById("btnAgg4")
let btnEliminar=document.getElementById("eliminar")
let btnPagar=document.getElementById("pagar")

//la clase para los productos
class menu{
    constructor(nombre, precio, existencia){
        this.nombre=nombre;
        this.precio=precio;
        this.existencia=existencia;
    }
}

//los productos
const op1={
    nombre: "hamburguesa1",
    precio: 10,
    existencia: 3
}
const op2={
    nombre: "hamburguesa2",
    precio: 15,
    existencia: 4
}
const op3={
    nombre: "hamburguesa3",
    precio: 20,
    existencia: 5
}
const op4={
    nombre: "hamburguesa4",
    precio: 25,
    existencia: 6
}

//el array donde se van a pushear los productos
let orden=[];

//variables para hacer cuentas
let total=0;
let op=0

//----------------------------------------------------------------------------------sumar con parametros
// function agregar(total, precio, p){
//     op=precio
//     total=total+op
//     console.log(total)

//     /*
//     count=orden.push(p)
//     console.log(orden)
//     console.log("producto: "+op3.nombre+" precio: "+op3.precio+" total: "+total)
//     */

// }

// agg1.addEventListener("click", agregar(total, op1.precio /*,op1*/))
// agg2.addEventListener("click", agregar(total, op2.precio))
// agg3.addEventListener("click", agregar(total, op3.precio))
// agg4.addEventListener("click", agregar(total, op4.precio))


//funcion para hacer la suma 
function sumar(par){
    total=total+par
}



//funciones(por cada producto) para agregar los productos al array de orden
function n1(){
    if (op1.existencia>0){
        console.log(op1.existencia)
        count=orden.push(op1)
        console.log(orden)
        op1.existencia=op1.existencia-1
        console.log(op1.existencia)
        sumar(op1.precio)
        console.log(total)
        console.log("producto: "+op1.nombre+" precio: "+op1.precio+" total: "+total)
    }else{
        alert("ya no hay")
    }
}
function n2(){
    if (op2.existencia>0){
        console.log(op2.existencia)
        op2.existencia=op2.existencia-1
        console.log(op2.existencia)
        count=orden.push(op2)
        sumar(op2.precio)
        console.log(orden)
        console.log(total)
        console.log("producto: "+op2.nombre+" precio: "+op2.precio+" total: "+total)
    }else{
        alert("ya no hay")
    }
}
function n3(){
    if (op3.existencia>0){
        console.log(op3.existencia)
        op3.existencia=op3.existencia-1
        console.log(op3.existencia)
        count=orden.push(op3)
        sumar(op3.precio)
        console.log(orden)
        console.log(total)
        console.log("producto: "+op3.nombre+" precio: "+op3.precio+" total: "+total)
    }else{
        alert("ya no hay")
    }
}
function n4(){
    if (op4.existencia>0){
        console.log(op4.existencia)
        op4.existencia=op4.existencia-1
        console.log(op4.existencia)
        count=orden.push(op4)
        sumar(op4.precio)
        console.log(orden)
        console.log(total)
        console.log("producto: "+op4.nombre+" precio: "+op4.precio+" total: "+total)
    }else{
        alert("ya no hay")
    }
}

//funcion para eliminar productos
function eliminarProducto(){
    rest=orden.splice(op1)
}

//botones
agg1.addEventListener("click", n1)
agg2.addEventListener("click", n2)
agg3.addEventListener("click", n3)
agg4.addEventListener("click", n4)
btnEliminar.addEventListener("click", eliminarProducto)


//storage
const enJSON=JSON.stringify(orden)
localStorage.setItem("orden",enJSON)

if (enJSON){
    const orden=JSON.parse(enJSON)
}else{
    const enJSON=JSON.stringify(orden)
    localStorage.setItem("orden",enJSON)
}