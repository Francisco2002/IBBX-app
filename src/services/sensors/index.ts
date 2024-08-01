import { AxiosResponse } from "axios";
import api from "../api";

interface SensorInterface {
    name: string;
    assetId: number;
}

export const listSensors = async (assetId: number): Promise<ApiResponse<Asset>> => {
    try {
        const { data }: AxiosResponse<Asset> = await api.get(`/assets/${assetId}/sensors`);

        return { error: false, body: data };
    } catch (error) {
        return { error: true, body: error };
    }
}

export const listSelectSensors = async (assetId: number): Promise<ApiResponse<Option>> => {
    const res = await listSensors(assetId);

    if(res.error) return res;

    res.body = res.body.sensors.map((sensor: Sensor): Option => ({ label: sensor.name, value: sensor.id }));


    return res;
}

export const createSensor = async (assetId: number, dt: SensorInterface): Promise<ApiResponse<any>> => {
    try {
        const { data } = await api.post(`/assets/${assetId}/sensors`, dt);

        return { error: false, body: data  }
    } catch (error) {
        return { error: true, body: error };
    }
}

export const deleteSensor = async (assetId: number, sensorId: number): Promise<ApiResponse<any>> => {
    try {
        const { data } = await api.delete(`/assets/${assetId}/sensors/${sensorId}`);

        return { error: false, body: data  }
    } catch (error) {
        return { error: true, body: error };
    }
}