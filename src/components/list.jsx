import React, { useEffect, useState } from "react";
import { UserService } from "../services/userService";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

let UserList = () => {
    let [state, setState] = useState({
        loading: false,
        users: [],
        errorMessage: null
    });

    useEffect(() => {
        const response = async () => {
            try {
                setState({ ...state, loading: true });
                let response = await UserService.getAllUsers();
                let result = response.data.results;
                console.log(result);
                setState({
                    ...state,
                    users: result,
                    loading: false
                })
            } catch (error) {

            }
        }
        response();
    }, []);

    let displayNumber = (rowData) => {
        return rowData.login.uuid.substring(0, 5);
    }

    let displayName = (rowData) => {
        return <span>{rowData.name.first} {rowData.name.last}</span>;
    }

    let displayImage = (rowData) => {
        return <img src={rowData.picture.thumbnail} alt='' />;
    }

    return (
        <div className="grid">
            <div className="col">
                <DataTable value={state.users}>
                    <Column sortable header={"S.No."} field="login.uuid" body={displayNumber} />
                    <Column header={"Image"} field={displayImage} />
                    <Column header={"Name"} field={displayName} />
                    <Column header={"Email"} field="email" />
                    <Column header={"Age"} field="dob.age" />
                </DataTable>
            </div>
        </div>
    );
}

export default UserList;