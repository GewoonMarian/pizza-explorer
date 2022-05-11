import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Helva",
  id: 42,
  favorites: [161235, 67283, 357311],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  reducers: {
    toggleFavorites: (state, action) => {
      console.log("im in the reducer! pizza clicked:", action.payload); // payload === pizzaId
      // pizzaId
      // user.favorites

      // #1 => we push -> this is mutation => not good => but RTK is handling it under the hood using IMMER
      // state.favorites.push(action.payload); // I HATE IT

      // #2 New array + set to state
      // const newArray = [...state.favorites, action.payload];
      // state.favorites = newArray;

      const pizzaId = action.payload;
      const isItThere = state.favorites.includes(pizzaId);

      if (isItThere) {
        const filteredArray = state.favorites.filter((id) => id !== pizzaId);
        state.favorites = filteredArray;
      } else {
        state.favorites.push(action.payload);
        //const newArray = [...state.favorites, action.payload];
        //state.favorites = newArray;
      }
    },
  },
});

export const { toggleFavorites } = userSlice.actions;

export default userSlice.reducer;
