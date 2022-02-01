import { dispatch } from "jest-circus/build/state";

export const AddItem = (item) => {
return (dispatch) => {
    dispatch({
        type: ADD,
        payload: item

    })
}
}

export const GetTaskList = () => {
    return (dispatch) => {
        dispatch({
            type: GET
    
        })
}
}