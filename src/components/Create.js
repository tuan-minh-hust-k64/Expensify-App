import React from 'react';
import {connect} from 'react-redux';
import { startAddExpenses } from '../actions/expense.js';
import ExpenseForm from './ExpenseForm.js';
const Create = (props) => (
    <div>
        <ExpenseForm
        onSubmitExpense={(expense) => {
            props.startAddExpenses(expense);
            props.history.push('/');
        }} />
    </div>
);
const mapDispatchToProps = (dispatch) => ({
    startAddExpenses: (expense) => dispatch(startAddExpenses(expense))
});
  
export default connect(undefined,mapDispatchToProps)(Create);