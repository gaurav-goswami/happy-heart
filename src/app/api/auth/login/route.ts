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

        const { email } = sanitizedData.data;

        cookieStore.set("auth", Buffer.from(email + Date.now()).toString("base64"),
            {
                httpOnly: true, path: "/", maxAge: 60 * 60 * 24,
            });

        return Response.json({ message: "Logged in successfully", email });
    } catch (error) {
        // For production use, we can store the error in a logging service or send in a log file.
        console.error("Error during login:", error);
        return Response.json({ message: "Internal server error" }, { status: 500 })
    }
};