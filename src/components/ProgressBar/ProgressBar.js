/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
	return (
		<Wrapper>
			<Progress value={value} max={100}></Progress>
		</Wrapper>
	);
};

const Wrapper = styled.div``;

const Progress = styled.progress`
	background-color: #f3f3f3;
	border: 0;
	height: 16px;
	border-radius: 4px;
	padding: 3px;
	width: 200px;
	box-shadow: 0px 1px 4px 1px inset ${COLORS.transparentGray15};
	&::-moz-progress-bar {
		/* style rules */
		border-radius: 4px 0 0 4px;
		background-color: ${COLORS.primary};
	}
`;

export default ProgressBar;
