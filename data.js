let juegos = [
    {nombre: "God of war", precio: 32000, categoria: "Guerra"},
    {nombre: "Final Fantasy", precio: 28000, categoria: "Juego de rol"},
    {nombre: "Resident Evil", precio: 35000, categoria: "Terror"},
    {nombre: "Pes 2022", precio: 50000, categoria: "Deporte"},
    {nombre: "Fifa", precio: 45000, categoria: "Deporte"},
    {nombre: "Tales of vesperia", precio: 50000, categoria: "Juego de rol"},
    
]

juegos.push ({ nombre: "Call of duty", precio: 55000, categoria: "Guerra"})


alert ("Bienvenido a fun games.\nEste es nuestro catálogo de ofertas de videojuegos para Playstation 4")
for (const producto of juegos)

       alert(producto.nombre)

    let nombreJuego = prompt("Ingrese el nombre del juego para ver su precio")
    let juegoBuscado = juegos.find(juego => juego.nombre === nombreJuego)


    if (nombreJuego == "God of war" || nombreJuego == "Final Fantasy" || nombreJuego == "Resident Evil" || nombreJuego == "Pes 2022" || nombreJuego == "Fifa" || nombreJuego == "Tales of vesperia" ) {

        alert("El precio del " + juegoBuscado.nombre + " sale ARS " + juegoBuscado.precio)
        
    }
    
    else {
       
        alert("No te interesa ver el precio de ningun juego, o has escrito mal el nombre de tu juego.")
        
    
}



let comprador = Number(prompt("Ingrese 0 si desea comprar todos los juegos"))
let costoTotal = juegos.reduce ((acum, prod) => acum + prod.precio, 0 )

if (comprador !=0) {
    alert ("No te interesa comprarlos")
} else {
    
    
    alert( "El total es ARS " + costoTotal)
}



   juegos.push ({ nombre: "Harry Potter", precio: 25000, categoria: "Juego de rol"})
   juegos.push ({ nombre: "Horizon", precio: 55000, categoria: "Guerra"})
   juegos.push ({ nombre: "NBA 2022", precio: 25000, categoria: "Deporte"})
   
   alert("Si desea puede ver toda nuestra oferta por categoría de juegos.")

   let salida =""
    juegos.forEach(juego => {
       salida= salida + juego.nombre + " pertenece a la categoría " + juego.categoria + "\n"
   })
   
   alert (salida)
 

    let filtro = []
    let mensaje = ""
      let  categoriaJuego = prompt("Seleccione la categoria que mas le gusten para que podamos darle el presupuesto de los juegos que coincidan por el genero: Juego de rol, Deporte, Guerra, Terror")

      if (categoriaJuego == "Deporte" || categoriaJuego == "Guerra" || categoriaJuego == "Terror" || categoriaJuego == "Juego de rol") {

        filtro = juegos.filter (juego => juego.categoria.includes(categoriaJuego) )

        console.log(filtro)

        for (const el of filtro) {
           mensaje= mensaje + el.nombre + " con un valor de ARS " + el.precio +"\n"
            
        }

        alert (mensaje)
    
      }

      else {

                if (categoriaJuego != "Deporte" || categoriaJuego != "Guerra" || categoriaJuego != "Terror" || categoriaJuego != "Juego de rol")
                alert("No escribiste bien la categoria, vuelve a intentar. Muchas gracias")
                
                if (categoriaJuego == "Deporte" || categoriaJuego == "Guerra" || categoriaJuego == "Terror" || categoriaJuego == "Juego de rol") {

                filtro = juegos.filter (juego => juego.categoria.includes(categoriaJuego) )
        
                console.log(filtro)
        
                for (const el of filtro) {
                   mensaje= mensaje + el.nombre + " con un valor de ARS " + el.precio +"\n"
                    
                }

                alert (mensaje)
                
            }
        }   

     

 /*creacion de una funcion en caso que al pcio haya apretado 0 y quiera comprar todos los juegos mencionados al principio.  */

/*

let desc = 0

function descuento (a) {
    if (a >= 65000) {
        desc = a - (a * 0.2) 
        alert ("Como tu compra supero los $ 65000, te hacemos un descuento del 20 %. \n Tu total a pagar es: $" + desc.toFixed(2))
    }
    else {
        alert ("Con tu proxima compra tienes un descuento del 10%")
    }
}

let pagar = parseInt (prompt("Ingrese la opcion de pago: \n 1. Pago en efectivo. \n 2. No pagar"))

if (pagar == 1){

    descuento(costoTotal)
}


alert ("Muchas gracias por su consulta")

*/