import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Categories = props => {
  return (
    <Costum>
      <h4 style={{ textAlign: "center", paddingTop: "10px" }}>Brand</h4>
      {/* <Wrapper to="/">All</Wrapper> */}
      <div>
        {props.categories.map(cat => (
          <Wrapper key={cat.id} to={`/categories/${cat.id}`}>
            {cat.name}
          </Wrapper>
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
  padding-bottom: 20px;
  max-width: 230px;
  margin: 0 auto;
`;

const Wrapper = styled(Link)`
  display: fex;
  justify-content: center;
  border: 1px solid #f3e5d8;
  margin: 0 auto;
  max-width: 180px;
  background: lightgrey;
  padding: 10px 0;
  color: black;
  transition: background-color 800ms;
  transition: color 400ms;

  &:hover {
    background-color: lightblue;
    color: white;
  }
`;
