/*----------------pre entrega #2*/


let orden=[];

let menu=[
    "1 Hamburguesa de res",
    "2 Hamburguesa de pollo",
    "3 Hamburguesa vegana",
    "4 Papas tradicionales",
    "5 Papas con queso",
    "6 Papascon carne y queso",
    "7 Jamaica",
    "8 Té",
    "9 Cocacola",
];
// let hamburguesas=[
//     "1 Hamburguesa de res",
//     "2 Hamburguesa de pollo",
//     "3 Hamburguesa vegana",
//  ];
// let papas=[
//     "4 Papas tradicionales",
//     "5 Papas con queso",
//     "6 Papascon carne y queso",
// ];
// let bebidas=[
//     "7 Jamaica",
//     "8 Té",
//     "9 Cocacola",
// ];

// let total=0;
// function sumar(x){
//     total=total+x;
// }

function carrito(){
    push();
}
function push(){
    const count=orden.push(menu[rr-1])
    alert(orden)
}
function sumar(x){
    let total=0;
    total=total+x;
}
let rr=0;
function smore(){
    do{
        rr=parseInt(prompt("ingrese el numero del producto que quieres ordenar \n"+menu))
        carrito()
    }while(rr!=10);
}

// function opciones(){
//     switch(rr){
//         case 1:
//             sumar(20)
//             alert("el total es :" +total)       
//             break;
        // case 2:
        //     sumar(25)
        //     alert("el total es : "+total)
        //     carrito()
        //     break;
        // case 3:
        //     sumar (30)
        //     alert ("el total es: "+total)
        //     carrito()
        //     break;
        // case 3:
        //     sumar (5)
        //     alert ("el total es: "+total)
        //     carrito()
        //     break;
        // case 3:
        //     sumar (8)
        //     alert ("el total es: "+total) 
        //     carrito()
        //     break;
        // case 3:
        //     sumar (10)
        //     alert ("el total es: "+total)
        //     carrito()
        //     break;
        // case 3:
        //     sumar (10)
        //     alert ("el total es: "+total)
        //     carrito()
        //     break;
        // case 3:
        //     sumar (15)
        //     alert ("el total es: "+total)
        //     carrito()
        //     break;
        // case 3:
        //     sumar (20)
        //     alert ("el total es: "+total)
        //     carrito()
        //     break;
//         default:
//             alert("nothing");
//     }
// }

let op;
op=parseInt(prompt("10 termine de ordenar \n 11 quiero ordenar algo mas \n 12 quiero quitar algo de mi orden \n"));
switch(op){
    case 11:
        smore()
    break;
    case 12:
    alert("quitar algo");
    break;
    case 10:
        alert(orden);
    break;
}

alert ("Gracias por su compra");
