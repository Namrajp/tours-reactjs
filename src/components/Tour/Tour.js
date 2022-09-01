import React, { Component } from "react";
import "../../index.scss";
import "./tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="" />
          <span className="close-btn" onClick={(e) => removeTour(id)}>
            <i className="fas fa-window-close"></i>
          </span>
          <div className="tour-info">
            <h3>{city}</h3>
            <h4>{name}</h4>
            <h5>
              info
              <span onClick={this.handleInfo}>
                <i className="fas fa-caret-square-down"></i>
              </span>
            </h5>
            {this.state.showInfo && <p>{info}</p>}
          </div>
        </div>
      </article>
    );
  }
}
