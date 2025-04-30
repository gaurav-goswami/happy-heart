import { healthArticles } from "@/lib/data";

export const GET = () => {
    try {
        // console.log("API CALLED!");
        const articles = healthArticles.map(article => article);

        if (!articles) {
            return new Response("No articles found");
        };

        return Response.json(healthArticles);
    } catch (error) {
        console.error("Error fetching health articles:", error);
    }
}