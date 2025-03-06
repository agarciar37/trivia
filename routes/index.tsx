import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req) {
    const baseUrl = new URL(req.url); // Obtén la base de la solicitud
    const triviaUrl = new URL("/trivia", baseUrl); // Construye la URL completa
    return Response.redirect(triviaUrl, 303); // Redirige a la ruta trivia
  },
};

export default function Home() {
  return null; // No se necesita contenido porque se redirige automáticamente.
}
