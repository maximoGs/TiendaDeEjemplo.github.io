export default {
  async fetch(request, env) {
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }
    return new Response("Paisana Bebidas - Web en línea", {
      headers: { "content-type": "text/html;charset=UTF-8" }
    });
  }
};
