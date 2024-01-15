import React, { useRef } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TabMenu } from 'primereact/tabmenu';       


const PrimerReact = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value') });
    };

    const defaultValues = {
        value: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.value && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];


  return (
    <div className="container">
        <h1 className='text-danger justify-content-center '>DEMO PRIME REACT</h1>
        <div className="card flex justify-content-center">
            <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-column gap-2 justify-content-center"
            >
            <Toast ref={toast} />
            <Controller
                name="value"
                control={control}
                rules={{ required: "Name - Surname is required." }}
                render={({ field, fieldState }) => (
                <>
                    <label
                    htmlFor={field.name}
                    className={classNames({ "p-error": errors.value })}
                    ></label>
                    <span className="p-float-label">
                    <InputText
                        id={field.name}
                        value={field.value}
                        className={classNames({ "p-invalid": fieldState.error })}
                        onChange={(e) => field.onChange(e.target.value)}
                    />
                    <label htmlFor={field.name}>Name - Surname</label>
                    </span>
                    {getFormErrorMessage(field.name)}
                </>
                )}
            />
            <Button label="Submit" type="submit" icon="pi pi-check" />
            </form>
        </div>
        <div className="mt-3 card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" />
            <Button label="Secondary" severity="secondary" />
            <Button label="Success" severity="success" />
            <Button label="Info" severity="info" />
            <Button label="Warning" severity="warning" />
            <Button label="Help" severity="help" />
            <Button label="Danger" severity="danger" />
        </div>
        <div className="card">
            <TabMenu model={items} />
        </div>
        <DataTable value={user} tableStyle={{ minWidth: "50rem" }}>
            <Column field="name" header="Name"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="password" header="Password"></Column>
            <Column field="gender" header="Gender"></Column>
            <Column field="age" header="Age"></Column>
            <Column field="address" header="Address"></Column>
        </DataTable>
      
    </div>
  );
}

export default PrimerReact