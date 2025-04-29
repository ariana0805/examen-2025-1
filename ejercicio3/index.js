let verificacion = function () {
    let texto1 = document.getElementById("texto1")
    let texto2 = document.getElementById("texto2")
    let selector=document.getElementById("carrera")
    let otro=document.getElementById("vacio")
    if(texto1.value=="" || texto2.value=="" || selector.value=="Selecciona una opción"){
        console.error("Error, debe llenar todos los campos")
        otro.className="fondorosa"
        otro.textContent="Error, debe llenar todos los campos"
        return
    }
    console.log("Se guardo con exito")
    otro.className="fondomorado"
    otro.textContent="Se guardó con exito"
}
let main = function () {
    document.getElementById("boton").addEventListener("click", verificar)
}


main()

