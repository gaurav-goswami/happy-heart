import { healthTips } from "@/lib/data";

export const GET = async (request: Request) => {
    const searchParams = new URL(request.url).searchParams;
    const tidId = searchParams.get("tip-id") || "0";

    try {
        // This will return all the tips except the current tip user is viewing 
        const filteredTips = healthTips.filter(tip => tip.id !== tidId);

        console.log("Filtered Tips:", filteredTips);

        const newTip = filteredTips[Math.floor(Math.random() * filteredTips.length)];

        if (!newTip) {
            return new Response("No health tip available", { status: 404 });
        }

        return Response.json(newTip);

    } catch (error) {
        console.error("Error fetching health tips:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}