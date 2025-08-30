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
    <p>Empanadas de Matambre Ahumado. ¡Sabores que cuentan historias!</p>
    <img src="img/empanada1.jpg" alt="Empanadas de Matambre" class="img-inicio" />
    <p style="margin-top: 15px;">Pedidos por docena · $20.000 · </p>
  `;
}

function mostrarCatalogo() {
  let html = "<h2>Catálogo</h2>";
  productos.forEach((prod) => {
    const mensaje = `Hola Jorge, quiero pedir: ${prod.nombre} por $${prod.precio}`;
    html += `
      <div class="card">
        <h3>${prod.nombre}</h3>
        <p>Precio: $${prod.precio}</p>
        ${prod.imagenes.map(img => `<img src="${img}" alt="${prod.nombre}" />`).join('')}
        <a class="whatsapp" href="https://wa.me/5492944310757?text=${encodeURIComponent(mensaje)}" target="_blank">
          Pedir por WhatsApp
        </a>
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

  const mensaje = document.getElementById("mensaje-carrito");
  mensaje.innerText = `${productos[i].nombre} agregada al carrito`;
  mensaje.style.display = "block";

  setTimeout(() => {
    mensaje.style.display = "none";
  }, 2500);
  document.getElementById("contador").innerText = carrito.length;

}


function verCarrito() {
  let html = "<h2>Tu carrito</h2>";
  let total = 0;
  carrito.forEach((item) => {
    html += `<p>${item.nombre} - $${item.precio}</p>`;
    total += item.precio;
  });
  html += `<h3>Total: $${total}</h3>`;
  html += `<a class="whatsapp" href="https://wa.me/5492944310757?text=${encodeURIComponent(
    carrito.map(p => `${p.nombre} - $${p.precio}`).join('\n') + `\nTotal: $${total}`
  )}" target="_blank">Enviar pedido por WhatsApp</a>`;
  document.getElementById("contenido").innerHTML = html;
}


function verContacto() {
  document.getElementById("contenido").innerHTML = `
    <h2>Contacto</h2>
    <p>📍 Estamos en Bariloche, Río Negro</p>
    <p>📞 Teléfono: <a href="tel:+5492944310757">2944 310757</a></p>
    <p>📱 WhatsApp: <a href="https://wa.me/5492944310757" target="_blank">Enviar mensaje</a></p>
    <p>📧 Email: <a href="mailto:jorgedanielrojas20@gmail.com">jorgedanielrojas20@gmail.com</a></p>
    <p>💬 Podés escribirnos directamente para consultas, pedidos o eventos especiales. Respondemos rápido y con gusto.</p>
  `;
}

mostrarInicio();
