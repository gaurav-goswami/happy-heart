import axios from "axios";
import { z } from "zod";
import { loginResolver } from "./resolvers";

const LOGIN_ROUTE = "/api/auth/login";
const HEALTH_TIPS_ROUTE =  `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/health-tips`;

const HEALTH_ARTICLES_ROUTE = `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/health-articles`;

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

export const getHealthTip = async (tidId: string) => {
    try {
        const response = await axios.get(HEALTH_TIPS_ROUTE, {
            params: { "tip-id": tidId },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.log("Error fetching health tips:", error);
    }
}

export const getHealthArticles = async () => {
    try {
        const response = await axios.get(HEALTH_ARTICLES_ROUTE, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.log("Error fetching health articles:", error);
    }
}