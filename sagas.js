import {delay} from 'redux-saga'
import {put, takeEvery, all} from 'redux-saga/effects'

// Saga 作用函数：执行异步任务
export function* incrementAsync() {
    yield delay(1000)
    yield put({type: 'INCREMENT'})
}

// Saga 监听函数：每次监听到 ```INCREMENT_ASYNC``` action ，都会触发一个新的异步任务
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
    yield all([
        incrementAsync(),
        watchIncrementAsync()
    ])
}