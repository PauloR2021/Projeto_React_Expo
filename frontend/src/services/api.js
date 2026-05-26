import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';

export const api = axios.create({
    baseURL: "http://192.168.2.113:8082"
});

// Injeta o token em toda requisição
api.interceptors.request.use(async (config) => {
    const token = await SecureStore.getItemAsync("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// ✅ Se receber 401 ou 403, limpa o token e redireciona para login
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error?.response?.status === 401 || error?.response?.status === 403) {
            await SecureStore.deleteItemAsync("token");
            router.push("/pages/login"); // sem Alert aqui
        }
        return Promise.reject(error);
    }
);