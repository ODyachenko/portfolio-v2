import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';
import projectsSlice from './projectsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    projects: projectsSlice,
  },
});
