import { Handlers, PageProps } from "$fresh/server.ts";

interface TriviaData {
    question: string;
    answer: string;
}

export const handler: Handlers<TriviaData> = {
    async GET(_, ctx) {
        const res = await fetch("https://api.api-ninjas.com/v1/trivia", {
            headers: { "X-Api-Key": "dxQJVpgha8v0qvFqxPrTlQ==Ef123OJYYIMgV0N6" },
        });
        const data = await res.json();
        return ctx.render(data[0]); // Asume que la respuesta es un array con un objeto de trivia
    },
};

export default function TriviaPage({ data }: PageProps<TriviaData>) {
    return (
        <div>
            <h1>Trivia</h1>
            <p>{data.question}</p>
            <form action="/result" method="POST">
                <input type="text" name="answer" placeholder="Tu respuesta..." required />
                <input type="hidden" name="correctAnswer" value={data.answer} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
