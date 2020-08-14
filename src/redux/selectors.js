import { createSelector } from 'reselect';

export const dataSelector = (state) => state.data;
export const coinsSelector = (state) => state.coins;
export const numberPerPageSelector = (state) => state.numberPerPage;
export const currentPageSelector = (state) => state.currentPage;

export const combineSelectors = createSelector(
	[coinsSelector, numberPerPageSelector, currentPageSelector],
	(coins, num, curr) => {
		const start = (curr - 1) * num;
		const end = start + num;
		return coins.filter((item, index) => index >= start && index < end);
	}
);

export const oneCoinSelector = createSelector(
	[coinsSelector],
	(coins) => (props) => {
		let path = props.location.pathname;
		let name = path.split('/')[1];
		let symbol = path.split('/')[2];
		let coin = coins.filter(
			(coin) => coin.name === name && coin.symbol === symbol
		);
		return coin[0];
	}
);
