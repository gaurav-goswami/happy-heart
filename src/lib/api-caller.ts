import axios from "axios";
import { z } from "zod";
import { loginResolver } from "./resolvers";

const LOGIN_ROUTE = "/api/auth/login";

export const loginUser = async (data: z.infer<typeof loginResolver>) => {
    try {
        const response = await axios.post(
            LOGIN_ROUTE,
            {
                email: data.email,
                password: data.password,
            },
            {
                withCredentials: true,
            }
        );
        return response.data;
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};
