import { all, call, put } from 'redux-saga/effects';
import watchMostPopularVideos from './Video';

export default function* () {
    yield all([
      fork(watchMostPopularVideos)
    ]);
}

export function* fetchEntity(request, entity, ...args) {
  try {
    const response = yield call(request);
    // directly return the result object and throw away the headers and the status text here
    // if status and headers are needed, then instead of returning response.result, just return response.
    yield put(entity.success(response.result, ...args));
  } catch (error) {
    yield put(entity.failure(error, ...args));
  }
}