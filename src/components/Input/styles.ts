import styled from 'styled-components';

export const InputContainer = styled.div`
	width: 100%;
	height: 42px;
	color: #fff;

	border: 1px solid #ef4226;
	border-radius: 4px;
	overflow: hidden;
	padding: 0 10px;

	& input {
		width: 100%;
		height: 42px;
		border-radius: 4px;
		background-color: transparent;
		border: 0;
		outline: none;
	}
`;

export const ErrorMessage = styled.p`
	color: red;
	font-size: 12px;
	margin-top: 8px;
	margin-left: 10px;
`;
