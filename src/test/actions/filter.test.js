import moment from "moment";
import { setStartDate, setTextFilter } from "../../actions/filter"

test('setText for filter', () => {
    const text = setTextFilter({ text: 'date'});
    expect(text).toEqual({
        type: 'SET_TEXT',
        text: 'date'
    });
})
test('set start date for filter', () => {
    const startDate = setStartDate(moment(0));
    expect(startDate).toEqual({
        type: 'SET_START_DATE',
        date: moment(0),
    })
})