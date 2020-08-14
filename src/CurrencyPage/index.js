import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateData, loadData } from '../redux/coinbase';
import { SpinnerContainer, Spinner } from '../Styled-Components';
import { oneCoinSelector } from '../redux/selectors';

class CurrencyPage extends React.Component {
	componentDidMount() {
		const { loadData } = this.props.actions;
		loadData();
	}

	render() {
		let {
			data,
			coin,
			actions: { updateData },
		} = this.props;
		updateData();

		return (
			<>
				{coin ? (
					<ul>
						<li>Circulating Supply: {coin.circulating_supply}</li>
						<li>CMC Rank: {coin.cmc_rank}</li>
						<li>Date Added: {coin.date_added}</li>
						<li>ID: {coin.id}</li>
						<li>Last Updated: {coin.last_updated}</li>
						<li>Max Supply: {coin.max_supply}</li>
						<li>Name: {coin.name}</li>
						<li>Num Market Pairs: {coin.num_market_pairs}</li>
						<li>Last Updated: {coin.last_updated}</li>
						<li>Market Cap: {coin.quote.USD.market_cap}</li>
						<li>Percent Change_1h: {coin.quote.USD.percent_change_1h}</li>
						<li>Percent Change_7d: {coin.quote.USD.percent_change_7d}</li>
						<li>Percent Change_24h: {coin.quote.USD.percent_change_24h}</li>
						<li>Price: $ {coin.quote.USD.price}</li>
						<li>Volume_24h: {coin.quote.USD.volume_24h}</li>
						<li>Slug: {coin.slug}</li>
						<li>Symbol: {coin.symbol}</li>
						<li>Total Supply: {coin.total_supply}</li>
						<li>Current time: {data.header.date}</li>
					</ul>
				) : (
					<SpinnerContainer>
						<Spinner
							id="spinner"
							src={require('../images/spinner.png')}
							alt="Loading..."
						/>
					</SpinnerContainer>
				)}
			</>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		data: state.data,
		coin: oneCoinSelector(state)(props),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ loadData, updateData }, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPage);
