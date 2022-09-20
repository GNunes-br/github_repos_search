import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { RepositoryState } from './ducks/repositories/types';

import repositoriesSaga from './ducks/repositories/sagas';
import repositoriesReducer from './ducks/repositories/states';

export type ApplicationState = {
  repositories: RepositoryState;
};

const saga = createSagaMiddleware();

export const store = configureStore<ApplicationState>({
  reducer: {
    repositories: repositoriesReducer,
  },
  middleware: [saga],
});

saga.run(repositoriesSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
