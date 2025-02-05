import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

export const api = {
    getWallpapers: async () => {
        const response = await axios.get(`${API_BASE_URL}/wallpapers`);
        return response.data;
    }
};