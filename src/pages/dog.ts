import type { APIRoute } from "astro";

const mockedReturn = JSON.stringify({ "status": "success", "message": "https://images.dog.ceo/breeds/frise-bichon/jh-ezio-1.jpg" });

export const get: APIRoute = () => {
    if (Math.random() > 0.2) {
        return {
            body: mockedReturn,
        }
    }
    return {
        body: 'Sorry',
        status: 500,
    }
}
