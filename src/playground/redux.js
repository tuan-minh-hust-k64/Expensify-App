import { createStore } from "redux";
const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + 1
            }
    }
    return state;
});
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type: 'INCREMENT'
})
store.dispatch({
    type: 'INCREMENT'
})
store.dispatch({
    type: 'INCREMENT'
})
