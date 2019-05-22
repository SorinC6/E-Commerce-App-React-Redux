import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket,
  searchPhone,
  fetchCategories
} from "../../store/actions/index";
import { Link } from "react-router-dom";
import "./Phones.css";

class Phones extends Component {
  componentDidMount() {
    this.props.fetchPhones();
    this.props.searchPhone();
    this.props.fetchCategories();
  }

  renderPhone(phone, index) {
    const shortDescription = phone.description;
    const { addPhoneToBasket } = this.props;

    //console.log('dataaaa ',this.props.phonesData);
    return (
      <div className="phone-card" key={index}>
        <div className="thumbnail">
          <img src={phone.image} alt={phone.name} />
        </div>
        <div>
          <div className="name-price">
            <h4>
              <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
            </h4>
            <h4>price: {phone.price} $ </h4>
          </div>

          <p className="description">{shortDescription}</p>
          <div className="btn-more">
            <button
              onClick={() => addPhoneToBasket(phone.id, phone.price, phone)}
            >
              Buy Now
            </button>
            <Link to={`/phone/${phone.id}`}>More Info</Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="cards">
          {this.props.categoryPressed
            ? this.props.categoriesData.map((phone, idx) =>
                this.renderPhone(phone, idx)
              )
            : this.props.searchResult.length
            ? this.props.searchResult.map((phone, idx) =>
                this.renderPhone(phone, idx)
              )
            : this.props.phonesData.map((phone, idx) =>
                this.renderPhone(phone, idx)
              )}
        </div>
        <div className="load-more">
          <button onClick={this.props.loadMorePhones}>
            Load More Products
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    phonesData: state.phones.phones,
    searchResult: state.phones.searchResult,
    categoriesData: state.phones.categoriesData,
    categoryPressed: state.phones.categoryPressed
  };
};
const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket,
  searchPhone,
  fetchCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Phones);
