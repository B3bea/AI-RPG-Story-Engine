import axios from 'axios';

const api = axios.create({
    baseURL: "http://127.0.0.1:8000"
});

export const runGame = async (theme: string, notes: string | undefined) => {
    const response = await api.post("/run_game", { theme, notes });
    return response.data;
};