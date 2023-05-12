import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL =
  'https://sheet.best/api/sheets/133ab494-5cf6-4415-81e2-e70d0658e9a3';
export const postFeedback = createAsyncThunk(
  'contacts/postFeedback',
  async function postData(data) {
    await axios.post(URL, data);
  }
);

const initialState = {
  sentForm: false,
  nameValue: '',
  emailValue: '',
  messageValue: '',
  userData: [],
  status: 'pending' | 'fulfilled' | 'rejected',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setNameValue: (state, action) => {
      state.nameValue = action.payload;
    },
    setEmailValue: (state, action) => {
      state.emailValue = action.payload;
    },
    setMessageValue: (state, action) => {
      state.messageValue = action.payload;
    },
    setSentForm: (state, action) => {
      state.sentForm = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postFeedback.pending, (state) => {
      state.status = 'pending';
      console.log(state.userData);
    });
    builder.addCase(postFeedback.fulfilled, (state, action) => {
      state.userData = [];
      state.status = 'fulfilled';
    });
    builder.addCase(postFeedback.rejected, (state) => {
      state.status = 'rejected';
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  setNameValue,
  setEmailValue,
  setMessageValue,
  setSentForm,
  setUserData,
} = contactsSlice.actions;

export default contactsSlice.reducer;
