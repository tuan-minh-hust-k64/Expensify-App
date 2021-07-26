import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpenses} from '../actions/expense.js';

const Edit = (props) => (
    <div>
        <h1>Page Edit</h1>
        <ExpenseForm state={props.expense}
        onSubmitExpense={(expense) => {
            props.dispatch(editExpenses({id: props.match.params.id}, expense));
            props.history.push('/')
        }}
        />
    </div>
);
const mapStateToProps = (state,props) => {
    return {
        expense: state.expenses.find((expense) => expense.id===props.match.params.id),
    }
}
export default connect(mapStateToProps)(Edit);