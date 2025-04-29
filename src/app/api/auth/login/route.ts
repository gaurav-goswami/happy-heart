import { loginResolver } from "@/lib/resolvers";
import { cookies } from "next/headers";

export const POST = async (request: Request) => {

    const data = await request.json();
    const cookieStore = await cookies();

    try {
        const sanitizedData = loginResolver.safeParse({
            email: data.email,
            password: data.password,
        });

        if (!sanitizedData.success) {
            return Response.json({ message: sanitizedData.error.message }, { status: 403 })
        };

        cookieStore.set("auth", Buffer.from(sanitizedData.data.email + Date.now()).toString("base64"),
            {
                httpOnly: true, path: "/", maxAge: 60 * 60 * 24,
            });


        return new Response(
            JSON.stringify({ message: "Logged in successfully" }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

    } catch (error) {
        console.log("error", error);
    }
};