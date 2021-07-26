import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import expenseSelector from '../selectors/expenses.js';
const ExpenseList = (props) => {
    return (
        <div>
            <h1>List Expenses</h1>
            {props.expenses.map((expense) => {
                return (<ExpenseListItem key={expense.id} {...expense} dispatch={props.dispatch} />)
            })}
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        expenses: expenseSelector(state.expenses, state.filter),
    }
}
export default connect(mapStateToProps)(ExpenseList);