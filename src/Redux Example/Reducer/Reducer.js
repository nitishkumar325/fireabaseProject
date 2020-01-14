import { combineReducers } from "redux"
const InitialState = {
    Count: 0,
    name: '',
    email: '',
    dateofBirth: '',
    FirebaseUser:"",
    loginUid:'',
    firebasechat:[]

}
const IncrementReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                Count: state.Count + 1
            }
        case "decrement":
            return {
                ...state,
                Count: state.Count - 1
            }
        default:
            return state
    }
}
const DataSaveReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "savedata":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
const saveFireBaseUser = (state = InitialState, action) => {
    switch (action.type) {
        case "savefirebasedata":
            return {
                ...state,
                FirebaseUser:action.payload
            }
        default:
            return state
    }
}
const saveFireBaseUid = (state = InitialState, action) => {
    switch (action.type) {
        case "savefirebaseuid":
            return {
                ...state,
                loginUid:action.payload
            }
        default:
            return state
    }
}
const saveFireBasechat = (state = InitialState, action) => {
    switch (action.type) {
        case "saveFireBasechatData":
            return {
                ...state,
                firebasechat:action.payload
            }
        default:
            return state
    }
}
export const Reducer = combineReducers({
    IncrementReducer: IncrementReducer,
    DataSaveReducer: DataSaveReducer,
    saveFireBaseUser:saveFireBaseUser,
    saveFireBaseUid:saveFireBaseUid,
    saveFireBasechat:saveFireBasechat
});
// export default DataSaveReducer

