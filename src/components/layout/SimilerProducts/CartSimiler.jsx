import React, { Component } from "react";
import "./CartSimiler.scss";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import listname from "./ListName";

class CartSimiler extends Component {
  constructor() {
    super();
    this.state = {
      listname: listname,
    };
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6">
        <div className="card">
          <div className="card-header">
            <img
              src="images/card1.png"
              alt="img-card"
              className="imgCard"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="card-body">
            <h4>{this.props.name} </h4>
            <h5 style={{ color: "#542E90", fontWeight: "700" }}>
              {" "}
              {this.props.price}
            </h5>

            <div className="threeSec row">
              <div
                className="oneSec col-md-4"
                style={{
                  textDecoration: "line-through",
                  color: "#A7A9AC",
                  fontWeight: "500",
                }}
              >
                {this.props.priceDelete}
              </div>
              <div
                className="twoSec col-md-4"
                style={{
                  backgroundColor:
                    this.props.percentage === undefined ? null : "#fff100",
                }}
              >
                {this.props.percentage}
              </div>
              <div className="oneSec imgSec col-md-4">
                <img src="images/adidas1.png" alt="imgadidas" />
              </div>
            </div>
            <div className="shapeStar mt-2">
              <AiFillStar style={{ color: "#FFB900", fontSize: "23px" }} />{" "}
              <AiFillStar style={{ color: "#FFB900", fontSize: "23px" }} />{" "}
              <AiFillStar style={{ color: "#FFB900", fontSize: "23px" }} />{" "}
              <AiFillStar style={{ color: "#FFB900", fontSize: "23px" }} />
              <AiOutlineStar
                style={{
                  color: "#A7A9AC",
                  fontSize: "23px",
                }}
              />
              <span
                style={{
                  fontWeight: "700",
                  marginLeft: "20px",
                }}
              >
                4.2 of 5
              </span>
            </div>
            <div className="threeSec row mt-2 mb-2">
              <div className="oneSec col-md-5">{`from: ${this.props.from}`}</div>
              <div className="oneSec col-md-4">{`to: ${this.props.to}`}</div>
              <div className="oneSec col-md-3">{`in: ${this.props.in}`}</div>
            </div>
            <div>
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CartSimiler;
