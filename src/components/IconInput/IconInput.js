import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
	display: flex;
`;

const IconWrapper = styled(Icon)`
	border-bottom: 2px solid ${COLORS.black};
	color: ${COLORS.gray700};
	padding-right: 0.2rem;
	& > svg {
		height: 80%;
		padding-top: 0.2rem;
		margin-bottom: -0.2rem;
		stroke-width: 2px;
	}
`;

const SearchInput = styled.input`
	border: none;
	border-bottom: 2px solid ${COLORS.black};
	outline: none;
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
	return (
		<Wrapper>
			<IconWrapper id={icon}></IconWrapper>
			<SearchInput
				size={size}
				width={width}
				type="search"
				name={label}
				placeholder={placeholder}
			></SearchInput>
		</Wrapper>
	);
};

export default IconInput;
