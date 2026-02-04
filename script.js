$(document).ready(function () { // Espera a que todo el documento HTML esté completamente cargado antes de ejecutar el código jQuery

  $(".btn-favorito").on("click", function () { // Detecta el evento click en TODOS los botones con la clase .btn-favorito

    const card = $(this).closest(".card"); // Obtiene la card (tarjeta) más cercana al botón que fue clickeado permite trabajar solo con el producto seleccionado
    const nombreProducto = card.find(".card-title").text(); // Obtiene el texto del título del producto (nombre)
    const mensaje = $("#mensaje-favorito"); // Selecciona el párrafo donde se mostrará el mensaje dinámico

     // Verifica si el producto ya es favorito
    if (card.hasClass("favorito")) {
      card.removeClass("favorito"); // Si ya es favorito, se elimina la clase "favorito"
      $(this).removeClass("btn-warning").addClass("btn-outline-warning"); // Cambia el estilo del botón a su estado original
      $(this).text("❤ Favorito"); // Cambia el texto del botón

      mensaje
        .text(`❌ "${nombreProducto}" eliminado de favoritos`) // Muestra mensaje dinámico indicando que se eliminó de favoritos
        .removeClass("text-success")
        .addClass("text-danger");

    } else {
      card.addClass("favorito"); // Si NO es favorito, se agrega la clase "favorito" a la card
      $(this).removeClass("btn-outline-warning").addClass("btn-warning"); // Cambia el estilo del botón para indicar que está seleccionado
      $(this).text("⭐ En favoritos"); // Cambia el texto del botón

      mensaje
        .text(`⭐ "${nombreProducto}" añadido a favoritos`)  // Muestra mensaje dinámico indicando que se agregó a favoritos
        .removeClass("text-danger")
        .addClass("text-success");
    }
  });

});
