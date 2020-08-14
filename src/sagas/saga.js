import { takeLatest, put, delay } from 'redux-saga/effects';
import superagent from 'superagent';

const key = `d929dacc-529a-4592-8b87-b6c09da58636`;
const api = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${key}`;
export const apiWithCors = `https://cors-anywhere.herokuapp.com/${api}`;

function* updateDataAsync() {
	let data, coins;
	superagent
		.get(apiWithCors)
		.then((response) => {
			data = response;
			coins = response.body.data;
		})
		.catch((err) => console.log(err));
	yield delay(30000);
	yield put({ type: 'UPDATE_DATA_IN_STORE_ASYNC', data, coins });
}

function* loadDataAsync() {
	let data;
	superagent
		.get(apiWithCors)
		.then((response) => {
			data = response;
		})
		.catch((err) => console.log(err));
	yield delay(2000);
	yield put({ type: 'LOAD_DATA_IN_STORE_ASYNC', data });
}

export function* watchLoadData() {
	yield takeLatest('LOAD_DATA_IN_STORE', loadDataAsync);
}
export function* watchUpdateData() {
	yield takeLatest('UPDATE_DATA_IN_STORE', updateDataAsync);
}
