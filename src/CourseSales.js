import React, {Component} from 'react';
import Course from "./Course";

class CourseSales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
    this.totalPrice = this.totalPrice.bind(this);
  }

  totalPrice(price) {
    this.setState((prevState) => {
      return {
        total: prevState.total + price
      }
    }, () => {
      console.log("Total: " + this.state.total + " price: " + price);
    });

  }

  render() {
    var courses = this.props.items.map((Item, i) => {
      return (
        <Course name={Item.name} price={Item.price} key={i} totalPriceFunc={this.totalPrice} active={Item.active}/>
      );
    });

    return (
      <div>
        <h1>You can buy courses:</h1>
        <div id="courses">
          {courses}
        </div>
        <p id="total2">
          Total: {this.state.total}
        </p>
      </div>
    );
  }
}


export default CourseSales;
