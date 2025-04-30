import { cookies } from "next/headers";

export const GET = async () => {
    const cookieStore = await cookies();
    try {
        cookieStore.delete("auth");
        return Response.json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("error", error);
        return Response.json({ message: "Internal server error" }, { status: 500 })
    }
}