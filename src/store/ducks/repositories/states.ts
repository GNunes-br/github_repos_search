import { createSlice } from '@reduxjs/toolkit';
import { RepositoryActions } from './actions';
import {
  GetReposPayload,
  GetReposSuccessPayload,
  RepositoryState,
} from './types';

const initialState: RepositoryState = {
  data: { repositories: [], username: '' },
  loading: false,
  error: false,
};

const repositorySlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {
    [RepositoryActions.GET_REPOS]: (state, action: GetReposPayload) => {
      state.loading = true;
      state.data.username = action.payload.username;
    },
    [RepositoryActions.GET_REPOS_SUCCESS]: (
      state,
      action: GetReposSuccessPayload,
    ) => {
      state.loading = false;
      state.error = false;
      state.data.repositories = action.payload;
    },
    [RepositoryActions.GET_REPOS_FAILURE]: state => {
      state.loading = false;
      state.error = false;
      state.data.repositories = [];
    },
  },
});

export const { getRepos, getReposSuccess, getReposFailure } =
  repositorySlice.actions;

export default repositorySlice.reducer;
