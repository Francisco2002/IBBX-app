import React from "react";
import TextInput from "../Forms/TextInput";
import Select from "../Forms/Select";

type FiltersProps = {
    filters: Filter[];
}

const Filters: React.FC<FiltersProps> = ({ filters }) => {

    return (
        <>
            {
                filters.map(filter => {
                    switch(filter.type) {
                        case "input":
                            return <TextInput defaultValue={filter.defaultValue} onChange={({ target: { value } }) => filter.filter(value)} />
                        case "select":
                            return <Select defaultValue={filter.defaultValue} options={filter.data || []} onChange={({ target: { value } }) => filter.filter(value)} />
                    }
                })
            }
        </>
    );
}

export default Filters;