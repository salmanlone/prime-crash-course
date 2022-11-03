import React, { useRef, useState } from "react";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

let Greet = () => {
    let [state, setState] = useState({
        message: ""
    });

    let toast = useRef(null);

    let greet = (event) => {
        event.preventDefault();
        toast.current.show({ severity: 'success', summary: 'Success Message', detail: state.message, life: 3000 });
    }

    return (
        <div className="grid">
            <div className="col-4">
                <Card className="m-4 shadow-5 bg-black-alpha-20">
                    <form>
                        <InputText value={state.message} onChange={(e) => setState({ ...state, message: e.target.value })} placeholder={"Message"} className="mb-2" />
                        <Button onClick={greet} label={"Greet"} className="p-button-success" />
                    </form>
                </Card>
                <Toast ref={toast} />
            </div>
        </div>
    );
}

export default Greet;