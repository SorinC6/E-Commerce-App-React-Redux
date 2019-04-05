import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { compose } from 'redux';

const Categories = (props) => {
	return (
		<dv>
			<h4 style={{ textAlign: 'center' }}>Brand</h4>
			<div>{props.categories.map((cat) => <Wrapper to={`/categories/${cat.id}`}>{cat.name}</Wrapper>)}</div>
		</dv>
	);
};

const mapStateToProps = (state) => {
	return {
		categories: state.phones.categories
	};
};

export default connect(mapStateToProps, {})(Categories);

const Wrapper = styled(Link)`
	display: fex;
	justify-content:center;
	border: 1px solid black;
	margin: 0 auto;
	max-width: 230px;
	background: lightgrey;
	padding: 20px 0;
	color:black;

    &:hover{
		background-color:lightblue;
		color:white;
    }
`;
