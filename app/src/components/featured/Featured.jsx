import useFetch from "../../hooks/useFetch";
import "./featured.css";
import delhi from "../images/d1.jpg";
import mumbai from "../images/m1.jpg";
import bang from "../images/b1.jpg";
import { useState } from "react";

const Featured = () => {
  const { data, loading } = useFetch(
    "https://booking-app-p324.onrender.com/api/hotels/countByCity?cities=delhi,bangalore,mumbai"
  );

  const [show, setShow] = useState(false);

  const handleshow = () => {
    setShow(true);
  };
  setTimeout(() => {
    setShow(false);
  }, 5000);

  return (
    <div className="featured">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {show ? (
            <h1 className="tooltip">
              Please enter the required city name in search bar and hit search
              button
            </h1>
          ) : null}
          <div className="featuredItem" onClick={handleshow}>
            <img src={delhi} alt="delhi" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>

          <div className="featuredItem" onClick={handleshow}>
            <img src={bang} alt="bangalore" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Bangalore</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem" onClick={handleshow}>
            <img src={mumbai} alt="mumbai" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
