import { createSlice } from "@reduxjs/toolkit"

interface IUser {
    user : {
        email : string | null,
    }
    isloading : boolean,
    isError : boolean,
    error : string | null
}
const initialState : IUser = {
    user : {            
        email : null
    },
    isloading : false,
    isError : false,
    error : null
}
const userSlice = createSlice({
    name : 'user',
    initialState ,
    reducers : {}
})
export default userSlice.reducer