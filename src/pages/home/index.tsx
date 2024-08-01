import React, { useEffect, useState } from "react";
import List from "../../components/List";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Forms/Form";
import * as Yup from "yup";
import api from "../../services/api";
import { createAsset, deleteAsset, listAssets } from "../../services/assets";
import { toast } from "react-toastify";

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const schema = Yup.object().shape({
        name: Yup.string().required("Campo obrigatório")
    });

    const [assets, setAssets] = useState([]);
    const [open, setOpen] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(true);

    const fields: Field[] = [
        {
            type: "input",
            name: "name",
            initialValue: "",
            placeholder: "Nome do Ativo"
        }
    ];

    const shape: Shape = {
        identifier: "id",
        columns: [{ name: "name" }]
    }

    async function fetchAssets() {
        setLoading(true);
        const res = await listAssets();

        if(res.error) {
            toast(
                "Error ao listar ativos!",
                { type: "error" }
            );
        } else {
            setAssets(res.body);
        }
        setLoading(false);
    }

    async function handleCreateAsset(assetData: any) {
        const res = await createAsset(assetData);

        if(res.error) {
            toast(
                "Error ao criar ativo!",
                { type: "error" }
            );
           } else {
            setOpen(false);
            toast(
                "Ativo criado com sucesso!",
                { type: "success" }
            );
            setRefresh(!refresh);
           }
    }

    async function confirmedDeleteAsset(assetId: number) {
        const res = await deleteAsset(assetId);

        if(res.error) {
            toast(
                "Error ao excluir ativo!",
                { type: "error" }
            );
           } else {
            toast(
                "Ativo excluído com sucesso!",
                { type: "success" }
            );
            setRefresh(!refresh);
           }
    }

    function handleDelete(item: Asset) {
        const res = window.confirm(`Deseja excluir ${item.name}?`);

        if(res) {
            confirmedDeleteAsset(item.id);
        }
    }

    useEffect(() => {
        fetchAssets();
    }, [refresh]);

    return (
        <>
            <Form
                title={"Criação de Ativo"}
                fields={fields}
                handleSubmit={handleCreateAsset}
                show={open}
                handleClose={() => setOpen(false)}
                validationSchema={schema}
            />
            <List
                title={"Listagem de Ativos"}
                shape={shape}
                loading={loading}
                data={assets}
                actions={{
                    click: (item) => navigate(`/assets/${item.id}`),
                    create: () => setOpen(true),
                    delete: handleDelete
                }}
            />
        </>
    );
}

export default HomePage;