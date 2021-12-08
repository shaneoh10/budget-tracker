import React from 'react';

const AddExpenseForm = () => {
    return (
        <form>
            <div className="row">
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" id="name" className="form-control" required="required" />
                </div>
                <div className="mb-3">
                    <label for="cost" className="form-label">Cost</label>
                    <input type="text" id="cost" className="form-control" required="required" />
                </div>
                <div className="mb-3 text-center">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </div>
        </form>
    );
}

export default AddExpenseForm;