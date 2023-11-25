function cambiarProducto() {
    var selector = document.getElementById("productoSelector");
    var nombre = document.getElementById("productoNombre");
    var descripcion = document.getElementById("productoDescripcion");
    var precio = document.getElementById("productoPrecio");

    // Cambiar la información según la opción seleccionada
    if (selector.value === "negra") {
     
        nombre.textContent = "Morcilla Negra";
        descripcion.textContent = "Morcilla negra clasica, cocida y lista para comer o para cocinar en distintos platos";
        precio.textContent = "Precio: 7,5€/kg";
    } else if (selector.value === "blanca") {
      
        nombre.textContent = "Morcilla Blanca";
        descripcion.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.";
        precio.textContent = "Precio: 7,5€/kg";
    } else if (selector.value === "amarilla") {
       
        nombre.textContent = "Morcilla Amarilla";
        descripcion.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.";
        precio.textContent = "Precio: 8,5€/kg";
    }
    else if (selector.value === "lomo") {
      
        nombre.textContent = "Morcilla Lomo";
        descripcion.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.";
        precio.textContent = "Precio: 7,5€/kg";
    } 
}