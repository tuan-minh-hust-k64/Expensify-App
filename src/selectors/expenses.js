import moment from "moment";
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createAtMatch = expense.createAt;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = startDate? moment(createAtMatch).isSameOrAfter(startDate):true;
        const endDateMatch = endDate? moment(createAtMatch).isSameOrBefore(endDate):true;
        return textMatch&&startDateMatch&&endDateMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createAt < b.createAt ? 1:-1;
        }
        if(sortBy === 'amount'){
            return a.amount < b.amount ? 1:-1;
        }
    })
};
export default getVisibleExpenses;