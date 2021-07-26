
import React from 'react';
import { addExpenses } from '../actions/expense';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'
import { connect } from 'react-redux';
export default class ExpenseForm extends React.Component {
    state = {
        description: this.props.state? this.props.state.description :  '',
        amount: this.props.state? this.props.state.amount.toString() :  '',
        note:this.props.state? this.props.state.note :  '',
        createAt:this.props.state? moment(this.props.state.createAt) : moment(),
        focused: false,
        error: '',
    };
     onDescriptionsChanged = (e) => {
        const description = e.target.value;
        this.setState(() => {return {description}});
    }
     onAmountChanged = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(() => ({amount}));
        }
        
    };
     onNotesChanged = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }
    onForcusFill = (e) => {
        this.setState(() => ({error: ''}));
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error: 'Please enter your field'}));
        }else{
            this.props.onSubmitExpense({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createAt: this.state.createAt.valueOf(),
                note: this.state.note,
            })
            this.setState(() => ({description: '', amount: '', createAt: moment(), note: ''}))
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <input type="text" name="description"
                    placeholder="Description" autoFocus
                    value={this.state.description}
                    onFocus={this.onForcusFill}
                    onChange={this.onDescriptionsChanged} />
                    <input type="number" name="amount" placeholder="Amount"
                    value={this.state.amount}
                    onFocus={this.onForcusFill}
                    onChange={this.onAmountChanged} />
                    <br/>
                    <SingleDatePicker
                    date={this.state.createAt} // momentPropTypes.momentObj or null
                    onDateChange={createAt => {if(createAt){this.setState({ createAt })}}} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    numberOfMonths={1}
                    isOutsideRange={() => {false}}
                    id="your_unique_id"
                    />
                    <br />
                    <textarea placeholder="Note" name="note" 
                    value={this.state.note}
                    onChange={this.onNotesChanged}/>           
                    <button>Add</button> 
                    {this.state.error&&<h3>{this.state.error}</h3>}
                </form>
            </div>
        )
    }
}