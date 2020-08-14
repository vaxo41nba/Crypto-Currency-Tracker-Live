import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Td } from '../Styled-Components';

export default class CurrencyItem extends Component {
	render() {
		const {
			name,
			symbol,
			price,
			market_cap,
			percent_change_24h,
			date,
		} = this.props;

		return (
			<tr>
				<Td>
					<Link to={`/${name}/${symbol}`}>{name}</Link>
				</Td>
				<Td>{symbol}</Td>
				<Td>$ {price}</Td>
				<Td>{market_cap}</Td>
				<Td>{percent_change_24h}</Td>
				<Td>{date}</Td>
			</tr>
		);
	}
}
