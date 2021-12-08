import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = [
        { id: 12312, name: 'Shopping', cost: 50 },
        { id: 12312, name: 'Holiday', cost: 500 },
        { id: 12312, name: 'Car', cost: 200 },
        { id: 12312, name: 'Restaurant', cost: 85 },
        { id: 12312, name: 'Clothes', cost: 150 },
    ];

    return (
        <ul className="list-group">
            {expenses.map((expense) => (
                <ExpenseItem 
                    id={expense.id} 
                    name={expense.name} 
                    cost={expense.cost} />
            ))}
        </ul>
    )
}

export default ExpenseList;