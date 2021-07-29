import {v4 as uuidv4} from 'uuid';
import moment from 'moment';
import {firebase, database} from '../firebase/firebase';
export const addExpenses = ({
    id ='',
    description = '',
    note = '',
    amount = '',
    createAt = 0,
}) => {
    return {
        type: 'ADD_EXPENSES',
        expenses: {
            id,
            description,
            note,
            amount,
            createAt,
        }
    }
};
export const startAddExpenses = (expense, uid) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = '',
            createAt = 0,
        }=expense;
        
        const newExpense = {description, note, amount, createAt};
        database.ref(`user/${uid}/expenses`).push(newExpense).then((ref) => {
            dispatch(addExpenses({id: ref.id, ...newExpense}))
        })
    }
}
export const removeExpenses = ({
    id
} = {}) => {
    return {
        type: 'REMOVE_EXPENSES',
        expenses: {
            id
        }
    }
}
export const startRemoveExpenses = ({id}, uid) => {
    return (dispatch) => {
        return database.ref(`user/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpenses({id}));
        })
    }
}
export const editExpenses = ({
    id
} = {}, update) => {
    return {
        type: 'EDIT_EXPENSES',
        id,
        update,
    }
};
export const startEditExpenses = ({id, uid}, update) => {
    return (dispatch) => {
        return database.ref(`user/${uid}/expenses/${id}`).update(update).then(() => {
            dispatch(editExpenses({id}, update));
        })
    }
}
export const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses: expenses,
    }
};
export const startSetExpenses = ({uid}) => {
    return (dispatch) => {
        return database.ref(`user/${uid}/expenses`).once('value').then((snapshot) => {
            const newExpenses = [];
            snapshot.forEach((expense) => {
                newExpenses.push({
                    id: expense.key,
                    ...expense.val(),
                })
            })
            dispatch(setExpenses(newExpenses));
        })
    }
}
export const resetExpenses = () => ({
    type: 'RESET_EXPENSES'
})