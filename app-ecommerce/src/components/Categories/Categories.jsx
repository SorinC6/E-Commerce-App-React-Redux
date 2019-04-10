import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom'

const Categories = props => {
  console.log(props.match.params.id)
  
  return (
    <Costum>
      <h4 style={{ textAlign: "center",paddingTop:'10px' }}>Brand</h4>
			<Wrapper to="/">All</Wrapper>
      <div>
        {props.categories.map(cat => (
          <Wrapper to={`/categories/${cat.id}`}>{cat.name}</Wrapper>
        ))}
      </div>
    </Costum>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.phones.categories
  };
};

export default connect(
  mapStateToProps,
  {}
)(withRouter(Categories));

const Costum = styled.div`
	background: #f9f2ec;
	padding-bottom:20px;
	max-width:230px;
	margin:0 auto;
`;

const Wrapper = styled(Link)`
  display: fex;
  justify-content: center;
  border: 1px solid #f3e5d8;
  margin: 0 auto;
  max-width: 180px;
  background: lightgrey;
  padding: 20px 0;
  color: black;

  &:hover {
    background-color: lightblue;
    color: white;
  }
`;
