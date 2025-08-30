const productos = [
  {
    nombre: "Docena de empanadas de matambre ahumado",
    precio: 20000,
    imagenes: [
      "img/empanada1.jpg",
      "img/empanada2.jpg",
      "img/empanada3.jpg"
    ]
  }
];

let carrito = [];

function mostrarInicio() {
  document.getElementById("contenido").innerHTML = `
    <h2>Bienvenido a Sabrosas</h2>
    <p>Hoy ofrecemos nuestras clásicas empanadas de matambre ahumado, hechas con masa casera y cocidas al horno de barro.</p>
    <img src="img/empanada1.jpg" alt="Empanadas de matambre" class="img-inicio" />
  `;
}

function mostrarCatalogo() {
  let html = "<h2>Catálogo</h2>";
  productos.forEach((prod, i) => {
    html += `
      <div class="card">
        <h3>${prod.nombre}</h3>
        <p>Precio: $${prod.precio}</p>
        ${prod.imagenes.map(img => `<img src="${img}" alt="${prod.nombre}" />`).join('')}
        <button class="agregar" onclick="agregar(${i})">Agregar al carrito</button>
      </div>
    `;
  });
  document.getElementById("contenido").innerHTML = html;
}

function mostrarAcerca() {
  document.getElementById("contenido").innerHTML = `
    <h2>Acerca de nosotros</h2>
    <p>Somos tucumanos apasionados por la cocina tradicional. Nuestras empanadas combinan sabor, historia y técnica artesanal.</p>
    <img src="img/empanada2.jpg" alt="Empanadas artesanales" class="img-inicio" />
  `;
}

function agregar(i) {
  carrito.push(productos[i]);
  alert(`${productos[i].nombre} agregada al carrito`);
}

function verCarrito() {
  let html = "<h2>Tu carrito</h2>";
  let total = 0;
  carrito.forEach((item) => {
    html += `<p>${item.nombre} - $${item.precio}</p>`;
    total += item.precio;
  });
  html += `<h3>Total: $${total}</h3>`;
  html += `<a class="whatsapp" href="https://wa.me/5493814123456?text=${encodeURIComponent(
    carrito.map(p => `${p.nombre} - $${p.precio}`).join('\n') + `\nTotal: $${total}`
  )}" target="_blank">Enviar pedido por WhatsApp</a>`;
  document.getElementById("contenido").innerHTML = html;
}

mostrarInicio();
