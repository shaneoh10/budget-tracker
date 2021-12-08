import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        required="required"
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="cost" className="form-label">Cost</label>
                    <input
                        type="text"
                        id="cost"
                        className="form-control"
                        required="required"
                        value={cost}
                        onChange={(event) => setCost(event.target.value)} />
                </div>
                <div className="mb-3 text-center">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </div>
        </form>
    );
}

export default AddExpenseForm;