/*----------------pre entrega #1*/

//agrupé los textos para no concatenar tanto
let hamburguesas=[
    "1 Hamburguesa de res",
    "2 Hamburguesa de pollo",
    "3 Hamburguesa vegana",
 ];
let papas=[
    "4 Papas tradicionales",
    "5 Papas con queso",
    "6 Papascon carne y queso",
];
let bebidas=[
    "7 Jamaica",
    "8 Té",
    "9 Cocacola",
];

let total=0;

//la funcion que va a ir sumando lo que se valla ordenando
function sumar(x){
    total=total+x;
}

let rr=0;

//el ciclo se va a repedir hasta que el usuario ingrese un 10, el 10 significa "ya terminé de ordenar"
for (let i=0; rr!=10; i++){

    //en el mensaje aparece literal "<br>" en lugar de hacer el salto de linea :(
    rr=parseInt(prompt("Ingresa el numero del producto que quieras ordenar <br>"+ hamburguesas+ "<br"+papas+"<br>"+ bebidas+"</br>10 ya terminé de ordenar"));
    
    //un if para cada uno de los posibles ingresos
    if (rr==1){
        sumar(10);
        alert("el total es: "+total);
        
    }
    else if(rr==2){
        sumar(15);
        alert("el total es: "+total);
        
    }
    else if(rr==3){
        sumar(18);
        alert("el total es: "+total);
        
    }
    else if(rr==4){
        sumar(5);
        alert("el total es: "+total);
        
    }
    else if(rr==5){
        sumar(8);
        alert("el total es: "+total);
        
    }
    else if(rr==6){
        sumar(10);
        alert("el total es: "+total);
        
    }
    else if(rr==7){
        sumar(8);
        alert("el total es: "+total);
        
    }
    else if(rr==8){
        sumar(10);
        alert("el total es: "+total);
        
    }
    else if(rr==9){
        sumar(12);
        alert("el total es: "+total);
        
    }



}
alert ("Gracias por su compra");
