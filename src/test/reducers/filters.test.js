import moment from 'moment';
import filterReducer from '../../reducers/filters';
test('setup state default for filter', () => {
    const stateFilter = filterReducer(undefined, {type: '@@INIT'});
    expect(stateFilter).toEqual(
        {
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month'),
        }
    )
})

test('set sortBy to amount', () => {
    const stateFilter = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(stateFilter).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    })
})