import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactsSlice";
import filterSlice from "./filterSlice";

export default configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterSlice,
  },
});
