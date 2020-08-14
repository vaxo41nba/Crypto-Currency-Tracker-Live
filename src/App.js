import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadData, updateData, nextPage, prevPage } from './redux/coinbase';
import {
	dataSelector,
	coinsSelector,
	numberPerPageSelector,
	currentPageSelector,
	combineSelectors,
} from './redux/selectors';
import CurrencyItem from './CurrencyItem/index';
import {
	Table,
	Th,
	SpinnerContainer,
	Spinner,
	Button,
	Pagination,
	NextButton,
	PrevButton,
} from './Styled-Components';

class App extends Component {
	componentDidMount() {
		const { loadData } = this.props.actions;
		loadData();
	}

	render() {
		const {
			data,
			coins,
			showCoins,
			currentPage,
			numberPerPage,
			actions: { nextPage, prevPage, updateData },
		} = this.props;
		updateData();

		return (
			<>
				{data ? (
					<>
						<Table>
							<tbody>
								<tr>
									<Th>Currency name</Th>
									<Th>Capitalization</Th>
									<Th>Unit price</Th>
									<Th>Market size</Th>
									<Th>± 24 hours (%)</Th>
									<Th>Testing</Th>
								</tr>
								{showCoins.map((crypto, i) => (
									<CurrencyItem
										key={i}
										name={crypto.name}
										symbol={crypto.symbol}
										market_cap={crypto.quote.USD.market_cap.toFixed()}
										percent_change_24h={crypto.quote.USD.percent_change_24h}
										date={data.header.date}
										price={crypto.quote.USD.price
											.toFixed(3)
											.replace(/\d(?=(\d{3})+\.)/g, '$&,')}
									/>
								))}
							</tbody>
						</Table>
						<br />
						<Pagination>
							<PrevButton
								currentPage={currentPage}
								onClick={() => {
									prevPage();
								}}
							>
								{'<'}
							</PrevButton>
							<Button>{currentPage}</Button>
							<NextButton
								coins={coins}
								numberPerPage={numberPerPage}
								currentPage={currentPage}
								onClick={() => nextPage()}
							>
								{'>'}
							</NextButton>
						</Pagination>
					</>
				) : (
					<SpinnerContainer>
						<Spinner
							id="spinner"
							src={require('./images/spinner.png')}
							alt="Loading..."
						/>
					</SpinnerContainer>
				)}
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: dataSelector(state),
		coins: coinsSelector(state),
		showCoins: combineSelectors(state),
		numberPerPage: numberPerPageSelector(state),
		currentPage: currentPageSelector(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(
			{ loadData, updateData, nextPage, prevPage },
			dispatch
		),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
