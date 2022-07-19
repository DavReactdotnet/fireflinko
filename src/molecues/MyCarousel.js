import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import laptop from '../assets/laptop.png'
import { Paper } from "@mui/material";

const caroselData = [
  { image: laptop, title: "Web", content: `Automation of a application now taking a turn with codeless,sophisticated NLP based way to handel all types of actions & varification effortlessly` },
  { image: laptop, title: "Web", content: `Automation of a application now taking a turn with codeless,sophisticated NLP based way to handel all types of actions & varification effortlessly` },
  { image: laptop, title: "Web", content: `Automation of a application now taking a turn with codeless,sophisticated NLP based way to handel all types of actions & varification effortlessly` },
  { image: laptop, title: "Web", content: `Automation of a application now taking a turn with codeless,sophisticated NLP based way to handel all types of actions & varification effortlessly` }
]

class MyCarousel extends Component {


  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: "7rem"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "250px",
      width: "330px",
      textAlign: "center",
      background: "#FFFFFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      alignItems: "center",
      borderRadius: "5px",
      // boxSizing: "border-box"
    };
  }


  render() {
    return (
      <div style={MyCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          {
            caroselData.map((item, index) => {
              return <>
                <div style={MyCarousel.CARD_STYLE} className="border  p-5">

                  <img src={item.image} />
                  <h5 className="mt-3 text-decoration-underline">{item.title}</h5>
                  <p>{item.content}</p>

                </div>
              </>
            })
          }
        </ReactCardCarousel>
      </div>
    );
  }
}


export default MyCarousel;