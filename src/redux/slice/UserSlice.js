const { createSlice } = require("@reduxjs/toolkit");

export const UserSlice = createSlice({
     name:'user',
     initialState:{
          isUserLoggedIn:false,
          username:null,
     },
     reducers:{
          setUserLoggedIn : (state,action) =>{
               console.log(" it is here")
               state.isUserLoggedIn = true
               state.username = "hathi"
          },
          setUserLoggedOut : (state,action) =>{
               state.isUserLoggedIn = false
               state.username = null
          }
     }
})

//ACTIONS
export const { setUserLoggedIn,setUserLoggedOut } = UserSlice.actions

export default UserSlice.reducer; 