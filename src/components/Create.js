import React from 'react';
import {connect} from 'react-redux';
import { addExpenses } from '../actions/expense.js';
import ExpenseForm from './ExpenseForm.js';
const Create = (props) => (
    <div>
        <ExpenseForm
        onSubmitExpense={(expense) => {
            props.dispatch(addExpenses(expense));
            props.history.push('/');
        }} />
    </div>
);
export default connect()(Create);