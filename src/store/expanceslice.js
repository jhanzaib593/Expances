import { createSlice } from "@reduxjs/toolkit";

const users = JSON.parse(localStorage.getItem("LogIn"));
const Expence = JSON.parse(localStorage.getItem("Expence"));

export const ExpancesSlice = createSlice({
  name: "Expance",
  initialState: {
    user: users,
    expance: Expence || [],
  },
  reducers: {
    Sign: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("LogIn", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
    },
    Addexp: (state, action) => {
      const Expencein = {
        ...action.payload,
        id: Math.random(),
      };
      state.expance.push(Expencein);
      localStorage.setItem("Expence", JSON.stringify(state.expance));
    },
    deletexp: (state, action) => {
      const removedata = action.payload;
      state.expance = state.expance.filter((exp) => exp.id !== removedata);
      localStorage.setItem("Expence", JSON.stringify(state.expance));
    },
    editExp: (state, action) => {
      const editdata = action.payload;
      state.expance = state.expance.map((expedit) =>
        expedit.id === editdata.id ? { ...editdata } : expedit
      );
      localStorage.setItem("Expence", JSON.stringify(state.expance));
    },
  },
});

export const { Sign, logout, Addexp, deletexp, editExp } =
  ExpancesSlice.actions;

export default ExpancesSlice.reducer;
