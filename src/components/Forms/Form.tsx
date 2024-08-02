import React, { useEffect, useRef } from "react";
import { FormBody, FormFooter } from "./styles";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Select from "./Select";
import Button from "../Button";
import { Formik, FormikHelpers, FormikProps } from "formik";
import Modal from "../Modal";

type FormProps = {
    title: string;
    fields: Field[];
    handleSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void;
    show: boolean;
    handleClose: () => void;
    validationSchema?: any;
}

const FormComponent: React.FC<FormProps> = (props) => {
    const {title, fields, show, handleClose, handleSubmit, validationSchema} = props;

    const formRef = useRef<FormikProps<any>>(null);

    function getInitialValues() {
        const initialValues: any = {};
    
        fields.map(field => {
            initialValues[field.name] = field.initialValue
        })

        return initialValues;
    }

    useEffect(() => {
        if(!show) {
            formRef.current?.resetForm();
        }
    }, [show]);

    return (
        <Modal
            open={show}
            close={handleClose}
            title={title}
        >
            <FormBody>
                <Formik
                    initialValues={getInitialValues()}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                    innerRef={formRef}
                >
                    {({
                        values,
                        handleChange,
                        errors,
                        touched
                    }) => (
                        <>
                            {
                                fields.map((field, index) => {
                                    switch(field.type) {
                                        case "input":
                                            return <TextInput
                                                        {...field.props}
                                                        key={index.toString()}
                                                        name={field.name}
                                                        onChange={handleChange}
                                                        value={values[field.name]}
                                                        type={field.inputType || "text"}
                                                        error={errors[field.name] && touched[field.name] && errors[field.name]}
                                                    />
                                        case "select":
                                            return <Select
                                                        {...field.props}
                                                        key={index.toString()}
                                                        name={field.name}
                                                        options={field.options || []}
                                                        onChange={handleChange}
                                                        value={values[field.name]}
                                                        error={errors[field.name] && touched[field.name] && errors[field.name]}
                                                    />
                                        case "textarea":
                                            return <TextArea
                                                        {...field.props}
                                                        key={index.toString()}
                                                        name={field.name}
                                                        onChange={handleChange}
                                                        value={values[field.name]}
                                                        error={errors[field.name] && touched[field.name] && errors[field.name]}
                                                    />
                                    }
                                })
                            }
                        </>
                    )}
                </Formik>
            </FormBody>

            <FormFooter>
                <Button
                    type="submit"
                    onClick={() => formRef.current?.handleSubmit()}
                >
                    Cadastrar
                </Button>
            </FormFooter>
        </Modal>
    );
}

export default FormComponent;