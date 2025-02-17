import axios from 'axios';
import { Wallpaper, PaginatedResponse } from '@/lib/types/wallpaper';

const API_BASE_URL = 'http://localhost:3001/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const wallpaperApi = {
    getWallpapers: async (page: number = 1, limit: number = 20): Promise<PaginatedResponse<Wallpaper>> => {
        const response = await api.get('/wallpapers', {
            params: { page, limit }
        });
        return response.data;
    },

    getRandomWallpapers: async (count: number = 5): Promise<PaginatedResponse<Wallpaper>> => {
        const response = await api.get('/wallpapers/random', {
            params: { count }
        });
        return response.data;
    },

    searchWallpapers: async (query: string, page: number = 1, limit: number = 20): Promise<PaginatedResponse<Wallpaper>> => {
        const response = await api.get('/wallpapers/search', {
            params: { query, page, limit }
        });
        return response.data;
    },

    filterWallpapers: async (filters: {
        tags?: string[];
        colors?: string[];
        min_width?: number;
        max_width?: number;
        min_height?: number;
        max_height?: number;
        format?: string;
        page?: number;
        limit?: number;
    }): Promise<PaginatedResponse<Wallpaper>> => {
        const response = await api.get('/wallpapers/filter', {
            params: filters
        });
        return response.data;
    },

    downloadWallpaper: async (id: string): Promise<void> => {
        const response = await api.get(`/wallpapers/${id}/download`, {
            responseType: 'blob'
        });
        const url = window.URL.createObjectURL(response.data);
        const link = document.createElement('a');
        link.href = url;
        link.download = `wallpaper-${id}.${response.headers['content-type'].split('/')[1]}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    }
};