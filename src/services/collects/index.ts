import { AxiosResponse } from "axios";
import api from "../api";

interface CollectInterface {
    date: string;
    value: number;
    sensorId: number;
}

export const listCollects = async (assetId: number, sensorId: number): Promise<ApiResponse<Sensor>> => {
    try {
        const { data }: AxiosResponse<Asset> = await api.get(`/assets/${assetId}/sensors/${sensorId}`);

        return { error: false, body: data };
    } catch (error) {
        return { error: true, body: error };
    }
}

export const createCollect = async (assetId: number, sensorId: number, dt: CollectInterface): Promise<ApiResponse<any>> => {
    try {
        const { data } = await api.post(`/assets/${assetId}/sensors/${sensorId}`, dt);

        return { error: false, body: data  }
    } catch (error) {
        return { error: true, body: error };
    }
}

export const deleteCollect = async (assetId: number, sensorId: number, date: string): Promise<ApiResponse<any>> => {
    try {
        const { data } = await api.delete(`/assets/${assetId}/sensors/${sensorId}?date=${date}`);

        return { error: false, body: data  }
    } catch (error) {
        return { error: true, body: error };
    }
}