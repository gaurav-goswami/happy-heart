import { z } from "zod";

// Hardcoding the allowed email and password for demonstration purposes
const ALLOWED_EMAIL = "test@test.com";
const ALLOWED_PASSWORD = "password123";

export const loginResolver = z
    .object({
        email: z
            .string({ message: "Email is required" })
            .email("Invalid email address")
            .transform((value) => value.toLowerCase()),
        password: z.string({ message: "Password is required" }).min(8, "Password must be at least 8 characters long"),
    })
    .refine(
        (data) =>
            data.email === ALLOWED_EMAIL && data.password === ALLOWED_PASSWORD,
        {
            message: "Invalid credentials, please check your email and password.",
            path: ["password"],
        }
    );
