import axios from 'axios';
import { Wallpaper } from '@/lib/types/wallpaper';

const API_BASE_URL = 'http://localhost:3001/api';

interface PaginatedResponse<T> {
    data: T[];
    pagination: {
        current_page: number;
        total_pages: number;
        total_items: number;
        items_per_page: number;
    };
    timestamp: string;
    requested_by: string;
}

export const api = {
    getWallpapers: async (page: number = 1, limit: number = 20): Promise<PaginatedResponse<Wallpaper>> => {
        const response = await axios.get(`${API_BASE_URL}/wallpapers`, {
            params: { page, limit }
        });
        return response.data;
    },

    getRandomWallpapers: async (count: number = 5): Promise<PaginatedResponse<Wallpaper>> => {
        const response = await axios.get(`${API_BASE_URL}/wallpapers/random`, {
            params: { count }
        });
        return response.data;
    },

    searchWallpapers: async (query: string): Promise<PaginatedResponse<Wallpaper>> => {
        const response = await axios.get(`${API_BASE_URL}/wallpapers/search`, {
            params: { query }
        });
        return response.data;
    },

    filterWallpapers: async (filters: Record<string, any>): Promise<PaginatedResponse<Wallpaper>> => {
        const response = await axios.get(`${API_BASE_URL}/wallpapers/filter`, {
            params: filters
        });
        return response.data;
    }
};