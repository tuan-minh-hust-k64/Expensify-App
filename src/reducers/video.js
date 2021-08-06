const videoReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_VIDEO':
            return [
                ...state, 
                ...action.listVideo,
            ]
        default:
            return state;
    }
};
export default videoReducer;