import { createStore, combineReducers  } from "redux";
import { v4 as uuidv4 } from 'uuid';
const demoState = {
    expenses: [
        {
            id: 'wdadsadsada',
            description: 'January Rent',
            note: 'this was the final payment for that address',
            amount: 3322,
            createAt: 0,
        }
    ],
    filter: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
    }
}
const expensifyStateDefaults = [];
const expensifyReducer = (state = expensifyStateDefaults, action) => {
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
        default:
            return state;
    }
};
const filterStateDefaults = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
};
const filterReducer = (state = filterStateDefaults, action) => {
    switch(action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text,
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount',
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date',
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date,
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date,
            }
        default: 
            return state;
    }
}

const addExpenses = ({
    description = '',
    note = '',
    amount = 0,
    createAt = 0,
}) => {
    return {
        type: 'ADD_EXPENSES',
        expenses: {
            id: uuidv4(),
            description,
            note,
            amount,
            createAt,
        }
    }
};
const removeExpenses = ({
    id
} = {}) => {
    return {
        type: 'REMOVE_EXPENSES',
        expenses: {
            id
        }
    }
}
const editExpenses = ({
    id
} = {}, update) => {
    return {
        type: 'EDIT_EXPENSES',
        id,
        update,
    }
}
const setTextFilter = ({text = ''} = {}) => {
    return {
        type: 'SET_TEXT',
        text,
    }
};
const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT',
    }
};
const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE',
    }
};
const setStartDate = (date = undefined) => {
    return {
        type: 'SET_START_DATE',
        date,
    }
}
const setEndDate = (date = undefined) => {
    return {
        type: 'SET_END_DATE',
        date,
    }
}
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        return textMatch&&startDateMatch&&endDateMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1:-1;
        }
        if(sortBy === 'amount'){
            return a.amount < b.amount ? 1:-1;
        }
    })
}
const store = createStore(
    combineReducers (
        {
            expenses: expensifyReducer,
            filter: filterReducer,
        }
    )
);

store.dispatch(setStartDate(125));
//store.dispatch(setTextFilter({text: 'rent'}));
store.dispatch(setEndDate(1250));
//store.dispatch(sortByDate());
store.dispatch(sortByAmount());
const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filter));
});

const expenses1 = store.dispatch(addExpenses({description: 'January ', amount: 500, createAt: 200}));
const expenses2 = store.dispatch(addExpenses({description: 'May Rent', amount: 400, createAt: 300}));
// store.dispatch(removeExpenses({id: expenses1.expenses.id,}));
// store.dispatch(editExpenses({id: expenses2.expenses.id,}, {amount: 500}));

// store.dispatch(setTextFilter());



