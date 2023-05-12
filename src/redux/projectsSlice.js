import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// First create the thunk
const URL = `https://64465b720431e885f00fc24e.mockapi.io/collections`;
export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async function fetchData() {
    const response = await axios(URL);
    return response.data;
  }
);

const initialState = {
  projectsData: [],
  status: 'pending' | 'fulfilled' | 'rejected',
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjectsData: (state, action) => {
      state.projectsData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state) => {
      state.projectsData = [];
      state.status = 'pending';
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projectsData = action.payload;
      state.status = 'fulfilled';
    });
    builder.addCase(fetchProjects.rejected, (state) => {
      state.projectsData = [];
      state.status = 'rejected';
    });
  },
});

// Action creators are generated for each case reducer function
export const { setProjectsData } = projectsSlice.actions;

export default projectsSlice.reducer;
