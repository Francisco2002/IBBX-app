import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import List from "../../components/List";
import Form from "../../components/Forms/Form";
import * as Yup from "yup";
import api from "../../services/api";
import moment from "moment";
import { listSelectAssets } from "../../services/assets";
import { listSelectSensors } from "../../services/sensors";
import { createCollect, deleteCollect, listCollects } from "../../services/collects";
import { toast } from "react-toastify";

const SensorsPage: React.FC = () => {
    const { id, assetId } = useParams();
    const navigate = useNavigate();

    const [sensors, setSensors] = useState([]);
    const [assets, setAssets] = useState([]);
    const [collects, setCollects] = useState([]);
    const [open, setOpen] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [sensor, setSensor] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const [currentAsset, setCurrentAsset] = useState(assetId);
    const [currentSensor, setCurrentSensor] = useState<any>(id);

    const schema = Yup.object().shape({
        sensor_id: Yup.number().required("Campo obrigatório"),
        date: Yup.string().required("Campo obrigatório"),
        value: Yup.number().required("Campo obrigatório")
    });

    const fields: Field[] = [
        {
            type: "select",
            name: "asset_id",
            initialValue: assetId,
            options: assets,
            placeholder: "Ativo"
        },
        {
            type: "select",
            name: "sensor_id",
            initialValue: id,
            options: sensors,
            placeholder: "Sensor"
        },
        {
            type: "input",
            name: "date",
            inputType: "date",
            initialValue: moment().format("YYYY-MM-DD"),
            placeholder: "Data"
        },
        {
            type: "input",
            name: "value",
            inputType: "number",
            initialValue: "",
            placeholder: "Leitura"
        },
    ];

    const shape: Shape = {
        identifier: "id",
        columns: [
            { name: "date", type: "date" },
            { name: "value" }
        ]
    }

    async function fetchAssets() {
        setLoading(true);
        const res = await listSelectAssets();

        if(!res.error) {
            setAssets(res.body);
        }

        setLoading(false);
        /* try {
            const { data } = await api.get(`/assets`);

            setAssets(data.map((as: any) => ({ value: as.id, label: as.name })));
        } catch (error) {
            console.log(error);
        } */
    }

    async function fetchSensors(asset_id: any) {
        const res = await listSelectSensors(asset_id);

        if(!res.error) {
            setCurrentAsset(asset_id);
            setSensors(res.body);
        }
        /* try {
            const { data } = await api.get(`/assets/${asset_id}/sensors`);

            setCurrentAsset(asset_id);
            setSensors(data.sensors.map((as: any) => ({ value: as.id, label: as.name })));
        } catch (error) {
            console.log(error);
        } */
    }

    async function fetchCollects() {
        const res = await listCollects(Number(assetId), Number(id));

        if(res.error) {
            toast(
                "Erro ao listar leituras do sensor",
                { type: "error" }
            );
        } else {
            setSensor(res.body);
            setCollects(res.body.collects);
        }

        /* try {
            const { data } = await api.get(`/assets/${assetId}/sensors/${id}`);

            setSensor(data);
            setCollects(data.collects);
        } catch (error) {
            console.log(error);
        } */
    }

    async function handleCreateCollect(collectData: any) {
        const res = await createCollect(Number(assetId), Number(id), collectData);

        if(res.error) {
            toast(
                "Erro ao criar leitura do sensor",
                { type: "error" }
            );
        } else {
            toast(
                "Leituras do sensor criada com sucesso!",
                { type: "success" }
            );
            setOpen(false);
            setRefresh(!refresh);
        }
    }

    async function confirmedDeleteAsset(sensorId: number, date: string) {
        const res = await deleteCollect(Number(assetId), Number(id), date);

        if(res.error) {
            toast(
                "Error ao excluir leitura sensor!",
                { type: "error" }
            );
        } else {
            toast(
                "Leitura de sensor excluída com sucesso!",
                { type: "success" }
            );
            setRefresh(!refresh);
        }
    }

    function handleDelete(item: Collect) {
        const res = window.confirm(`Deseja excluir a leitura do dia ${item.date}?`);

        if(res) {
            confirmedDeleteAsset(item.sensorId, item.date);
        }
    }

    useEffect(() => {
        fetchAssets();
        fetchSensors(assetId);
        fetchCollects();
    }, [refresh, assetId, id]);

    return (
        <>
            <Form
                title={"Registro de Leitura"}
                fields={fields}
                handleSubmit={handleCreateCollect}
                show={open}
                handleClose={() => setOpen(false)}
                validationSchema={schema}
            />
            <List
                title={`Coletas do Sensor: ${sensor ? sensor.name : ""}`}
                actions={{
                    create: () => setOpen(true),
                    delete: handleDelete
                }}
                loading={loading}
                shape={shape}
                data={collects}
                filters={[
                    {
                        type: "select",
                        filter: (value) => {
                            setCurrentSensor(undefined);
                            fetchSensors(value);
                        },
                        data: assets,
                        defaultValue: assetId
                    },
                    {
                        type: "select",
                        filter: (value) => {
                            setCurrentSensor(value)
                            navigate(`/assets/${currentAsset}/sensors/${value}`);
                        },
                        data: sensors,
                        defaultValue: currentSensor
                    }
                ]}
                withGraphics={{ title: `Leituras do Sensor: ${sensor ? sensor.name : ""}` }}
            />
        </>
    );
}

export default SensorsPage;