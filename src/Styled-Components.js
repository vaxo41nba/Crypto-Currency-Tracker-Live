import styled, { keyframes } from 'styled-components';

export const Table = styled.table`
	border: 1px solid black;
	border-collapse: collapse;
	padding: 10px;
	text-align: center;
	margin: auto;
`;
export const Th = styled.th`
	border: 1px solid black;
	border-collapse: collapse;
	padding: 10px;
	text-align: center;
	margin: auto;
`;
export const Td = styled.td`
	border: 1px solid black;
	border-collapse: collapse;
	padding: 10px;
	text-align: center;
	margin: auto;
`;
export const SpinnerContainer = styled.div`
	text-align: center;
	padding-top: 10em;
`;
export const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(359deg);
	}
`;
export const Spinner = styled.img`
	animation: ${rotate} 2s infinite backwards;
	width: 30%;
`;
export const Button = styled.button`
	font-size: xx-large;
`;
export const Pagination = styled.div`
	text-align: center;
`;
export const NextButton = styled(Button)`
	visibility: ${props => props.currentPage ===
	Math.ceil(props.coins.length / props.numberPerPage)
		? 'hidden'
		: 'visible'};
`;
export const PrevButton = styled(Button)`
	visibility: ${props => props.currentPage <= 1 ? 'hidden' : 'visible'};
`;
