let tiendaSuplementos = [
  {
    nombre: "Whey Protein",
    categoria: "Proteínas",
    precio: 4000,
    stock: 5,
  },
  {
    nombre: "Whey Protein ON",
    categoria: "Proteínas",
    precio: 3500,
    stock: 3,
  },
  {
    nombre: "Creatina Cibeles",
    categoria: "Energía",
    precio: 2000,
    stock: 7,
  },
  {
    nombre: "Creatina",
    categoria: "Energía",
    precio: 1700,
    stock: 4,
  },
  {
    nombre: "BCAA",
    categoria: "Aminoácidos",
    precio: 2000,
    stock: 10,
  },
  {
    nombre: "Multivitamínicos",
    categoria: "Vitaminas",
    precio: 800,
    stock: 12,
  },
  {
    nombre: "Omega 3",
    categoria: "Ácidos Grasos",
    precio: 780,
    stock: 8,
  },
];

let carrito = [];

let mensaje =
  "Bienvenido a Suplementos Power\n1 - Suplementos y precios\n2 - Filtrar por categoría\n3 - Buscar por nombre\n4 - Agregar producto al carrito\n5 - Finalizar compra\n0 - Abandonar compra";

while (true) {
  let opcion = prompt(mensaje);

  if (opcion === "1") {
    // Ver suplementos
    let suplementosMensaje = "Suplementos disponibles:\n\n";

    for (let suplemento of tiendaSuplementos) {
      suplementosMensaje += `Nombre: ${suplemento.nombre}\n`;
      suplementosMensaje += `Precio: $${suplemento.precio}\n`;
    }

    alert(suplementosMensaje);
  } else if (opcion === "2") {
    // Filtrar por categoría
    let categoria = prompt("Ingrese la categoría a filtrar:");

    let suplementosFiltrados = tiendaSuplementos.filter(function (suplemento) {
      return suplemento.categoria.toLowerCase() === categoria.toLowerCase();
    });

    let suplementosFiltradosMensaje = "";

    if (suplementosFiltrados.length > 0) {
      suplementosFiltradosMensaje = "Suplementos filtrados:\n\n";

      for (let suplemento of suplementosFiltrados) {
        suplementosFiltradosMensaje += `Nombre: ${suplemento.nombre}\n`;
        suplementosFiltradosMensaje += `Categoría: ${suplemento.categoria}\n`;
        suplementosFiltradosMensaje += `Precio: ${suplemento.precio}\n`;
        suplementosFiltradosMensaje += `Stock: ${suplemento.stock}\n\n`;
      }
    } else {
      suplementosFiltradosMensaje =
        "No se encontraron suplementos en la categoría especificada.";
    }

    alert(suplementosFiltradosMensaje);
  } else if (opcion === "3") {
    // Buscar por nombre
    let nombre = prompt("Ingrese el nombre del suplemento a buscar:");

    let suplementoEncontrado = tiendaSuplementos.find(function (suplemento) {
      return suplemento.nombre.toLowerCase() === nombre.toLowerCase();
    });

    if (suplementoEncontrado) {
      let mensajeSuplemento = `Suplemento encontrado:\n\n`;
      mensajeSuplemento += `Nombre: ${suplementoEncontrado.nombre}\n`;
      mensajeSuplemento += `Categoría: ${suplementoEncontrado.categoria}\n`;
      mensajeSuplemento += `Precio: $${suplementoEncontrado.precio}\n`;
      mensajeSuplemento += `Stock: ${suplementoEncontrado.stock}\n`;

      alert(mensajeSuplemento);
    } else {
      alert("No se encontró ningún suplemento con el nombre especificado.");
    }
  } else if (opcion === "4") {
    // Agregar producto al carrito
    let nombre = prompt(
      "Ingrese el nombre del suplemento a agregar al carrito:"
    );

    let suplementoEncontrado = tiendaSuplementos.find(function (suplemento) {
      return suplemento.nombre.toLowerCase() === nombre.toLowerCase();
    });

    if (suplementoEncontrado) {
      if (suplementoEncontrado.stock > 0) {
        carrito.push(suplementoEncontrado);
        suplementoEncontrado.stock--;
        alert("Suplemento agregado al carrito.");
      } else {
        alert("El suplemento seleccionado está agotado.");
      }
    } else {
      alert("No se encontró ningún suplemento con el nombre especificado.");
    }
  } else if (opcion === "5") {
    // Finalizar compra
    let totalCarrito = 0;

    for (let suplemento of carrito) {
      totalCarrito += suplemento.precio;
    }

    alert("Compra finalizada. Total del carrito: $" + totalCarrito);
    break;
  } else if (opcion === "0") {
    // Salir
    break;
  } else {
    alert("Opción inválida. Por favor, ingrese una opción válida.");
  }
}
