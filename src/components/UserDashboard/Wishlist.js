import React from "react";
import Course1 from "../../assets/img/course1.png";
import Course2 from "../../assets/img/course2.png";
import Course3 from "../../assets/img/course3.png";
import Course4 from "../../assets/img/course4.png";
import StarIcon from "@material-ui/icons/Star";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ReactComponent as Star1 } from "../../assets/icons/star2.svg";
import { Link } from "react-router-dom";

var items = [
  {
    title: "CS-GO Ep 2 Complete Course 1",
    img: Course1,
    name: "James Wiik",
    rating: "rating",
    price: "19.99 | 50 min",
    test: "1",
  },
  {
    title: "PUBG GamePlay Course",
    img: Course2,
    name: "Ifaf ghori",
    rating: "rating",
    price: "19.99 | 50 min",
    test: "2",
  },
  {
    title: "Taken 5 Fight Course",
    img: Course3,
    name: "Arslan Ash",
    rating: "rating",
    price: "19.99 | 50 min",
    test: "3",
  },
];

const Wishlist = () => {
  return (
    <div className="wishlistDiv">
      <h3 className="wishCardh3">Wishlist</h3>
      <div className="">
        {/* <h3 className="creatorProfileH3">Courses</h3> */}
        <div className="">
          <div1 className="creatorCard2">
            {items.map((item, i) => (
              <div
                className="cardGrid_List"
                style={{
                  backgroundColor: " #202342",
                  margin: "12px",
                  borderRadius: "35px",
                }}
              >
                <img src={Course1} className="courseimg" alt="img" />
                <h5 className="latestcourseh5">PUBG GamePlay Course</h5>
                <p className="latestcoursep1">Ifaf ghori</p>
                <p className="latestcoursep1">
                  {" "}
                  5.0 &nbsp;
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star1
                      style={{
                        width: "15px",
                        height: "15px",
                        color: "red",
                        margintTop: "3px",
                        position: "relative",
                        top: "3px",
                        key: { item },
                      }}
                    />
                  ))}
                  &nbsp; (382,420)
                </p>
                <h6 className="latestcourseh6">$19.99 | 50 min</h6>
              </div>
            ))}
          </div1>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
