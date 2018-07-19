import React, {Component} from "react";

export default class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };

    this.clicker = this.clicker.bind(this);
  }

  render() {
    return (
      <div>
        <p onClick={this.clicker} className={this.state.active ? 'active' : ''}>
          {this.props.name} <b>{this.props.price} </b>
          <input type="checkbox" checked={this.state.active}/>
        </p>
      </div>
    );
  }

  clicker() {
    this.setState((prevState) => {
        console.log("Prev state active: " + this.state.active);
        return {active: !prevState.active}
      },
      () => {
        console.log(this.props.name + ' is selected: ' + this.state.active);
        this.props.totalPriceFunc(this.state.active ? this.props.price : -this.props.price);
      }
    );
  }
}

