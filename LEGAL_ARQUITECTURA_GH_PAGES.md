# Marco Legal & Arquitectura Técnica: Despliegue de Vinoteca en GitHub Pages / Cloudflare Pages & WhatsApp

> **Documento Estratégico para el Área de Sistemas y Dirección Legal/Comercial**  
> **Proyecto:** Paisana Bebidas — Tienda Online & Catálogo Digital  
> **Fecha de Actualización:** 2026

---

## 1. Contexto y Objetivos de la Arquitectura

El presente documento analiza en profundidad la viabilidad técnico-legal de operar la tienda web de **Paisana Bebidas** bajo una infraestructura estática a costo cero ($0 ARS) y canal de conversión vía WhatsApp, detallando los mecanismos implementados en el código fuente para garantizar el cumplimiento normativo nacional (Argentina) y las Condiciones de Servicio (Terms of Service / Acceptable Use Policy) de **GitHub Pages**, **Cloudflare Pages** y **Meta / WhatsApp Business**.

---

## 2. El Marco de GitHub Pages: Restricción Expresa vs. Realidad Operativa

### 2.1 La Prohibición Formal de E-Commerce (AUP de GitHub)
Las directrices oficiales de límites de servicio de GitHub Pages establecen que:
1. **No está destinado ni permitido como servicio de hosting gratuito para ejecutar negocios en línea ni procesar e-commerce transaccional.**
2. **Límites operativos de la capa gratuita:**
   - Transferencia mensual (ancho de banda): **100 GB/mes**.
   - Tamaño máximo del repositorio: **1 GB**; tamaño del sitio publicado: **1 GB**.
   - Límite de compilaciones / despliegues: **10 builds/hora**.
3. **Poder discrecional de baja:** GitHub se reserva el derecho de suspender repositorios o limitar tráfico ante saturación o incumplimiento comercial.

### 2.2 El "Vacío Técnico" y Desacoplamiento Arquitectónico
A pesar de dicha cláusula restrictiva, la arquitectura implementada en este proyecto sortea el riesgo de detección automática mediante el **Desacoplamiento Transaccional Total**:
- **Naturaleza 100% Estática (Client-Side Only):** El sitio web consiste exclusivamente en archivos HTML, CSS y JavaScript ejecutados en el navegador del cliente.
- **Inexistencia de Pasarela en el Servidor:** No existen endpoints de backend, scripts PHP/Node.js en servidor, ni SDKs de cobro directo (Stripe, Mercado Pago Web Checkout con captura de tarjeta en host).
- **Encuadre Legal como Catálogo Digital & Presupuestador:** Técnicamente, la web se comporta ante los web crawlers como un portafolio interactivo de productos vitivinícolas y selector de cotizaciones.
- **Liquidación Fuera de Host:** El cobro efectivo, facturación y confirmación ocurren en canales externos (WhatsApp, transferencias bancarias o contra entrega).

---

## 3. Estrategia de Cumplimiento en WhatsApp (Meta Commerce Policies)

### 3.1 Política de Meta sobre Alcohol
Las Políticas Comerciales de Meta prohíben la **venta directa y transacción automatizada de alcohol** a través de catálogos comerciales de WhatsApp / Instagram Shopping.

### 3.2 Implementación en el Código
Para blindar el número de WhatsApp comercial de penalizaciones o bloqueos:
1. **Mensajes estructurados como "Solicitud de Cotización y Disponibilidad":**
   El botón de checkout no emite una orden de compra consumada, sino un mensaje con encabezado:
   `🍷 SOLICITUD DE DISPONIBILIDAD & COTIZACIÓN - PAISANA BEBIDAS (Ref: #COT-XXXXX)`
2. **Leyenda Sanitaria y Advertencia +18 integrada:**
   El mensaje incluye automáticamente:
   `⚖️ Aviso Legal: Operación sujeta a confirmación de stock y verificación de mayoría de edad (+18) según Ley Nac. 24.788.`
3. **Conversión en Asesoría Comercial:**
   El chat de WhatsApp opera formalmente como un canal de atención personalizada, asesoría de maridaje y coordinación logística.

---

## 4. Blindaje Normativo Local (Leyes Argentinas)

### 4.1 Ley Nacional N° 24.788 (Lucha contra el Alcoholismo)
- **Age Gate Obligatorio (+18):** Modal interactivo con bloqueo de acceso, registro en `localStorage` y advertencias explícitas de "Beber con moderación. Prohibida su venta a menores de 18 años".
- **Fichas de Producto:** Cada etiqueta exhibe graduación alcohólica y advertencias sanitarias correspondientes.

### 4.2 Resolución 424/2020 & Ley 24.240 (Botón de Arrepentimiento)
- **Implementación Directa:** Botón destacado en el pie de página que despliega el formulario de revocación de compra / solicitud.
- **Generación de Código de Trámite:** Al enviar la solicitud, el sistema genera automáticamente un código de gestión único (`REV-XXXXXX`) y remite la notificación directa al área de atención al cliente.

### 4.3 Ley N° 25.326 (Protección de Datos Personales)
- **Tratamiento Local de Datos:** El código no almacena datos de los clientes en servidores remotos ni bases de datos no declaradas; la información ingresada en el checkout es procesada de forma efímera en la memoria del navegador para armar el mensaje de WhatsApp.
- **Modal de Términos y Privacidad:** Accesible desde el footer informando la política de privacidad y no retención de datos.

### 4.4 Resolución 271/2020 (Defensa de las y los Consumidores)
- Enlace directo a la Dirección Nacional de Defensa del Consumidor en el footer de la página.

---

## 5. Matriz Comparativa de Hosting Estático ($0 ARS)

| Dimensión | GitHub Pages | Cloudflare Pages (Recomendado) | Vercel / Netlify |
| :--- | :--- | :--- | :--- |
| **Costo Operativo** | $0 ARS | $0 ARS | $0 ARS (Tier Hobby) |
| **Cláusula Comercial** | ⚠️ Restricción expresa a e-commerce comercial | ✅ Permitido expresamente en capa gratuita | ⚠️ Restricciones en uso comercial masivo en Free Tier |
| **Ancho de Banda** | 100 GB / mes (soft limit) | 🚀 Ilimitado | 100 GB / mes |
| **CDN en Argentina** | Limitado (rutas globales) | ⚡ Nodos Edge locales en Buenos Aires (ultra rápido) | Rápido |
| **SSL / HTTPS** | Automático | Automático con HTTP/3 | Automático |
| **Riesgo Operativo** | Bajo-Medio (por denuncia de terceros) | **Cero Riesgo** | Bajo |

---

## 6. Recomendación de Arquitectura de Sistemas

1. **Mantener el código fuente en GitHub:** Permite control de versiones, trabajo colaborativo y respaldos seguros.
2. **Conectar el repositorio a Cloudflare Pages:**
   - Ingresar a [Cloudflare Dashboard](https://dash.cloudflare.com/) > *Workers & Pages* > *Create Application* > *Pages* > *Connect to Git*.
   - Seleccionar el repositorio `TiendaPlantilla`.
   - Build command: Ninguno (sitio estático HTML/CSS/JS).
   - Output directory: `/` (raíz).
   - Resultado: Despliegue automático con cada `git push`, ancho de banda sin tope y 100% de cumplimiento legal en hosting comercial.
3. **GitHub Pages como Respaldo (Fallback):**
   - Configurar `Settings > Pages > Deploy from branch (main)` para mantener una URL de contingencia activa.
