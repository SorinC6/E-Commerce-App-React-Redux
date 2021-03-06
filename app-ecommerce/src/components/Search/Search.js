import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { searchPhone } from "../../store/actions/index";

class Search extends Component {
  state = {
    searchValue: ""
  };

  componentDidMount() {
    this.props.searchPhone();
  }

  handleChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchPhone(this.state.searchValue);
  };

  render() {
    return (
      <Wrapper>
        <p>Qick shop</p>
        <div className="input-search">
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type="text" />
            <button>
              <i className="fas fa-search" />
            </button>
          </form>
          {!this.props.searchResult.length && this.state.searchValue && (
            <p style={{ fontSize: "16px" }}>No products with this name</p>
          )}
        </div>
      </Wrapper>
    );
  }
}

// const mapDispatchToProps = {
// 	searchPhone
// };

const mapStateToProps = state => {
  return {
    searchResult: state.phones.searchResult
  };
};

export default connect(
  mapStateToProps,
  { searchPhone }
)(Search);

const Wrapper = styled.div`
  position: sticky;
  top: 20;
  left: 4%;
  border: 1px solid black;
  margin: 0 auto;

  text-align: center;
  max-width: 230px;
  background: lightgrey;
  padding: 20px 0;
  font-style: italic;

  p {
    font-size: 20px;
  }
  input {
    padding: 5px;
    max-width: 200px;

    @media (max-width: 460px) {
      max-width: 50px;
    }
  }

  button {
    padding: 5px;
  }
  i {
    font-size: 15px;
  }
`;
