import styled from 'styled-components';

export const StyledSect = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`;

export const TableWraper = styled.div`
	.ant-table {
		th {
			&::first-letter {
				text-transform: uppercase;
			}
		}
	}
`;
