import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filter';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'
class ExpenseListFilter extends React.Component{
    state = {
        calendarFocus: null,
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (focusedInput) => {
        this.setState(() => ({calendarFocus: focusedInput}));
    }
    render() {
        return (
            <div>
                <input type="text" value={this.props.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter({text: e.target.value}));
                }}/>
                <label>Sort by</label>
                <select 
                value={this.props.sortBy}
                onChange={(e) =>{
                    if(e.target.value=='date'){
                        this.props.dispatch(sortByDate());
                    } else if(e.target.value=='amount'){
                        this.props.dispatch(sortByAmount());
                    }
                }}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                startDate={this.props.startDate} // momentPropTypes.momentObj or null,
                endDate={this.props.endDate} // momentPropTypes.momentObj or null,
                onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                focusedInput={this.state.calendarFocus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                numberOfMonths={1}
                showClearDates={true}
                isOutsideRange={()=>{false}}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.filter,
    }
    
}
export default connect(mapStateToProps)(ExpenseListFilter);