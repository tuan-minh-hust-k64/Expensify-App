import React from 'react';
import {connect} from 'react-redux';
import { startAddExpenses } from '../actions/expense.js';
import ExpenseForm from './ExpenseForm.js';
const Create = (props) => (
    <div>
        <ExpenseForm
        onSubmitExpense={(expense) => {
            props.startAddExpenses(expense, props.uid.uid);
            props.history.push('/home');
        }} />
    </div>
);
const mapDispatchToProps = (dispatch) => ({
    startAddExpenses: (expense, uid) => dispatch(startAddExpenses(expense, uid)),
});
const mapStateToProps = (state) => ({
    uid: state.auth,
})
export default connect(mapStateToProps, mapDispatchToProps)(Create);