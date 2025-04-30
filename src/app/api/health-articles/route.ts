import { healthArticles } from "@/lib/data";

export const GET = () => {
    try {
        // console.log("API CALLED!");
        const articles = healthArticles.map(article => article);
        if (!articles) {
            return Response.json({ message: "No health articles available", healthArticles: [] }, { status: 404 });
        }
        return Response.json(healthArticles);
    } catch (error) {
        console.error("Error fetching health articles:", error);
        return Response.json({ message: "Internal server error" }, { status: 500 });
    }
}