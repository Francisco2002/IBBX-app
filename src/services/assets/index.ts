import { AxiosResponse } from "axios";
import api from "../api";

interface AssetInterface {
    name: string;
}

export const listAssets = async (): Promise<ApiResponse<Asset[]>> => {
    try {
        const { data }: AxiosResponse<Asset[]> = await api.get("/assets");

        return { error: false, body: data };
    } catch (error) {
        return { error: true, body: error };
    }
}

export const listSelectAssets = async (): Promise<ApiResponse<Option>> => {
    const res = await listAssets();

    if(res.error) return res;

    res.body = res.body.map((asset: Asset): Option => ({ label: asset.name, value: asset.id }));


    return res;
}

export const createAsset = async (dt: AssetInterface): Promise<ApiResponse<any>> => {
    try {
        const { data } = await api.post("/assets", dt);

        return { error: false, body: data  }
    } catch (error) {
        return { error: true, body: error };
    }
}

export const deleteAsset = async (assetId: number): Promise<ApiResponse<any>> => {
    try {
        const { data } = await api.delete(`/assets/${assetId}`);

        return { error: false, body: data  }
    } catch (error) {
        return { error: true, body: error };
    }
}