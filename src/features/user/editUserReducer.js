import { createSlice } from '@reduxjs/toolkit'
import { getUserFromLocalStorage } from '../../utils/localStorage'

const initialState = {
  profile: getUserFromLocalStorage() || null,
}

const editUserReducer = createSlice({
  name: 'editUser',
  initialState,
})

export default editUserReducer.reducer
