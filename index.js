/**
 * Cloudflare Worker - Static Assets Handler para Paisana Bebidas
 * Permite servir todos los archivos estáticos (HTML, CSS, JS, imágenes, SVG)
 * directamente desde Cloudflare Edge con soporte para SPA / enrutamiento limpio.
 */
export default {
  async fetch(request, env) {
    // Servir los assets estáticos a través del binding oficial env.ASSETS
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }
    return new Response("Paisana Bebidas - Assets Loading", { status: 200 });
  }
};
