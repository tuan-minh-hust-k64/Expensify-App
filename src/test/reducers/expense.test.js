import expensesReducer from "../../reducers/expenses"

test('add new expenses in array empty', () => {
    const action = {
        type: 'ADD_EXPENSES',
        expenses:{
            description: 'water bill',
            amount: 1000,
            note: '',
            createAt: 0,
        }
    }
    const stateArray = expensesReducer(undefined, action);
    expect(stateArray.length).toEqual(1);
})