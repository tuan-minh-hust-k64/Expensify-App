import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpenses} from '../actions/expense.js';

const Edit = (props) => (
    <div>
        <h1>Page Edit</h1>
        <ExpenseForm state={props.expense}
        onSubmitExpense={(expense) => {
            props.dispatch(startEditExpenses({id: props.match.params.id, ...props.uid}, expense));
            props.history.push('/home')
        }}
        />
    </div>
);
const mapStateToProps = (state,props) => {
    return {
        expense: state.expenses.find((expense) => expense.id===props.match.params.id),
        uid: state.auth,
    }
}
export default connect(mapStateToProps)(Edit);