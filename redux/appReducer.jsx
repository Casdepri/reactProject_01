import { acceptAuth } from "./authReducer";

const INITIALIZED_SUCCESS = 'initialized_success';

export const initializedSuccess = () => { return { type: INITIALIZED_SUCCESS } };

let initState = {
    initialized: false
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            };
        }

        default:
            return state;
    }
}

export const initializedApp = () => (dispatch) => {
    let promise = dispatch(acceptAuth());
    Promise.all([promise]).then(
        () => {
            dispatch(initializedSuccess());
        }
    )
}

export default appReducer;