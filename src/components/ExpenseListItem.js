import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { startRemoveExpenses } from '../actions/expense';
import { connect } from 'react-redux';
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
                props.dispatch(startRemoveExpenses({id}, props.uid))
            }}>remove</button>
            
        </div>
    )
};
const mapStateToProps = (state) => ({
    uid: state.auth.uid
})
export default connect(mapStateToProps, undefined)(ExpenseListItem);