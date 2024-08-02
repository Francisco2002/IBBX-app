import React, { useEffect, useState } from "react";
import List from "../../components/List";
import { useNavigate, useParams, useNavigation } from "react-router";
import Form from "../../components/Forms/Form";
import * as Yup from "yup";
import { listSelectAssets } from "../../services/assets";
import { listSensors, createSensor, deleteSensor } from "../../services/sensors";
import { toast } from "react-toastify";

const AssetsPage: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [sensors, setSensors] = useState([]);
    const [assets, setAssets] = useState<Option[]>([]);

    const [currentAsset, setCurrentAsset] = useState<any>(null);

    const [open, setOpen] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(true);

    const schema = Yup.object().shape({
        name: Yup.string().required("Campo obrigatório"),
        assetId: Yup.number().required("Campo obrigatório")
    });


    const fields: Field[] = [
        {
            type: "input",
            name: "name",
            initialValue: "",
            props: {
                placeholder: "Nome do Sensor"
            }
        },
        {
            type: "select",
            name: "assetId",
            options: assets,
            initialValue: id,
        },
    ];

    const filters: Filter[] = [
        {
            type: "select",
            filter: (value) => {
                navigate(`/assets/${value}`);
                window.location.reload();
            },
            data: assets,
            defaultValue: id
        }
    ];

    const actions: ListActions = {
        click: (item) => navigate(`/assets/${item.assetId}/sensors/${item.id}`),
        create: () => setOpen(true),
        delete: handleDelete,
        back: () => navigate("/")
    }

    const shape: Shape = {
        identifier: { name: "id" },
        columns: [{ name: "name" }]
    }

    async function init() {
        const assetsOptions = await listSelectAssets();
        setAssets(assetsOptions.body);

        if(id) {
            setLoading(true);
            const sensorsData = await listSensors(Number(id));

            if(sensorsData.error) {
                toast(
                    "Erro ao listar sensores!",
                    { type: "error" }
                )
            } else {
                setCurrentAsset(sensorsData.body);
                setSensors(sensorsData.body.sensors);
            }

            setLoading(false);
        }
    }

    async function handleCreateSensor(sensorData: any) {
        const res = await createSensor(Number(id), sensorData);

        if(res.error) {
            toast(
                "Erro ao criar sensor!",
                { type: "error" }
            )
        } else {
            toast(
                "Sensor criado com sucesso!",
                { type: "success" }
            )
            setOpen(false);
            setRefresh(!refresh);
        }
    }

    async function confirmedDeleteAsset(sensorId: number) {
        const res = await deleteSensor(Number(id), sensorId);

        if(res.error) {
            toast(
                "Error ao excluir sensor!",
                { type: "error" }
            );
           } else {
            toast(
                "Sensor excluído com sucesso!",
                { type: "success" }
            );
            setRefresh(!refresh);
           }
    }

    function handleDelete(item: Sensor) {
        const res = window.confirm(`Deseja excluir ${item.name}?`);

        if(res) {
            confirmedDeleteAsset(item.id);
        }
    }

    useEffect(() => {
        init();
    }, [refresh, id]);

    return (
        <>
            <Form
                title={"Criação de Sensor"}
                fields={fields}
                handleSubmit={handleCreateSensor}
                show={open}
                handleClose={() => setOpen(false)}
                validationSchema={schema}
            />
            <List
                title={`Sensores do Ativo: ${currentAsset ? currentAsset.name : ""}`}
                filters={filters}
                loading={loading}
                data={sensors}
                shape={shape}
                actions={actions}
            />
        </>
    );
}

export default AssetsPage;