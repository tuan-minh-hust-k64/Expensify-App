import {v4 as uuidv4} from 'uuid';
import moment from 'moment';
export const addExpenses = ({
    description = '',
    note = '',
    amount = '',
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
export const editExpenses = ({
    id
} = {}, update) => {
    return {
        type: 'EDIT_EXPENSES',
        id,
        update,
    }
}