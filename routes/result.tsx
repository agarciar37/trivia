import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    async POST(req) {
        const formData = await req.formData();
        const userAnswer = formData.get("answer")?.toString().toLowerCase();
        const correctAnswer = formData.get("correctAnswer")?.toString().toLowerCase();

        if (userAnswer === correctAnswer) {
            return Response.redirect(new URL("/acierto", req.url), 303);
        } else {
            return Response.redirect(new URL("/fallo", req.url), 303);
        }
    },
};
