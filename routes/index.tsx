import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req) {
    const baseUrl = new URL(req.url);
    const triviaUrl = new URL("/trivia", baseUrl);
    return Response.redirect(triviaUrl, 303);
  },
};

export default function Home() {
  return null; 
}
