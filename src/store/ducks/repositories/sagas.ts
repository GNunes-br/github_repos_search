import { call, put, takeEvery } from 'redux-saga/effects';
import { RepositoryActions } from './actions';
import { getReposSuccess } from './states';
import { GetReposPayload, Repository, RepositoryAction } from './types';

function* workGetRepos(
  action: RepositoryAction<GetReposPayload>,
): Generator<any, any, any> {
  const {
    payload: { username },
  } = action;

  const repositories = yield call(() =>
    fetch(`https://api.github.com/users/${username}/repos`),
  );

  const repositoriesJson = yield repositories.json();

  const formattedRepos: Array<Repository> = [];

  repositoriesJson.map((item: any) => {
    formattedRepos.push({
      name: item.name,
      id: item.id,
      defaultBrach: item.default_branch,
      technology: item.language,
    });
  });

  yield put(getReposSuccess(formattedRepos));
}

function* getRepos() {
  yield takeEvery(`repository/${RepositoryActions.GET_REPOS}`, workGetRepos);
}

export default getRepos;
