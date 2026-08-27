# Guía Comercial y Técnica: Despliegue en Cloudflare Pages & Administración del Producto

> **Producto Comercial:** Plataforma Web E-Commerce para Vinotecas, Cervecerías Artesanales & Tiendas de Bebidas  
> **Identidad de Marca:** Paisana Bebidas (Turquesa Artesanal / Mostaza Cálido / Borgoña / Obsidian)  
> **Infraestructura:** Cloudflare Pages (Costo $0 ARS, Ancho de Banda Ilimitado, CDN Nodos en Buenos Aires)

---

## 1. ¿Por qué Cloudflare Pages es la Mejor Opción Comercial?

1. **Uso Comercial 100% Permitido a Costo Cero ($0 ARS):** A diferencia de GitHub Pages, Cloudflare permite explícitamente el uso comercial en su capa gratuita sin restricciones ni riesgos de suspensión.
2. **Velocidad Extrema en Argentina:** Cuenta con nodos Edge en Buenos Aires (EZE), logrando tiempos de respuesta de menos de 20ms en conexiones móviles.
3. **Seguridad y SSL Gratuito:** Certificado SSL/HTTPS automático con soporte para HTTP/3 y mitigación DDoS.
4. **Despliegue Continuo:** Cada cambio subido a GitHub actualiza automáticamente la web del cliente en segundos.

---

## 2. Pasos para Desplegar en Cloudflare Pages (en 3 Minutos)

1. Crear o ingresar a una cuenta gratuita en [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Ir a **Workers & Pages** > **Create application** > pestaña **Pages**.
3. Hacer clic en **Connect to Git** y vincular tu cuenta de GitHub.
4. Seleccionar el repositorio `TiendaPlantilla`.
5. En la pantalla de configuración del proyecto:
   - **Project name:** `paisana-bebidas` (o el nombre del cliente).
   - **Production branch:** `main`.
   - **Framework preset:** `None` (sitio estático Vanilla).
   - **Build command:** Dejar en blanco.
   - **Build output directory:** `/` (raíz).
6. Clic en **Save and Deploy**. En menos de 30 segundos la tienda estará online con URL pública gratuita (ej: `paisana-bebidas.pages.dev`).
7. *(Opcional)* Si el cliente tiene dominio propio (ej: `vinotecapaisana.com.ar`), se agrega en **Custom Domains** con configuración automática de DNS.

---

## 3. ¿Cómo Administrar o Adaptar la Tienda para un Cliente Nuevo?

Todo el catálogo y la configuración del negocio están centralizados en un único archivo: [`data/products.js`](file:///c:/Users/Usuario/Desktop/TiendaPlantilla/data/products.js).

### A. Modificar Datos de la Empresa (`STORE_CONFIG`)
Al final de `data/products.js`, editar el bloque:
```javascript
const STORE_CONFIG = {
  name: "Nombre del Cliente",
  tagline: "Vinos de Autor & Bebidas Selectas",
  whatsappNumber: "5491123456789", // WhatsApp donde llegarán los pedidos
  phoneFormatted: "+54 9 11 2345-6789",
  email: "contacto@cliente.com",
  address: "Av. Principal 1240, Ciudad",
  instagram: "@cliente.bebidas",
  instagramUrl: "https://instagram.com/cliente.bebidas",
  schedule: "Lun a Sáb: 10:00 a 00:00 hs",
  deliveryFee: 1500, // Costo de envío
  freeDeliveryThreshold: 35000, // Envío gratis a partir de este monto
  currency: "$",
  paymentAlias: "CLIENTE.BEBIDAS.MP"
};
```

### B. Agregar o Modificar Productos
En el arreglo `PRODUCTS_DATA` de `data/products.js`, cada producto tiene este formato simple:
```javascript
{
  id: "vin-15",
  name: "Nombre de la Etiqueta",
  category: "vinos", // "vinos", "bebidas", "sin-alcohol", "snacks"
  subcategory: "malbec", // subcategoría o varietal
  price: 18500,
  oldPrice: 21000, // o null si no está en oferta
  volume: "750 ml",
  alcohol: "14.0%",
  origin: "Mendoza, Argentina",
  rating: 4.9,
  badge: "Recomendado", // o null
  image: "https://url-de-la-imagen.jpg",
  description: "Notas de cata y descripción.",
  pairing: "Maridaje sugerido."
}
```

---

## 4. Elementos de Blindaje Legal Implementados

- **Cumplimiento Ley 24.788:** Verificación de edad (+18) en entrada con persistencia en cliente y leyendas sanitarias.
- **Resolución 424/2020:** Botón de Arrepentimiento integrado en el footer con generación de código de trámite formal (`REV-XXXXXX`).
- **Ley 25.326:** Procesamiento de datos en cliente sin persistencia no autorizada en servidores.
- **Políticas de Meta:** Mensajes de WhatsApp estructurados como solicitud de disponibilidad y cotización, protegiendo el número de WhatsApp comercial.
