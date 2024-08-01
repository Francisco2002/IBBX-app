declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

type ListActions = {
    create: () => void;
    delete: (item: any) => void;
    click?: (item: any) => void;
}

type Option = {
    label: string;
    value: any;
}

type Field = {
    type: "input" | "select" | "textarea";
    inputType?: string
    name: string;
    initialValue?: any;
    options?: Option[];
    placeholder: string;
    className?: string;
    styles?: any;
}

type Filter = {
    type: "input" | "select";
    filter: (value: any) => void;
    data?: Option[];
    defaultValue?: string;
}

type Column = {
    name: string;
    type?: string = "text";
}

type Shape = {
    identifier: string;
    columns: Column[];
}

type ApiResponse<T> = {
    error: boolean;
    body?: T | any;
}

type Asset = {
    id: number;
    name: string;
    sensors?: Sensor[];
}

type Sensor = {
    id: number;
    name: string;
    assetId: string;
    asset?: Asset;
    collects?: Collect[];
}

type Collect = {
    date: string;
    value: number;
    sensorId: number;
}