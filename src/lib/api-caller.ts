/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { z } from "zod";
import { loginResolver } from "./resolvers";
import { useUserStore } from "./store";
import { toast } from "sonner";
import { unstable_cache } from "next/cache";

const LOGIN_ROUTE = "/api/auth/login";
const LOGOUT_ROUTE = "/api/auth/logout";
const HEALTH_TIPS_ROUTE = `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/health-tips`;
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
    } catch (error: any) {
        toast.error(error.response?.data?.message || "Login failed. Please try again.");
    }
};

export const logoutUser = async () => {
    try {
        const response = await axios.get(LOGOUT_ROUTE, {
            withCredentials: true,
        });
        useUserStore.getState().clearUser();
        return response.data;
    } catch (error: any) {
        toast.error(error.response?.data?.message || "Login failed. Please try again.");
    }
}

export const getHealthTip = async (tidId: string) => {
    try {
        const response = await axios.get(HEALTH_TIPS_ROUTE, {
            params: { "tip-id": tidId },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getCachedHealthArticles = unstable_cache(async () => {
    try {
        const response = await axios.get(HEALTH_ARTICLES_ROUTE, {
            withCredentials: true,
        });
        return response.data ?? [];
    } catch (error) {
        console.log("Error while getting cached health articles", error);
        return [];
    }
}, ["health-articles"]);