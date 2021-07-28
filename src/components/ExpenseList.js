import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import {getVisibleExpenses, getExpensesTotal} from '../selectors/expenses.js';
const ExpenseList = (props) => {
    return (
        <div>
            <h1>List Expenses</h1>
            <h2>View: {props.expenses.length} expense</h2>
            <h3>Expenses total: {getExpensesTotal(props.expenses)}</h3>
            {props.expenses.map((expense) => {
                return (<ExpenseListItem key={expense.id} {...expense} dispatch={props.dispatch} />)
            })}
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filter),
    }
}
export default connect(mapStateToProps)(ExpenseList);