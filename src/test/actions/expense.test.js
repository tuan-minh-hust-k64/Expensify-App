import { addExpenses, removeExpenses, editExpenses } from '../../actions/expense';
test('removeExpense successfully', () => {
    const actionsRemove = removeExpenses({id: 'asdf'});
    expect(actionsRemove).toEqual({
        type: 'REMOVE_EXPENSES',
        expenses: {
            id: 'asdf',
        }
    })
})
test('add obj empty', () => {
    const actionsAdd = addExpenses({});
    expect(actionsAdd).toEqual({
        type: 'ADD_EXPENSES',
        expenses: {
            description : '',
            note : '',
            amount : '',
            createAt : 0,
            id: expect.any(String),
        }
    })
})