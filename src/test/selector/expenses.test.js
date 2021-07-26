import moment from "moment";
import getVisibleExpenses from "../../selectors/expenses";

const expenses = [{
    id:'1',
    description: 'Gas bill',
    amount:1000,
    note: '',
    createAt: 0,
},{
    id:'4',
    description: 'Rent bill',
    amount:4000,
    note: '',
    createAt: 1000,
},{
    id:'2',
    description: 'Water bill',
    amount:2000,
    note: '',
    createAt: 2000,
},{
    id:'3',
    description: 'Electric bill',
    amount:3000,
    note: '',
    createAt: 3000,
}];
test('filter by text',() => {
    const filte = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
    }
    const expensesList = getVisibleExpenses(expenses,filte);
    expect(expensesList).toEqual([expenses[3], expenses[2], expenses[1]])
})