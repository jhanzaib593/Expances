import { configureStore } from '@reduxjs/toolkit'
import  ExpancesSlice  from './expanceslice'

const store = configureStore({
  reducer: {
    counter: ExpancesSlice,
  },
})

export default store
