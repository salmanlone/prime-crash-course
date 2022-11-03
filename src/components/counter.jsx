import React, { useState } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

let Counter = () => {

    let [state, setState] = useState({ count: 0 });

    let increment = () => {
        setState({
            ...state,
            count: state.count + 1
        })
    }

    let decrement = () => {
        setState({
            ...state,
            count: state.count - 1 > 0 ? state.count - 1 : 0
        })
    }

    return (
        <div className="grid">
            <div className="col-4">
                <Card className="m-3 shadow-5 bg-black-alpha-20">
                    <h3 className="text-4xl p-0 mb-2">{state.count}</h3>
                    <Button label={"Increment"} className="p-button-success mr-2" onClick={increment} />
                    <Button label={"Decrement"} className="p-button-warning" onClick={decrement} />
                </Card>
            </div>
        </div>
    );
}

export default Counter;