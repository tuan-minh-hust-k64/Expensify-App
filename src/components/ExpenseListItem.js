import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { removeExpenses } from '../actions/expense';
const ExpenseListItem = ({id, ...props}) => {
    return (
        <div>
        <Link to={`/edit/${id}`} >
            <h3>{props.description}</h3>
        </Link>
            <ul>
                <li>Amount: {props.amount}</li>
                <li>CreatAt: {moment(props.createAt).format('MM/D/YYYY')}</li>
            </ul>
            <button onClick={() =>{
                props.dispatch(removeExpenses({id}))
            }}>remove</button>
            
        </div>
    )
};
export default ExpenseListItem;