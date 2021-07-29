const expensifyStateDefaults = [];
const expensesReducer = (state = expensifyStateDefaults, action) => {
    switch (action.type) {
        case 'ADD_EXPENSES':
            return [
                ...state,
                action.expenses
            ];
        case 'REMOVE_EXPENSES':
            return state.filter((expenses) => expenses.id!==action.expenses.id);
        case 'EDIT_EXPENSES':
            return state.map((expenses) => {
                if(expenses.id === action.id) {
                    return {
                        ...expenses,
                        ...action.update,
                    }
                } else {
                    return expenses;
                }
            })
        case 'SET_EXPENSES':
            return [
                ...state,
                ...action.expenses,
            ];
        case 'RESET_EXPENSES':
            return [];
        default:
            return state;
    }
};
export default expensesReducer;